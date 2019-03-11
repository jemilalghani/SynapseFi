const synapse = require("./client");
const client = synapse.client;

module.exports = {
  createUsers: (req, res) => {
    console.log(req.body);
    const payload = {
      logins: [
        {
          email: req.body.email
        }
      ],
      phone_numbers: [req.body.phoneNumbers],
      legal_names: [req.body.name],
      documents: [
        {
          email: "test@test.com",
          phone_number: "901.111.1111",
          ip: "::1",
          name: req.body.name,
          alias: req.body.name,
          entity_type: "M",
          entity_scope: "Arts & Entertainment",
          day: 2,
          month: 5,
          year: 1990,
          address_street: "8302 International Blvd",
          address_city: "Oakland",
          address_subdivision: "CA",
          address_postal_code: "94621",
          address_country_code: "US",
          virtual_docs: [
            {
              document_value: "2222",
              document_type: "SSN"
            },
            {
              document_value: "2222",
              document_type: "OTHER"
            }
          ],
          physical_docs: [
            {
              document_value: process.env.IMAGE,
              document_type: "GOVT_ID"
            }
          ],
          social_docs: [
            {
              document_value: "2222",
              document_type: "OTHER"
            }
          ]
        }
      ],
      extra: {
        supp_id: "122eddfgbeafrfvbbb",
        cip_tag: 1,
        is_business: false
      }
    };
    client
      .createUser(payload)
      .then(response => {
        res.json(response);
      })
      .catch(err => {
        console.log("Create User Error: ", err);
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
    console.log(req.query);
    client
      .getAllUsers(req.query)
      .then(response => {
        res.send(response.data);
      })
      .catch(err => {
        console.log("Get All User Error: ", err);
        res.status(500).json("get all user error");
      });
  }
};
