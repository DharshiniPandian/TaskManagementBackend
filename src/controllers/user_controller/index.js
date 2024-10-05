const {User} = require('../../../models')

const get_master_users = async (req, res) => {
    try{
        const masterusers = await User.findAll()
        res.status(200).json(masterusers)
    }
    catch (error) {
        console.error("Error fetching users from master table: ", error)
        res.status(200).json({message : "Internal server Error", error:  error.message})
    }
}

module.exports = {
    get_master_users
}