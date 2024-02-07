const Users = require('../models/Users');
const bcrypt = require('bcrypt');

module.exports = async (req, res) => {
    try {
        const { username, password } = req.body; // Hier das Passwort hinzugefügt
        const user = await Users.findOne({
            where: { username }
        })
        if (!user) {
            return res.status(404).json({ error: 'User not found!' })
        }

        const password_match = await bcrypt.compare(password, user.password);
        if (!password_match) {
            return res.status(401).json({ 'error': 'Incorrect password!' })
        }
        // Erfolgreiche Anmeldung
        return res.status(200).json({ message: 'Login successfull!' })
    } catch (error) {
        return res.status(500).json({ error: 'An error occurred while login user!' })
    }
};
