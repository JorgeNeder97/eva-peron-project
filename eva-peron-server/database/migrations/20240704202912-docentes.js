"use strict";
const { DataTypes } = require("sequelize");

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("docentes", {
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
            cuil: {
                type: DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                unique: true,
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
            edad: {
                type: DataTypes.INTEGER(2).UNSIGNED,
                allowNull: false,
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
                onDelete: "RESTRICT",
            },
            email: {
                type: DataTypes.STRING(100),
                allowNull: true,
            },
            domicilio: {
                type: DataTypes.STRING(150),
                allowNull: true,
            },
            titulo: {
                type: DataTypes.STRING(150),
                allowNull: false,
            },
            fecha_prom_inc_doce: {
                type: DataTypes.DATEONLY,
                allowNull: false,
            },
            cargo_id: {
                type: DataTypes.INTEGER.UNSIGNED,
                references: {
                    model: {
                        tableName: "cargos",
                    },
                    key: "id",
                },
                allowNull: false,
                onDelete: "RESTRICT",
            },
            situacion_revista: {
                type: DataTypes.STRING(10),
                allowNull: false,
            },
            fecha_inc_cargo_actual: {
                type: DataTypes.DATEONLY,
                allowNull: false,
            },
            alta_expte: {
                type: DataTypes.STRING(200),
                allowNull: false,
            },
            fecha_baja: {
                type: DataTypes.DATEONLY,
                allowNull: true,
            },
            cese_causa: {
                type: DataTypes.STRING(200),
                allowNull: true,
            },
            expediente_baja: {
                type: DataTypes.STRING(200),
                allowNull: true,
            },
            resolucion_baja: {
                type: DataTypes.STRING(200),
                allowNull: true,
            },
            observaciones: {
                type: DataTypes.TEXT,
                allowNull: true,
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
        await queryInterface.dropTable("docentes");
    },
};
