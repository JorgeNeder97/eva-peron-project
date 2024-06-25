"use strict";
const { DataTypes } = require("sequelize");

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("notas", {
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            nota: {
                type: DataTypes.FLOAT.UNSIGNED,
                allowNull: false,
            },
            alumno_id: {
                type: DataTypes.INTEGER.UNSIGNED,
                references: {
                    model: {
                        tableName: "alumnos",
                    },
                    key: "id",
                },
                allowNull: false,
                onDelete: "NULL",
            },
            materia_id: {
                type: DataTypes.INTEGER.UNSIGNED,
                references: {
                    model: {
                        tableName: "materias",
                    },
                    key: "id",
                },
                allowNull: false,
                onDelete: "NULL",
            },
            createdAt: {
                type: DataTypes.DATE,
            },
            updatedAt: {
                type: DataTypes.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("notas");
    },
};
