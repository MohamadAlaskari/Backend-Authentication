const Users = require('../models/Users');

module.exports = async (req, res) => {
  try {
    const users = await Users.findAll();
    if (users.length === 0) {
      return res.status(404).json({ error: 'Keine Profile gefunden!' });
    }
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ error: 'An error occurred while fetching data.' });
  }
};
