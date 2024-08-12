const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Ajuste o caminho conforme necessário

const Category = sequelize.define('Category', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'categorias', // Nome da tabela no banco de dados
    timestamps: false // Desativa a criação das colunas createdAt e updatedAt
});

module.exports = Category; // Exporta apenas o modelo
