'use strict';
const { DataTypes } = require('sequelize');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cargos', {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nombre: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      disponibilidad: {
        type: DataTypes.TINYINT(1).UNSIGNED,
        allowNull: false,
      },
      usuario_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        references: {
          model: {
            tableName: 'usuarios',
          },
          key: 'id',
        },
        allowNull: false,
        onDelete: 'CASCADE',
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('cargos');
  }
};