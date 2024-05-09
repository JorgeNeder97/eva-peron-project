'use strict';
const { DataTypes } = require("sequelize");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('noticias_imagenes', {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      noticia_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        references: {
          model: {
            tableName: 'noticias'
          },
          key: 'id'
        },
        allowNull: false,
        onDelete: 'CASCADE'
      },
      imagen_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        references: {
          model: {
            tableName: 'imagenes'
          },
          key: 'id'
        },
        allowNull: false,
        onDelete: 'CASCADE'
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('noticias_imagenes');
  }
};
