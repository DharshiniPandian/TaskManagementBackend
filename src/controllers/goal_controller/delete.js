const { Goal, GoalPhase, PhaseUser, GoalUser } = require('../../../models');

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
        { deleted_at: new Date() }, 
        { where: { phase_id, user_id } } 
      );
  
      // Check if the phase user was found and updated
      if (result[0] === 0) {
        return res.status(404).json({
          message: `User with ID ${user_id} in phase ${phase_id} not found.`,
        });
      }
  
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

  const deleteGoalUser = async (req, res) => {
    const { goal_id, user_id } = req.params; // Extract goal_id and user_id from request parameters

    try {
        // Step 1: Get all phases associated with the given goal_id
        const phases = await GoalPhase.findAll({
            where: { goal_id },
            attributes: ['id'] // We only need the phase ids
        });

        // If there are no phases under this goal, proceed to delete the user from the goal
        if (phases.length === 0) {
            return res.status(400).json({
                message: `No phases found for goal with ID ${goal_id}.`
            });
        }

        // Step 2: Extract phase ids and check if the user is associated with any of these phases
        const phaseIds = phases.map(phase => phase.id);

        // Step 3: Check if the user is associated with any phases under this goal
        const phaseUserAssociations = await PhaseUser.findAll({
            where: {
                user_id,
                phase_id: phaseIds // Check for the user in the phases of the goal
            }
        });

        if (phaseUserAssociations.length > 0) {
            return res.status(400).json({
                message: `User with ID ${user_id} is mapped to one or more phases in goal ${goal_id} and cannot be deleted.`,
            });
        }

        // Step 4: Proceed with soft deleting the user from the goal if no associations are found
        const result = await GoalUser.update(
            { deleted_at: new Date() }, // Soft delete by setting "deleted_at"
            { where: { user_id, goal_id } } // Ensure deletion is scoped to the goal
        );

        // Check if the user was successfully soft deleted
        if (result[0] === 0) {
            return res.status(404).json({
                message: `User with ID ${user_id} not found in goal ${goal_id}.`,
            });
        }

        // Success response
        return res.status(200).json({
            message: `User with ID ${user_id} was successfully soft deleted from goal ${goal_id}.`,
        });

    } catch (error) {
        console.error("Error deleting goal user:", error);
        return res.status(500).json({
            message: "An error occurred while attempting to delete the goal user.",
            error: error.message,
        });
    }
};




module.exports = { 
    deleteGoal,
    deleteGoalPhase,
    deleteGoalPhaseUser,
    deleteGoalUser
};