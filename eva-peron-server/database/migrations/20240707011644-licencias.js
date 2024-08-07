"use strict";
const { DataTypes } = require("sequelize");

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("licencias", {
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            licencia: {
                type: DataTypes.STRING(50),
                allowNull: false,
            },
            fecha: {
                type: DataTypes.DATE,
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
        await queryInterface.dropTable("licencias");
    },
};
