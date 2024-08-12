const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Blog = sequelize.define('Blog', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: true // Permite NULL
  },
  categoria_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'Categories', // Nome da tabela de categorias
      key: 'id'
    },
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE'
  },
  subtitulo: {
    type: DataTypes.STRING,
    allowNull: true // Permite NULL
  },
  textone: {
    type: DataTypes.TEXT,
    allowNull: true // Permite NULL
  },
  subtextone: {
    type: DataTypes.TEXT,
    allowNull: true // Permite NULL
  },
  // Defina os outros campos de forma semelhante
  texttwo: { type: DataTypes.TEXT, allowNull: true },
  subtextwo: { type: DataTypes.TEXT, allowNull: true },
  textthree: { type: DataTypes.TEXT, allowNull: true },
  subtextthree: { type: DataTypes.TEXT, allowNull: true },
  textfour: { type: DataTypes.TEXT, allowNull: true },
  subtextfour: { type: DataTypes.TEXT, allowNull: true },
  textfive: { type: DataTypes.TEXT, allowNull: true },
  subtextfive: { type: DataTypes.TEXT, allowNull: true },
  textsix: { type: DataTypes.TEXT, allowNull: true },
  subtextsix: { type: DataTypes.TEXT, allowNull: true },
  textseven: { type: DataTypes.TEXT, allowNull: true },
  subtextseven: { type: DataTypes.TEXT, allowNull: true },
  texteight: { type: DataTypes.TEXT, allowNull: true },
  subtexteight: { type: DataTypes.TEXT, allowNull: true },
  textnine: { type: DataTypes.TEXT, allowNull: true },
  subtextnine: { type: DataTypes.TEXT, allowNull: true },
  textten: { type: DataTypes.TEXT, allowNull: true },
  subtextten: { type: DataTypes.TEXT, allowNull: true },
  data_criacao: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  },
  data_atualizacao: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
    onUpdate: Sequelize.NOW
  },
  photo: {
    type: DataTypes.STRING,
    allowNull: true // Permite NULL
  }
}, {
  tableName: 'blogs',
  timestamps: false
});

module.exports = Blog;
