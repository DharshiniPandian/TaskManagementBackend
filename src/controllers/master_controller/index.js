const {User, MasterDomain, MasterHashtag,MasterTimeFrame,MasterPriority,MasterActionTypes,MasterReason,MasterActionStatus,MasterOverallActionStatus} = require('../../../models')

const get_master_domains = async (req, res) => {
    try{
        const masterdomains = await MasterDomain.findAll({
            attributes: ['id', 'name'], 
            where: { is_active: true }
        })
        res.status(200).json(masterdomains);
    }
    catch (error) {
        console.error("Error fetching domains from master table: ", error)
        res.status(500).json({ message : "Internal server Error", error: error.message });
    }
}

const get_master_hashtags = async (req, res) => {
    try{
        const masterhashtags = await MasterHashtag.findAll({
            attributes: ['id', 'name'], 
            where: { is_active: true }
        })
        res.status(200).json(masterhashtags);
    }
    catch (error) {
        console.error("Error fetching hashtags from master table: ", error)
        res.status(500).json({ message : "Internal server Error", error: error.message });
    }
}

const get_users = async (req, res) => {
    try{
        const masterhashtags = await User.findAll({
            attributes: ['id', 'name'], 
            where: { is_active: true }
        })
        res.status(200).json(masterhashtags);
    }
    catch (error) {
        console.error("Error fetching hashtags from master table: ", error)
        res.status(500).json({ message : "Internal server Error", error: error.message });
    }
}

const get_time_frames = async (req, res) => {
    try{
        const masterTimeFrames = await MasterTimeFrame.findAll({
            attributes: ['id', 'name', 'time_duration'], 
            where: { is_active: true }
        })
        res.status(200).json(masterTimeFrames);
    }
    catch (error) {
        console.error("Error fetching time frames from master table: ", error)
        res.status(500).json({ message : "Internal server Error", error: error.message });
    }
}

const get_priorities = async (req, res) => {
    try{
        const masterPriorities = await MasterPriority.findAll({
            attributes: ['id', 'name'], 
            where: { is_active: true }
        })
        res.status(200).json(masterPriorities);
    }
    catch (error) {
        console.error("Error fetching priorities from master table: ", error)
        res.status(500).json({ message : "Internal server Error", error: error.message });
    }
}

const get_action_types = async (req, res) => {
    try{
        const masterActionTypes = await MasterActionTypes.findAll({
            attributes: ['id', 'name'], 
            where: { is_active: true }
        })
        res.status(200).json(masterActionTypes);
    }
    catch (error) {
        console.error("Error fetching action types from master table: ", error)
        res.status(500).json({ message : "Internal server Error", error: error.message });
    }
}

const get_reasons = async (req, res) => {
    try {

        const { reason_type } = req.query;
        if (!reason_type) {
            return res.status(400).json({ message: "reason_type is required" });
        }

        const masterReasons = await MasterReason.findAll({
            attributes: ['id', 'name'],
            where: {
                is_active: true,
                reason_type_id: reason_type,
            },
        });

        res.status(200).json(masterReasons);
    } catch (error) {
        console.error("Error fetching reasons from master table: ", error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};


const get_action_status = async (req, res) => {
    try{
        const {feature_type} = req.query
        if(!feature_type){
            return res.status(400).json({ message: "feature_type is required" });
        }
        const masterActionStatus = await MasterActionStatus.findAll({
            attributes: ['id', 'name'], 
            where: { 
                is_active: true,
                type_id:feature_type
            }
        })
        res.status(200).json(masterActionStatus);
    }
    catch (error) {
        console.error("Error fetching action status from master table: ", error)
        res.status(500).json({ message : "Internal server Error", error: error.message });
    }
}

const get_overal_action_status = async (req, res) => {
    try{
        const masterOveralActionStatus = await MasterOverallActionStatus.findAll({
            attributes: ['id', 'name'], 
            where: { is_active: true }
        })
        res.status(200).json(masterOveralActionStatus);
    }
    catch (error) {
        console.error("Error fetching overal action status from master table: ", error)
        res.status(500).json({ message : "Internal server Error", error: error.message });
    }
}

const create_master_hashtags = async (req, res) => {
    try {
        const { name, is_active , created_by} = req.body;

        if (!name) {
            return res.status(400).json({ message: "Data insufficient" });
        }

        const newHashtag = await MasterHashtag.create({
            name: name,
            is_active: is_active !== undefined ? is_active : true, 
            created_by: created_by
        });

        res.status(201).json({
            message: "Hashtag created successfully",
            hashtag: newHashtag
        });
    } catch (error) {
        console.error("Error creating hashtag in master table: ", error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};

module.exports = {
    get_master_domains,
    get_master_hashtags,
    get_users,
    create_master_hashtags,
    get_time_frames,
    get_priorities,
    get_action_types,
    get_reasons,
    get_action_status,
    get_overal_action_status
}