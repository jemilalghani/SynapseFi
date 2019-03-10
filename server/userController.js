const synapse = require("./client");
// const User = synapse.User;
const client = synapse.client;
// console.log(client.toString());

module.exports = {
  createUsers: (req, res) => {
    const payload = {
      logins: [
        {
          email: req.body.email
        }
      ],
      phone_numbers: [req.body.phoneNumber],
      legal_names: [req.body.legalName]
    };
    client
      .createUser(payload)
      .then(response => {
        res.json(response);
      })
      .catch(err => {
        console.err("Create User Error: ", err);
        res.status(500).json("create user error");
      });
  },
  getUser: (req, res) => {
    const userID = req.body.userId;
    const fullDehydrate = true;

    client
      .getUser(userID, fullDehydrate)
      .then(response => {
        res.json(response);
      })
      .catch(err => {
        console.err("Get User Error: ", err);
        res.status(500).json("get user error");
      });
  },
  getAllUser: (req, res) => {
    client
      .getAllUsers()
      .then(response => {
        res.send(response.data);
      })
      .catch(err => {
        console.log("Get All User Error: ", err);
        res.status(500).json("get all user error");
      });
  }
};
