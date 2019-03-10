const Synapse = require("synapsenode");
const Client = Synapse.Client;
const User = Synapse.User;
// console.log(Client.toString());
const client = new Client({
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET,
  fingerprint: process.env.FINGERPRINT,
  ip_address: process.env.IP,
  isProduction: false
});

module.exports = {
  client,
  User
};
