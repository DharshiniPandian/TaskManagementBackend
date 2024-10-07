const { Task, TaskUser, MasterOverallActionStatus, MasterReason, User } = require('../../../models');

const create_task = async (req, res) => {
  try {
    const {
      action_id,
      task_title,
      planned_eta,
      custom_planned_eta,
      actual_eta,
      reason_id,
      task_status,
      created_by,
      task_users 
    } = req.body;

    if (!task_title || !action_id || !created_by) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const newTask = await Task.create({
      action_id,
      task_title,
      planned_eta,
      custom_planned_eta,
      actual_eta,
      reason_id,
      task_status,
      created_by,
    });

    const taskUserPromises = task_users.map(user => {
      return TaskUser.create({
        task_id: newTask.id,
        user_id: user.user_id,
        is_owner: user.is_owner || false,
        is_assignee: user.is_assignee || false,
        is_active: user.is_active !== undefined ? user.is_active : true, 
        created_by,
      });
    });

    await Promise.all(taskUserPromises);

    return res.status(201).json({
      message: 'Task created successfully',
      task: newTask,
      users: task_users,
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  create_task,
};
