"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("cursos", [
            // id: 1
            { nombre: "A", año_academico: 1, propuesta_academica: 0 },
            // id: 2
            { nombre: "B", año_academico: 1, propuesta_academica: 0 },
            // id: 3
            { nombre: "C", año_academico: 1, propuesta_academica: 0 },
            // id: 4
            { nombre: "D", año_academico: 1, propuesta_academica: 0 },
            // id: 5
            { nombre: "E", año_academico: 1, propuesta_academica: 0 },
            // id: 6
            { nombre: "F", año_academico: 1, propuesta_academica: 0 },
            // id: 7
            { nombre: "A", año_academico: 2, propuesta_academica: 0 },
            // id: 8
            { nombre: "B", año_academico: 2, propuesta_academica: 0 },
            // id: 9
            { nombre: "C", año_academico: 2, propuesta_academica: 0 },
            // id: 10
            { nombre: "D", año_academico: 2, propuesta_academica: 0 },
            // id: 11
            { nombre: "A", año_academico: 3, propuesta_academica: 0 },
            // id: 12
            { nombre: "B", año_academico: 3, propuesta_academica: 0 },
            // id: 13
            { nombre: "C", año_academico: 3, propuesta_academica: 0 },
            // id: 14
            { nombre: "D", año_academico: 3, propuesta_academica: 0 },
        ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("cursos", null, {});
    },
};
