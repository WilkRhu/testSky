const User = require("../../models/users");

const findId = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findOne({_id: id});
        user.senha = undefined;
        return res.status(200).json(user);
    } catch (error) {
        return res.status(400).json(error);
    }
};

module.exports = findId;