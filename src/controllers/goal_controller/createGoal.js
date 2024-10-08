const { Goal, GoalPhase, GoalUser, PhaseUser, sequelize } = require('../../../models');

const create_goal = async (req, res) => {
  const t = await sequelize.transaction();
  try {
    const { goal, goal_users, goal_phases } = req.body;
    console.log(goal);
    // Create the goal
    const newGoal = await Goal.create(
      {
        domain_id: goal.domain_id,
        goal_title: goal.goal_title,
        goal_description: goal.goal_description,
        hashtag_id: goal.hashtag_id,
        start_at: goal.start_at,
        end_at: goal.end_at,
        status_id: goal.status_id,
        goal_created_by: goal.goal_created_by,
        created_by: goal.goal_created_by,
        is_active: goal.is_active,
      },
      { transaction: t }
    );

    // Create goal users if they exist
    if (goal_users && goal_users.users && goal_users.users.length > 0) {
      const goalUsers = goal_users.users.map((goal_user) => ({
        goal_id: newGoal.id,
        user_id: goal_user.user_id, 
        is_owner: goal_user.is_owner,
        is_assignee: goal_user.is_assignee,
        created_by: goal.goal_created_by,
        is_active: goal_user.is_active,
      }));
      await GoalUser.bulkCreate(goalUsers, { transaction: t });
    }

    // Create goal phases if they exist
    if (goal_phases && goal_phases.phases && goal_phases.phases.length > 0) {
      const phases = goal_phases.phases.map((phase) => ({
        goal_id: newGoal.id,
        phase_title: phase.phase_title,
        start_at: phase.start_at,
        end_at: phase.end_at,
        is_active: phase.is_active,
        created_by: goal.goal_created_by,
      }));

      const newPhases = await GoalPhase.bulkCreate(phases, { transaction: t, returning: true });

      // For each phase, create phase users if they exist
      for (const [index, phase] of newPhases.entries()) {
        const phaseUsers = goal_phases.phases[index].users;
        if (phaseUsers && phaseUsers.length > 0) {
          const phaseUserEntries = phaseUsers.map((phase_user) => ({
            phase_id: phase.id,
            user_id: phase_user.user_id,
            is_active: phase_user.is_active,
            created_by: goal.goal_created_by,
            is_owner: phase_user.is_owner,
            is_assignee: phase_user.is_assignee,
          }));
          await PhaseUser.bulkCreate(phaseUserEntries, { transaction: t });
        }
      }
    }

    await t.commit();
    res.status(201).json({ message: 'Goal created successfully' });
  } catch (error) {
    await t.rollback();
    console.error('Error storing data during goal transaction: ', error);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
};

module.exports = {
  create_goal,
};
