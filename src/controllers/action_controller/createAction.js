const { Action, ActionUser, User } =  require('../../../models');

const create_action = async (req, res) => {
  try {
    const {
      goal_id,
      phase_id,
      action_title,
      action_description,
      start_at,
      end_at,
      planned_eta,
      custom_planned_eta,
      actual_eta,
      reason_id,
      priority_id,
      action_type,
      action_status,
      status,
      created_by,
      users 
    } = req.body;

    if (!action_title || !start_at || !end_at || !priority_id || !action_type || !created_by || (!goal_id && !phase_id)) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const newAction = await Action.create({
      goal_id,
      phase_id,
      action_title,
      action_description,
      start_at,
      end_at,
      planned_eta,
      custom_planned_eta,
      actual_eta,
      reason_id,
      priority_id,
      action_type,
      action_status,
      status,
      created_by,
    });

    if (users && Array.isArray(users)) {
      const actionUsers = users.map(user => ({
        action_id: newAction.id,
        user_id: user.user_id,
        is_owner: user.is_owner || false,
        is_assignee: user.is_assignee || false,
        is_active: true,
        created_by
      }));

      await ActionUser.bulkCreate(actionUsers);
    }

    return res.status(201).json({
      message: 'Action created successfully',
      action: newAction
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  create_action,
};
