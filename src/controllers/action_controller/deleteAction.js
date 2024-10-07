const { Action, Task, TaskUser, ActionUser } = require('../../../models');

const deleteAction = async (req, res) => {
  const { id } = req.params; 

  try {
    // soft delete the Action by setting deleted_at
    const result = await Action.update(
      { deleted_at: new Date() }, 
      { where: { id } } 
    );

    if (result[0] === 0) {
      return res.status(400).json({
        message: `Action with ID ${id} not found.`,
      });
    }

    return res.status(200).json({
      message: `Action with ID ${id} was successfully soft deleted.`,
    });
  } catch (error) {
    console.error("Error soft deleting the Action:", error);
    return res.status(500).json({
      message: "An error occurred while attempting to delete the Action.",
      error: error.message,
    });
  }
};

const deleteActionUser = async (req, res) => {
    const { action_id, user_id } = req.params; 

    try {
        // Fetching all tasks associated with the given action_id
        const tasks = await Task.findAll({
            where: { action_id },
            attributes: ['id']
        });

        // If there are no tasks under this action, return a message
        if (tasks.length === 0) {
            return res.status(400).json({
                message: `No tasks found for action with ID ${action_id}.`
            });
        }

        // Extract all task ids 
        const taskIds = tasks.map(task => task.id);

        // Check if the user is associated with any tasks under this action
        const taskUserAssociations = await TaskUser.findAll({
            where: {
                user_id,
                task_id: taskIds // Sequelize will treat this as an IN clause
            }
        });

        if (taskUserAssociations.length > 0) {
            return res.status(400).json({
                message: `User with ID ${user_id} is mapped to one or more tasks in action ${action_id} and cannot be deleted.`,
            });
        }

        // Proceed with soft deleting the user from the action if no associations are found
        const result = await ActionUser.update(
            { deleted_at: new Date() },
            { where: { user_id, action_id } }  // Use action_id instead of goal_id
        );

        if (result[0] === 0) {
            return res.status(404).json({
                message: `User with ID ${user_id} not found in action ${action_id}.`,
            });
        }

        return res.status(200).json({
            message: `User with ID ${user_id} was successfully soft deleted from action ${action_id}.`,
        });

    } catch (error) {
        console.error("Error deleting action user:", error);
        return res.status(500).json({
            message: "An error occurred while attempting to delete the action user.",
            error: error.message,
        });
    }
};

module.exports = {
    deleteAction,
    deleteActionUser
}