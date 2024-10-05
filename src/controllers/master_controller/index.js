const {MasterDomain, MasterHashTag} = require('../../../models')

const get_master_domains = async (req, res) => {
    try{
        const masterdomains = await MasterDomain.findAll()
        res.status(200).json(masterdomains);
    }
    catch (error) {
        console.error("Error fetching domains from master table: ", error)
        res.status(200).json({ message : "Internal server Error", error: error.message });
    }
}

module.exports = {
    get_master_domains
}