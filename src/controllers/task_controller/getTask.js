const { MasterTimeFrame, MasterOverallActionStatus, Task } = require('../../../models');

const get_tasks_by_action = async (req, res) => {
    try {
        const { action_id } = req.params; 

        if (!action_id) {
            return res.status(400).json({ message: 'Action ID is required' });
        }

        const alltask = await Task.findAll({
            include: [
                {
                    model: MasterTimeFrame,
                    as: 'plannedeta',
                    attributes: ['name'], 
                },
                {
                    model: MasterOverallActionStatus,
                    as: 'taskstatus',
                    attributes: ['name'], 
                },
            ],
            attributes: ['id', 'task_title', 'custom_planned_eta'],
            where: {
                action_id
            }
        });

        res.status(200).json(alltask);
    } catch (error) {
        console.error("Error fetching tasks by action:", error);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

module.exports = {
    get_tasks_by_action
};
