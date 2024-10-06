const { Goal, GoalPhase, PhaseUser, GoalUser } = require('../../../models');

const deleteGoal = async (req, res) => {
  const { id } = req.params; 

  try {
    // soft delete the main Goal post by setting deleted_at
    const result = await Goal.update(
      { deleted_at: new Date() }, 
      { where: { id } } 
    );

    if (result[0] === 0) {
      return res.status(400).json({
        message: `Goal with ID ${id} not found.`,
      });
    }

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
      // soft delete the goal phase by setting deleted_at
      const result = await GoalPhase.update(
        { deleted_at: new Date() },
        { where: { id } } 
      );
      
      // update method returns an array, where the first element (result[0]) is the number of rows affected (i.e., updated) by the operation
      if (result[0] === 0) {
        return res.status(400).json({
          message: `Goal phase with ID ${id} not found.`,
        });
      }
  
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
    const { phase_id, user_id } = req.params; 
  
    try {
      // soft delete the phase user by setting "deleted_at"
      const result = await PhaseUser.update(
        { deleted_at: new Date() }, 
        { where: { phase_id, user_id } } 
      );
  
      if (result[0] === 0) {
        return res.status(400).json({
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
    const { goal_id, user_id } = req.params; 

    try {
        // getting all phases associated with the given goal_id
        const phases = await GoalPhase.findAll({
            where: { goal_id },
            attributes: ['id']
        });

        // If there are no phases under this goal, proceed to delete the user from the goal
        if (phases.length === 0) {
            return res.status(400).json({
                message: `No phases found for goal with ID ${goal_id}.`
            });
        }

        // extract all phase ids 
        const phaseIds = phases.map(phase => phase.id);

        // check if the user is associated with any phases under this goal
        const phaseUserAssociations = await PhaseUser.findAll({
            where: {
                user_id,
                phase_id: phaseIds //here sequelize will interpret it as an IN clause
            }
        });

        if (phaseUserAssociations.length > 0) {
            return res.status(400).json({
                message: `User with ID ${user_id} is mapped to one or more phases in goal ${goal_id} and cannot be deleted.`,
            });
        }

        // proceed with soft deleting the user from the goal if no associations are found
        const result = await GoalUser.update(
            { deleted_at: new Date() },
            { where: { user_id, goal_id } } 
        );

        if (result[0] === 0) {
            return res.status(404).json({
                message: `User with ID ${user_id} not found in goal ${goal_id}.`,
            });
        }

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