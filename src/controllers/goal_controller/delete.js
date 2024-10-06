const { Goal, GoalPhase, PhaseUser } = require('../../../models');

const deleteGoal = async (req, res) => {
  const { id } = req.params; 

  try {
    // Soft delete the main "Goal" post by setting "deleted_at"
    const result = await Goal.update(
      { deleted_at: new Date() }, 
      { where: { id } } 
    );

    // Check if the goal was found and updated
    if (result[0] === 0) {
      return res.status(404).json({
        message: `Goal with ID ${id} not found.`,
      });
    }

    // If successful, return a response
    return res.status(200).json({
      message: `Goal with ID ${id} was successfully soft deleted.`,
    });
  } catch (error) {
    console.error("Error soft deleting the goal:", error);
    return res.status(500).json({
      message: "An error occurred while attempting to delete the goal.",
      error: error.message,
    });
  }
};

const deleteGoalPhase = async (req, res) => {
    const { id } = req.params;
  
    try {
      // Soft delete the goal phase by setting "deleted_at"
      const result = await GoalPhase.update(
        { deleted_at: new Date() },
        { where: { id } } 
      );
  
      // Check if the goal phase was found and updated
      if (result[0] === 0) {
        return res.status(404).json({
          message: `Goal phase with ID ${id} not found.`,
        });
      }
  
      // If successful, return a response
      return res.status(200).json({
        message: `Goal phase with ID ${id} was successfully soft deleted.`,
      });
    } catch (error) {
      console.error("Error soft deleting the goal phase:", error);
      return res.status(500).json({
        message: "An error occurred while attempting to delete the goal phase.",
        error: error.message,
      });
    }
  };

  const deleteGoalPhaseUser = async (req, res) => {
    const { phase_id, user_id } = req.params; // Extracting phase_id and user_id from request parameters
  
    try {
      // Soft delete the phase user by setting "deleted_at"
      const result = await PhaseUser.update(
        { deleted_at: new Date() }, // Set deleted_at to current date
        { where: { phase_id, user_id } } // Condition to find the phase user by phase_id and user_id
      );
  
      // Check if the phase user was found and updated
      if (result[0] === 0) {
        return res.status(404).json({
          message: `User with ID ${user_id} in phase ${phase_id} not found.`,
        });
      }
  
      // If successful, return a response
      return res.status(200).json({
        message: `User with ID ${user_id} was successfully soft deleted from phase ${phase_id}.`,
      });
    } catch (error) {
      console.error("Error soft deleting the phase user:", error);
      return res.status(500).json({
        message: "An error occurred while attempting to delete the phase user.",
        error: error.message,
      });
    }
  };

module.exports = { 
    deleteGoal,
    deleteGoalPhase,
    deleteGoalPhaseUser
};