"use strict";
const { DataTypes } = require("sequelize");

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("usuarios", {
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
            apellido: {
                type: DataTypes.STRING(50),
                allowNull: false,
            },
            dni: {
                type: DataTypes.INTEGER(8).UNSIGNED,
                allowNull: false,
                unique: true,
            },
            contraseña: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            fecha_nacimiento: {
                type: DataTypes.DATEONLY,
                allowNull: true,
            },
            email: {
                type: DataTypes.STRING(100),
                allowNull: true,
            },
            telefono: {
                type: DataTypes.INTEGER(15).UNSIGNED,
                allowNull: true,
            },
            sexo_id: {
                type: DataTypes.INTEGER.UNSIGNED,
                references: {
                    model: {
                        tableName: "sexos",
                    },
                    key: "id",
                },
                allowNull: false,
                onDelete: "NULL",
            },
            rol_id: {
                type: DataTypes.INTEGER.UNSIGNED,
                references: {
                    model: {
                        tableName: "roles",
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
        await queryInterface.dropTable("usuarios");
    },
};
