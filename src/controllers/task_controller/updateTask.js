const { Task } = require('../../../models');

const update_task = async (req, res) => {
  try {
    const { id } = req.params; 
    const {
      planned_eta,
      custom_planned_eta,
      actual_eta,
      reason_id,
      task_status,
    } = req.body;

    if (!id) {
      return res.status(400).json({ message: 'task ID is required' });
    }

    const task = await Task.findByPk(id);
    
    if (!task) {
      return res.status(404).json({ message: 'task not found' });
    }

    if (planned_eta) task.planned_eta = planned_eta;
    if (custom_planned_eta) task.custom_planned_eta = custom_planned_eta;
    if (actual_eta) task.actual_eta = actual_eta;
    if (reason_id) task.reason_id = reason_id;
    if (task_status) task.task_status = task_status;

    //save() ->  Sequelize generates an UPDATE SQL query behind the scenes. The query updates the corresponding row in the database, only changing the modified fields.
    await task.save();

    return res.status(200).json({
      message: 'task updated successfully',
      task
    });
  } catch (error) {
    console.error('Error updating task:', error);
    return res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

module.exports = {
  update_task,
};
