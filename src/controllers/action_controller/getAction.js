const { TaskUser, User, Task, MasterActionStatus, Action, MasterActionTypes, MasterPriority, MasterTimeFrame } = require('../../../models');

const get_actions_by_goal_or_phase = async (req, res) => {
    try {
        const { goal_id, phase_id } = req.query; 

        if (!goal_id && !phase_id) {
            return res.status(400).json({ message: 'Goal ID or Phase ID is required' });
        }

        const whereClause = {};
        if (goal_id) whereClause.goal_id = goal_id;
        if (phase_id) whereClause.phase_id = phase_id;

        const allActions = await Action.findAll({
            include: [
                {
                    model: MasterActionTypes,
                    as: 'actiontype',
                    attributes: ['id', 'name'], 
                },
                {
                    model: MasterPriority,
                    as: 'priority',
                    attributes: ['id', 'name'], 
                },
                {
                    model: MasterActionStatus,
                    as: 'actionstatus',
                    attributes: ['name'], 
                },
                {
                    model: MasterTimeFrame,
                    as: 'plannedeta',
                    attributes: ['name'], 
                },
                {
                    model: Task,
                    as: 'taskactionid',
                    include: [
                        {
                            model: TaskUser,
                            as: 'taskid',
                            include: [
                                {
                                    model: User,
                                    as: 'user',
                                    attributes: ['id', 'name', 'path'],
                                }
                            ],
                            attributes: ['user_id'],
                        }
                    ],
                   
                },
            ],
            attributes: ['id', 'action_title', 'start_at', 'end_at'],
            where: whereClause 
        });

        res.status(200).json(allActions);
    } catch (error) {
        console.error("Error fetching actions:", error);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

module.exports = {
    get_actions_by_goal_or_phase
};
