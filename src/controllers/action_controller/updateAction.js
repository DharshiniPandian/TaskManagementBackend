const { Action } = require('../../../models');

const update_action = async (req, res) => {
  try {
    const { id } = req.params; 
    const {
      start_at,
      end_at,
      planned_eta,
      custom_planned_eta,
      actual_eta,
      reason_id,
      priority_id,
      action_status,
      status
    } = req.body;

    if (!id) {
      return res.status(400).json({ message: 'Action ID is required' });
    }

    const action = await Action.findByPk(id);
    
    if (!action) {
      return res.status(404).json({ message: 'Action not found' });
    }

    if (start_at) action.start_at = start_at;
    if (end_at) action.end_at = end_at;
    if (planned_eta) action.planned_eta = planned_eta;
    if (custom_planned_eta) action.custom_planned_eta = custom_planned_eta;
    if (actual_eta) action.actual_eta = actual_eta;
    if (reason_id) action.reason_id = reason_id;
    if (priority_id) action.priority_id = priority_id;
    if (action_status) action.action_status = action_status;
    if (status) action.status = status;

    //save() ->  Sequelize generates an UPDATE SQL query behind the scenes. The query updates the corresponding row in the database, only changing the modified fields.
    await action.save();

    return res.status(200).json({
      message: 'Action updated successfully',
      action
    });
  } catch (error) {
    console.error('Error updating action:', error);
    return res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

module.exports = {
  update_action,
};
