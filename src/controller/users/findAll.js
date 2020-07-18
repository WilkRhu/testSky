const User = require("../../models/users");

const findAll = async (req, res) => {
    try {
        const users = await User.find({});
        return res.status(200).json(users);
    } catch (error) {
        return res.status(400).json(error);
    }
};

module.exports = findAll;