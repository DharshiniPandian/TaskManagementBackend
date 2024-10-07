const { MasterOverallActionStatus, Goal, User, MasterDomain, MasterHashtag, MasterGoalStatus, GoalUser, GoalPhase, PhaseUser, Action } = require('../../../models');
const { Op } = require('sequelize');

const getAllGoals = async (req, res) => {
    try {
        const { name, offset = 0, limit = 2 } = req.query; 
  
        // Construct the where clause based on the goal title if provided
        let whereClause = {};
  
        if (name) {
            whereClause.goal_title = {
                // to perform a case-insensitive search for a substring match
                [Op.like]: `%${name}%` 
            };
        }
  
        // Fetch the goals including hashtags and user information
        const goals = await Goal.findAll({
            where: whereClause,
            include: [
                { 
                    model: MasterHashtag, 
                    as: 'hashtag', //alias to be referred in the output
                    attributes: ['id', 'name'] 
                },
                { 
                    model: User, 
                    as: 'goalowner', 
                    attributes: ['id', 'name', 'path'] 
                }
            ],
            attributes: ['id','goal_title', 'start_at', 'end_at'], 
            order: [['updated_at', 'DESC']],
            limit: parseInt(limit),
            offset: parseInt(offset)
        });
  
        res.status(200).json(goals);
    } catch (error) {
        console.error("Error fetching goals: ", error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};

const getGoalById = async (req, res) => {
    const { id } = req.params;

    try {
        //find by primark key -> findByPk()
        const goal = await Goal.findByPk(id, {
            include: [
                {
                    model: User,
                    as: 'goalowner',
                    attributes: ['id', 'name', 'path'], 
                },
                {
                    model: MasterDomain,
                    as: 'domain',
                    attributes: ['id', 'name'],
                },
                {
                    model: MasterHashtag,
                    as: 'hashtag',
                    attributes: ['id', 'name'],
                },
                {
                    model: MasterGoalStatus,
                    as: 'goalstatus',
                    attributes: ['id', 'name'],
                },
                {
                    model: GoalUser,
                    as: 'goalusers',
                    include: [
                        {
                            model: User,
                            as: 'user',
                            attributes: ['id', 'name', 'path'],
                        }
                    ],
                    attributes: ['user_id'],
                },
                {
                    model: GoalPhase,
                    as: 'goalphases',
                    attributes: ['id', 'phase_title', 'start_at', 'end_at'],
                }
            ]
        });

        if (!goal) {
            return res.status(404).json({ message: 'Goal not found' });
        }

        const actionsUnderGoal = await Action.findAll({
            where: { goal_id : id },
            include: [
                {
                    model: MasterOverallActionStatus,
                    as: 'actualactionstatus',
                    attributes: [ 'name'], 
                },
            ],
            attributes: ['id', 'action_title', 'start_at', 'end_at', 'status'],
        })

        return res.json({
            goal,
            actionsUnderGoal,
        });

    } catch (error) {
        console.error('Error fetching goal:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


module.exports = { 
    getGoalById,
    getAllGoals
};