"use strict";
const { DataTypes } = require("sequelize");

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("materias", {
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
            año_academico: {
                type: DataTypes.TINYINT(3).UNSIGNED,
                allowNull: false,
            },
            propuesta_academica: {
                type: DataTypes.TINYINT(1).UNSIGNED,
                allowNull: false,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("materias");
    },
};
