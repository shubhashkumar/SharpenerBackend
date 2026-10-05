const getAllUsers= (req, res) => {
    res.send("fetching all users");
}

const getUserById = (req, res) => {
    res.send(`fetching user by ID: ${req.params.id}`);
}

const createUser = (req, res) => {
    res.send("Adding a new user");
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser
};