'use strict';
const { DataTypes } = require('sequelize');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('examenes', {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nota: {
        type: DataTypes.TINYINT(10).UNSIGNED,
        allowNull: false,
      },
      fecha: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      libr: {
        type: DataTypes.TINYINT(50).UNSIGNED,
        allowNull: false,
      },
      folio: {
        type: DataTypes.TINYINT(200).UNSIGNED,
        allowNull: false,
      },
      alumno_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        references: {
          model: {
            tableName: 'alumnos'
          },
          key: 'id',
        },
        allowNull: false,
        onDelete: 'CASCADE',
      },
      materia_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        references: {
          model: {
            tableName: 'materias',
          },
          key: 'id',
        },
        allowNull: false,
        onDelete: 'CASCADE',
      },
      curso_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        references: {
          model: {
            tableName: 'cursos',
          },
          key: 'id',
        },
        allowNull: false,
        onDelete: 'CASCADE',
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('examenes');
  }
};
