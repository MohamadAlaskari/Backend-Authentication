const { Sequelize } = require('sequelize');

// Definiere die Verbindungsparameter
const dbConfig = {
  dialect: 'mysql',         // Datenbanktyp (hier: MySQL)
  host: process.env.HOSTNAME,   // Hostname der Datenbank
  username: process.env.USERNAME, // Benutzername
  password: process.env.PASSWORD, // Passwort
  database: process.env.DATABASE  // Name der Datenbank
};

// Erstelle eine Sequelize-Instanz mit den Verbindungsparametern
const sequelize = new Sequelize(dbConfig);
module.exports = sequelize;
