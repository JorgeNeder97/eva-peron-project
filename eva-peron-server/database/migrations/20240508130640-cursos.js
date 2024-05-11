'use strict';
const { DataTypes } = require('sequelize');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cursos', {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nombre: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      año_academico: {
        type: DataTypes.TINYINT(3).UNSIGNED,
        allowNull: false,
      },
      // propuesta_academica 0 = PCTBI, propuesta_academica 1 = FORMACION PROFESIONAL
      propuesta_academica: {
        type: DataTypes.TINYINT(1).UNSIGNED,
        allowNull: false,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('cursos');
  }
};
