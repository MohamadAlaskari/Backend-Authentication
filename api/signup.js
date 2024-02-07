const Users = require('../models/Users');
const bcrypt = require('bcrypt');
const { Op } = require('sequelize');

module.exports = async (req, res) => {
    try {
        const { img, username, alt, email, password } = req.body;
        // Überprüfe, ob Benutzername oder E-Mail bereits existieren
        const existingUser = await Users.findOne({
            where: {
                [Op.or]: [{ username }, { email }],
            },
        });
        if (existingUser) {
            return res.status(400).json({ error: 'Username or email already exists!' });
        }

        // Hash das Passwort, bevor es in die Datenbank gespeichert wird
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await Users.create({
            img,
            username,
            alt,
            email,
            password: hashedPassword
        });

        return res.status(201).json({ message: 'User registered successfully!' });
    } catch (error) {
        console.error('Error during user registration:', error);
        return res.status(500).json({ error: 'An error occurred while registering user!' });
    }
};

