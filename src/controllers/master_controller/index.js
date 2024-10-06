const {User, MasterDomain, MasterHashtag} = require('../../../models')

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
        res.status(200).json({ message : "Internal server Error", error: error.message });
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
        res.status(200).json({ message : "Internal server Error", error: error.message });
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
        res.status(200).json({ message : "Internal server Error", error: error.message });
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
    create_master_hashtags
}