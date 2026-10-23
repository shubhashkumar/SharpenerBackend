const db = require("../utils/dbconnection");
const userTable = require("../model/userTable");
const addEntries = async (req, res) => {
  try {
    const { firstName, lastName, email } = req.body;
    const user01 = await userTable.create({
      firstName: firstName,
      lastName: lastName,
      email: email,
    });
    res.status(200).send("user created");
  } catch (error) {
    res.status(500).send("unable to create user");
  }
};

const updateEntries = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName } = req.body;
    const user = await userTable.findByPk(id);
    if (!user) {
      res.status(404).send("user not found");
      return;
    }
    user.firstName = firstName;
    await user.save();
    res.status(200).send("user updated");
  } catch (error) {
    res.status(500).send("unable to create user");
  }
};
const deleteEntries = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userTable.destroy({
      where: {
        id: id
      },
    });
    await user.save();
    res.status(200).send("user deleted");
  } catch (error) {
    res.status(500).send("unable to delete user");
  }
};
module.exports = { addEntries, updateEntries,deleteEntries };
