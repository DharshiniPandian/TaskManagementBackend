const {Goal, GoalPhase, GoalUser, PhaseUser, sequelize} = require('../../../models')

const create_goal = async (req, res) => {
    const t = await sequelize.transaction();
    try{
        const { goal, goal_users, gaol_phases } = req.body;

        const newGoal = await Goal.create([
            
        ])
    }
    catch (error) {
        console.error("Error fetching domains from master table: ", error)
        res.status(200).json({ message : "Internal server Error", error: error.message });
    }
}

module.exports = {
    create_goal
}