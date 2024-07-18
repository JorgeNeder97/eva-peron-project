"use strict";
const { DataTypes } = require("sequelize");

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("asignaturas", {
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            asignatura: {
                type: DataTypes.STRING(150),
                allowNull: false,
            },
            curso_id: {
                type: DataTypes.INTEGER.UNSIGNED,
                references: {
                    model: {
                        tableName: "cursos",
                    },
                    key: "id",
                },
                allowNull: false,
                onDelete: "CASCADE",
            },
            horas: {
                type: DataTypes.INTEGER(2).UNSIGNED,
                allowNull: false,
            },
            docente_id: {
                type: DataTypes.INTEGER.UNSIGNED,
                references: {
                    model: {
                        tableName: "docentes",
                    },
                    key: "id",
                },
                allowNull: false,
                onDelete: "CASCADE",
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
        await queryInterface.dropTable("asignaturas");
    },
};
