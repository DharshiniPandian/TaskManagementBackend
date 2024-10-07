const { Task, TaskUser } = require('../../../models');

const deleteTask = async (req, res) => {
  const { id } = req.params; 

  try {
    // soft delete the Task by setting deleted_at
    const result = await Task.update(
      { deleted_at: new Date() }, 
      { where: { id } } 
    );

    if (result[0] === 0) {
      return res.status(400).json({
        message: `Task with ID ${id} not found.`,
      });
    }

    return res.status(200).json({
      message: `Task with ID ${id} was successfully soft deleted.`,
    });
  } catch (error) {
    console.error("Error soft deleting the Task:", error);
    return res.status(500).json({
      message: "An error occurred while attempting to delete the Task.",
      error: error.message,
    });
  }
};

const deleteTaskUser = async (req, res) => {
    const { task_id, user_id } = req.params; 
  
    try {
      // soft delete the task user by setting "deleted_at"
      const result = await TaskUser.update(
        { deleted_at: new Date() }, 
        { where: { task_id, user_id } } 
      );
  
      if (result[0] === 0) {
        return res.status(400).json({
          message: `User with ID ${user_id} in task ${task_id} not found.`,
        });
      }
  
      return res.status(200).json({
        message: `User with ID ${user_id} was successfully soft deleted from task ${task_id}.`,
      });
    } catch (error) {
      console.error("Error soft deleting the task user:", error);
      return res.status(500).json({
        message: "An error occurred while attempting to delete the task user.",
        error: error.message,
      });
    }
  };

module.exports = {
    deleteTask,
    deleteTaskUser
}