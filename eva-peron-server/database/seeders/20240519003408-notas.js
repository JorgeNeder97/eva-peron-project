"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("notas", [
            // NOTAS ALUMNOS PCTBI 2013

            {
                nota: 6,
                alumno_id: 1,
                materia_id: 1,
            },
            {
                nota: 7,
                alumno_id: 1,
                materia_id: 2,
            },
            {
                nota: 8,
                alumno_id: 1,
                materia_id: 3,
            },
            {
                nota: 6,
                alumno_id: 1,
                materia_id: 4,
            },
            {
                nota: 6,
                alumno_id: 1,
                materia_id: 5,
            },
            {
                nota: 6,
                alumno_id: 1,
                materia_id: 6,
            },
            {
                nota: 7,
                alumno_id: 1,
                materia_id: 7,
            },
            {
                nota: 7,
                alumno_id: 2,
                materia_id: 1,
            },
            {
                nota: 7,
                alumno_id: 2,
                materia_id: 2,
            },
            {
                nota: 6,
                alumno_id: 2,
                materia_id: 3,
            },
            {
                nota: 6,
                alumno_id: 2,
                materia_id: 4,
            },
            {
                nota: 7,
                alumno_id: 2,
                materia_id: 5,
            },
            {
                nota: 4,
                alumno_id: 2,
                materia_id: 6,
            },
            {
                nota: 4,
                alumno_id: 2,
                materia_id: 7,
            },
            {
                nota: 2,
                alumno_id: 3,
                materia_id: 1,
            },
            {
                nota: 6,
                alumno_id: 3,
                materia_id: 2,
            },
            {
                nota: 1,
                alumno_id: 3,
                materia_id: 3,
            },
            {
                nota: 4,
                alumno_id: 3,
                materia_id: 4,
            },
            {
                nota: 6,
                alumno_id: 3,
                materia_id: 5,
            },
            {
                nota: 4,
                alumno_id: 3,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 3,
                materia_id: 7,
            },
            {
                nota: 7,
                alumno_id: 4,
                materia_id: 1,
            },
            {
                nota: 7,
                alumno_id: 4,
                materia_id: 2,
            },
            {
                nota: 6,
                alumno_id: 4,
                materia_id: 3,
            },
            {
                nota: 7,
                alumno_id: 4,
                materia_id: 4,
            },
            {
                nota: 8,
                alumno_id: 4,
                materia_id: 5,
            },
            {
                nota: 6,
                alumno_id: 4,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 4,
                materia_id: 7,
            },
            {
                nota: 1,
                alumno_id: 5,
                materia_id: 1,
            },
            {
                nota: 6,
                alumno_id: 5,
                materia_id: 2,
            },
            {
                nota: 1,
                alumno_id: 5,
                materia_id: 3,
            },
            {
                nota: 1,
                alumno_id: 5,
                materia_id: 4,
            },
            {
                nota: 6,
                alumno_id: 5,
                materia_id: 5,
            },
            {
                nota: 1,
                alumno_id: 5,
                materia_id: 6,
            },
            {
                nota: 1,
                alumno_id: 5,
                materia_id: 7,
            },
            {
                nota: 5,
                alumno_id: 6,
                materia_id: 1,
            },
            {
                nota: 6,
                alumno_id: 6,
                materia_id: 2,
            },
            {
                nota: 6,
                alumno_id: 6,
                materia_id: 3,
            },
            {
                nota: 6,
                alumno_id: 6,
                materia_id: 4,
            },
            {
                nota: 6,
                alumno_id: 6,
                materia_id: 5,
            },
            {
                nota: 3,
                alumno_id: 6,
                materia_id: 6,
            },
            {
                nota: 7,
                alumno_id: 6,
                materia_id: 7,
            },
            {
                nota: 6,
                alumno_id: 7,
                materia_id: 1,
            },
            {
                nota: 8,
                alumno_id: 7,
                materia_id: 2,
            },
            {
                nota: 6,
                alumno_id: 7,
                materia_id: 3,
            },
            {
                nota: 6,
                alumno_id: 7,
                materia_id: 4,
            },
            {
                nota: 6,
                alumno_id: 7,
                materia_id: 5,
            },
            {
                nota: 1,
                alumno_id: 7,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 7,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 8,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 8,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 8,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 8,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 8,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 8,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 8,
                materia_id: 7,
            },
            {
                nota: 6,
                alumno_id: 9,
                materia_id: 1,
            },
            {
                nota: 7,
                alumno_id: 9,
                materia_id: 2,
            },
            {
                nota: 1,
                alumno_id: 9,
                materia_id: 3,
            },
            {
                nota: 4,
                alumno_id: 9,
                materia_id: 4,
            },
            {
                nota: 6,
                alumno_id: 9,
                materia_id: 5,
            },
            {
                nota: 1,
                alumno_id: 9,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 9,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 10,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 10,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 10,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 10,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 10,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 10,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 10,
                materia_id: 7,
            },
            {
                nota: 2,
                alumno_id: 11,
                materia_id: 1,
            },
            {
                nota: 7,
                alumno_id: 11,
                materia_id: 2,
            },
            {
                nota: 1,
                alumno_id: 11,
                materia_id: 3,
            },
            {
                nota: 6,
                alumno_id: 11,
                materia_id: 4,
            },
            {
                nota: 6,
                alumno_id: 11,
                materia_id: 5,
            },
            {
                nota: 4,
                alumno_id: 11,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 11,
                materia_id: 7,
            },
            {
                nota: 6,
                alumno_id: 12,
                materia_id: 1,
            },
            {
                nota: 6,
                alumno_id: 12,
                materia_id: 2,
            },
            {
                nota: 1,
                alumno_id: 12,
                materia_id: 3,
            },
            {
                nota: 6,
                alumno_id: 12,
                materia_id: 4,
            },
            {
                nota: 9,
                alumno_id: 12,
                materia_id: 5,
            },
            {
                nota: 6,
                alumno_id: 12,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 12,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 13,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 13,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 13,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 13,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 13,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 13,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 13,
                materia_id: 7,
            },
            {
                nota: 1,
                alumno_id: 14,
                materia_id: 1,
            },
            {
                nota: 1,
                alumno_id: 14,
                materia_id: 2,
            },
            {
                nota: 1,
                alumno_id: 14,
                materia_id: 3,
            },
            {
                nota: 6,
                alumno_id: 14,
                materia_id: 4,
            },
            {
                nota: 6,
                alumno_id: 14,
                materia_id: 5,
            },
            {
                nota: 1,
                alumno_id: 14,
                materia_id: 6,
            },
            {
                nota: 1,
                alumno_id: 14,
                materia_id: 7,
            },
            {
                nota: 3,
                alumno_id: 15,
                materia_id: 1,
            },
            {
                nota: 6,
                alumno_id: 15,
                materia_id: 2,
            },
            {
                nota: 1,
                alumno_id: 15,
                materia_id: 3,
            },
            {
                nota: 6,
                alumno_id: 15,
                materia_id: 4,
            },
            {
                nota: 6,
                alumno_id: 15,
                materia_id: 5,
            },
            {
                nota: 4,
                alumno_id: 15,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 15,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 16,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 16,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 16,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 16,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 16,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 16,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 16,
                materia_id: 7,
            },
            {
                nota: 1,
                alumno_id: 17,
                materia_id: 1,
            },
            {
                nota: 7,
                alumno_id: 17,
                materia_id: 2,
            },
            {
                nota: 6,
                alumno_id: 17,
                materia_id: 3,
            },
            {
                nota: 7.5,
                alumno_id: 17,
                materia_id: 4,
            },
            {
                nota: 7,
                alumno_id: 17,
                materia_id: 5,
            },
            {
                nota: 6,
                alumno_id: 17,
                materia_id: 6,
            },
            {
                nota: 1,
                alumno_id: 17,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 18,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 18,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 18,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 18,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 18,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 18,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 18,
                materia_id: 7,
            },
            {
                nota: 1,
                alumno_id: 19,
                materia_id: 1,
            },
            {
                nota: 1,
                alumno_id: 19,
                materia_id: 2,
            },
            {
                nota: 1,
                alumno_id: 19,
                materia_id: 3,
            },
            {
                nota: 1,
                alumno_id: 19,
                materia_id: 4,
            },
            {
                nota: 7,
                alumno_id: 19,
                materia_id: 5,
            },
            {
                nota: 1,
                alumno_id: 19,
                materia_id: 6,
            },
            {
                nota: 1,
                alumno_id: 19,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 20,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 20,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 20,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 20,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 20,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 20,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 20,
                materia_id: 7,
            },
            {
                nota: 1,
                alumno_id: 21,
                materia_id: 1,
            },
            {
                nota: 1,
                alumno_id: 21,
                materia_id: 2,
            },
            {
                nota: 1,
                alumno_id: 21,
                materia_id: 3,
            },
            {
                nota: 1,
                alumno_id: 21,
                materia_id: 4,
            },
            {
                nota: 7,
                alumno_id: 21,
                materia_id: 5,
            },
            {
                nota: 1,
                alumno_id: 21,
                materia_id: 6,
            },
            {
                nota: 1,
                alumno_id: 21,
                materia_id: 7,
            },
            {
                nota: 8,
                alumno_id: 22,
                materia_id: 1,
            },
            {
                nota: 8,
                alumno_id: 22,
                materia_id: 2,
            },
            {
                nota: 7,
                alumno_id: 22,
                materia_id: 3,
            },
            {
                nota: 8,
                alumno_id: 22,
                materia_id: 4,
            },
            {
                nota: 9,
                alumno_id: 22,
                materia_id: 5,
            },
            {
                nota: 7,
                alumno_id: 22,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 22,
                materia_id: 7,
            },
            {
                nota: 6,
                alumno_id: 23,
                materia_id: 1,
            },
            {
                nota: 7,
                alumno_id: 23,
                materia_id: 2,
            },
            {
                nota: 7,
                alumno_id: 23,
                materia_id: 3,
            },
            {
                nota: 6.5,
                alumno_id: 23,
                materia_id: 4,
            },
            {
                nota: 8,
                alumno_id: 23,
                materia_id: 5,
            },
            {
                nota: 8,
                alumno_id: 23,
                materia_id: 6,
            },
            {
                nota: 7,
                alumno_id: 23,
                materia_id: 7,
            },
            {
                nota: 6,
                alumno_id: 24,
                materia_id: 1,
            },
            {
                nota: 6,
                alumno_id: 24,
                materia_id: 2,
            },
            {
                nota: 6,
                alumno_id: 24,
                materia_id: 3,
            },
            {
                nota: 6.5,
                alumno_id: 24,
                materia_id: 4,
            },
            {
                nota: 8,
                alumno_id: 24,
                materia_id: 5,
            },
            {
                nota: 6,
                alumno_id: 24,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 24,
                materia_id: 7,
            },
            {
                nota: 6,
                alumno_id: 25,
                materia_id: 1,
            },
            {
                nota: 7,
                alumno_id: 25,
                materia_id: 2,
            },
            {
                nota: 5,
                alumno_id: 25,
                materia_id: 3,
            },
            {
                nota: 2,
                alumno_id: 25,
                materia_id: 4,
            },
            {
                nota: 7,
                alumno_id: 25,
                materia_id: 5,
            },
            {
                nota: 1,
                alumno_id: 25,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 25,
                materia_id: 7,
            },
            {
                nota: 5,
                alumno_id: 26,
                materia_id: 1,
            },
            {
                nota: 6,
                alumno_id: 26,
                materia_id: 2,
            },
            {
                nota: 6,
                alumno_id: 26,
                materia_id: 3,
            },
            {
                nota: 8,
                alumno_id: 26,
                materia_id: 4,
            },
            {
                nota: 10,
                alumno_id: 26,
                materia_id: 5,
            },
            {
                nota: 6,
                alumno_id: 26,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 26,
                materia_id: 7,
            },
            {
                nota: 1,
                alumno_id: 27,
                materia_id: 1,
            },
            {
                nota: 6,
                alumno_id: 27,
                materia_id: 2,
            },
            {
                nota: 1,
                alumno_id: 27,
                materia_id: 3,
            },
            {
                nota: 2,
                alumno_id: 27,
                materia_id: 4,
            },
            {
                nota: 6,
                alumno_id: 27,
                materia_id: 5,
            },
            {
                nota: 1,
                alumno_id: 27,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 27,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 28,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 28,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 28,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 28,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 28,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 28,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 28,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 29,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 29,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 29,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 29,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 29,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 29,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 29,
                materia_id: 7,
            },
            {
                nota: 6,
                alumno_id: 30,
                materia_id: 1,
            },
            {
                nota: 8,
                alumno_id: 30,
                materia_id: 2,
            },
            {
                nota: 1,
                alumno_id: 30,
                materia_id: 3,
            },
            {
                nota: 6,
                alumno_id: 30,
                materia_id: 4,
            },
            {
                nota: 10,
                alumno_id: 30,
                materia_id: 5,
            },
            {
                nota: 1,
                alumno_id: 30,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 30,
                materia_id: 7,
            },
            {
                nota: 1,
                alumno_id: 31,
                materia_id: 1,
            },
            {
                nota: 1,
                alumno_id: 31,
                materia_id: 2,
            },
            {
                nota: 1,
                alumno_id: 31,
                materia_id: 3,
            },
            {
                nota: 6,
                alumno_id: 31,
                materia_id: 4,
            },
            {
                nota: 6,
                alumno_id: 31,
                materia_id: 5,
            },
            {
                nota: 1,
                alumno_id: 31,
                materia_id: 6,
            },
            {
                nota: 1,
                alumno_id: 31,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 32,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 32,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 32,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 32,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 32,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 32,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 32,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 33,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 33,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 33,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 33,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 33,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 33,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 33,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 34,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 34,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 34,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 34,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 34,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 34,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 34,
                materia_id: 7,
            },
            {
                nota: 2,
                alumno_id: 35,
                materia_id: 1,
            },
            {
                nota: 6,
                alumno_id: 35,
                materia_id: 2,
            },
            {
                nota: 1,
                alumno_id: 35,
                materia_id: 3,
            },
            {
                nota: 6,
                alumno_id: 35,
                materia_id: 4,
            },
            {
                nota: 8,
                alumno_id: 35,
                materia_id: 5,
            },
            {
                nota: 6,
                alumno_id: 35,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 35,
                materia_id: 7,
            },
            {
                nota: 7,
                alumno_id: 36,
                materia_id: 1,
            },
            {
                nota: 7,
                alumno_id: 36,
                materia_id: 2,
            },
            {
                nota: 8.5,
                alumno_id: 36,
                materia_id: 3,
            },
            {
                nota: 7.5,
                alumno_id: 36,
                materia_id: 4,
            },
            {
                nota: 6,
                alumno_id: 36,
                materia_id: 5,
            },
            {
                nota: 6,
                alumno_id: 36,
                materia_id: 6,
            },
            {
                nota: 7,
                alumno_id: 36,
                materia_id: 7,
            },
            {
                nota: 7,
                alumno_id: 37,
                materia_id: 1,
            },
            {
                nota: 6,
                alumno_id: 37,
                materia_id: 2,
            },
            {
                nota: 6.5,
                alumno_id: 37,
                materia_id: 3,
            },
            {
                nota: 7,
                alumno_id: 37,
                materia_id: 4,
            },
            {
                nota: 7,
                alumno_id: 37,
                materia_id: 5,
            },
            {
                nota: 6,
                alumno_id: 37,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 37,
                materia_id: 7,
            },
            {
                nota: 1,
                alumno_id: 38,
                materia_id: 1,
            },
            {
                nota: 9,
                alumno_id: 38,
                materia_id: 2,
            },
            {
                nota: 6,
                alumno_id: 38,
                materia_id: 3,
            },
            {
                nota: 8,
                alumno_id: 38,
                materia_id: 4,
            },
            {
                nota: 6,
                alumno_id: 38,
                materia_id: 5,
            },
            {
                nota: 6,
                alumno_id: 38,
                materia_id: 6,
            },
            {
                nota: 9,
                alumno_id: 38,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 39,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 39,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 39,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 39,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 39,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 39,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 39,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 40,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 40,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 40,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 40,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 40,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 40,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 40,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 41,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 41,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 41,
                materia_id: 3,
            },
            {
                nota: 8.5,
                alumno_id: 41,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 41,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 41,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 41,
                materia_id: 7,
            },
            {
                nota: 2,
                alumno_id: 42,
                materia_id: 1,
            },
            {
                nota: 8,
                alumno_id: 42,
                materia_id: 2,
            },
            {
                nota: 6,
                alumno_id: 42,
                materia_id: 3,
            },
            {
                nota: 7.5,
                alumno_id: 42,
                materia_id: 4,
            },
            {
                nota: 6,
                alumno_id: 42,
                materia_id: 5,
            },
            {
                nota: 6.5,
                alumno_id: 42,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 42,
                materia_id: 7,
            },
            {
                nota: 6.5,
                alumno_id: 43,
                materia_id: 1,
            },
            {
                nota: 8,
                alumno_id: 43,
                materia_id: 2,
            },
            {
                nota: 7,
                alumno_id: 43,
                materia_id: 3,
            },
            {
                nota: 8,
                alumno_id: 43,
                materia_id: 4,
            },
            {
                nota: 6,
                alumno_id: 43,
                materia_id: 5,
            },
            {
                nota: 6.5,
                alumno_id: 43,
                materia_id: 6,
            },
            {
                nota: 7,
                alumno_id: 43,
                materia_id: 7,
            },
            {
                nota: 6,
                alumno_id: 44,
                materia_id: 1,
            },
            {
                nota: 6,
                alumno_id: 44,
                materia_id: 2,
            },
            {
                nota: 7,
                alumno_id: 44,
                materia_id: 3,
            },
            {
                nota: 7.5,
                alumno_id: 44,
                materia_id: 4,
            },
            {
                nota: 9,
                alumno_id: 44,
                materia_id: 5,
            },
            {
                nota: 6,
                alumno_id: 44,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 44,
                materia_id: 7,
            },
            {
                nota: 5,
                alumno_id: 45,
                materia_id: 1,
            },
            {
                nota: 9,
                alumno_id: 45,
                materia_id: 2,
            },
            {
                nota: 6,
                alumno_id: 45,
                materia_id: 3,
            },
            {
                nota: 6,
                alumno_id: 45,
                materia_id: 4,
            },
            {
                nota: 7,
                alumno_id: 45,
                materia_id: 5,
            },
            {
                nota: 6.5,
                alumno_id: 45,
                materia_id: 6,
            },
            {
                nota: 7,
                alumno_id: 45,
                materia_id: 7,
            },
            {
                nota: 4,
                alumno_id: 46,
                materia_id: 1,
            },
            {
                nota: 6,
                alumno_id: 46,
                materia_id: 2,
            },
            {
                nota: 6,
                alumno_id: 46,
                materia_id: 3,
            },
            {
                nota: 6,
                alumno_id: 46,
                materia_id: 4,
            },
            {
                nota: 6,
                alumno_id: 46,
                materia_id: 5,
            },
            {
                nota: 4,
                alumno_id: 46,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 46,
                materia_id: 7,
            },
            {
                nota: 4,
                alumno_id: 47,
                materia_id: 1,
            },
            {
                nota: 6,
                alumno_id: 47,
                materia_id: 2,
            },
            {
                nota: 6,
                alumno_id: 47,
                materia_id: 3,
            },
            {
                nota: 6,
                alumno_id: 47,
                materia_id: 4,
            },
            {
                nota: 6,
                alumno_id: 47,
                materia_id: 5,
            },
            {
                nota: 4,
                alumno_id: 47,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 47,
                materia_id: 7,
            },
            {
                nota: 4,
                alumno_id: 48,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 48,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 48,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 48,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 48,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 48,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 48,
                materia_id: 7,
            },
            {
                nota: 7,
                alumno_id: 49,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 49,
                materia_id: 2,
            },
            {
                nota: 6.5,
                alumno_id: 49,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 49,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 49,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 49,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 49,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 50,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 50,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 50,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 50,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 50,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 50,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 50,
                materia_id: 7,
            },
            {
                nota: 1,
                alumno_id: 51,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 51,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 51,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 51,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 51,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 51,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 51,
                materia_id: 7,
            },
            {
                nota: 4,
                alumno_id: 52,
                materia_id: 1,
            },
            {
                nota: 6,
                alumno_id: 52,
                materia_id: 2,
            },
            {
                nota: 2,
                alumno_id: 52,
                materia_id: 3,
            },
            {
                nota: 1,
                alumno_id: 52,
                materia_id: 4,
            },
            {
                nota: 6,
                alumno_id: 52,
                materia_id: 5,
            },
            {
                nota: 6,
                alumno_id: 52,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 52,
                materia_id: 7,
            },
            {
                nota: 4,
                alumno_id: 53,
                materia_id: 1,
            },
            {
                nota: 7,
                alumno_id: 53,
                materia_id: 2,
            },
            {
                nota: 2,
                alumno_id: 53,
                materia_id: 3,
            },
            {
                nota: 4,
                alumno_id: 53,
                materia_id: 4,
            },
            {
                nota: 6,
                alumno_id: 53,
                materia_id: 5,
            },
            {
                nota: 4,
                alumno_id: 53,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 53,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 54,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 54,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 54,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 54,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 54,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 54,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 54,
                materia_id: 7,
            },
            {
                nota: 1,
                alumno_id: 55,
                materia_id: 1,
            },
            {
                nota: 1,
                alumno_id: 55,
                materia_id: 2,
            },
            {
                nota: 2,
                alumno_id: 55,
                materia_id: 3,
            },
            {
                nota: 1,
                alumno_id: 55,
                materia_id: 4,
            },
            {
                nota: 6,
                alumno_id: 55,
                materia_id: 5,
            },
            {
                nota: 1,
                alumno_id: 55,
                materia_id: 6,
            },
            {
                nota: 1,
                alumno_id: 55,
                materia_id: 7,
            },
            {
                nota: 1,
                alumno_id: 56,
                materia_id: 1,
            },
            {
                nota: 1,
                alumno_id: 56,
                materia_id: 2,
            },
            {
                nota: 1,
                alumno_id: 56,
                materia_id: 3,
            },
            {
                nota: 1,
                alumno_id: 56,
                materia_id: 4,
            },
            {
                nota: 6,
                alumno_id: 56,
                materia_id: 5,
            },
            {
                nota: 1,
                alumno_id: 56,
                materia_id: 6,
            },
            {
                nota: 1,
                alumno_id: 56,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 57,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 57,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 57,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 57,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 57,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 57,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 57,
                materia_id: 7,
            },
            {
                nota: 1,
                alumno_id: 58,
                materia_id: 1,
            },
            {
                nota: 1,
                alumno_id: 58,
                materia_id: 2,
            },
            {
                nota: 4,
                alumno_id: 58,
                materia_id: 3,
            },
            {
                nota: 1,
                alumno_id: 58,
                materia_id: 4,
            },
            {
                nota: 7,
                alumno_id: 58,
                materia_id: 5,
            },
            {
                nota: 1,
                alumno_id: 58,
                materia_id: 6,
            },
            {
                nota: 1,
                alumno_id: 58,
                materia_id: 7,
            },
            {
                nota: 1,
                alumno_id: 59,
                materia_id: 1,
            },
            {
                nota: 1,
                alumno_id: 59,
                materia_id: 2,
            },
            {
                nota: 1,
                alumno_id: 59,
                materia_id: 3,
            },
            {
                nota: 1,
                alumno_id: 59,
                materia_id: 4,
            },
            {
                nota: 7,
                alumno_id: 59,
                materia_id: 5,
            },
            {
                nota: 1,
                alumno_id: 59,
                materia_id: 6,
            },
            {
                nota: 1,
                alumno_id: 59,
                materia_id: 7,
            },
            {
                nota: 7,
                alumno_id: 60,
                materia_id: 1,
            },
            {
                nota: 7,
                alumno_id: 60,
                materia_id: 2,
            },
            {
                nota: 2,
                alumno_id: 60,
                materia_id: 3,
            },
            {
                nota: 4,
                alumno_id: 60,
                materia_id: 4,
            },
            {
                nota: 6,
                alumno_id: 60,
                materia_id: 5,
            },
            {
                nota: 4,
                alumno_id: 60,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 60,
                materia_id: 7,
            },
            {
                nota: 6,
                alumno_id: 61,
                materia_id: 1,
            },
            {
                nota: 6,
                alumno_id: 61,
                materia_id: 2,
            },
            {
                nota: 6,
                alumno_id: 61,
                materia_id: 3,
            },
            {
                nota: 6.5,
                alumno_id: 61,
                materia_id: 4,
            },
            {
                nota: 6,
                alumno_id: 61,
                materia_id: 5,
            },
            {
                nota: 6,
                alumno_id: 61,
                materia_id: 6,
            },
            {
                nota: 7,
                alumno_id: 61,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 62,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 62,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 62,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 62,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 62,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 62,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 62,
                materia_id: 7,
            },
            {
                nota: 2,
                alumno_id: 63,
                materia_id: 1,
            },
            {
                nota: 4,
                alumno_id: 63,
                materia_id: 2,
            },
            {
                nota: 4,
                alumno_id: 63,
                materia_id: 3,
            },
            {
                nota: 1,
                alumno_id: 63,
                materia_id: 4,
            },
            {
                nota: 6,
                alumno_id: 63,
                materia_id: 5,
            },
            {
                nota: 1,
                alumno_id: 63,
                materia_id: 6,
            },
            {
                nota: 1,
                alumno_id: 63,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 64,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 64,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 64,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 64,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 64,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 64,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 64,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 65,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 65,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 65,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 65,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 65,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 65,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 65,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 66,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 66,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 66,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 66,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 66,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 66,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 66,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 67,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 67,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 67,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 67,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 67,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 67,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 67,
                materia_id: 7,
            },
            {
                nota: 6,
                alumno_id: 68,
                materia_id: 1,
            },
            {
                nota: 6,
                alumno_id: 68,
                materia_id: 2,
            },
            {
                nota: 8.5,
                alumno_id: 68,
                materia_id: 3,
            },
            {
                nota: 1,
                alumno_id: 68,
                materia_id: 4,
            },
            {
                nota: 10,
                alumno_id: 68,
                materia_id: 5,
            },
            {
                nota: 6,
                alumno_id: 68,
                materia_id: 6,
            },
            {
                nota: 1,
                alumno_id: 68,
                materia_id: 7,
            },
            {
                nota: 7,
                alumno_id: 69,
                materia_id: 1,
            },
            {
                nota: 7,
                alumno_id: 69,
                materia_id: 2,
            },
            {
                nota: 4,
                alumno_id: 69,
                materia_id: 3,
            },
            {
                nota: 1,
                alumno_id: 69,
                materia_id: 4,
            },
            {
                nota: 6,
                alumno_id: 69,
                materia_id: 5,
            },
            {
                nota: 6.5,
                alumno_id: 69,
                materia_id: 6,
            },
            {
                nota: 1,
                alumno_id: 69,
                materia_id: 7,
            },
            {
                nota: 1,
                alumno_id: 70,
                materia_id: 1,
            },
            {
                nota: 1,
                alumno_id: 70,
                materia_id: 2,
            },
            {
                nota: 1,
                alumno_id: 70,
                materia_id: 3,
            },
            {
                nota: 1,
                alumno_id: 70,
                materia_id: 4,
            },
            {
                nota: 6,
                alumno_id: 70,
                materia_id: 5,
            },
            {
                nota: 1,
                alumno_id: 70,
                materia_id: 6,
            },
            {
                nota: 1,
                alumno_id: 70,
                materia_id: 7,
            },
            {
                nota: 2,
                alumno_id: 71,
                materia_id: 1,
            },
            {
                nota: 6,
                alumno_id: 71,
                materia_id: 2,
            },
            {
                nota: 1,
                alumno_id: 71,
                materia_id: 3,
            },
            {
                nota: 4,
                alumno_id: 71,
                materia_id: 4,
            },
            {
                nota: 6,
                alumno_id: 71,
                materia_id: 5,
            },
            {
                nota: 4,
                alumno_id: 71,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 71,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 72,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 72,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 72,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 72,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 72,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 72,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 72,
                materia_id: 7,
            },
            {
                nota: 1,
                alumno_id: 73,
                materia_id: 1,
            },
            {
                nota: 7,
                alumno_id: 73,
                materia_id: 2,
            },
            {
                nota: 1,
                alumno_id: 73,
                materia_id: 3,
            },
            {
                nota: 1,
                alumno_id: 73,
                materia_id: 4,
            },
            {
                nota: 6,
                alumno_id: 73,
                materia_id: 5,
            },
            {
                nota: 1,
                alumno_id: 73,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 73,
                materia_id: 7,
            },
            {
                nota: 7,
                alumno_id: 74,
                materia_id: 1,
            },
            {
                nota: 8,
                alumno_id: 74,
                materia_id: 2,
            },
            {
                nota: 9,
                alumno_id: 74,
                materia_id: 3,
            },
            {
                nota: 7.5,
                alumno_id: 74,
                materia_id: 4,
            },
            {
                nota: 10,
                alumno_id: 74,
                materia_id: 5,
            },
            {
                nota: 10,
                alumno_id: 74,
                materia_id: 6,
            },
            {
                nota: 7,
                alumno_id: 74,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 75,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 75,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 75,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 75,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 75,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 75,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 75,
                materia_id: 7,
            },
            {
                nota: 3,
                alumno_id: 76,
                materia_id: 1,
            },
            {
                nota: 1,
                alumno_id: 76,
                materia_id: 2,
            },
            {
                nota: 2,
                alumno_id: 76,
                materia_id: 3,
            },
            {
                nota: 1,
                alumno_id: 76,
                materia_id: 4,
            },
            {
                nota: 6,
                alumno_id: 76,
                materia_id: 5,
            },
            {
                nota: 6.5,
                alumno_id: 76,
                materia_id: 6,
            },
            {
                nota: 1,
                alumno_id: 76,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 77,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 77,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 77,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 77,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 77,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 77,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 77,
                materia_id: 7,
            },
            {
                nota: 1,
                alumno_id: 78,
                materia_id: 1,
            },
            {
                nota: 1,
                alumno_id: 78,
                materia_id: 2,
            },
            {
                nota: 1,
                alumno_id: 78,
                materia_id: 3,
            },
            {
                nota: 1,
                alumno_id: 78,
                materia_id: 4,
            },
            {
                nota: 6,
                alumno_id: 78,
                materia_id: 5,
            },
            {
                nota: 1,
                alumno_id: 78,
                materia_id: 6,
            },
            {
                nota: 1,
                alumno_id: 78,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 79,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 79,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 79,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 79,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 79,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 79,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 79,
                materia_id: 7,
            },
            {
                nota: 4,
                alumno_id: 80,
                materia_id: 1,
            },
            {
                nota: 8,
                alumno_id: 80,
                materia_id: 2,
            },
            {
                nota: 8,
                alumno_id: 80,
                materia_id: 3,
            },
            {
                nota: 7,
                alumno_id: 80,
                materia_id: 4,
            },
            {
                nota: 6,
                alumno_id: 80,
                materia_id: 5,
            },
            {
                nota: 6.5,
                alumno_id: 80,
                materia_id: 6,
            },
            {
                nota: 7,
                alumno_id: 80,
                materia_id: 7,
            },
            {
                nota: 1,
                alumno_id: 81,
                materia_id: 1,
            },
            {
                nota: 6,
                alumno_id: 81,
                materia_id: 2,
            },
            {
                nota: 1,
                alumno_id: 81,
                materia_id: 3,
            },
            {
                nota: 6,
                alumno_id: 81,
                materia_id: 4,
            },
            {
                nota: 6,
                alumno_id: 81,
                materia_id: 5,
            },
            {
                nota: 6,
                alumno_id: 81,
                materia_id: 6,
            },
            {
                nota: 7,
                alumno_id: 81,
                materia_id: 7,
            },
            {
                nota: 1,
                alumno_id: 82,
                materia_id: 1,
            },
            {
                nota: 1,
                alumno_id: 82,
                materia_id: 2,
            },
            {
                nota: 1,
                alumno_id: 82,
                materia_id: 3,
            },
            {
                nota: 1,
                alumno_id: 82,
                materia_id: 4,
            },
            {
                nota: 6,
                alumno_id: 82,
                materia_id: 5,
            },
            {
                nota: 1,
                alumno_id: 82,
                materia_id: 6,
            },
            {
                nota: 1,
                alumno_id: 82,
                materia_id: 7,
            },
            {
                nota: 6,
                alumno_id: 83,
                materia_id: 1,
            },
            {
                nota: 8,
                alumno_id: 83,
                materia_id: 2,
            },
            {
                nota: 6,
                alumno_id: 83,
                materia_id: 3,
            },
            {
                nota: 9,
                alumno_id: 83,
                materia_id: 4,
            },
            {
                nota: 6,
                alumno_id: 83,
                materia_id: 5,
            },
            {
                nota: 4,
                alumno_id: 83,
                materia_id: 6,
            },
            {
                nota: 7,
                alumno_id: 83,
                materia_id: 7,
            },
            {
                nota: 1,
                alumno_id: 84,
                materia_id: 1,
            },
            {
                nota: 1,
                alumno_id: 84,
                materia_id: 2,
            },
            {
                nota: 1,
                alumno_id: 84,
                materia_id: 3,
            },
            {
                nota: 1,
                alumno_id: 84,
                materia_id: 4,
            },
            {
                nota: 6,
                alumno_id: 84,
                materia_id: 5,
            },
            {
                nota: 1,
                alumno_id: 84,
                materia_id: 6,
            },
            {
                nota: 1,
                alumno_id: 84,
                materia_id: 7,
            },
            {
                nota: 1,
                alumno_id: 85,
                materia_id: 1,
            },
            {
                nota: 7,
                alumno_id: 85,
                materia_id: 2,
            },
            {
                nota: 7.5,
                alumno_id: 85,
                materia_id: 3,
            },
            {
                nota: 1,
                alumno_id: 85,
                materia_id: 4,
            },
            {
                nota: 6,
                alumno_id: 85,
                materia_id: 5,
            },
            {
                nota: 6.5,
                alumno_id: 85,
                materia_id: 6,
            },
            {
                nota: 8,
                alumno_id: 85,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 86,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 86,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 86,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 86,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 86,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 86,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 86,
                materia_id: 7,
            },
            {
                nota: 7,
                alumno_id: 87,
                materia_id: 1,
            },
            {
                nota: 8,
                alumno_id: 87,
                materia_id: 2,
            },
            {
                nota: 7.5,
                alumno_id: 87,
                materia_id: 3,
            },
            {
                nota: 7,
                alumno_id: 87,
                materia_id: 4,
            },
            {
                nota: 6,
                alumno_id: 87,
                materia_id: 5,
            },
            {
                nota: 5,
                alumno_id: 87,
                materia_id: 6,
            },
            {
                nota: 7,
                alumno_id: 87,
                materia_id: 7,
            },
            {
                nota: 6,
                alumno_id: 88,
                materia_id: 1,
            },
            {
                nota: 6,
                alumno_id: 88,
                materia_id: 2,
            },
            {
                nota: 8,
                alumno_id: 88,
                materia_id: 3,
            },
            {
                nota: 1,
                alumno_id: 88,
                materia_id: 4,
            },
            {
                nota: 7,
                alumno_id: 88,
                materia_id: 5,
            },
            {
                nota: 6,
                alumno_id: 88,
                materia_id: 6,
            },
            {
                nota: 7,
                alumno_id: 88,
                materia_id: 7,
            },
            {
                nota: 4,
                alumno_id: 89,
                materia_id: 1,
            },
            {
                nota: 6,
                alumno_id: 89,
                materia_id: 2,
            },
            {
                nota: 4,
                alumno_id: 89,
                materia_id: 3,
            },
            {
                nota: 6,
                alumno_id: 89,
                materia_id: 4,
            },
            {
                nota: 6,
                alumno_id: 89,
                materia_id: 5,
            },
            {
                nota: 6,
                alumno_id: 89,
                materia_id: 6,
            },
            {
                nota: 7,
                alumno_id: 89,
                materia_id: 7,
            },
            {
                nota: 4,
                alumno_id: 90,
                materia_id: 1,
            },
            {
                nota: 6,
                alumno_id: 90,
                materia_id: 2,
            },
            {
                nota: 4,
                alumno_id: 90,
                materia_id: 3,
            },
            {
                nota: 1,
                alumno_id: 90,
                materia_id: 4,
            },
            {
                nota: 7,
                alumno_id: 90,
                materia_id: 5,
            },
            {
                nota: 6,
                alumno_id: 90,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 90,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 91,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 91,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 91,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 91,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 91,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 91,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 91,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 92,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 92,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 92,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 92,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 92,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 92,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 92,
                materia_id: 7,
            },
            {
                nota: 1,
                alumno_id: 93,
                materia_id: 1,
            },
            {
                nota: 6,
                alumno_id: 93,
                materia_id: 2,
            },
            {
                nota: 1,
                alumno_id: 93,
                materia_id: 3,
            },
            {
                nota: 6,
                alumno_id: 93,
                materia_id: 4,
            },
            {
                nota: 6,
                alumno_id: 93,
                materia_id: 5,
            },
            {
                nota: 6,
                alumno_id: 93,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 93,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 94,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 94,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 94,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 94,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 94,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 94,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 94,
                materia_id: 7,
            },
            {
                nota: 7.5,
                alumno_id: 95,
                materia_id: 1,
            },
            {
                nota: 9.5,
                alumno_id: 95,
                materia_id: 2,
            },
            {
                nota: 7.5,
                alumno_id: 95,
                materia_id: 3,
            },
            {
                nota: 9,
                alumno_id: 95,
                materia_id: 4,
            },
            {
                nota: 10,
                alumno_id: 95,
                materia_id: 5,
            },
            {
                nota: 6.5,
                alumno_id: 95,
                materia_id: 6,
            },
            {
                nota: 7,
                alumno_id: 95,
                materia_id: 7,
            },
            {
                nota: 7.5,
                alumno_id: 96,
                materia_id: 1,
            },
            {
                nota: 9,
                alumno_id: 96,
                materia_id: 2,
            },
            {
                nota: 8.5,
                alumno_id: 96,
                materia_id: 3,
            },
            {
                nota: 9,
                alumno_id: 96,
                materia_id: 4,
            },
            {
                nota: 10,
                alumno_id: 96,
                materia_id: 5,
            },
            {
                nota: 8.5,
                alumno_id: 96,
                materia_id: 6,
            },
            {
                nota: 7,
                alumno_id: 96,
                materia_id: 7,
            },
            {
                nota: 1,
                alumno_id: 97,
                materia_id: 1,
            },
            {
                nota: 6,
                alumno_id: 97,
                materia_id: 2,
            },
            {
                nota: 1,
                alumno_id: 97,
                materia_id: 3,
            },
            {
                nota: 1,
                alumno_id: 97,
                materia_id: 4,
            },
            {
                nota: 6,
                alumno_id: 97,
                materia_id: 5,
            },
            {
                nota: 1,
                alumno_id: 97,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 97,
                materia_id: 7,
            },
            {
                nota: 6,
                alumno_id: 98,
                materia_id: 1,
            },
            {
                nota: 7,
                alumno_id: 98,
                materia_id: 2,
            },
            {
                nota: 6.5,
                alumno_id: 98,
                materia_id: 3,
            },
            {
                nota: 6,
                alumno_id: 98,
                materia_id: 4,
            },
            {
                nota: 6,
                alumno_id: 98,
                materia_id: 5,
            },
            {
                nota: 6,
                alumno_id: 98,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 98,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 99,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 99,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 99,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 99,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 99,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 99,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 99,
                materia_id: 7,
            },
            {
                nota: 1,
                alumno_id: 100,
                materia_id: 1,
            },
            {
                nota: 6,
                alumno_id: 100,
                materia_id: 2,
            },
            {
                nota: 1,
                alumno_id: 100,
                materia_id: 3,
            },
            {
                nota: 1,
                alumno_id: 100,
                materia_id: 4,
            },
            {
                nota: 6,
                alumno_id: 100,
                materia_id: 5,
            },
            {
                nota: 1,
                alumno_id: 100,
                materia_id: 6,
            },
            {
                nota: 1,
                alumno_id: 100,
                materia_id: 7,
            },
            {
                nota: 6,
                alumno_id: 101,
                materia_id: 1,
            },
            {
                nota: 7,
                alumno_id: 101,
                materia_id: 2,
            },
            {
                nota: 1,
                alumno_id: 101,
                materia_id: 3,
            },
            {
                nota: 6,
                alumno_id: 101,
                materia_id: 4,
            },
            {
                nota: 9.5,
                alumno_id: 101,
                materia_id: 5,
            },
            {
                nota: 6,
                alumno_id: 101,
                materia_id: 6,
            },
            {
                nota: 7,
                alumno_id: 101,
                materia_id: 7,
            },
            {
                nota: 1,
                alumno_id: 102,
                materia_id: 1,
            },
            {
                nota: 6,
                alumno_id: 102,
                materia_id: 2,
            },
            {
                nota: 1,
                alumno_id: 102,
                materia_id: 3,
            },
            {
                nota: 1,
                alumno_id: 102,
                materia_id: 4,
            },
            {
                nota: 6,
                alumno_id: 102,
                materia_id: 5,
            },
            {
                nota: 1,
                alumno_id: 102,
                materia_id: 6,
            },
            {
                nota: 1,
                alumno_id: 102,
                materia_id: 7,
            },
            {
                nota: 7.5,
                alumno_id: 103,
                materia_id: 1,
            },
            {
                nota: 7.5,
                alumno_id: 103,
                materia_id: 2,
            },
            {
                nota: 6,
                alumno_id: 103,
                materia_id: 3,
            },
            {
                nota: 7,
                alumno_id: 103,
                materia_id: 4,
            },
            {
                nota: 8,
                alumno_id: 103,
                materia_id: 5,
            },
            {
                nota: 8,
                alumno_id: 103,
                materia_id: 6,
            },
            {
                nota: 7,
                alumno_id: 103,
                materia_id: 7,
            },
            {
                nota: 1,
                alumno_id: 104,
                materia_id: 1,
            },
            {
                nota: 7,
                alumno_id: 104,
                materia_id: 2,
            },
            {
                nota: 1,
                alumno_id: 104,
                materia_id: 3,
            },
            {
                nota: 5,
                alumno_id: 104,
                materia_id: 4,
            },
            {
                nota: 6,
                alumno_id: 104,
                materia_id: 5,
            },
            {
                nota: 6,
                alumno_id: 104,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 104,
                materia_id: 7,
            },
            {
                nota: 6,
                alumno_id: 105,
                materia_id: 1,
            },
            {
                nota: 8.5,
                alumno_id: 105,
                materia_id: 2,
            },
            {
                nota: 6,
                alumno_id: 105,
                materia_id: 3,
            },
            {
                nota: 7,
                alumno_id: 105,
                materia_id: 4,
            },
            {
                nota: 7,
                alumno_id: 105,
                materia_id: 5,
            },
            {
                nota: 6.5,
                alumno_id: 105,
                materia_id: 6,
            },
            {
                nota: 7,
                alumno_id: 105,
                materia_id: 7,
            },
            {
                nota: 1,
                alumno_id: 106,
                materia_id: 1,
            },
            {
                nota: 6,
                alumno_id: 106,
                materia_id: 2,
            },
            {
                nota: 6.5,
                alumno_id: 106,
                materia_id: 3,
            },
            {
                nota: 4,
                alumno_id: 106,
                materia_id: 4,
            },
            {
                nota: 6,
                alumno_id: 106,
                materia_id: 5,
            },
            {
                nota: 6,
                alumno_id: 106,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 106,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 107,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 107,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 107,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 107,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 107,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 107,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 107,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 108,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 108,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 108,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 108,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 108,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 108,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 108,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 109,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 109,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 109,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 109,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 109,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 109,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 109,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 110,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 110,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 110,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 110,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 110,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 110,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 110,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 111,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 111,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 111,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 111,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 111,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 111,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 111,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 112,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 112,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 112,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 112,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 112,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 112,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 112,
                materia_id: 7,
            },
            {
                nota: 7.5,
                alumno_id: 113,
                materia_id: 1,
            },
            {
                nota: 6,
                alumno_id: 113,
                materia_id: 2,
            },
            {
                nota: 8.5,
                alumno_id: 113,
                materia_id: 3,
            },
            {
                nota: 6,
                alumno_id: 113,
                materia_id: 4,
            },
            {
                nota: 6,
                alumno_id: 113,
                materia_id: 5,
            },
            {
                nota: 6,
                alumno_id: 113,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 113,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 114,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 114,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 114,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 114,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 114,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 114,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 114,
                materia_id: 7,
            },
            {
                nota: 6,
                alumno_id: 115,
                materia_id: 1,
            },
            {
                nota: 7,
                alumno_id: 115,
                materia_id: 2,
            },
            {
                nota: 6,
                alumno_id: 115,
                materia_id: 3,
            },
            {
                nota: 6,
                alumno_id: 115,
                materia_id: 4,
            },
            {
                nota: 7,
                alumno_id: 115,
                materia_id: 5,
            },
            {
                nota: 6.5,
                alumno_id: 115,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 115,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 116,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 116,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 116,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 116,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 116,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 116,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 116,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 117,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 117,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 117,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 117,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 117,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 117,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 117,
                materia_id: 7,
            },
            {
                nota: 6,
                alumno_id: 118,
                materia_id: 1,
            },
            {
                nota: 6,
                alumno_id: 118,
                materia_id: 2,
            },
            {
                nota: 7,
                alumno_id: 118,
                materia_id: 3,
            },
            {
                nota: 6,
                alumno_id: 118,
                materia_id: 4,
            },
            {
                nota: 6,
                alumno_id: 118,
                materia_id: 5,
            },
            {
                nota: 1,
                alumno_id: 118,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 118,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 119,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 119,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 119,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 119,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 119,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 119,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 119,
                materia_id: 7,
            },
            {
                nota: 8.5,
                alumno_id: 120,
                materia_id: 1,
            },
            {
                nota: 8,
                alumno_id: 120,
                materia_id: 2,
            },
            {
                nota: 6.5,
                alumno_id: 120,
                materia_id: 3,
            },
            {
                nota: 8.5,
                alumno_id: 120,
                materia_id: 4,
            },
            {
                nota: 9,
                alumno_id: 120,
                materia_id: 5,
            },
            {
                nota: 6.5,
                alumno_id: 120,
                materia_id: 6,
            },
            {
                nota: 7,
                alumno_id: 120,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 121,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 121,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 121,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 121,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 121,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 121,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 121,
                materia_id: 7,
            },
            {
                nota: 6,
                alumno_id: 122,
                materia_id: 1,
            },
            {
                nota: 6,
                alumno_id: 122,
                materia_id: 2,
            },
            {
                nota: 1,
                alumno_id: 122,
                materia_id: 3,
            },
            {
                nota: 5,
                alumno_id: 122,
                materia_id: 4,
            },
            {
                nota: 6,
                alumno_id: 122,
                materia_id: 5,
            },
            {
                nota: 5,
                alumno_id: 122,
                materia_id: 6,
            },
            {
                nota: 1,
                alumno_id: 122,
                materia_id: 7,
            },
            {
                nota: 8,
                alumno_id: 123,
                materia_id: 1,
            },
            {
                nota: 7,
                alumno_id: 123,
                materia_id: 2,
            },
            {
                nota: 6,
                alumno_id: 123,
                materia_id: 3,
            },
            {
                nota: 9.5,
                alumno_id: 123,
                materia_id: 4,
            },
            {
                nota: 9,
                alumno_id: 123,
                materia_id: 5,
            },
            {
                nota: 6,
                alumno_id: 123,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 123,
                materia_id: 7,
            },
            {
                nota: 1,
                alumno_id: 124,
                materia_id: 1,
            },
            {
                nota: 6,
                alumno_id: 124,
                materia_id: 2,
            },
            {
                nota: 1,
                alumno_id: 124,
                materia_id: 3,
            },
            {
                nota: 1,
                alumno_id: 124,
                materia_id: 4,
            },
            {
                nota: 6,
                alumno_id: 124,
                materia_id: 5,
            },
            {
                nota: 1,
                alumno_id: 124,
                materia_id: 6,
            },
            {
                nota: 1,
                alumno_id: 124,
                materia_id: 7,
            },
            {
                nota: 6,
                alumno_id: 125,
                materia_id: 1,
            },
            {
                nota: 7,
                alumno_id: 125,
                materia_id: 2,
            },
            {
                nota: 6,
                alumno_id: 125,
                materia_id: 3,
            },
            {
                nota: 7,
                alumno_id: 125,
                materia_id: 4,
            },
            {
                nota: 7.5,
                alumno_id: 125,
                materia_id: 5,
            },
            {
                nota: 6,
                alumno_id: 125,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 125,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 126,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 126,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 126,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 126,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 126,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 126,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 126,
                materia_id: 7,
            },
            {
                nota: 6,
                alumno_id: 127,
                materia_id: 1,
            },
            {
                nota: 7,
                alumno_id: 127,
                materia_id: 2,
            },
            {
                nota: 1,
                alumno_id: 127,
                materia_id: 3,
            },
            {
                nota: 6,
                alumno_id: 127,
                materia_id: 4,
            },
            {
                nota: 7,
                alumno_id: 127,
                materia_id: 5,
            },
            {
                nota: 6,
                alumno_id: 127,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 127,
                materia_id: 7,
            },
            {
                nota: 6,
                alumno_id: 128,
                materia_id: 1,
            },
            {
                nota: 6,
                alumno_id: 128,
                materia_id: 2,
            },
            {
                nota: 1,
                alumno_id: 128,
                materia_id: 3,
            },
            {
                nota: 6.5,
                alumno_id: 128,
                materia_id: 4,
            },
            {
                nota: 7.5,
                alumno_id: 128,
                materia_id: 5,
            },
            {
                nota: 1,
                alumno_id: 128,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 128,
                materia_id: 7,
            },
            {
                nota: 7.5,
                alumno_id: 129,
                materia_id: 1,
            },
            {
                nota: 7,
                alumno_id: 129,
                materia_id: 2,
            },
            {
                nota: 6,
                alumno_id: 129,
                materia_id: 3,
            },
            {
                nota: 9,
                alumno_id: 129,
                materia_id: 4,
            },
            {
                nota: 7.5,
                alumno_id: 129,
                materia_id: 5,
            },
            {
                nota: 6,
                alumno_id: 129,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 129,
                materia_id: 7,
            },
            {
                nota: 6,
                alumno_id: 130,
                materia_id: 1,
            },
            {
                nota: 6,
                alumno_id: 130,
                materia_id: 2,
            },
            {
                nota: 4,
                alumno_id: 130,
                materia_id: 3,
            },
            {
                nota: 6,
                alumno_id: 130,
                materia_id: 4,
            },
            {
                nota: 6,
                alumno_id: 130,
                materia_id: 5,
            },
            {
                nota: 6,
                alumno_id: 130,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 130,
                materia_id: 7,
            },
            {
                nota: 6,
                alumno_id: 131,
                materia_id: 1,
            },
            {
                nota: 7,
                alumno_id: 131,
                materia_id: 2,
            },
            {
                nota: 6,
                alumno_id: 131,
                materia_id: 3,
            },
            {
                nota: 7.5,
                alumno_id: 131,
                materia_id: 4,
            },
            {
                nota: 6,
                alumno_id: 131,
                materia_id: 5,
            },
            {
                nota: 6,
                alumno_id: 131,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 131,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 132,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 132,
                materia_id: 2,
            },
            {
                nota: 6,
                alumno_id: 132,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 132,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 132,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 132,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 132,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 133,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 133,
                materia_id: 2,
            },
            {
                nota: 4,
                alumno_id: 133,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 133,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 133,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 133,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 133,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 134,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 134,
                materia_id: 2,
            },
            {
                nota: 7,
                alumno_id: 134,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 134,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 134,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 134,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 134,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 135,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 135,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 135,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 135,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 135,
                materia_id: 5,
            },
            {
                nota: 1,
                alumno_id: 135,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 135,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 136,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 136,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 136,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 136,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 136,
                materia_id: 5,
            },
            {
                nota: 1,
                alumno_id: 136,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 136,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 137,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 137,
                materia_id: 2,
            },
            {
                nota: 1,
                alumno_id: 137,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 137,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 137,
                materia_id: 5,
            },
            {
                nota: 1,
                alumno_id: 137,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 137,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 138,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 138,
                materia_id: 2,
            },
            {
                nota: 1,
                alumno_id: 138,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 138,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 138,
                materia_id: 5,
            },
            {
                nota: 4,
                alumno_id: 138,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 138,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 139,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 139,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 139,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 139,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 139,
                materia_id: 5,
            },
            {
                nota: 4,
                alumno_id: 139,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 139,
                materia_id: 7,
            },
            {
                nota: 1,
                alumno_id: 140,
                materia_id: 1,
            },
            {
                nota: 1,
                alumno_id: 140,
                materia_id: 2,
            },
            {
                nota: 1,
                alumno_id: 140,
                materia_id: 3,
            },
            {
                nota: 6,
                alumno_id: 140,
                materia_id: 4,
            },
            {
                nota: 1,
                alumno_id: 140,
                materia_id: 5,
            },
            {
                nota: 1,
                alumno_id: 140,
                materia_id: 6,
            },
            {
                nota: 1,
                alumno_id: 140,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 141,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 141,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 141,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 141,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 141,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 141,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 141,
                materia_id: 7,
            },
            {
                nota: 7,
                alumno_id: 142,
                materia_id: 1,
            },
            {
                nota: 8,
                alumno_id: 142,
                materia_id: 2,
            },
            {
                nota: 5,
                alumno_id: 142,
                materia_id: 3,
            },
            {
                nota: 8,
                alumno_id: 142,
                materia_id: 4,
            },
            {
                nota: 6,
                alumno_id: 142,
                materia_id: 5,
            },
            {
                nota: 1,
                alumno_id: 142,
                materia_id: 6,
            },
            {
                nota: 7,
                alumno_id: 142,
                materia_id: 7,
            },
            {
                nota: 6.5,
                alumno_id: 143,
                materia_id: 1,
            },
            {
                nota: 7,
                alumno_id: 143,
                materia_id: 2,
            },
            {
                nota: 5,
                alumno_id: 143,
                materia_id: 3,
            },
            {
                nota: 7.5,
                alumno_id: 143,
                materia_id: 4,
            },
            {
                nota: 6,
                alumno_id: 143,
                materia_id: 5,
            },
            {
                nota: 6.5,
                alumno_id: 143,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 143,
                materia_id: 7,
            },
            {
                nota: 6.5,
                alumno_id: 144,
                materia_id: 1,
            },
            {
                nota: 1,
                alumno_id: 144,
                materia_id: 2,
            },
            {
                nota: 6,
                alumno_id: 144,
                materia_id: 3,
            },
            {
                nota: 1,
                alumno_id: 144,
                materia_id: 4,
            },
            {
                nota: 1,
                alumno_id: 144,
                materia_id: 5,
            },
            {
                nota: 6,
                alumno_id: 144,
                materia_id: 6,
            },
            {
                nota: 1,
                alumno_id: 144,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 145,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 145,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 145,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 145,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 145,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 145,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 145,
                materia_id: 7,
            },
            {
                nota: 6.5,
                alumno_id: 146,
                materia_id: 1,
            },
            {
                nota: 1,
                alumno_id: 146,
                materia_id: 2,
            },
            {
                nota: 1,
                alumno_id: 146,
                materia_id: 3,
            },
            {
                nota: 6,
                alumno_id: 146,
                materia_id: 4,
            },
            {
                nota: 1,
                alumno_id: 146,
                materia_id: 5,
            },
            {
                nota: 6,
                alumno_id: 146,
                materia_id: 6,
            },
            {
                nota: 1,
                alumno_id: 146,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 147,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 147,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 147,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 147,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 147,
                materia_id: 5,
            },
            {
                nota: 1,
                alumno_id: 147,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 147,
                materia_id: 7,
            },
            {
                nota: 6.5,
                alumno_id: 148,
                materia_id: 1,
            },
            {
                nota: 6,
                alumno_id: 148,
                materia_id: 2,
            },
            {
                nota: 4,
                alumno_id: 148,
                materia_id: 3,
            },
            {
                nota: 7,
                alumno_id: 148,
                materia_id: 4,
            },
            {
                nota: 4,
                alumno_id: 148,
                materia_id: 5,
            },
            {
                nota: 4,
                alumno_id: 148,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 148,
                materia_id: 7,
            },
            {
                nota: 7,
                alumno_id: 149,
                materia_id: 1,
            },
            {
                nota: 1,
                alumno_id: 149,
                materia_id: 2,
            },
            {
                nota: 1,
                alumno_id: 149,
                materia_id: 3,
            },
            {
                nota: 4,
                alumno_id: 149,
                materia_id: 4,
            },
            {
                nota: 1,
                alumno_id: 149,
                materia_id: 5,
            },
            {
                nota: 6,
                alumno_id: 149,
                materia_id: 6,
            },
            {
                nota: 1,
                alumno_id: 149,
                materia_id: 7,
            },
            {
                nota: 6,
                alumno_id: 150,
                materia_id: 1,
            },
            {
                nota: 1,
                alumno_id: 150,
                materia_id: 2,
            },
            {
                nota: 1,
                alumno_id: 150,
                materia_id: 3,
            },
            {
                nota: 1,
                alumno_id: 150,
                materia_id: 4,
            },
            {
                nota: 1,
                alumno_id: 150,
                materia_id: 5,
            },
            {
                nota: 1,
                alumno_id: 150,
                materia_id: 6,
            },
            {
                nota: 1,
                alumno_id: 150,
                materia_id: 7,
            },
            {
                nota: 7.5,
                alumno_id: 151,
                materia_id: 1,
            },
            {
                nota: 6,
                alumno_id: 151,
                materia_id: 2,
            },
            {
                nota: 1,
                alumno_id: 151,
                materia_id: 3,
            },
            {
                nota: 7,
                alumno_id: 151,
                materia_id: 4,
            },
            {
                nota: 5,
                alumno_id: 151,
                materia_id: 5,
            },
            {
                nota: 1,
                alumno_id: 151,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 151,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 152,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 152,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 152,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 152,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 152,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 152,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 152,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 153,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 153,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 153,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 153,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 153,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 153,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 153,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 154,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 154,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 154,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 154,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 154,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 154,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 154,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 155,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 155,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 155,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 155,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 155,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 155,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 155,
                materia_id: 7,
            },
            {
                nota: 6.5,
                alumno_id: 156,
                materia_id: 1,
            },
            {
                nota: 7,
                alumno_id: 156,
                materia_id: 2,
            },
            {
                nota: 4,
                alumno_id: 156,
                materia_id: 3,
            },
            {
                nota: 8,
                alumno_id: 156,
                materia_id: 4,
            },
            {
                nota: 7,
                alumno_id: 156,
                materia_id: 5,
            },
            {
                nota: 6,
                alumno_id: 156,
                materia_id: 6,
            },
            {
                nota: 7,
                alumno_id: 156,
                materia_id: 7,
            },
            {
                nota: 7.5,
                alumno_id: 157,
                materia_id: 1,
            },
            {
                nota: 8,
                alumno_id: 157,
                materia_id: 2,
            },
            {
                nota: 6.5,
                alumno_id: 157,
                materia_id: 3,
            },
            {
                nota: 10,
                alumno_id: 157,
                materia_id: 4,
            },
            {
                nota: 6,
                alumno_id: 157,
                materia_id: 5,
            },
            {
                nota: 7,
                alumno_id: 157,
                materia_id: 6,
            },
            {
                nota: 8,
                alumno_id: 157,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 158,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 158,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 158,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 158,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 158,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 158,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 158,
                materia_id: 7,
            },
            {
                nota: 6.5,
                alumno_id: 159,
                materia_id: 1,
            },
            {
                nota: 7,
                alumno_id: 159,
                materia_id: 2,
            },
            {
                nota: 1,
                alumno_id: 159,
                materia_id: 3,
            },
            {
                nota: 6,
                alumno_id: 159,
                materia_id: 4,
            },
            {
                nota: 1,
                alumno_id: 159,
                materia_id: 5,
            },
            {
                nota: 1,
                alumno_id: 159,
                materia_id: 6,
            },
            {
                nota: 1,
                alumno_id: 159,
                materia_id: 7,
            },
            {
                nota: 6,
                alumno_id: 160,
                materia_id: 1,
            },
            {
                nota: 6,
                alumno_id: 160,
                materia_id: 2,
            },
            {
                nota: 1,
                alumno_id: 160,
                materia_id: 3,
            },
            {
                nota: 7.5,
                alumno_id: 160,
                materia_id: 4,
            },
            {
                nota: 1,
                alumno_id: 160,
                materia_id: 5,
            },
            {
                nota: 1,
                alumno_id: 160,
                materia_id: 6,
            },
            {
                nota: 1,
                alumno_id: 160,
                materia_id: 7,
            },
            {
                nota: 6,
                alumno_id: 161,
                materia_id: 1,
            },
            {
                nota: 6,
                alumno_id: 161,
                materia_id: 2,
            },
            {
                nota: 7,
                alumno_id: 161,
                materia_id: 3,
            },
            {
                nota: 6,
                alumno_id: 161,
                materia_id: 4,
            },
            {
                nota: 8,
                alumno_id: 161,
                materia_id: 5,
            },
            {
                nota: 6,
                alumno_id: 161,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 161,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 162,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 162,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 162,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 162,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 162,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 162,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 162,
                materia_id: 7,
            },
            {
                nota: 8,
                alumno_id: 163,
                materia_id: 1,
            },
            {
                nota: 6,
                alumno_id: 163,
                materia_id: 2,
            },
            {
                nota: 5,
                alumno_id: 163,
                materia_id: 3,
            },
            {
                nota: 6,
                alumno_id: 163,
                materia_id: 4,
            },
            {
                nota: 3,
                alumno_id: 163,
                materia_id: 5,
            },
            {
                nota: 6,
                alumno_id: 163,
                materia_id: 6,
            },
            {
                nota: 7,
                alumno_id: 163,
                materia_id: 7,
            },
            {
                nota: 7,
                alumno_id: 164,
                materia_id: 1,
            },
            {
                nota: 9,
                alumno_id: 164,
                materia_id: 2,
            },
            {
                nota: 9,
                alumno_id: 164,
                materia_id: 3,
            },
            {
                nota: 8.5,
                alumno_id: 164,
                materia_id: 4,
            },
            {
                nota: 7,
                alumno_id: 164,
                materia_id: 5,
            },
            {
                nota: 9.5,
                alumno_id: 164,
                materia_id: 6,
            },
            {
                nota: 9,
                alumno_id: 164,
                materia_id: 7,
            },
            {
                nota: 6,
                alumno_id: 165,
                materia_id: 1,
            },
            {
                nota: 6,
                alumno_id: 165,
                materia_id: 2,
            },
            {
                nota: 1,
                alumno_id: 165,
                materia_id: 3,
            },
            {
                nota: 5,
                alumno_id: 165,
                materia_id: 4,
            },
            {
                nota: 3,
                alumno_id: 165,
                materia_id: 5,
            },
            {
                nota: 1,
                alumno_id: 165,
                materia_id: 6,
            },
            {
                nota: 4,
                alumno_id: 165,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 166,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 166,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 166,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 166,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 166,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 166,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 166,
                materia_id: 7,
            },
            {
                nota: 6,
                alumno_id: 167,
                materia_id: 1,
            },
            {
                nota: 6,
                alumno_id: 167,
                materia_id: 2,
            },
            {
                nota: 5,
                alumno_id: 167,
                materia_id: 3,
            },
            {
                nota: 6,
                alumno_id: 167,
                materia_id: 4,
            },
            {
                nota: 8,
                alumno_id: 167,
                materia_id: 5,
            },
            {
                nota: 6,
                alumno_id: 167,
                materia_id: 6,
            },
            {
                nota: 7,
                alumno_id: 167,
                materia_id: 7,
            },
            {
                nota: 6,
                alumno_id: 168,
                materia_id: 1,
            },
            {
                nota: 1,
                alumno_id: 168,
                materia_id: 2,
            },
            {
                nota: 1,
                alumno_id: 168,
                materia_id: 3,
            },
            {
                nota: 7.5,
                alumno_id: 168,
                materia_id: 4,
            },
            {
                nota: 1,
                alumno_id: 168,
                materia_id: 5,
            },
            {
                nota: 1,
                alumno_id: 168,
                materia_id: 6,
            },
            {
                nota: 1,
                alumno_id: 168,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 169,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 169,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 169,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 169,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 169,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 169,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 169,
                materia_id: 7,
            },
            {
                nota: 6,
                alumno_id: 170,
                materia_id: 1,
            },
            {
                nota: 7,
                alumno_id: 170,
                materia_id: 2,
            },
            {
                nota: 4,
                alumno_id: 170,
                materia_id: 3,
            },
            {
                nota: 8.5,
                alumno_id: 170,
                materia_id: 4,
            },
            {
                nota: 1,
                alumno_id: 170,
                materia_id: 5,
            },
            {
                nota: 1,
                alumno_id: 170,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 170,
                materia_id: 7,
            },
            {
                nota: 6,
                alumno_id: 171,
                materia_id: 1,
            },
            {
                nota: 6,
                alumno_id: 171,
                materia_id: 2,
            },
            {
                nota: 4,
                alumno_id: 171,
                materia_id: 3,
            },
            {
                nota: 7,
                alumno_id: 171,
                materia_id: 4,
            },
            {
                nota: 6,
                alumno_id: 171,
                materia_id: 5,
            },
            {
                nota: 6,
                alumno_id: 171,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 171,
                materia_id: 7,
            },
            {
                nota: 6,
                alumno_id: 172,
                materia_id: 1,
            },
            {
                nota: 6,
                alumno_id: 172,
                materia_id: 2,
            },
            {
                nota: 6.5,
                alumno_id: 172,
                materia_id: 3,
            },
            {
                nota: 6.5,
                alumno_id: 172,
                materia_id: 4,
            },
            {
                nota: 3,
                alumno_id: 172,
                materia_id: 5,
            },
            {
                nota: 6,
                alumno_id: 172,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 172,
                materia_id: 7,
            },
            {
                nota: 6,
                alumno_id: 173,
                materia_id: 1,
            },
            {
                nota: 6,
                alumno_id: 173,
                materia_id: 2,
            },
            {
                nota: 4,
                alumno_id: 173,
                materia_id: 3,
            },
            {
                nota: 6,
                alumno_id: 173,
                materia_id: 4,
            },
            {
                nota: 5,
                alumno_id: 173,
                materia_id: 5,
            },
            {
                nota: 6,
                alumno_id: 173,
                materia_id: 6,
            },
            {
                nota: 7,
                alumno_id: 173,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 174,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 174,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 174,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 174,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 174,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 174,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 174,
                materia_id: 7,
            },
            {
                nota: 9,
                alumno_id: 175,
                materia_id: 1,
            },
            {
                nota: 10,
                alumno_id: 175,
                materia_id: 2,
            },
            {
                nota: 9,
                alumno_id: 175,
                materia_id: 3,
            },
            {
                nota: 10,
                alumno_id: 175,
                materia_id: 4,
            },
            {
                nota: 9,
                alumno_id: 175,
                materia_id: 5,
            },
            {
                nota: 6,
                alumno_id: 175,
                materia_id: 6,
            },
            {
                nota: 9.5,
                alumno_id: 175,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 176,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 176,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 176,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 176,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 176,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 176,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 176,
                materia_id: 7,
            },
            {
                nota: 6,
                alumno_id: 177,
                materia_id: 1,
            },
            {
                nota: 6,
                alumno_id: 177,
                materia_id: 2,
            },
            {
                nota: 4,
                alumno_id: 177,
                materia_id: 3,
            },
            {
                nota: 6,
                alumno_id: 177,
                materia_id: 4,
            },
            {
                nota: 8,
                alumno_id: 177,
                materia_id: 5,
            },
            {
                nota: 6,
                alumno_id: 177,
                materia_id: 6,
            },
            {
                nota: 7,
                alumno_id: 177,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 178,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 178,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 178,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 178,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 178,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 178,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 178,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 179,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 179,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 179,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 179,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 179,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 179,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 179,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 180,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 180,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 180,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 180,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 180,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 180,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 180,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 181,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 181,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 181,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 181,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 181,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 181,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 181,
                materia_id: 7,
            },
            {
                nota: 8,
                alumno_id: 182,
                materia_id: 1,
            },
            {
                nota: 8,
                alumno_id: 182,
                materia_id: 2,
            },
            {
                nota: 8,
                alumno_id: 182,
                materia_id: 3,
            },
            {
                nota: 8.5,
                alumno_id: 182,
                materia_id: 4,
            },
            {
                nota: 7,
                alumno_id: 182,
                materia_id: 5,
            },
            {
                nota: 6,
                alumno_id: 182,
                materia_id: 6,
            },
            {
                nota: 8,
                alumno_id: 182,
                materia_id: 7,
            },
            {
                nota: 7,
                alumno_id: 183,
                materia_id: 1,
            },
            {
                nota: 8,
                alumno_id: 183,
                materia_id: 2,
            },
            {
                nota: 8,
                alumno_id: 183,
                materia_id: 3,
            },
            {
                nota: 7.5,
                alumno_id: 183,
                materia_id: 4,
            },
            {
                nota: 1,
                alumno_id: 183,
                materia_id: 5,
            },
            {
                nota: 6,
                alumno_id: 183,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 183,
                materia_id: 7,
            },
            {
                nota: 6,
                alumno_id: 184,
                materia_id: 1,
            },
            {
                nota: 6,
                alumno_id: 184,
                materia_id: 2,
            },
            {
                nota: 4,
                alumno_id: 184,
                materia_id: 3,
            },
            {
                nota: 6,
                alumno_id: 184,
                materia_id: 4,
            },
            {
                nota: 4,
                alumno_id: 184,
                materia_id: 5,
            },
            {
                nota: 1,
                alumno_id: 184,
                materia_id: 6,
            },
            {
                nota: 7,
                alumno_id: 184,
                materia_id: 7,
            },
            {
                nota: 6,
                alumno_id: 185,
                materia_id: 1,
            },
            {
                nota: 6,
                alumno_id: 185,
                materia_id: 2,
            },
            {
                nota: 4,
                alumno_id: 185,
                materia_id: 3,
            },
            {
                nota: 8.5,
                alumno_id: 185,
                materia_id: 4,
            },
            {
                nota: 6,
                alumno_id: 185,
                materia_id: 5,
            },
            {
                nota: 4,
                alumno_id: 185,
                materia_id: 6,
            },
            {
                nota: 7,
                alumno_id: 185,
                materia_id: 7,
            },
            {
                nota: 7,
                alumno_id: 186,
                materia_id: 1,
            },
            {
                nota: 6,
                alumno_id: 186,
                materia_id: 2,
            },
            {
                nota: 1,
                alumno_id: 186,
                materia_id: 3,
            },
            {
                nota: 8,
                alumno_id: 186,
                materia_id: 4,
            },
            {
                nota: 1,
                alumno_id: 186,
                materia_id: 5,
            },
            {
                nota: 6.5,
                alumno_id: 186,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 186,
                materia_id: 7,
            },
            {
                nota: 6.5,
                alumno_id: 187,
                materia_id: 1,
            },
            {
                nota: 6,
                alumno_id: 187,
                materia_id: 2,
            },
            {
                nota: 8,
                alumno_id: 187,
                materia_id: 3,
            },
            {
                nota: 9,
                alumno_id: 187,
                materia_id: 4,
            },
            {
                nota: 6.5,
                alumno_id: 187,
                materia_id: 5,
            },
            {
                nota: 5,
                alumno_id: 187,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 187,
                materia_id: 7,
            },
            {
                nota: 6.5,
                alumno_id: 188,
                materia_id: 1,
            },
            {
                nota: 6,
                alumno_id: 188,
                materia_id: 2,
            },
            {
                nota: 1,
                alumno_id: 188,
                materia_id: 3,
            },
            {
                nota: 6,
                alumno_id: 188,
                materia_id: 4,
            },
            {
                nota: 1,
                alumno_id: 188,
                materia_id: 5,
            },
            {
                nota: 1,
                alumno_id: 188,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 188,
                materia_id: 7,
            },
            {
                nota: 6.5,
                alumno_id: 189,
                materia_id: 1,
            },
            {
                nota: 6,
                alumno_id: 189,
                materia_id: 2,
            },
            {
                nota: 1,
                alumno_id: 189,
                materia_id: 3,
            },
            {
                nota: 6,
                alumno_id: 189,
                materia_id: 4,
            },
            {
                nota: 7,
                alumno_id: 189,
                materia_id: 5,
            },
            {
                nota: 6,
                alumno_id: 189,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 189,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 190,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 190,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 190,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 190,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 190,
                materia_id: 5,
            },
            {
                nota: 1,
                alumno_id: 190,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 190,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 191,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 191,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 191,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 191,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 191,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 191,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 191,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 192,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 192,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 192,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 192,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 192,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 192,
                materia_id: 6,
            },
            {
                nota: 1,
                alumno_id: 192,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 193,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 193,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 193,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 193,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 193,
                materia_id: 5,
            },
            {
                nota: 1,
                alumno_id: 193,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 193,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 194,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 194,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 194,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 194,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 194,
                materia_id: 5,
            },
            {
                nota: 1,
                alumno_id: 194,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 194,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 195,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 195,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 195,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 195,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 195,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 195,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 195,
                materia_id: 7,
            },
            {
                nota: 6,
                alumno_id: 196,
                materia_id: 1,
            },
            {
                nota: 6,
                alumno_id: 196,
                materia_id: 2,
            },
            {
                nota: 1,
                alumno_id: 196,
                materia_id: 3,
            },
            {
                nota: 1,
                alumno_id: 196,
                materia_id: 4,
            },
            {
                nota: 6.5,
                alumno_id: 196,
                materia_id: 5,
            },
            {
                nota: 4,
                alumno_id: 196,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 196,
                materia_id: 7,
            },
            {
                nota: 6.5,
                alumno_id: 197,
                materia_id: 1,
            },
            {
                nota: 6.5,
                alumno_id: 197,
                materia_id: 2,
            },
            {
                nota: 5,
                alumno_id: 197,
                materia_id: 3,
            },
            {
                nota: 6.5,
                alumno_id: 197,
                materia_id: 4,
            },
            {
                nota: 8,
                alumno_id: 197,
                materia_id: 5,
            },
            {
                nota: 7,
                alumno_id: 197,
                materia_id: 6,
            },
            {
                nota: 7,
                alumno_id: 197,
                materia_id: 7,
            },
            {
                nota: 6,
                alumno_id: 198,
                materia_id: 1,
            },
            {
                nota: 6,
                alumno_id: 198,
                materia_id: 2,
            },
            {
                nota: 1,
                alumno_id: 198,
                materia_id: 3,
            },
            {
                nota: 6,
                alumno_id: 198,
                materia_id: 4,
            },
            {
                nota: 7,
                alumno_id: 198,
                materia_id: 5,
            },
            {
                nota: 1,
                alumno_id: 198,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 198,
                materia_id: 7,
            },
            {
                nota: 6,
                alumno_id: 199,
                materia_id: 1,
            },
            {
                nota: 6,
                alumno_id: 199,
                materia_id: 2,
            },
            {
                nota: 1,
                alumno_id: 199,
                materia_id: 3,
            },
            {
                nota: 1,
                alumno_id: 199,
                materia_id: 4,
            },
            {
                nota: 6.5,
                alumno_id: 199,
                materia_id: 5,
            },
            {
                nota: 4,
                alumno_id: 199,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 199,
                materia_id: 7,
            },
            {
                nota: 7,
                alumno_id: 200,
                materia_id: 1,
            },
            {
                nota: 7.5,
                alumno_id: 200,
                materia_id: 2,
            },
            {
                nota: 5,
                alumno_id: 200,
                materia_id: 3,
            },
            {
                nota: 7,
                alumno_id: 200,
                materia_id: 4,
            },
            {
                nota: 7,
                alumno_id: 200,
                materia_id: 5,
            },
            {
                nota: 6,
                alumno_id: 200,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 200,
                materia_id: 7,
            },
            {
                nota: 7,
                alumno_id: 201,
                materia_id: 1,
            },
            {
                nota: 7,
                alumno_id: 201,
                materia_id: 2,
            },
            {
                nota: 1,
                alumno_id: 201,
                materia_id: 3,
            },
            {
                nota: 1,
                alumno_id: 201,
                materia_id: 4,
            },
            {
                nota: 1,
                alumno_id: 201,
                materia_id: 5,
            },
            {
                nota: 7,
                alumno_id: 201,
                materia_id: 6,
            },
            {
                nota: 7,
                alumno_id: 201,
                materia_id: 7,
            },
            {
                nota: 7,
                alumno_id: 202,
                materia_id: 1,
            },
            {
                nota: 7,
                alumno_id: 202,
                materia_id: 2,
            },
            {
                nota: 6,
                alumno_id: 202,
                materia_id: 3,
            },
            {
                nota: 1,
                alumno_id: 202,
                materia_id: 4,
            },
            {
                nota: 8,
                alumno_id: 202,
                materia_id: 5,
            },
            {
                nota: 8,
                alumno_id: 202,
                materia_id: 6,
            },
            {
                nota: 7,
                alumno_id: 202,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 203,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 203,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 203,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 203,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 203,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 203,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 203,
                materia_id: 7,
            },
            {
                nota: 1,
                alumno_id: 204,
                materia_id: 1,
            },
            {
                nota: 1,
                alumno_id: 204,
                materia_id: 2,
            },
            {
                nota: 1,
                alumno_id: 204,
                materia_id: 3,
            },
            {
                nota: 1,
                alumno_id: 204,
                materia_id: 4,
            },
            {
                nota: 1,
                alumno_id: 204,
                materia_id: 5,
            },
            {
                nota: 1,
                alumno_id: 204,
                materia_id: 6,
            },
            {
                nota: 1,
                alumno_id: 204,
                materia_id: 7,
            },
            {
                nota: 1,
                alumno_id: 205,
                materia_id: 1,
            },
            {
                nota: 1,
                alumno_id: 205,
                materia_id: 2,
            },
            {
                nota: 1,
                alumno_id: 205,
                materia_id: 3,
            },
            {
                nota: 1,
                alumno_id: 205,
                materia_id: 4,
            },
            {
                nota: 1,
                alumno_id: 205,
                materia_id: 5,
            },
            {
                nota: 1,
                alumno_id: 205,
                materia_id: 6,
            },
            {
                nota: 1,
                alumno_id: 205,
                materia_id: 7,
            },
            {
                nota: 6,
                alumno_id: 206,
                materia_id: 1,
            },
            {
                nota: 6,
                alumno_id: 206,
                materia_id: 2,
            },
            {
                nota: 6,
                alumno_id: 206,
                materia_id: 3,
            },
            {
                nota: 6,
                alumno_id: 206,
                materia_id: 4,
            },
            {
                nota: 7.5,
                alumno_id: 206,
                materia_id: 5,
            },
            {
                nota: 6,
                alumno_id: 206,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 206,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 207,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 207,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 207,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 207,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 207,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 207,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 207,
                materia_id: 7,
            },
            {
                nota: 6,
                alumno_id: 208,
                materia_id: 1,
            },
            {
                nota: 6,
                alumno_id: 208,
                materia_id: 2,
            },
            {
                nota: 1,
                alumno_id: 208,
                materia_id: 3,
            },
            {
                nota: 1,
                alumno_id: 208,
                materia_id: 4,
            },
            {
                nota: 6,
                alumno_id: 208,
                materia_id: 5,
            },
            {
                nota: 6,
                alumno_id: 208,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 208,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 209,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 209,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 209,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 209,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 209,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 209,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 209,
                materia_id: 7,
            },
            {
                nota: 6.5,
                alumno_id: 210,
                materia_id: 1,
            },
            {
                nota: 7,
                alumno_id: 210,
                materia_id: 2,
            },
            {
                nota: 7.5,
                alumno_id: 210,
                materia_id: 3,
            },
            {
                nota: 6,
                alumno_id: 210,
                materia_id: 4,
            },
            {
                nota: 7.5,
                alumno_id: 210,
                materia_id: 5,
            },
            {
                nota: 7.5,
                alumno_id: 210,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 210,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 211,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 211,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 211,
                materia_id: 3,
            },
            {
                nota: 1,
                alumno_id: 211,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 211,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 211,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 211,
                materia_id: 7,
            },
            {
                nota: 7.5,
                alumno_id: 212,
                materia_id: 1,
            },
            {
                nota: 6,
                alumno_id: 212,
                materia_id: 2,
            },
            {
                nota: 6,
                alumno_id: 212,
                materia_id: 3,
            },
            {
                nota: 6.5,
                alumno_id: 212,
                materia_id: 4,
            },
            {
                nota: 7.5,
                alumno_id: 212,
                materia_id: 5,
            },
            {
                nota: 7,
                alumno_id: 212,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 212,
                materia_id: 7,
            },
            {
                nota: 9,
                alumno_id: 213,
                materia_id: 1,
            },
            {
                nota: 7,
                alumno_id: 213,
                materia_id: 2,
            },
            {
                nota: 8,
                alumno_id: 213,
                materia_id: 3,
            },
            {
                nota: 9,
                alumno_id: 213,
                materia_id: 4,
            },
            {
                nota: 7.5,
                alumno_id: 213,
                materia_id: 5,
            },
            {
                nota: 7.5,
                alumno_id: 213,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 213,
                materia_id: 7,
            },
            {
                nota: 6,
                alumno_id: 214,
                materia_id: 1,
            },
            {
                nota: 6,
                alumno_id: 214,
                materia_id: 2,
            },
            {
                nota: 4,
                alumno_id: 214,
                materia_id: 3,
            },
            {
                nota: 1,
                alumno_id: 214,
                materia_id: 4,
            },
            {
                nota: 7,
                alumno_id: 214,
                materia_id: 5,
            },
            {
                nota: 1,
                alumno_id: 214,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 214,
                materia_id: 7,
            },
            {
                nota: 9,
                alumno_id: 215,
                materia_id: 1,
            },
            {
                nota: 9,
                alumno_id: 215,
                materia_id: 2,
            },
            {
                nota: 8.5,
                alumno_id: 215,
                materia_id: 3,
            },
            {
                nota: 10,
                alumno_id: 215,
                materia_id: 4,
            },
            {
                nota: 8.5,
                alumno_id: 215,
                materia_id: 5,
            },
            {
                nota: 9,
                alumno_id: 215,
                materia_id: 6,
            },
            {
                nota: 6.5,
                alumno_id: 215,
                materia_id: 7,
            },
            {
                nota: 1,
                alumno_id: 216,
                materia_id: 1,
            },
            {
                nota: 1,
                alumno_id: 216,
                materia_id: 2,
            },
            {
                nota: 1,
                alumno_id: 216,
                materia_id: 3,
            },
            {
                nota: 1,
                alumno_id: 216,
                materia_id: 4,
            },
            {
                nota: 1,
                alumno_id: 216,
                materia_id: 5,
            },
            {
                nota: 1,
                alumno_id: 216,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 216,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 217,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 217,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 217,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 217,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 217,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 217,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 217,
                materia_id: 7,
            },
            {
                nota: 1,
                alumno_id: 218,
                materia_id: 1,
            },
            {
                nota: 1,
                alumno_id: 218,
                materia_id: 2,
            },
            {
                nota: 1,
                alumno_id: 218,
                materia_id: 3,
            },
            {
                nota: 1,
                alumno_id: 218,
                materia_id: 4,
            },
            {
                nota: 1,
                alumno_id: 218,
                materia_id: 5,
            },
            {
                nota: 1,
                alumno_id: 218,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 218,
                materia_id: 7,
            },
            {
                nota: 6,
                alumno_id: 219,
                materia_id: 1,
            },
            {
                nota: 6,
                alumno_id: 219,
                materia_id: 2,
            },
            {
                nota: 1,
                alumno_id: 219,
                materia_id: 3,
            },
            {
                nota: 1,
                alumno_id: 219,
                materia_id: 4,
            },
            {
                nota: 6,
                alumno_id: 219,
                materia_id: 5,
            },
            {
                nota: 4,
                alumno_id: 219,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 219,
                materia_id: 7,
            },
            {
                nota: 1,
                alumno_id: 220,
                materia_id: 1,
            },
            {
                nota: 6,
                alumno_id: 220,
                materia_id: 2,
            },
            {
                nota: 1,
                alumno_id: 220,
                materia_id: 3,
            },
            {
                nota: 1,
                alumno_id: 220,
                materia_id: 4,
            },
            {
                nota: 1,
                alumno_id: 220,
                materia_id: 5,
            },
            {
                nota: 6,
                alumno_id: 220,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 220,
                materia_id: 7,
            },
            {
                nota: 6,
                alumno_id: 221,
                materia_id: 1,
            },
            {
                nota: 6,
                alumno_id: 221,
                materia_id: 2,
            },
            {
                nota: 1,
                alumno_id: 221,
                materia_id: 3,
            },
            {
                nota: 1,
                alumno_id: 221,
                materia_id: 4,
            },
            {
                nota: 4,
                alumno_id: 221,
                materia_id: 5,
            },
            {
                nota: 8,
                alumno_id: 221,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 221,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 222,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 222,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 222,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 222,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 222,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 222,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 222,
                materia_id: 7,
            },
            {
                nota: 6,
                alumno_id: 223,
                materia_id: 1,
            },
            {
                nota: 7,
                alumno_id: 223,
                materia_id: 2,
            },
            {
                nota: 6,
                alumno_id: 223,
                materia_id: 3,
            },
            {
                nota: 7,
                alumno_id: 223,
                materia_id: 4,
            },
            {
                nota: 7,
                alumno_id: 223,
                materia_id: 5,
            },
            {
                nota: 6.5,
                alumno_id: 223,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 223,
                materia_id: 7,
            },
            {
                nota: 6,
                alumno_id: 224,
                materia_id: 1,
            },
            {
                nota: 6,
                alumno_id: 224,
                materia_id: 2,
            },
            {
                nota: 4,
                alumno_id: 224,
                materia_id: 3,
            },
            {
                nota: 1,
                alumno_id: 224,
                materia_id: 4,
            },
            {
                nota: 7,
                alumno_id: 224,
                materia_id: 5,
            },
            {
                nota: 8,
                alumno_id: 224,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 224,
                materia_id: 7,
            },
            {
                nota: 6.5,
                alumno_id: 225,
                materia_id: 1,
            },
            {
                nota: 8,
                alumno_id: 225,
                materia_id: 2,
            },
            {
                nota: 7.5,
                alumno_id: 225,
                materia_id: 3,
            },
            {
                nota: 7.5,
                alumno_id: 225,
                materia_id: 4,
            },
            {
                nota: 8.5,
                alumno_id: 225,
                materia_id: 5,
            },
            {
                nota: 7.5,
                alumno_id: 225,
                materia_id: 6,
            },
            {
                nota: 7,
                alumno_id: 225,
                materia_id: 7,
            },
            {
                nota: 8,
                alumno_id: 226,
                materia_id: 1,
            },
            {
                nota: 8,
                alumno_id: 226,
                materia_id: 2,
            },
            {
                nota: 7,
                alumno_id: 226,
                materia_id: 3,
            },
            {
                nota: 8,
                alumno_id: 226,
                materia_id: 4,
            },
            {
                nota: 9,
                alumno_id: 226,
                materia_id: 5,
            },
            {
                nota: 6,
                alumno_id: 226,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 226,
                materia_id: 7,
            },
            {
                nota: 8.5,
                alumno_id: 227,
                materia_id: 1,
            },
            {
                nota: 8.5,
                alumno_id: 227,
                materia_id: 2,
            },
            {
                nota: 6.5,
                alumno_id: 227,
                materia_id: 3,
            },
            {
                nota: 6.5,
                alumno_id: 227,
                materia_id: 4,
            },
            {
                nota: 7,
                alumno_id: 227,
                materia_id: 5,
            },
            {
                nota: 8,
                alumno_id: 227,
                materia_id: 6,
            },
            {
                nota: 7,
                alumno_id: 227,
                materia_id: 7,
            },
            {
                nota: 6,
                alumno_id: 228,
                materia_id: 1,
            },
            {
                nota: 6.5,
                alumno_id: 228,
                materia_id: 2,
            },
            {
                nota: 4,
                alumno_id: 228,
                materia_id: 3,
            },
            {
                nota: 5,
                alumno_id: 228,
                materia_id: 4,
            },
            {
                nota: 1,
                alumno_id: 228,
                materia_id: 5,
            },
            {
                nota: 6,
                alumno_id: 228,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 228,
                materia_id: 7,
            },
            {
                nota: 6,
                alumno_id: 229,
                materia_id: 1,
            },
            {
                nota: 6,
                alumno_id: 229,
                materia_id: 2,
            },
            {
                nota: 4,
                alumno_id: 229,
                materia_id: 3,
            },
            {
                nota: 1,
                alumno_id: 229,
                materia_id: 4,
            },
            {
                nota: 7.5,
                alumno_id: 229,
                materia_id: 5,
            },
            {
                nota: 7,
                alumno_id: 229,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 229,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 230,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 230,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 230,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 230,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 230,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 230,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 230,
                materia_id: 7,
            },
            {
                nota: 6.5,
                alumno_id: 231,
                materia_id: 1,
            },
            {
                nota: 7.5,
                alumno_id: 231,
                materia_id: 2,
            },
            {
                nota: 6,
                alumno_id: 231,
                materia_id: 3,
            },
            {
                nota: 8,
                alumno_id: 231,
                materia_id: 4,
            },
            {
                nota: 8,
                alumno_id: 231,
                materia_id: 5,
            },
            {
                nota: 8,
                alumno_id: 231,
                materia_id: 6,
            },
            {
                nota: 7,
                alumno_id: 231,
                materia_id: 7,
            },
            {
                nota: 1,
                alumno_id: 232,
                materia_id: 1,
            },
            {
                nota: 1,
                alumno_id: 232,
                materia_id: 2,
            },
            {
                nota: 1,
                alumno_id: 232,
                materia_id: 3,
            },
            {
                nota: 1,
                alumno_id: 232,
                materia_id: 4,
            },
            {
                nota: 1,
                alumno_id: 232,
                materia_id: 5,
            },
            {
                nota: 1,
                alumno_id: 232,
                materia_id: 6,
            },
            {
                nota: 1,
                alumno_id: 232,
                materia_id: 7,
            },
            {
                nota: 7,
                alumno_id: 233,
                materia_id: 1,
            },
            {
                nota: 8,
                alumno_id: 233,
                materia_id: 2,
            },
            {
                nota: 8,
                alumno_id: 233,
                materia_id: 3,
            },
            {
                nota: 9.5,
                alumno_id: 233,
                materia_id: 4,
            },
            {
                nota: 7.5,
                alumno_id: 233,
                materia_id: 5,
            },
            {
                nota: 8,
                alumno_id: 233,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 233,
                materia_id: 7,
            },
            {
                nota: 6,
                alumno_id: 234,
                materia_id: 1,
            },
            {
                nota: 6,
                alumno_id: 234,
                materia_id: 2,
            },
            {
                nota: 1,
                alumno_id: 234,
                materia_id: 3,
            },
            {
                nota: 1,
                alumno_id: 234,
                materia_id: 4,
            },
            {
                nota: 5,
                alumno_id: 234,
                materia_id: 5,
            },
            {
                nota: 8,
                alumno_id: 234,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 234,
                materia_id: 7,
            },
            {
                nota: 1,
                alumno_id: 235,
                materia_id: 1,
            },
            {
                nota: 1,
                alumno_id: 235,
                materia_id: 2,
            },
            {
                nota: 1,
                alumno_id: 235,
                materia_id: 3,
            },
            {
                nota: 1,
                alumno_id: 235,
                materia_id: 4,
            },
            {
                nota: 1,
                alumno_id: 235,
                materia_id: 5,
            },
            {
                nota: 1,
                alumno_id: 235,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 235,
                materia_id: 7,
            },
            {
                nota: 6,
                alumno_id: 236,
                materia_id: 1,
            },
            {
                nota: 6,
                alumno_id: 236,
                materia_id: 2,
            },
            {
                nota: 1,
                alumno_id: 236,
                materia_id: 3,
            },
            {
                nota: 6,
                alumno_id: 236,
                materia_id: 4,
            },
            {
                nota: 8.5,
                alumno_id: 236,
                materia_id: 5,
            },
            {
                nota: 7,
                alumno_id: 236,
                materia_id: 6,
            },
            {
                nota: 7,
                alumno_id: 236,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 237,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 237,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 237,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 237,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 237,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 237,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 237,
                materia_id: 7,
            },
            {
                nota: 1,
                alumno_id: 238,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 238,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 238,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 238,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 238,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 238,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 238,
                materia_id: 7,
            },
            {
                nota: 1,
                alumno_id: 239,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 239,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 239,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 239,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 239,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 239,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 239,
                materia_id: 7,
            },
            {
                nota: 6,
                alumno_id: 240,
                materia_id: 1,
            },
            {
                nota: 6,
                alumno_id: 240,
                materia_id: 2,
            },
            {
                nota: 6,
                alumno_id: 240,
                materia_id: 3,
            },
            {
                nota: 1,
                alumno_id: 240,
                materia_id: 4,
            },
            {
                nota: 4,
                alumno_id: 240,
                materia_id: 5,
            },
            {
                nota: 1,
                alumno_id: 240,
                materia_id: 6,
            },
            {
                nota: 8,
                alumno_id: 240,
                materia_id: 7,
            },
            {
                nota: 1,
                alumno_id: 241,
                materia_id: 1,
            },
            {
                nota: 1,
                alumno_id: 241,
                materia_id: 2,
            },
            {
                nota: 1,
                alumno_id: 241,
                materia_id: 3,
            },
            {
                nota: 1,
                alumno_id: 241,
                materia_id: 4,
            },
            {
                nota: 1,
                alumno_id: 241,
                materia_id: 5,
            },
            {
                nota: 1,
                alumno_id: 241,
                materia_id: 6,
            },
            {
                nota: 7,
                alumno_id: 241,
                materia_id: 7,
            },
            {
                nota: 1,
                alumno_id: 242,
                materia_id: 1,
            },
            {
                nota: 1,
                alumno_id: 242,
                materia_id: 2,
            },
            {
                nota: 1,
                alumno_id: 242,
                materia_id: 3,
            },
            {
                nota: 1,
                alumno_id: 242,
                materia_id: 4,
            },
            {
                nota: 7,
                alumno_id: 242,
                materia_id: 5,
            },
            {
                nota: 1,
                alumno_id: 242,
                materia_id: 6,
            },
            {
                nota: 10,
                alumno_id: 242,
                materia_id: 7,
            },
            {
                nota: 1,
                alumno_id: 243,
                materia_id: 1,
            },
            {
                nota: 1,
                alumno_id: 243,
                materia_id: 2,
            },
            {
                nota: 6,
                alumno_id: 243,
                materia_id: 3,
            },
            {
                nota: 1,
                alumno_id: 243,
                materia_id: 4,
            },
            {
                nota: 1,
                alumno_id: 243,
                materia_id: 5,
            },
            {
                nota: 1,
                alumno_id: 243,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 243,
                materia_id: 7,
            },
            {
                nota: 6.5,
                alumno_id: 244,
                materia_id: 1,
            },
            {
                nota: 6.5,
                alumno_id: 244,
                materia_id: 2,
            },
            {
                nota: 6,
                alumno_id: 244,
                materia_id: 3,
            },
            {
                nota: 6,
                alumno_id: 244,
                materia_id: 4,
            },
            {
                nota: 6,
                alumno_id: 244,
                materia_id: 5,
            },
            {
                nota: 6,
                alumno_id: 244,
                materia_id: 6,
            },
            {
                nota: 9,
                alumno_id: 244,
                materia_id: 7,
            },
            {
                nota: 6,
                alumno_id: 245,
                materia_id: 1,
            },
            {
                nota: 7,
                alumno_id: 245,
                materia_id: 2,
            },
            {
                nota: 7,
                alumno_id: 245,
                materia_id: 3,
            },
            {
                nota: 7,
                alumno_id: 245,
                materia_id: 4,
            },
            {
                nota: 9,
                alumno_id: 245,
                materia_id: 5,
            },
            {
                nota: 1,
                alumno_id: 245,
                materia_id: 6,
            },
            {
                nota: 7,
                alumno_id: 245,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 246,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 246,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 246,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 246,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 246,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 246,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 246,
                materia_id: 7,
            },
            {
                nota: 5,
                alumno_id: 247,
                materia_id: 1,
            },
            {
                nota: 7.5,
                alumno_id: 247,
                materia_id: 2,
            },
            {
                nota: 7.5,
                alumno_id: 247,
                materia_id: 3,
            },
            {
                nota: 1,
                alumno_id: 247,
                materia_id: 4,
            },
            {
                nota: 6,
                alumno_id: 247,
                materia_id: 5,
            },
            {
                nota: 1,
                alumno_id: 247,
                materia_id: 6,
            },
            {
                nota: 9.5,
                alumno_id: 247,
                materia_id: 7,
            },
            {
                nota: 1,
                alumno_id: 248,
                materia_id: 1,
            },
            {
                nota: 1,
                alumno_id: 248,
                materia_id: 2,
            },
            {
                nota: 6,
                alumno_id: 248,
                materia_id: 3,
            },
            {
                nota: 1,
                alumno_id: 248,
                materia_id: 4,
            },
            {
                nota: 1,
                alumno_id: 248,
                materia_id: 5,
            },
            {
                nota: 1,
                alumno_id: 248,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 248,
                materia_id: 7,
            },
            {
                nota: 4,
                alumno_id: 249,
                materia_id: 1,
            },
            {
                nota: 6,
                alumno_id: 249,
                materia_id: 2,
            },
            {
                nota: 1,
                alumno_id: 249,
                materia_id: 3,
            },
            {
                nota: 6,
                alumno_id: 249,
                materia_id: 4,
            },
            {
                nota: 6,
                alumno_id: 249,
                materia_id: 5,
            },
            {
                nota: 1,
                alumno_id: 249,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 249,
                materia_id: 7,
            },
            {
                nota: 7,
                alumno_id: 250,
                materia_id: 1,
            },
            {
                nota: 7,
                alumno_id: 250,
                materia_id: 2,
            },
            {
                nota: 7,
                alumno_id: 250,
                materia_id: 3,
            },
            {
                nota: 7.5,
                alumno_id: 250,
                materia_id: 4,
            },
            {
                nota: 8,
                alumno_id: 250,
                materia_id: 5,
            },
            {
                nota: 6.5,
                alumno_id: 250,
                materia_id: 6,
            },
            {
                nota: 9,
                alumno_id: 250,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 251,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 251,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 251,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 251,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 251,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 251,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 251,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 252,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 252,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 252,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 252,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 252,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 252,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 252,
                materia_id: 7,
            },
            {
                nota: 1,
                alumno_id: 253,
                materia_id: 1,
            },
            {
                nota: 6.5,
                alumno_id: 253,
                materia_id: 2,
            },
            {
                nota: 6,
                alumno_id: 253,
                materia_id: 3,
            },
            {
                nota: 1,
                alumno_id: 253,
                materia_id: 4,
            },
            {
                nota: 1,
                alumno_id: 253,
                materia_id: 5,
            },
            {
                nota: 1,
                alumno_id: 253,
                materia_id: 6,
            },
            {
                nota: 9.5,
                alumno_id: 253,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 254,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 254,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 254,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 254,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 254,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 254,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 254,
                materia_id: 7,
            },
            {
                nota: 1,
                alumno_id: 255,
                materia_id: 1,
            },
            {
                nota: 6,
                alumno_id: 255,
                materia_id: 2,
            },
            {
                nota: 6,
                alumno_id: 255,
                materia_id: 3,
            },
            {
                nota: 1,
                alumno_id: 255,
                materia_id: 4,
            },
            {
                nota: 7.5,
                alumno_id: 255,
                materia_id: 5,
            },
            {
                nota: 1,
                alumno_id: 255,
                materia_id: 6,
            },
            {
                nota: 9,
                alumno_id: 255,
                materia_id: 7,
            },
            {
                nota: 5,
                alumno_id: 256,
                materia_id: 1,
            },
            {
                nota: 6.5,
                alumno_id: 256,
                materia_id: 2,
            },
            {
                nota: 6,
                alumno_id: 256,
                materia_id: 3,
            },
            {
                nota: 1,
                alumno_id: 256,
                materia_id: 4,
            },
            {
                nota: 6,
                alumno_id: 256,
                materia_id: 5,
            },
            {
                nota: 1,
                alumno_id: 256,
                materia_id: 6,
            },
            {
                nota: 8,
                alumno_id: 256,
                materia_id: 7,
            },
            {
                nota: 7,
                alumno_id: 257,
                materia_id: 1,
            },
            {
                nota: 6,
                alumno_id: 257,
                materia_id: 2,
            },
            {
                nota: 6,
                alumno_id: 257,
                materia_id: 3,
            },
            {
                nota: 1,
                alumno_id: 257,
                materia_id: 4,
            },
            {
                nota: 8,
                alumno_id: 257,
                materia_id: 5,
            },
            {
                nota: 1,
                alumno_id: 257,
                materia_id: 6,
            },
            {
                nota: 7.5,
                alumno_id: 257,
                materia_id: 7,
            },
            {
                nota: 1,
                alumno_id: 258,
                materia_id: 1,
            },
            {
                nota: 6.5,
                alumno_id: 258,
                materia_id: 2,
            },
            {
                nota: 6,
                alumno_id: 258,
                materia_id: 3,
            },
            {
                nota: 1,
                alumno_id: 258,
                materia_id: 4,
            },
            {
                nota: 7,
                alumno_id: 258,
                materia_id: 5,
            },
            {
                nota: 1,
                alumno_id: 258,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 258,
                materia_id: 7,
            },
            {
                nota: 4,
                alumno_id: 259,
                materia_id: 1,
            },
            {
                nota: 7,
                alumno_id: 259,
                materia_id: 2,
            },
            {
                nota: 6,
                alumno_id: 259,
                materia_id: 3,
            },
            {
                nota: 6,
                alumno_id: 259,
                materia_id: 4,
            },
            {
                nota: 6,
                alumno_id: 259,
                materia_id: 5,
            },
            {
                nota: 6,
                alumno_id: 259,
                materia_id: 6,
            },
            {
                nota: 7.5,
                alumno_id: 259,
                materia_id: 7,
            },
            {
                nota: 5,
                alumno_id: 260,
                materia_id: 1,
            },
            {
                nota: 6,
                alumno_id: 260,
                materia_id: 2,
            },
            {
                nota: 1,
                alumno_id: 260,
                materia_id: 3,
            },
            {
                nota: 6,
                alumno_id: 260,
                materia_id: 4,
            },
            {
                nota: 6,
                alumno_id: 260,
                materia_id: 5,
            },
            {
                nota: 6,
                alumno_id: 260,
                materia_id: 6,
            },
            {
                nota: 8,
                alumno_id: 260,
                materia_id: 7,
            },
            {
                nota: 1,
                alumno_id: 261,
                materia_id: 1,
            },
            {
                nota: 1,
                alumno_id: 261,
                materia_id: 2,
            },
            {
                nota: 1,
                alumno_id: 261,
                materia_id: 3,
            },
            {
                nota: 1,
                alumno_id: 261,
                materia_id: 4,
            },
            {
                nota: 1,
                alumno_id: 261,
                materia_id: 5,
            },
            {
                nota: 1,
                alumno_id: 261,
                materia_id: 6,
            },
            {
                nota: 7,
                alumno_id: 261,
                materia_id: 7,
            },
            {
                nota: 5,
                alumno_id: 262,
                materia_id: 1,
            },
            {
                nota: 7,
                alumno_id: 262,
                materia_id: 2,
            },
            {
                nota: 6,
                alumno_id: 262,
                materia_id: 3,
            },
            {
                nota: 6,
                alumno_id: 262,
                materia_id: 4,
            },
            {
                nota: 8,
                alumno_id: 262,
                materia_id: 5,
            },
            {
                nota: 6,
                alumno_id: 262,
                materia_id: 6,
            },
            {
                nota: 9,
                alumno_id: 262,
                materia_id: 7,
            },
            {
                nota: 6,
                alumno_id: 263,
                materia_id: 1,
            },
            {
                nota: 6.5,
                alumno_id: 263,
                materia_id: 2,
            },
            {
                nota: 8,
                alumno_id: 263,
                materia_id: 3,
            },
            {
                nota: 6.5,
                alumno_id: 263,
                materia_id: 4,
            },
            {
                nota: 6,
                alumno_id: 263,
                materia_id: 5,
            },
            {
                nota: 6,
                alumno_id: 263,
                materia_id: 6,
            },
            {
                nota: 9.5,
                alumno_id: 263,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 264,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 264,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 264,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 264,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 264,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 264,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 264,
                materia_id: 7,
            },
            {
                nota: 6,
                alumno_id: 265,
                materia_id: 1,
            },
            {
                nota: 8.5,
                alumno_id: 265,
                materia_id: 2,
            },
            {
                nota: 10,
                alumno_id: 265,
                materia_id: 3,
            },
            {
                nota: 8.5,
                alumno_id: 265,
                materia_id: 4,
            },
            {
                nota: 6,
                alumno_id: 265,
                materia_id: 5,
            },
            {
                nota: 6.5,
                alumno_id: 265,
                materia_id: 6,
            },
            {
                nota: 9,
                alumno_id: 265,
                materia_id: 7,
            },
            {
                nota: 1,
                alumno_id: 266,
                materia_id: 1,
            },
            {
                nota: 1,
                alumno_id: 266,
                materia_id: 2,
            },
            {
                nota: 6,
                alumno_id: 266,
                materia_id: 3,
            },
            {
                nota: 1,
                alumno_id: 266,
                materia_id: 4,
            },
            {
                nota: 1,
                alumno_id: 266,
                materia_id: 5,
            },
            {
                nota: 1,
                alumno_id: 266,
                materia_id: 6,
            },
            {
                nota: 1,
                alumno_id: 266,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 267,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 267,
                materia_id: 2,
            },
            {
                nota: 1,
                alumno_id: 267,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 267,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 267,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 267,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 267,
                materia_id: 7,
            },
            {
                nota: 6,
                alumno_id: 268,
                materia_id: 1,
            },
            {
                nota: 9,
                alumno_id: 268,
                materia_id: 2,
            },
            {
                nota: 9.5,
                alumno_id: 268,
                materia_id: 3,
            },
            {
                nota: 9,
                alumno_id: 268,
                materia_id: 4,
            },
            {
                nota: 9.5,
                alumno_id: 268,
                materia_id: 5,
            },
            {
                nota: 7,
                alumno_id: 268,
                materia_id: 6,
            },
            {
                nota: 10,
                alumno_id: 268,
                materia_id: 7,
            },
            {
                nota: 6,
                alumno_id: 269,
                materia_id: 1,
            },
            {
                nota: 6.5,
                alumno_id: 269,
                materia_id: 2,
            },
            {
                nota: 6,
                alumno_id: 269,
                materia_id: 3,
            },
            {
                nota: 7,
                alumno_id: 269,
                materia_id: 4,
            },
            {
                nota: 6,
                alumno_id: 269,
                materia_id: 5,
            },
            {
                nota: 6,
                alumno_id: 269,
                materia_id: 6,
            },
            {
                nota: 8,
                alumno_id: 269,
                materia_id: 7,
            },
            {
                nota: 6,
                alumno_id: 270,
                materia_id: 1,
            },
            {
                nota: 6.5,
                alumno_id: 270,
                materia_id: 2,
            },
            {
                nota: 6,
                alumno_id: 270,
                materia_id: 3,
            },
            {
                nota: 7.5,
                alumno_id: 270,
                materia_id: 4,
            },
            {
                nota: 8,
                alumno_id: 270,
                materia_id: 5,
            },
            {
                nota: 6,
                alumno_id: 270,
                materia_id: 6,
            },
            {
                nota: 9,
                alumno_id: 270,
                materia_id: 7,
            },
            {
                nota: 6,
                alumno_id: 271,
                materia_id: 1,
            },
            {
                nota: 9,
                alumno_id: 271,
                materia_id: 2,
            },
            {
                nota: 10,
                alumno_id: 271,
                materia_id: 3,
            },
            {
                nota: 10,
                alumno_id: 271,
                materia_id: 4,
            },
            {
                nota: 8.5,
                alumno_id: 271,
                materia_id: 5,
            },
            {
                nota: 8,
                alumno_id: 271,
                materia_id: 6,
            },
            {
                nota: 9.5,
                alumno_id: 271,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 272,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 272,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 272,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 272,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 272,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 272,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 272,
                materia_id: 7,
            },
            {
                nota: 6,
                alumno_id: 273,
                materia_id: 1,
            },
            {
                nota: 6,
                alumno_id: 273,
                materia_id: 2,
            },
            {
                nota: 6.5,
                alumno_id: 273,
                materia_id: 3,
            },
            {
                nota: 6,
                alumno_id: 273,
                materia_id: 4,
            },
            {
                nota: 7,
                alumno_id: 273,
                materia_id: 5,
            },
            {
                nota: 1,
                alumno_id: 273,
                materia_id: 6,
            },
            {
                nota: 8,
                alumno_id: 273,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 274,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 274,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 274,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 274,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 274,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 274,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 274,
                materia_id: 7,
            },
            {
                nota: 7,
                alumno_id: 275,
                materia_id: 1,
            },
            {
                nota: 8,
                alumno_id: 275,
                materia_id: 2,
            },
            {
                nota: 9.5,
                alumno_id: 275,
                materia_id: 3,
            },
            {
                nota: 10,
                alumno_id: 275,
                materia_id: 4,
            },
            {
                nota: 9.5,
                alumno_id: 275,
                materia_id: 5,
            },
            {
                nota: 7,
                alumno_id: 275,
                materia_id: 6,
            },
            {
                nota: 9.5,
                alumno_id: 275,
                materia_id: 7,
            },
            {
                nota: 6,
                alumno_id: 276,
                materia_id: 1,
            },
            {
                nota: 7,
                alumno_id: 276,
                materia_id: 2,
            },
            {
                nota: 6,
                alumno_id: 276,
                materia_id: 3,
            },
            {
                nota: 6,
                alumno_id: 276,
                materia_id: 4,
            },
            {
                nota: 9,
                alumno_id: 276,
                materia_id: 5,
            },
            {
                nota: 1,
                alumno_id: 276,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 276,
                materia_id: 7,
            },
            {
                nota: 4,
                alumno_id: 277,
                materia_id: 1,
            },
            {
                nota: 7.5,
                alumno_id: 277,
                materia_id: 2,
            },
            {
                nota: 6,
                alumno_id: 277,
                materia_id: 3,
            },
            {
                nota: 1,
                alumno_id: 277,
                materia_id: 4,
            },
            {
                nota: 8,
                alumno_id: 277,
                materia_id: 5,
            },
            {
                nota: 1,
                alumno_id: 277,
                materia_id: 6,
            },
            {
                nota: 6,
                alumno_id: 277,
                materia_id: 7,
            },
            {
                nota: 4,
                alumno_id: 278,
                materia_id: 1,
            },
            {
                nota: 8,
                alumno_id: 278,
                materia_id: 2,
            },
            {
                nota: 8,
                alumno_id: 278,
                materia_id: 3,
            },
            {
                nota: 7.5,
                alumno_id: 278,
                materia_id: 4,
            },
            {
                nota: 7,
                alumno_id: 278,
                materia_id: 5,
            },
            {
                nota: 6,
                alumno_id: 278,
                materia_id: 6,
            },
            {
                nota: 8,
                alumno_id: 278,
                materia_id: 7,
            },
            {
                nota: 6.5,
                alumno_id: 279,
                materia_id: 1,
            },
            {
                nota: 8,
                alumno_id: 279,
                materia_id: 2,
            },
            {
                nota: 8,
                alumno_id: 279,
                materia_id: 3,
            },
            {
                nota: 9.5,
                alumno_id: 279,
                materia_id: 4,
            },
            {
                nota: 8.5,
                alumno_id: 279,
                materia_id: 5,
            },
            {
                nota: 6.5,
                alumno_id: 279,
                materia_id: 6,
            },
            {
                nota: 8,
                alumno_id: 279,
                materia_id: 7,
            },
            {
                nota: 5,
                alumno_id: 280,
                materia_id: 1,
            },
            {
                nota: 7,
                alumno_id: 280,
                materia_id: 2,
            },
            {
                nota: 8,
                alumno_id: 280,
                materia_id: 3,
            },
            {
                nota: 10,
                alumno_id: 280,
                materia_id: 4,
            },
            {
                nota: 8.5,
                alumno_id: 280,
                materia_id: 5,
            },
            {
                nota: 7,
                alumno_id: 280,
                materia_id: 6,
            },
            {
                nota: 10,
                alumno_id: 280,
                materia_id: 7,
            },
            {
                nota: 1,
                alumno_id: 281,
                materia_id: 1,
            },
            {
                nota: 1,
                alumno_id: 281,
                materia_id: 2,
            },
            {
                nota: 6,
                alumno_id: 281,
                materia_id: 3,
            },
            {
                nota: 1,
                alumno_id: 281,
                materia_id: 4,
            },
            {
                nota: 1,
                alumno_id: 281,
                materia_id: 5,
            },
            {
                nota: 1,
                alumno_id: 281,
                materia_id: 6,
            },
            {
                nota: 7,
                alumno_id: 281,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 282,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 282,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 282,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 282,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 282,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 282,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 282,
                materia_id: 7,
            },
            {
                nota: 4,
                alumno_id: 283,
                materia_id: 1,
            },
            {
                nota: 7,
                alumno_id: 283,
                materia_id: 2,
            },
            {
                nota: 9,
                alumno_id: 283,
                materia_id: 3,
            },
            {
                nota: 8,
                alumno_id: 283,
                materia_id: 4,
            },
            {
                nota: 6.5,
                alumno_id: 283,
                materia_id: 5,
            },
            {
                nota: 6,
                alumno_id: 283,
                materia_id: 6,
            },
            {
                nota: 9,
                alumno_id: 283,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 284,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 284,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 284,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 284,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 284,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 284,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 284,
                materia_id: 7,
            },
            {
                nota: 1,
                alumno_id: 285,
                materia_id: 1,
            },
            {
                nota: 1,
                alumno_id: 285,
                materia_id: 2,
            },
            {
                nota: 6,
                alumno_id: 285,
                materia_id: 3,
            },
            {
                nota: 1,
                alumno_id: 285,
                materia_id: 4,
            },
            {
                nota: 1,
                alumno_id: 285,
                materia_id: 5,
            },
            {
                nota: 1,
                alumno_id: 285,
                materia_id: 6,
            },
            {
                nota: 8,
                alumno_id: 285,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 286,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 286,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 286,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 286,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 286,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 286,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 286,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 287,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 287,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 287,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 287,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 287,
                materia_id: 5,
            },
            {
                nota: 0,
                alumno_id: 287,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 287,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 288,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 288,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 288,
                materia_id: 3,
            },
            {
                nota: 1,
                alumno_id: 288,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 288,
                materia_id: 5,
            },
            {
                nota: 1,
                alumno_id: 288,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 288,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 289,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 289,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 289,
                materia_id: 3,
            },
            {
                nota: 0,
                alumno_id: 289,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 289,
                materia_id: 5,
            },
            {
                nota: 1,
                alumno_id: 289,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 289,
                materia_id: 7,
            },
            {
                nota: 0,
                alumno_id: 290,
                materia_id: 1,
            },
            {
                nota: 0,
                alumno_id: 290,
                materia_id: 2,
            },
            {
                nota: 0,
                alumno_id: 290,
                materia_id: 3,
            },
            {
                nota: 1,
                alumno_id: 290,
                materia_id: 4,
            },
            {
                nota: 0,
                alumno_id: 290,
                materia_id: 5,
            },
            {
                nota: 6,
                alumno_id: 290,
                materia_id: 6,
            },
            {
                nota: 0,
                alumno_id: 290,
                materia_id: 7,
            },
            {
                nota: 1,
                alumno_id: 291,
                materia_id: 8,
            },
            {
                nota: 6,
                alumno_id: 291,
                materia_id: 9,
            },
            {
                nota: 1,
                alumno_id: 291,
                materia_id: 10,
            },
            {
                nota: 7,
                alumno_id: 291,
                materia_id: 11,
            },
            {
                nota: 8,
                alumno_id: 291,
                materia_id: 12,
            },
            {
                nota: 6,
                alumno_id: 291,
                materia_id: 13,
            },
            {
                nota: 8,
                alumno_id: 291,
                materia_id: 14,
            },
            {
                nota: 6,
                alumno_id: 291,
                materia_id: 15,
            },
            {
                nota: 6,
                alumno_id: 292,
                materia_id: 8,
            },
            {
                nota: 6,
                alumno_id: 292,
                materia_id: 9,
            },
            {
                nota: 1,
                alumno_id: 292,
                materia_id: 10,
            },
            {
                nota: 7,
                alumno_id: 292,
                materia_id: 11,
            },
            {
                nota: 6,
                alumno_id: 292,
                materia_id: 12,
            },
            {
                nota: 7,
                alumno_id: 292,
                materia_id: 13,
            },
            {
                nota: 6,
                alumno_id: 292,
                materia_id: 14,
            },
            {
                nota: 6,
                alumno_id: 292,
                materia_id: 15,
            },
            {
                nota: 0,
                alumno_id: 293,
                materia_id: 8,
            },
            {
                nota: 0,
                alumno_id: 293,
                materia_id: 9,
            },
            {
                nota: 0,
                alumno_id: 293,
                materia_id: 10,
            },
            {
                nota: 0,
                alumno_id: 293,
                materia_id: 11,
            },
            {
                nota: 0,
                alumno_id: 293,
                materia_id: 12,
            },
            {
                nota: 0,
                alumno_id: 293,
                materia_id: 13,
            },
            {
                nota: 0,
                alumno_id: 293,
                materia_id: 14,
            },
            {
                nota: 0,
                alumno_id: 293,
                materia_id: 15,
            },
            {
                nota: 5,
                alumno_id: 294,
                materia_id: 8,
            },
            {
                nota: 6,
                alumno_id: 294,
                materia_id: 9,
            },
            {
                nota: 1,
                alumno_id: 294,
                materia_id: 10,
            },
            {
                nota: 2,
                alumno_id: 294,
                materia_id: 11,
            },
            {
                nota: 6,
                alumno_id: 294,
                materia_id: 12,
            },
            {
                nota: 6,
                alumno_id: 294,
                materia_id: 13,
            },
            {
                nota: 6,
                alumno_id: 294,
                materia_id: 14,
            },
            {
                nota: 6,
                alumno_id: 294,
                materia_id: 15,
            },
            {
                nota: 1,
                alumno_id: 295,
                materia_id: 8,
            },
            {
                nota: 6,
                alumno_id: 295,
                materia_id: 9,
            },
            {
                nota: 1,
                alumno_id: 295,
                materia_id: 10,
            },
            {
                nota: 1,
                alumno_id: 295,
                materia_id: 11,
            },
            {
                nota: 6,
                alumno_id: 295,
                materia_id: 12,
            },
            {
                nota: 7,
                alumno_id: 295,
                materia_id: 13,
            },
            {
                nota: 6,
                alumno_id: 295,
                materia_id: 14,
            },
            {
                nota: 1,
                alumno_id: 295,
                materia_id: 15,
            },
            {
                nota: 1,
                alumno_id: 296,
                materia_id: 8,
            },
            {
                nota: 6.5,
                alumno_id: 296,
                materia_id: 9,
            },
            {
                nota: 1,
                alumno_id: 296,
                materia_id: 10,
            },
            {
                nota: 8.5,
                alumno_id: 296,
                materia_id: 11,
            },
            {
                nota: 8,
                alumno_id: 296,
                materia_id: 12,
            },
            {
                nota: 7,
                alumno_id: 296,
                materia_id: 13,
            },
            {
                nota: 8,
                alumno_id: 296,
                materia_id: 14,
            },
            {
                nota: 6,
                alumno_id: 296,
                materia_id: 15,
            },
            {
                nota: 0,
                alumno_id: 297,
                materia_id: 8,
            },
            {
                nota: 0,
                alumno_id: 297,
                materia_id: 9,
            },
            {
                nota: 0,
                alumno_id: 297,
                materia_id: 10,
            },
            {
                nota: 0,
                alumno_id: 297,
                materia_id: 11,
            },
            {
                nota: 0,
                alumno_id: 297,
                materia_id: 12,
            },
            {
                nota: 0,
                alumno_id: 297,
                materia_id: 13,
            },
            {
                nota: 0,
                alumno_id: 297,
                materia_id: 14,
            },
            {
                nota: 0,
                alumno_id: 297,
                materia_id: 15,
            },
            {
                nota: 0,
                alumno_id: 298,
                materia_id: 8,
            },
            {
                nota: 0,
                alumno_id: 298,
                materia_id: 9,
            },
            {
                nota: 0,
                alumno_id: 298,
                materia_id: 10,
            },
            {
                nota: 0,
                alumno_id: 298,
                materia_id: 11,
            },
            {
                nota: 0,
                alumno_id: 298,
                materia_id: 12,
            },
            {
                nota: 0,
                alumno_id: 298,
                materia_id: 13,
            },
            {
                nota: 0,
                alumno_id: 298,
                materia_id: 14,
            },
            {
                nota: 0,
                alumno_id: 298,
                materia_id: 15,
            },
            {
                nota: 1,
                alumno_id: 299,
                materia_id: 8,
            },
            {
                nota: 6,
                alumno_id: 299,
                materia_id: 9,
            },
            {
                nota: 6,
                alumno_id: 299,
                materia_id: 10,
            },
            {
                nota: 6,
                alumno_id: 299,
                materia_id: 11,
            },
            {
                nota: 6,
                alumno_id: 299,
                materia_id: 12,
            },
            {
                nota: 6,
                alumno_id: 299,
                materia_id: 13,
            },
            {
                nota: 8,
                alumno_id: 299,
                materia_id: 14,
            },
            {
                nota: 6,
                alumno_id: 299,
                materia_id: 15,
            },
            {
                nota: 1,
                alumno_id: 300,
                materia_id: 8,
            },
            {
                nota: 6,
                alumno_id: 300,
                materia_id: 9,
            },
            {
                nota: 1,
                alumno_id: 300,
                materia_id: 10,
            },
            {
                nota: 1,
                alumno_id: 300,
                materia_id: 11,
            },
            {
                nota: 8,
                alumno_id: 300,
                materia_id: 12,
            },
            {
                nota: 7,
                alumno_id: 300,
                materia_id: 13,
            },
            {
                nota: 7,
                alumno_id: 300,
                materia_id: 14,
            },
            {
                nota: 1,
                alumno_id: 300,
                materia_id: 15,
            },
            {
                nota: 0,
                alumno_id: 301,
                materia_id: 8,
            },
            {
                nota: 0,
                alumno_id: 301,
                materia_id: 9,
            },
            {
                nota: 0,
                alumno_id: 301,
                materia_id: 10,
            },
            {
                nota: 0,
                alumno_id: 301,
                materia_id: 11,
            },
            {
                nota: 0,
                alumno_id: 301,
                materia_id: 12,
            },
            {
                nota: 0,
                alumno_id: 301,
                materia_id: 13,
            },
            {
                nota: 0,
                alumno_id: 301,
                materia_id: 14,
            },
            {
                nota: 0,
                alumno_id: 301,
                materia_id: 15,
            },
            {
                nota: 1,
                alumno_id: 302,
                materia_id: 8,
            },
            {
                nota: 6.5,
                alumno_id: 302,
                materia_id: 9,
            },
            {
                nota: 1,
                alumno_id: 302,
                materia_id: 10,
            },
            {
                nota: 6,
                alumno_id: 302,
                materia_id: 11,
            },
            {
                nota: 6,
                alumno_id: 302,
                materia_id: 12,
            },
            {
                nota: 7.5,
                alumno_id: 302,
                materia_id: 13,
            },
            {
                nota: 7,
                alumno_id: 302,
                materia_id: 14,
            },
            {
                nota: 6,
                alumno_id: 302,
                materia_id: 15,
            },
            {
                nota: 6,
                alumno_id: 303,
                materia_id: 8,
            },
            {
                nota: 6.5,
                alumno_id: 303,
                materia_id: 9,
            },
            {
                nota: 4,
                alumno_id: 303,
                materia_id: 10,
            },
            {
                nota: 7,
                alumno_id: 303,
                materia_id: 11,
            },
            {
                nota: 6,
                alumno_id: 303,
                materia_id: 12,
            },
            {
                nota: 6,
                alumno_id: 303,
                materia_id: 13,
            },
            {
                nota: 6,
                alumno_id: 303,
                materia_id: 14,
            },
            {
                nota: 6,
                alumno_id: 303,
                materia_id: 15,
            },
            {
                nota: 6,
                alumno_id: 304,
                materia_id: 8,
            },
            {
                nota: 6,
                alumno_id: 304,
                materia_id: 9,
            },
            {
                nota: 1,
                alumno_id: 304,
                materia_id: 10,
            },
            {
                nota: 7.5,
                alumno_id: 304,
                materia_id: 11,
            },
            {
                nota: 8,
                alumno_id: 304,
                materia_id: 12,
            },
            {
                nota: 7,
                alumno_id: 304,
                materia_id: 13,
            },
            {
                nota: 6,
                alumno_id: 304,
                materia_id: 14,
            },
            {
                nota: 6.5,
                alumno_id: 304,
                materia_id: 15,
            },
            {
                nota: 5,
                alumno_id: 305,
                materia_id: 8,
            },
            {
                nota: 6,
                alumno_id: 305,
                materia_id: 9,
            },
            {
                nota: 1,
                alumno_id: 305,
                materia_id: 10,
            },
            {
                nota: 1,
                alumno_id: 305,
                materia_id: 11,
            },
            {
                nota: 8,
                alumno_id: 305,
                materia_id: 12,
            },
            {
                nota: 6,
                alumno_id: 305,
                materia_id: 13,
            },
            {
                nota: 7,
                alumno_id: 305,
                materia_id: 14,
            },
            {
                nota: 6,
                alumno_id: 305,
                materia_id: 15,
            },
            {
                nota: 5,
                alumno_id: 306,
                materia_id: 8,
            },
            {
                nota: 6,
                alumno_id: 306,
                materia_id: 9,
            },
            {
                nota: 1,
                alumno_id: 306,
                materia_id: 10,
            },
            {
                nota: 6,
                alumno_id: 306,
                materia_id: 11,
            },
            {
                nota: 6,
                alumno_id: 306,
                materia_id: 12,
            },
            {
                nota: 7,
                alumno_id: 306,
                materia_id: 13,
            },
            {
                nota: 6,
                alumno_id: 306,
                materia_id: 14,
            },
            {
                nota: 6,
                alumno_id: 306,
                materia_id: 15,
            },
            {
                nota: 7,
                alumno_id: 307,
                materia_id: 8,
            },
            {
                nota: 8,
                alumno_id: 307,
                materia_id: 9,
            },
            {
                nota: 8,
                alumno_id: 307,
                materia_id: 10,
            },
            {
                nota: 10,
                alumno_id: 307,
                materia_id: 11,
            },
            {
                nota: 10,
                alumno_id: 307,
                materia_id: 12,
            },
            {
                nota: 8,
                alumno_id: 307,
                materia_id: 13,
            },
            {
                nota: 8,
                alumno_id: 307,
                materia_id: 14,
            },
            {
                nota: 10,
                alumno_id: 307,
                materia_id: 15,
            },
            {
                nota: 1,
                alumno_id: 308,
                materia_id: 8,
            },
            {
                nota: 7,
                alumno_id: 308,
                materia_id: 9,
            },
            {
                nota: 1,
                alumno_id: 308,
                materia_id: 10,
            },
            {
                nota: 9,
                alumno_id: 308,
                materia_id: 11,
            },
            {
                nota: 8,
                alumno_id: 308,
                materia_id: 12,
            },
            {
                nota: 7,
                alumno_id: 308,
                materia_id: 13,
            },
            {
                nota: 7,
                alumno_id: 308,
                materia_id: 14,
            },
            {
                nota: 6,
                alumno_id: 308,
                materia_id: 15,
            },
            {
                nota: 1,
                alumno_id: 309,
                materia_id: 8,
            },
            {
                nota: 7,
                alumno_id: 309,
                materia_id: 9,
            },
            {
                nota: 1,
                alumno_id: 309,
                materia_id: 10,
            },
            {
                nota: 6,
                alumno_id: 309,
                materia_id: 11,
            },
            {
                nota: 6,
                alumno_id: 309,
                materia_id: 12,
            },
            {
                nota: 6,
                alumno_id: 309,
                materia_id: 13,
            },
            {
                nota: 6,
                alumno_id: 309,
                materia_id: 14,
            },
            {
                nota: 1,
                alumno_id: 309,
                materia_id: 15,
            },
            {
                nota: 2,
                alumno_id: 310,
                materia_id: 8,
            },
            {
                nota: 6,
                alumno_id: 310,
                materia_id: 9,
            },
            {
                nota: 4,
                alumno_id: 310,
                materia_id: 10,
            },
            {
                nota: 7,
                alumno_id: 310,
                materia_id: 11,
            },
            {
                nota: 10,
                alumno_id: 310,
                materia_id: 12,
            },
            {
                nota: 8,
                alumno_id: 310,
                materia_id: 13,
            },
            {
                nota: 7,
                alumno_id: 310,
                materia_id: 14,
            },
            {
                nota: 7,
                alumno_id: 310,
                materia_id: 15,
            },
            {
                nota: 7,
                alumno_id: 311,
                materia_id: 8,
            },
            {
                nota: 7,
                alumno_id: 311,
                materia_id: 9,
            },
            {
                nota: 1,
                alumno_id: 311,
                materia_id: 10,
            },
            {
                nota: 6,
                alumno_id: 311,
                materia_id: 11,
            },
            {
                nota: 8,
                alumno_id: 311,
                materia_id: 12,
            },
            {
                nota: 7,
                alumno_id: 311,
                materia_id: 13,
            },
            {
                nota: 7,
                alumno_id: 311,
                materia_id: 14,
            },
            {
                nota: 6,
                alumno_id: 311,
                materia_id: 15,
            },
            {
                nota: 0,
                alumno_id: 312,
                materia_id: 8,
            },
            {
                nota: 0,
                alumno_id: 312,
                materia_id: 9,
            },
            {
                nota: 0,
                alumno_id: 312,
                materia_id: 10,
            },
            {
                nota: 0,
                alumno_id: 312,
                materia_id: 11,
            },
            {
                nota: 6,
                alumno_id: 312,
                materia_id: 12,
            },
            {
                nota: 0,
                alumno_id: 312,
                materia_id: 13,
            },
            {
                nota: 0,
                alumno_id: 312,
                materia_id: 14,
            },
            {
                nota: 0,
                alumno_id: 312,
                materia_id: 15,
            },
            {
                nota: 7,
                alumno_id: 313,
                materia_id: 8,
            },
            {
                nota: 6,
                alumno_id: 313,
                materia_id: 9,
            },
            {
                nota: 1,
                alumno_id: 313,
                materia_id: 10,
            },
            {
                nota: 7,
                alumno_id: 313,
                materia_id: 11,
            },
            {
                nota: 8,
                alumno_id: 313,
                materia_id: 12,
            },
            {
                nota: 7,
                alumno_id: 313,
                materia_id: 13,
            },
            {
                nota: 7,
                alumno_id: 313,
                materia_id: 14,
            },
            {
                nota: 6,
                alumno_id: 313,
                materia_id: 15,
            },
            {
                nota: 1,
                alumno_id: 314,
                materia_id: 8,
            },
            {
                nota: 7,
                alumno_id: 314,
                materia_id: 9,
            },
            {
                nota: 4,
                alumno_id: 314,
                materia_id: 10,
            },
            {
                nota: 6,
                alumno_id: 314,
                materia_id: 11,
            },
            {
                nota: 8,
                alumno_id: 314,
                materia_id: 12,
            },
            {
                nota: 7,
                alumno_id: 314,
                materia_id: 13,
            },
            {
                nota: 7,
                alumno_id: 314,
                materia_id: 14,
            },
            {
                nota: 6,
                alumno_id: 314,
                materia_id: 15,
            },
            {
                nota: 1,
                alumno_id: 315,
                materia_id: 8,
            },
            {
                nota: 6,
                alumno_id: 315,
                materia_id: 9,
            },
            {
                nota: 4,
                alumno_id: 315,
                materia_id: 10,
            },
            {
                nota: 1,
                alumno_id: 315,
                materia_id: 11,
            },
            {
                nota: 6,
                alumno_id: 315,
                materia_id: 12,
            },
            {
                nota: 6,
                alumno_id: 315,
                materia_id: 13,
            },
            {
                nota: 6,
                alumno_id: 315,
                materia_id: 14,
            },
            {
                nota: 6,
                alumno_id: 315,
                materia_id: 15,
            },
            {
                nota: 6,
                alumno_id: 316,
                materia_id: 8,
            },
            {
                nota: 6.5,
                alumno_id: 316,
                materia_id: 9,
            },
            {
                nota: 6,
                alumno_id: 316,
                materia_id: 10,
            },
            {
                nota: 6,
                alumno_id: 316,
                materia_id: 11,
            },
            {
                nota: 6,
                alumno_id: 316,
                materia_id: 12,
            },
            {
                nota: 8.5,
                alumno_id: 316,
                materia_id: 13,
            },
            {
                nota: 6,
                alumno_id: 316,
                materia_id: 14,
            },
            {
                nota: 8,
                alumno_id: 316,
                materia_id: 15,
            },
            {
                nota: 2,
                alumno_id: 317,
                materia_id: 8,
            },
            {
                nota: 6,
                alumno_id: 317,
                materia_id: 9,
            },
            {
                nota: 1,
                alumno_id: 317,
                materia_id: 10,
            },
            {
                nota: 6,
                alumno_id: 317,
                materia_id: 11,
            },
            {
                nota: 8,
                alumno_id: 317,
                materia_id: 12,
            },
            {
                nota: 6.5,
                alumno_id: 317,
                materia_id: 13,
            },
            {
                nota: 6,
                alumno_id: 317,
                materia_id: 14,
            },
            {
                nota: 6,
                alumno_id: 317,
                materia_id: 15,
            },
            {
                nota: 6,
                alumno_id: 318,
                materia_id: 8,
            },
            {
                nota: 6,
                alumno_id: 318,
                materia_id: 9,
            },
            {
                nota: 6,
                alumno_id: 318,
                materia_id: 10,
            },
            {
                nota: 7,
                alumno_id: 318,
                materia_id: 11,
            },
            {
                nota: 8,
                alumno_id: 318,
                materia_id: 12,
            },
            {
                nota: 8.5,
                alumno_id: 318,
                materia_id: 13,
            },
            {
                nota: 6,
                alumno_id: 318,
                materia_id: 14,
            },
            {
                nota: 6,
                alumno_id: 318,
                materia_id: 15,
            },
            {
                nota: 7,
                alumno_id: 319,
                materia_id: 8,
            },
            {
                nota: 8,
                alumno_id: 319,
                materia_id: 9,
            },
            {
                nota: 8,
                alumno_id: 319,
                materia_id: 10,
            },
            {
                nota: 8,
                alumno_id: 319,
                materia_id: 11,
            },
            {
                nota: 10,
                alumno_id: 319,
                materia_id: 12,
            },
            {
                nota: 8.5,
                alumno_id: 319,
                materia_id: 13,
            },
            {
                nota: 6,
                alumno_id: 319,
                materia_id: 14,
            },
            {
                nota: 7,
                alumno_id: 319,
                materia_id: 15,
            },
            {
                nota: 1,
                alumno_id: 320,
                materia_id: 8,
            },
            {
                nota: 7,
                alumno_id: 320,
                materia_id: 9,
            },
            {
                nota: 7,
                alumno_id: 320,
                materia_id: 10,
            },
            {
                nota: 7.5,
                alumno_id: 320,
                materia_id: 11,
            },
            {
                nota: 8,
                alumno_id: 320,
                materia_id: 12,
            },
            {
                nota: 7,
                alumno_id: 320,
                materia_id: 13,
            },
            {
                nota: 7,
                alumno_id: 320,
                materia_id: 14,
            },
            {
                nota: 6,
                alumno_id: 320,
                materia_id: 15,
            },
            {
                nota: 7,
                alumno_id: 321,
                materia_id: 8,
            },
            {
                nota: 7,
                alumno_id: 321,
                materia_id: 9,
            },
            {
                nota: 6,
                alumno_id: 321,
                materia_id: 10,
            },
            {
                nota: 7.5,
                alumno_id: 321,
                materia_id: 11,
            },
            {
                nota: 8,
                alumno_id: 321,
                materia_id: 12,
            },
            {
                nota: 8,
                alumno_id: 321,
                materia_id: 13,
            },
            {
                nota: 6,
                alumno_id: 321,
                materia_id: 14,
            },
            {
                nota: 7,
                alumno_id: 321,
                materia_id: 15,
            },
            {
                nota: 6,
                alumno_id: 322,
                materia_id: 8,
            },
            {
                nota: 6,
                alumno_id: 322,
                materia_id: 9,
            },
            {
                nota: 10,
                alumno_id: 322,
                materia_id: 10,
            },
            {
                nota: 7,
                alumno_id: 322,
                materia_id: 11,
            },
            {
                nota: 10,
                alumno_id: 322,
                materia_id: 12,
            },
            {
                nota: 8,
                alumno_id: 322,
                materia_id: 13,
            },
            {
                nota: 7,
                alumno_id: 322,
                materia_id: 14,
            },
            {
                nota: 6,
                alumno_id: 322,
                materia_id: 15,
            },
            {
                nota: 1,
                alumno_id: 323,
                materia_id: 8,
            },
            {
                nota: 6,
                alumno_id: 323,
                materia_id: 9,
            },
            {
                nota: 1,
                alumno_id: 323,
                materia_id: 10,
            },
            {
                nota: 6.5,
                alumno_id: 323,
                materia_id: 11,
            },
            {
                nota: 6,
                alumno_id: 323,
                materia_id: 12,
            },
            {
                nota: 7,
                alumno_id: 323,
                materia_id: 13,
            },
            {
                nota: 6,
                alumno_id: 323,
                materia_id: 14,
            },
            {
                nota: 7,
                alumno_id: 323,
                materia_id: 15,
            },
            {
                nota: 8,
                alumno_id: 324,
                materia_id: 8,
            },
            {
                nota: 6.5,
                alumno_id: 324,
                materia_id: 9,
            },
            {
                nota: 8.5,
                alumno_id: 324,
                materia_id: 10,
            },
            {
                nota: 9,
                alumno_id: 324,
                materia_id: 11,
            },
            {
                nota: 7,
                alumno_id: 324,
                materia_id: 12,
            },
            {
                nota: 8.5,
                alumno_id: 324,
                materia_id: 13,
            },
            {
                nota: 6,
                alumno_id: 324,
                materia_id: 14,
            },
            {
                nota: 7,
                alumno_id: 324,
                materia_id: 15,
            },
            {
                nota: 1,
                alumno_id: 325,
                materia_id: 8,
            },
            {
                nota: 6,
                alumno_id: 325,
                materia_id: 9,
            },
            {
                nota: 4,
                alumno_id: 325,
                materia_id: 10,
            },
            {
                nota: 6,
                alumno_id: 325,
                materia_id: 11,
            },
            {
                nota: 10,
                alumno_id: 325,
                materia_id: 12,
            },
            {
                nota: 8,
                alumno_id: 325,
                materia_id: 13,
            },
            {
                nota: 6,
                alumno_id: 325,
                materia_id: 14,
            },
            {
                nota: 7,
                alumno_id: 325,
                materia_id: 15,
            },
            {
                nota: 0,
                alumno_id: 326,
                materia_id: 8,
            },
            {
                nota: 0,
                alumno_id: 326,
                materia_id: 9,
            },
            {
                nota: 0,
                alumno_id: 326,
                materia_id: 10,
            },
            {
                nota: 0,
                alumno_id: 326,
                materia_id: 11,
            },
            {
                nota: 0,
                alumno_id: 326,
                materia_id: 12,
            },
            {
                nota: 0,
                alumno_id: 326,
                materia_id: 13,
            },
            {
                nota: 0,
                alumno_id: 326,
                materia_id: 14,
            },
            {
                nota: 0,
                alumno_id: 326,
                materia_id: 15,
            },
            {
                nota: 9,
                alumno_id: 327,
                materia_id: 8,
            },
            {
                nota: 7.5,
                alumno_id: 327,
                materia_id: 9,
            },
            {
                nota: 8.5,
                alumno_id: 327,
                materia_id: 10,
            },
            {
                nota: 8,
                alumno_id: 327,
                materia_id: 11,
            },
            {
                nota: 8,
                alumno_id: 327,
                materia_id: 12,
            },
            {
                nota: 8.5,
                alumno_id: 327,
                materia_id: 13,
            },
            {
                nota: 7,
                alumno_id: 327,
                materia_id: 14,
            },
            {
                nota: 7,
                alumno_id: 327,
                materia_id: 15,
            },
            {
                nota: 0,
                alumno_id: 328,
                materia_id: 8,
            },
            {
                nota: 0,
                alumno_id: 328,
                materia_id: 9,
            },
            {
                nota: 0,
                alumno_id: 328,
                materia_id: 10,
            },
            {
                nota: 6,
                alumno_id: 328,
                materia_id: 11,
            },
            {
                nota: 0,
                alumno_id: 328,
                materia_id: 12,
            },
            {
                nota: 0,
                alumno_id: 328,
                materia_id: 13,
            },
            {
                nota: 0,
                alumno_id: 328,
                materia_id: 14,
            },
            {
                nota: 0,
                alumno_id: 328,
                materia_id: 15,
            },
            {
                nota: 1,
                alumno_id: 329,
                materia_id: 8,
            },
            {
                nota: 0,
                alumno_id: 329,
                materia_id: 9,
            },
            {
                nota: 0,
                alumno_id: 329,
                materia_id: 10,
            },
            {
                nota: 1,
                alumno_id: 329,
                materia_id: 11,
            },
            {
                nota: 0,
                alumno_id: 329,
                materia_id: 12,
            },
            {
                nota: 0,
                alumno_id: 329,
                materia_id: 13,
            },
            {
                nota: 0,
                alumno_id: 329,
                materia_id: 14,
            },
            {
                nota: 0,
                alumno_id: 329,
                materia_id: 15,
            },
            {
                nota: 0,
                alumno_id: 330,
                materia_id: 8,
            },
            {
                nota: 0,
                alumno_id: 330,
                materia_id: 9,
            },
            {
                nota: 0,
                alumno_id: 330,
                materia_id: 10,
            },
            {
                nota: 0,
                alumno_id: 330,
                materia_id: 11,
            },
            {
                nota: 0,
                alumno_id: 330,
                materia_id: 12,
            },
            {
                nota: 0,
                alumno_id: 330,
                materia_id: 13,
            },
            {
                nota: 0,
                alumno_id: 330,
                materia_id: 14,
            },
            {
                nota: 0,
                alumno_id: 330,
                materia_id: 15,
            },
            {
                nota: 0,
                alumno_id: 331,
                materia_id: 8,
            },
            {
                nota: 0,
                alumno_id: 331,
                materia_id: 9,
            },
            {
                nota: 0,
                alumno_id: 331,
                materia_id: 10,
            },
            {
                nota: 0,
                alumno_id: 331,
                materia_id: 11,
            },
            {
                nota: 0,
                alumno_id: 331,
                materia_id: 12,
            },
            {
                nota: 0,
                alumno_id: 331,
                materia_id: 13,
            },
            {
                nota: 0,
                alumno_id: 331,
                materia_id: 14,
            },
            {
                nota: 0,
                alumno_id: 331,
                materia_id: 15,
            },
            {
                nota: 0,
                alumno_id: 332,
                materia_id: 8,
            },
            {
                nota: 0,
                alumno_id: 332,
                materia_id: 9,
            },
            {
                nota: 0,
                alumno_id: 332,
                materia_id: 10,
            },
            {
                nota: 0,
                alumno_id: 332,
                materia_id: 11,
            },
            {
                nota: 0,
                alumno_id: 332,
                materia_id: 12,
            },
            {
                nota: 0,
                alumno_id: 332,
                materia_id: 13,
            },
            {
                nota: 0,
                alumno_id: 332,
                materia_id: 14,
            },
            {
                nota: 0,
                alumno_id: 332,
                materia_id: 15,
            },
            {
                nota: 0,
                alumno_id: 333,
                materia_id: 8,
            },
            {
                nota: 0,
                alumno_id: 333,
                materia_id: 9,
            },
            {
                nota: 0,
                alumno_id: 333,
                materia_id: 10,
            },
            {
                nota: 0,
                alumno_id: 333,
                materia_id: 11,
            },
            {
                nota: 0,
                alumno_id: 333,
                materia_id: 12,
            },
            {
                nota: 0,
                alumno_id: 333,
                materia_id: 13,
            },
            {
                nota: 0,
                alumno_id: 333,
                materia_id: 14,
            },
            {
                nota: 0,
                alumno_id: 333,
                materia_id: 15,
            },
            {
                nota: 0,
                alumno_id: 334,
                materia_id: 8,
            },
            {
                nota: 0,
                alumno_id: 334,
                materia_id: 9,
            },
            {
                nota: 0,
                alumno_id: 334,
                materia_id: 10,
            },
            {
                nota: 0,
                alumno_id: 334,
                materia_id: 11,
            },
            {
                nota: 0,
                alumno_id: 334,
                materia_id: 12,
            },
            {
                nota: 0,
                alumno_id: 334,
                materia_id: 13,
            },
            {
                nota: 0,
                alumno_id: 334,
                materia_id: 14,
            },
            {
                nota: 0,
                alumno_id: 334,
                materia_id: 15,
            },
            {
                nota: 1,
                alumno_id: 335,
                materia_id: 8,
            },
            {
                nota: 6.5,
                alumno_id: 335,
                materia_id: 9,
            },
            {
                nota: 1,
                alumno_id: 335,
                materia_id: 10,
            },
            {
                nota: 6,
                alumno_id: 335,
                materia_id: 11,
            },
            {
                nota: 8,
                alumno_id: 335,
                materia_id: 12,
            },
            {
                nota: 7.5,
                alumno_id: 335,
                materia_id: 13,
            },
            {
                nota: 7,
                alumno_id: 335,
                materia_id: 14,
            },
            {
                nota: 7,
                alumno_id: 335,
                materia_id: 15,
            },
            {
                nota: 1,
                alumno_id: 336,
                materia_id: 8,
            },
            {
                nota: 6,
                alumno_id: 336,
                materia_id: 9,
            },
            {
                nota: 1,
                alumno_id: 336,
                materia_id: 10,
            },
            {
                nota: 6,
                alumno_id: 336,
                materia_id: 11,
            },
            {
                nota: 6,
                alumno_id: 336,
                materia_id: 12,
            },
            {
                nota: 7,
                alumno_id: 336,
                materia_id: 13,
            },
            {
                nota: 6.5,
                alumno_id: 336,
                materia_id: 14,
            },
            {
                nota: 6,
                alumno_id: 336,
                materia_id: 15,
            },
            {
                nota: 7,
                alumno_id: 337,
                materia_id: 8,
            },
            {
                nota: 6,
                alumno_id: 337,
                materia_id: 9,
            },
            {
                nota: 4,
                alumno_id: 337,
                materia_id: 10,
            },
            {
                nota: 6,
                alumno_id: 337,
                materia_id: 11,
            },
            {
                nota: 6,
                alumno_id: 337,
                materia_id: 12,
            },
            {
                nota: 7,
                alumno_id: 337,
                materia_id: 13,
            },
            {
                nota: 6,
                alumno_id: 337,
                materia_id: 14,
            },
            {
                nota: 6,
                alumno_id: 337,
                materia_id: 15,
            },
            {
                nota: 1,
                alumno_id: 338,
                materia_id: 8,
            },
            {
                nota: 6,
                alumno_id: 338,
                materia_id: 9,
            },
            {
                nota: 1,
                alumno_id: 338,
                materia_id: 10,
            },
            {
                nota: 6,
                alumno_id: 338,
                materia_id: 11,
            },
            {
                nota: 8,
                alumno_id: 338,
                materia_id: 12,
            },
            {
                nota: 7,
                alumno_id: 338,
                materia_id: 13,
            },
            {
                nota: 6,
                alumno_id: 338,
                materia_id: 14,
            },
            {
                nota: 6,
                alumno_id: 338,
                materia_id: 15,
            },
            {
                nota: 4,
                alumno_id: 339,
                materia_id: 8,
            },
            {
                nota: 7,
                alumno_id: 339,
                materia_id: 9,
            },
            {
                nota: 6,
                alumno_id: 339,
                materia_id: 10,
            },
            {
                nota: 6,
                alumno_id: 339,
                materia_id: 11,
            },
            {
                nota: 8,
                alumno_id: 339,
                materia_id: 12,
            },
            {
                nota: 8,
                alumno_id: 339,
                materia_id: 13,
            },
            {
                nota: 6.5,
                alumno_id: 339,
                materia_id: 14,
            },
            {
                nota: 6,
                alumno_id: 339,
                materia_id: 15,
            },
            {
                nota: 6,
                alumno_id: 340,
                materia_id: 8,
            },
            {
                nota: 6.5,
                alumno_id: 340,
                materia_id: 9,
            },
            {
                nota: 6,
                alumno_id: 340,
                materia_id: 10,
            },
            {
                nota: 6,
                alumno_id: 340,
                materia_id: 11,
            },
            {
                nota: 8,
                alumno_id: 340,
                materia_id: 12,
            },
            {
                nota: 7.5,
                alumno_id: 340,
                materia_id: 13,
            },
            {
                nota: 6,
                alumno_id: 340,
                materia_id: 14,
            },
            {
                nota: 9.5,
                alumno_id: 340,
                materia_id: 15,
            },
            {
                nota: 6,
                alumno_id: 341,
                materia_id: 8,
            },
            {
                nota: 6,
                alumno_id: 341,
                materia_id: 9,
            },
            {
                nota: 6,
                alumno_id: 341,
                materia_id: 10,
            },
            {
                nota: 8,
                alumno_id: 341,
                materia_id: 11,
            },
            {
                nota: 8,
                alumno_id: 341,
                materia_id: 12,
            },
            {
                nota: 7,
                alumno_id: 341,
                materia_id: 13,
            },
            {
                nota: 6,
                alumno_id: 341,
                materia_id: 14,
            },
            {
                nota: 10,
                alumno_id: 341,
                materia_id: 15,
            },
            {
                nota: 0,
                alumno_id: 342,
                materia_id: 8,
            },
            {
                nota: 0,
                alumno_id: 342,
                materia_id: 9,
            },
            {
                nota: 0,
                alumno_id: 342,
                materia_id: 10,
            },
            {
                nota: 0,
                alumno_id: 342,
                materia_id: 11,
            },
            {
                nota: 0,
                alumno_id: 342,
                materia_id: 12,
            },
            {
                nota: 0,
                alumno_id: 342,
                materia_id: 13,
            },
            {
                nota: 0,
                alumno_id: 342,
                materia_id: 14,
            },
            {
                nota: 0,
                alumno_id: 342,
                materia_id: 15,
            },
            {
                nota: 4,
                alumno_id: 343,
                materia_id: 8,
            },
            {
                nota: 6,
                alumno_id: 343,
                materia_id: 9,
            },
            {
                nota: 6,
                alumno_id: 343,
                materia_id: 10,
            },
            {
                nota: 6,
                alumno_id: 343,
                materia_id: 11,
            },
            {
                nota: 8,
                alumno_id: 343,
                materia_id: 12,
            },
            {
                nota: 7,
                alumno_id: 343,
                materia_id: 13,
            },
            {
                nota: 6.5,
                alumno_id: 343,
                materia_id: 14,
            },
            {
                nota: 7.5,
                alumno_id: 343,
                materia_id: 15,
            },
            {
                nota: 0,
                alumno_id: 344,
                materia_id: 8,
            },
            {
                nota: 0,
                alumno_id: 344,
                materia_id: 9,
            },
            {
                nota: 0,
                alumno_id: 344,
                materia_id: 10,
            },
            {
                nota: 1,
                alumno_id: 344,
                materia_id: 11,
            },
            {
                nota: 8,
                alumno_id: 344,
                materia_id: 12,
            },
            {
                nota: 0,
                alumno_id: 344,
                materia_id: 13,
            },
            {
                nota: 0,
                alumno_id: 344,
                materia_id: 14,
            },
            {
                nota: 0,
                alumno_id: 344,
                materia_id: 15,
            },
            {
                nota: 5,
                alumno_id: 345,
                materia_id: 8,
            },
            {
                nota: 7,
                alumno_id: 345,
                materia_id: 9,
            },
            {
                nota: 1,
                alumno_id: 345,
                materia_id: 10,
            },
            {
                nota: 6,
                alumno_id: 345,
                materia_id: 11,
            },
            {
                nota: 8,
                alumno_id: 345,
                materia_id: 12,
            },
            {
                nota: 7,
                alumno_id: 345,
                materia_id: 13,
            },
            {
                nota: 7,
                alumno_id: 345,
                materia_id: 14,
            },
            {
                nota: 7,
                alumno_id: 345,
                materia_id: 15,
            },
            {
                nota: 6,
                alumno_id: 346,
                materia_id: 8,
            },
            {
                nota: 7,
                alumno_id: 346,
                materia_id: 9,
            },
            {
                nota: 6,
                alumno_id: 346,
                materia_id: 10,
            },
            {
                nota: 6,
                alumno_id: 346,
                materia_id: 11,
            },
            {
                nota: 8,
                alumno_id: 346,
                materia_id: 12,
            },
            {
                nota: 7,
                alumno_id: 346,
                materia_id: 13,
            },
            {
                nota: 6.5,
                alumno_id: 346,
                materia_id: 14,
            },
            {
                nota: 6.5,
                alumno_id: 346,
                materia_id: 15,
            },
            {
                nota: 6,
                alumno_id: 347,
                materia_id: 8,
            },
            {
                nota: 6.5,
                alumno_id: 347,
                materia_id: 9,
            },
            {
                nota: 6,
                alumno_id: 347,
                materia_id: 10,
            },
            {
                nota: 6,
                alumno_id: 347,
                materia_id: 11,
            },
            {
                nota: 8,
                alumno_id: 347,
                materia_id: 12,
            },
            {
                nota: 7,
                alumno_id: 347,
                materia_id: 13,
            },
            {
                nota: 6,
                alumno_id: 347,
                materia_id: 14,
            },
            {
                nota: 9,
                alumno_id: 347,
                materia_id: 15,
            },
            {
                nota: 5,
                alumno_id: 348,
                materia_id: 8,
            },
            {
                nota: 7,
                alumno_id: 348,
                materia_id: 9,
            },
            {
                nota: 6,
                alumno_id: 348,
                materia_id: 10,
            },
            {
                nota: 1,
                alumno_id: 348,
                materia_id: 11,
            },
            {
                nota: 8,
                alumno_id: 348,
                materia_id: 12,
            },
            {
                nota: 7,
                alumno_id: 348,
                materia_id: 13,
            },
            {
                nota: 7.5,
                alumno_id: 348,
                materia_id: 14,
            },
            {
                nota: 6,
                alumno_id: 348,
                materia_id: 15,
            },
            {
                nota: 6,
                alumno_id: 349,
                materia_id: 8,
            },
            {
                nota: 6.5,
                alumno_id: 349,
                materia_id: 9,
            },
            {
                nota: 6,
                alumno_id: 349,
                materia_id: 10,
            },
            {
                nota: 8,
                alumno_id: 349,
                materia_id: 11,
            },
            {
                nota: 8,
                alumno_id: 349,
                materia_id: 12,
            },
            {
                nota: 7,
                alumno_id: 349,
                materia_id: 13,
            },
            {
                nota: 6.5,
                alumno_id: 349,
                materia_id: 14,
            },
            {
                nota: 9,
                alumno_id: 349,
                materia_id: 15,
            },
            {
                nota: 1,
                alumno_id: 350,
                materia_id: 8,
            },
            {
                nota: 6,
                alumno_id: 350,
                materia_id: 9,
            },
            {
                nota: 4,
                alumno_id: 350,
                materia_id: 10,
            },
            {
                nota: 1,
                alumno_id: 350,
                materia_id: 11,
            },
            {
                nota: 8,
                alumno_id: 350,
                materia_id: 12,
            },
            {
                nota: 6,
                alumno_id: 350,
                materia_id: 13,
            },
            {
                nota: 6,
                alumno_id: 350,
                materia_id: 14,
            },
            {
                nota: 6,
                alumno_id: 350,
                materia_id: 15,
            },
            {
                nota: 1,
                alumno_id: 351,
                materia_id: 8,
            },
            {
                nota: 6,
                alumno_id: 351,
                materia_id: 9,
            },
            {
                nota: 1,
                alumno_id: 351,
                materia_id: 10,
            },
            {
                nota: 1,
                alumno_id: 351,
                materia_id: 11,
            },
            {
                nota: 6,
                alumno_id: 351,
                materia_id: 12,
            },
            {
                nota: 6,
                alumno_id: 351,
                materia_id: 13,
            },
            {
                nota: 6,
                alumno_id: 351,
                materia_id: 14,
            },
            {
                nota: 1,
                alumno_id: 351,
                materia_id: 15,
            },
            {
                nota: 1,
                alumno_id: 352,
                materia_id: 8,
            },
            {
                nota: 6,
                alumno_id: 352,
                materia_id: 9,
            },
            {
                nota: 1,
                alumno_id: 352,
                materia_id: 10,
            },
            {
                nota: 1,
                alumno_id: 352,
                materia_id: 11,
            },
            {
                nota: 8,
                alumno_id: 352,
                materia_id: 12,
            },
            {
                nota: 6,
                alumno_id: 352,
                materia_id: 13,
            },
            {
                nota: 6,
                alumno_id: 352,
                materia_id: 14,
            },
            {
                nota: 1,
                alumno_id: 352,
                materia_id: 15,
            },
            {
                nota: 1,
                alumno_id: 353,
                materia_id: 8,
            },
            {
                nota: 6,
                alumno_id: 353,
                materia_id: 9,
            },
            {
                nota: 6,
                alumno_id: 353,
                materia_id: 10,
            },
            {
                nota: 6,
                alumno_id: 353,
                materia_id: 11,
            },
            {
                nota: 8,
                alumno_id: 353,
                materia_id: 12,
            },
            {
                nota: 6,
                alumno_id: 353,
                materia_id: 13,
            },
            {
                nota: 6,
                alumno_id: 353,
                materia_id: 14,
            },
            {
                nota: 6,
                alumno_id: 353,
                materia_id: 15,
            },
            {
                nota: 0,
                alumno_id: 354,
                materia_id: 8,
            },
            {
                nota: 0,
                alumno_id: 354,
                materia_id: 9,
            },
            {
                nota: 0,
                alumno_id: 354,
                materia_id: 10,
            },
            {
                nota: 0,
                alumno_id: 354,
                materia_id: 11,
            },
            {
                nota: 0,
                alumno_id: 354,
                materia_id: 12,
            },
            {
                nota: 0,
                alumno_id: 354,
                materia_id: 13,
            },
            {
                nota: 0,
                alumno_id: 354,
                materia_id: 14,
            },
            {
                nota: 0,
                alumno_id: 354,
                materia_id: 15,
            },
            {
                nota: 0,
                alumno_id: 355,
                materia_id: 8,
            },
            {
                nota: 0,
                alumno_id: 355,
                materia_id: 9,
            },
            {
                nota: 0,
                alumno_id: 355,
                materia_id: 10,
            },
            {
                nota: 0,
                alumno_id: 355,
                materia_id: 11,
            },
            {
                nota: 0,
                alumno_id: 355,
                materia_id: 12,
            },
            {
                nota: 0,
                alumno_id: 355,
                materia_id: 13,
            },
            {
                nota: 0,
                alumno_id: 355,
                materia_id: 14,
            },
            {
                nota: 0,
                alumno_id: 355,
                materia_id: 15,
            },
            {
                nota: 5,
                alumno_id: 356,
                materia_id: 8,
            },
            {
                nota: 6,
                alumno_id: 356,
                materia_id: 9,
            },
            {
                nota: 1,
                alumno_id: 356,
                materia_id: 10,
            },
            {
                nota: 4,
                alumno_id: 356,
                materia_id: 11,
            },
            {
                nota: 6,
                alumno_id: 356,
                materia_id: 12,
            },
            {
                nota: 7,
                alumno_id: 356,
                materia_id: 13,
            },
            {
                nota: 8,
                alumno_id: 356,
                materia_id: 14,
            },
            {
                nota: 6,
                alumno_id: 356,
                materia_id: 15,
            },
            {
                nota: 0,
                alumno_id: 357,
                materia_id: 8,
            },
            {
                nota: 0,
                alumno_id: 357,
                materia_id: 9,
            },
            {
                nota: 1,
                alumno_id: 357,
                materia_id: 10,
            },
            {
                nota: 0,
                alumno_id: 357,
                materia_id: 11,
            },
            {
                nota: 0,
                alumno_id: 357,
                materia_id: 12,
            },
            {
                nota: 0,
                alumno_id: 357,
                materia_id: 13,
            },
            {
                nota: 0,
                alumno_id: 357,
                materia_id: 14,
            },
            {
                nota: 0,
                alumno_id: 357,
                materia_id: 15,
            },
            {
                nota: 4,
                alumno_id: 358,
                materia_id: 8,
            },
            {
                nota: 7,
                alumno_id: 358,
                materia_id: 9,
            },
            {
                nota: 6,
                alumno_id: 358,
                materia_id: 10,
            },
            {
                nota: 1,
                alumno_id: 358,
                materia_id: 11,
            },
            {
                nota: 8,
                alumno_id: 358,
                materia_id: 12,
            },
            {
                nota: 7,
                alumno_id: 358,
                materia_id: 13,
            },
            {
                nota: 6.5,
                alumno_id: 358,
                materia_id: 14,
            },
            {
                nota: 6,
                alumno_id: 358,
                materia_id: 15,
            },
            {
                nota: 1,
                alumno_id: 359,
                materia_id: 8,
            },
            {
                nota: 6,
                alumno_id: 359,
                materia_id: 9,
            },
            {
                nota: 1,
                alumno_id: 359,
                materia_id: 10,
            },
            {
                nota: 6,
                alumno_id: 359,
                materia_id: 11,
            },
            {
                nota: 8,
                alumno_id: 359,
                materia_id: 12,
            },
            {
                nota: 7,
                alumno_id: 359,
                materia_id: 13,
            },
            {
                nota: 6.5,
                alumno_id: 359,
                materia_id: 14,
            },
            {
                nota: 6,
                alumno_id: 359,
                materia_id: 15,
            },
            {
                nota: 4,
                alumno_id: 360,
                materia_id: 8,
            },
            {
                nota: 6.5,
                alumno_id: 360,
                materia_id: 9,
            },
            {
                nota: 6,
                alumno_id: 360,
                materia_id: 10,
            },
            {
                nota: 6,
                alumno_id: 360,
                materia_id: 11,
            },
            {
                nota: 8,
                alumno_id: 360,
                materia_id: 12,
            },
            {
                nota: 7,
                alumno_id: 360,
                materia_id: 13,
            },
            {
                nota: 7.5,
                alumno_id: 360,
                materia_id: 14,
            },
            {
                nota: 7,
                alumno_id: 360,
                materia_id: 15,
            },
            {
                nota: 1,
                alumno_id: 361,
                materia_id: 8,
            },
            {
                nota: 6,
                alumno_id: 361,
                materia_id: 9,
            },
            {
                nota: 1,
                alumno_id: 361,
                materia_id: 10,
            },
            {
                nota: 6,
                alumno_id: 361,
                materia_id: 11,
            },
            {
                nota: 8,
                alumno_id: 361,
                materia_id: 12,
            },
            {
                nota: 7,
                alumno_id: 361,
                materia_id: 13,
            },
            {
                nota: 6,
                alumno_id: 361,
                materia_id: 14,
            },
            {
                nota: 6,
                alumno_id: 361,
                materia_id: 15,
            },
            {
                nota: 0,
                alumno_id: 362,
                materia_id: 8,
            },
            {
                nota: 0,
                alumno_id: 362,
                materia_id: 9,
            },
            {
                nota: 0,
                alumno_id: 362,
                materia_id: 10,
            },
            {
                nota: 0,
                alumno_id: 362,
                materia_id: 11,
            },
            {
                nota: 0,
                alumno_id: 362,
                materia_id: 12,
            },
            {
                nota: 0,
                alumno_id: 362,
                materia_id: 13,
            },
            {
                nota: 0,
                alumno_id: 362,
                materia_id: 14,
            },
            {
                nota: 0,
                alumno_id: 362,
                materia_id: 15,
            },
            {
                nota: 1,
                alumno_id: 363,
                materia_id: 8,
            },
            {
                nota: 6,
                alumno_id: 363,
                materia_id: 9,
            },
            {
                nota: 1,
                alumno_id: 363,
                materia_id: 10,
            },
            {
                nota: 7,
                alumno_id: 363,
                materia_id: 11,
            },
            {
                nota: 8,
                alumno_id: 363,
                materia_id: 12,
            },
            {
                nota: 8.5,
                alumno_id: 363,
                materia_id: 13,
            },
            {
                nota: 6.5,
                alumno_id: 363,
                materia_id: 14,
            },
            {
                nota: 7,
                alumno_id: 363,
                materia_id: 15,
            },
            {
                nota: 0,
                alumno_id: 364,
                materia_id: 8,
            },
            {
                nota: 0,
                alumno_id: 364,
                materia_id: 9,
            },
            {
                nota: 0,
                alumno_id: 364,
                materia_id: 10,
            },
            {
                nota: 0,
                alumno_id: 364,
                materia_id: 11,
            },
            {
                nota: 0,
                alumno_id: 364,
                materia_id: 12,
            },
            {
                nota: 0,
                alumno_id: 364,
                materia_id: 13,
            },
            {
                nota: 0,
                alumno_id: 364,
                materia_id: 14,
            },
            {
                nota: 0,
                alumno_id: 364,
                materia_id: 15,
            },
            {
                nota: 2,
                alumno_id: 365,
                materia_id: 8,
            },
            {
                nota: 6,
                alumno_id: 365,
                materia_id: 9,
            },
            {
                nota: 1,
                alumno_id: 365,
                materia_id: 10,
            },
            {
                nota: 6,
                alumno_id: 365,
                materia_id: 11,
            },
            {
                nota: 8,
                alumno_id: 365,
                materia_id: 12,
            },
            {
                nota: 7,
                alumno_id: 365,
                materia_id: 13,
            },
            {
                nota: 6,
                alumno_id: 365,
                materia_id: 14,
            },
            {
                nota: 6,
                alumno_id: 365,
                materia_id: 15,
            },
            {
                nota: 2,
                alumno_id: 366,
                materia_id: 8,
            },
            {
                nota: 6,
                alumno_id: 366,
                materia_id: 9,
            },
            {
                nota: 1,
                alumno_id: 366,
                materia_id: 10,
            },
            {
                nota: 6,
                alumno_id: 366,
                materia_id: 11,
            },
            {
                nota: 8,
                alumno_id: 366,
                materia_id: 12,
            },
            {
                nota: 7,
                alumno_id: 366,
                materia_id: 13,
            },
            {
                nota: 6,
                alumno_id: 366,
                materia_id: 14,
            },
            {
                nota: 6,
                alumno_id: 366,
                materia_id: 15,
            },
            {
                nota: 6,
                alumno_id: 367,
                materia_id: 8,
            },
            {
                nota: 6.5,
                alumno_id: 367,
                materia_id: 9,
            },
            {
                nota: 1,
                alumno_id: 367,
                materia_id: 10,
            },
            {
                nota: 1,
                alumno_id: 367,
                materia_id: 11,
            },
            {
                nota: 9,
                alumno_id: 367,
                materia_id: 12,
            },
            {
                nota: 7,
                alumno_id: 367,
                materia_id: 13,
            },
            {
                nota: 6.5,
                alumno_id: 367,
                materia_id: 14,
            },
            {
                nota: 6,
                alumno_id: 367,
                materia_id: 15,
            },
            {
                nota: 0,
                alumno_id: 368,
                materia_id: 8,
            },
            {
                nota: 0,
                alumno_id: 368,
                materia_id: 9,
            },
            {
                nota: 0,
                alumno_id: 368,
                materia_id: 10,
            },
            {
                nota: 0,
                alumno_id: 368,
                materia_id: 11,
            },
            {
                nota: 0,
                alumno_id: 368,
                materia_id: 12,
            },
            {
                nota: 0,
                alumno_id: 368,
                materia_id: 13,
            },
            {
                nota: 0,
                alumno_id: 368,
                materia_id: 14,
            },
            {
                nota: 0,
                alumno_id: 368,
                materia_id: 15,
            },
            {
                nota: 0,
                alumno_id: 369,
                materia_id: 8,
            },
            {
                nota: 0,
                alumno_id: 369,
                materia_id: 9,
            },
            {
                nota: 0,
                alumno_id: 369,
                materia_id: 10,
            },
            {
                nota: 0,
                alumno_id: 369,
                materia_id: 11,
            },
            {
                nota: 0,
                alumno_id: 369,
                materia_id: 12,
            },
            {
                nota: 0,
                alumno_id: 369,
                materia_id: 13,
            },
            {
                nota: 0,
                alumno_id: 369,
                materia_id: 14,
            },
            {
                nota: 0,
                alumno_id: 369,
                materia_id: 15,
            },
            {
                nota: 1,
                alumno_id: 370,
                materia_id: 8,
            },
            {
                nota: 6,
                alumno_id: 370,
                materia_id: 9,
            },
            {
                nota: 1,
                alumno_id: 370,
                materia_id: 10,
            },
            {
                nota: 1,
                alumno_id: 370,
                materia_id: 11,
            },
            {
                nota: 8,
                alumno_id: 370,
                materia_id: 12,
            },
            {
                nota: 7,
                alumno_id: 370,
                materia_id: 13,
            },
            {
                nota: 6,
                alumno_id: 370,
                materia_id: 14,
            },
            {
                nota: 6,
                alumno_id: 370,
                materia_id: 15,
            },
            {
                nota: 2,
                alumno_id: 371,
                materia_id: 8,
            },
            {
                nota: 6,
                alumno_id: 371,
                materia_id: 9,
            },
            {
                nota: 6,
                alumno_id: 371,
                materia_id: 10,
            },
            {
                nota: 10,
                alumno_id: 371,
                materia_id: 11,
            },
            {
                nota: 8,
                alumno_id: 371,
                materia_id: 12,
            },
            {
                nota: 8,
                alumno_id: 371,
                materia_id: 13,
            },
            {
                nota: 7.5,
                alumno_id: 371,
                materia_id: 14,
            },
            {
                nota: 9,
                alumno_id: 371,
                materia_id: 15,
            },
            {
                nota: 7,
                alumno_id: 372,
                materia_id: 8,
            },
            {
                nota: 7,
                alumno_id: 372,
                materia_id: 9,
            },
            {
                nota: 6,
                alumno_id: 372,
                materia_id: 10,
            },
            {
                nota: 9,
                alumno_id: 372,
                materia_id: 11,
            },
            {
                nota: 8,
                alumno_id: 372,
                materia_id: 12,
            },
            {
                nota: 8,
                alumno_id: 372,
                materia_id: 13,
            },
            {
                nota: 6,
                alumno_id: 372,
                materia_id: 14,
            },
            {
                nota: 10,
                alumno_id: 372,
                materia_id: 15,
            },
            {
                nota: 1,
                alumno_id: 373,
                materia_id: 8,
            },
            {
                nota: 6,
                alumno_id: 373,
                materia_id: 9,
            },
            {
                nota: 1,
                alumno_id: 373,
                materia_id: 10,
            },
            {
                nota: 1,
                alumno_id: 373,
                materia_id: 11,
            },
            {
                nota: 8,
                alumno_id: 373,
                materia_id: 12,
            },
            {
                nota: 6,
                alumno_id: 373,
                materia_id: 13,
            },
            {
                nota: 6,
                alumno_id: 373,
                materia_id: 14,
            },
            {
                nota: 1,
                alumno_id: 373,
                materia_id: 15,
            },
            {
                nota: 8,
                alumno_id: 374,
                materia_id: 8,
            },
            {
                nota: 7,
                alumno_id: 374,
                materia_id: 9,
            },
            {
                nota: 9.5,
                alumno_id: 374,
                materia_id: 10,
            },
            {
                nota: 10,
                alumno_id: 374,
                materia_id: 11,
            },
            {
                nota: 10,
                alumno_id: 374,
                materia_id: 12,
            },
            {
                nota: 8,
                alumno_id: 374,
                materia_id: 13,
            },
            {
                nota: 6.5,
                alumno_id: 374,
                materia_id: 14,
            },
            {
                nota: 10,
                alumno_id: 374,
                materia_id: 15,
            },
            {
                nota: 2,
                alumno_id: 375,
                materia_id: 8,
            },
            {
                nota: 0,
                alumno_id: 375,
                materia_id: 9,
            },
            {
                nota: 0,
                alumno_id: 375,
                materia_id: 10,
            },
            {
                nota: 1,
                alumno_id: 375,
                materia_id: 11,
            },
            {
                nota: 0,
                alumno_id: 375,
                materia_id: 12,
            },
            {
                nota: 0,
                alumno_id: 375,
                materia_id: 13,
            },
            {
                nota: 0,
                alumno_id: 375,
                materia_id: 14,
            },
            {
                nota: 0,
                alumno_id: 375,
                materia_id: 15,
            },
            {
                nota: 1,
                alumno_id: 376,
                materia_id: 8,
            },
            {
                nota: 1,
                alumno_id: 376,
                materia_id: 9,
            },
            {
                nota: 1,
                alumno_id: 376,
                materia_id: 10,
            },
            {
                nota: 1,
                alumno_id: 376,
                materia_id: 11,
            },
            {
                nota: 1,
                alumno_id: 376,
                materia_id: 12,
            },
            {
                nota: 1,
                alumno_id: 376,
                materia_id: 13,
            },
            {
                nota: 6,
                alumno_id: 376,
                materia_id: 14,
            },
            {
                nota: 1,
                alumno_id: 376,
                materia_id: 15,
            },
            {
                nota: 8,
                alumno_id: 377,
                materia_id: 8,
            },
            {
                nota: 6,
                alumno_id: 377,
                materia_id: 9,
            },
            {
                nota: 8.5,
                alumno_id: 377,
                materia_id: 10,
            },
            {
                nota: 6,
                alumno_id: 377,
                materia_id: 11,
            },
            {
                nota: 7,
                alumno_id: 377,
                materia_id: 12,
            },
            {
                nota: 7,
                alumno_id: 377,
                materia_id: 13,
            },
            {
                nota: 6,
                alumno_id: 377,
                materia_id: 14,
            },
            {
                nota: 6,
                alumno_id: 377,
                materia_id: 15,
            },
            {
                nota: 7,
                alumno_id: 378,
                materia_id: 8,
            },
            {
                nota: 1,
                alumno_id: 378,
                materia_id: 9,
            },
            {
                nota: 1,
                alumno_id: 378,
                materia_id: 10,
            },
            {
                nota: 5,
                alumno_id: 378,
                materia_id: 11,
            },
            {
                nota: 7,
                alumno_id: 378,
                materia_id: 12,
            },
            {
                nota: 6,
                alumno_id: 378,
                materia_id: 13,
            },
            {
                nota: 6,
                alumno_id: 378,
                materia_id: 14,
            },
            {
                nota: 6,
                alumno_id: 378,
                materia_id: 15,
            },
            {
                nota: 1,
                alumno_id: 379,
                materia_id: 8,
            },
            {
                nota: 1,
                alumno_id: 379,
                materia_id: 9,
            },
            {
                nota: 1,
                alumno_id: 379,
                materia_id: 10,
            },
            {
                nota: 8,
                alumno_id: 379,
                materia_id: 11,
            },
            {
                nota: 1,
                alumno_id: 379,
                materia_id: 12,
            },
            {
                nota: 6,
                alumno_id: 379,
                materia_id: 13,
            },
            {
                nota: 7,
                alumno_id: 379,
                materia_id: 14,
            },
            {
                nota: 1,
                alumno_id: 379,
                materia_id: 15,
            },
            {
                nota: 1,
                alumno_id: 380,
                materia_id: 8,
            },
            {
                nota: 1,
                alumno_id: 380,
                materia_id: 9,
            },
            {
                nota: 1,
                alumno_id: 380,
                materia_id: 10,
            },
            {
                nota: 1,
                alumno_id: 380,
                materia_id: 11,
            },
            {
                nota: 1,
                alumno_id: 380,
                materia_id: 12,
            },
            {
                nota: 1,
                alumno_id: 380,
                materia_id: 13,
            },
            {
                nota: 6,
                alumno_id: 380,
                materia_id: 14,
            },
            {
                nota: 1,
                alumno_id: 380,
                materia_id: 15,
            },
            {
                nota: 1,
                alumno_id: 381,
                materia_id: 8,
            },
            {
                nota: 1,
                alumno_id: 381,
                materia_id: 9,
            },
            {
                nota: 1,
                alumno_id: 381,
                materia_id: 10,
            },
            {
                nota: 1,
                alumno_id: 381,
                materia_id: 11,
            },
            {
                nota: 1,
                alumno_id: 381,
                materia_id: 12,
            },
            {
                nota: 6,
                alumno_id: 381,
                materia_id: 13,
            },
            {
                nota: 1,
                alumno_id: 381,
                materia_id: 14,
            },
            {
                nota: 1,
                alumno_id: 381,
                materia_id: 15,
            },
            {
                nota: 9,
                alumno_id: 382,
                materia_id: 8,
            },
            {
                nota: 7,
                alumno_id: 382,
                materia_id: 9,
            },
            {
                nota: 9,
                alumno_id: 382,
                materia_id: 10,
            },
            {
                nota: 7.5,
                alumno_id: 382,
                materia_id: 11,
            },
            {
                nota: 7.5,
                alumno_id: 382,
                materia_id: 12,
            },
            {
                nota: 7,
                alumno_id: 382,
                materia_id: 13,
            },
            {
                nota: 7,
                alumno_id: 382,
                materia_id: 14,
            },
            {
                nota: 7,
                alumno_id: 382,
                materia_id: 15,
            },
            {
                nota: 1,
                alumno_id: 383,
                materia_id: 8,
            },
            {
                nota: 1,
                alumno_id: 383,
                materia_id: 9,
            },
            {
                nota: 1,
                alumno_id: 383,
                materia_id: 10,
            },
            {
                nota: 6,
                alumno_id: 383,
                materia_id: 11,
            },
            {
                nota: 1,
                alumno_id: 383,
                materia_id: 12,
            },
            {
                nota: 6,
                alumno_id: 383,
                materia_id: 13,
            },
            {
                nota: 6,
                alumno_id: 383,
                materia_id: 14,
            },
            {
                nota: 6,
                alumno_id: 383,
                materia_id: 15,
            },
            {
                nota: 7,
                alumno_id: 384,
                materia_id: 8,
            },
            {
                nota: 6,
                alumno_id: 384,
                materia_id: 9,
            },
            {
                nota: 8,
                alumno_id: 384,
                materia_id: 10,
            },
            {
                nota: 6,
                alumno_id: 384,
                materia_id: 11,
            },
            {
                nota: 6.5,
                alumno_id: 384,
                materia_id: 12,
            },
            {
                nota: 6,
                alumno_id: 384,
                materia_id: 13,
            },
            {
                nota: 6,
                alumno_id: 384,
                materia_id: 14,
            },
            {
                nota: 6,
                alumno_id: 384,
                materia_id: 15,
            },
            {
                nota: 7.5,
                alumno_id: 385,
                materia_id: 8,
            },
            {
                nota: 6,
                alumno_id: 385,
                materia_id: 9,
            },
            {
                nota: 6.5,
                alumno_id: 385,
                materia_id: 10,
            },
            {
                nota: 6,
                alumno_id: 385,
                materia_id: 11,
            },
            {
                nota: 7,
                alumno_id: 385,
                materia_id: 12,
            },
            {
                nota: 7,
                alumno_id: 385,
                materia_id: 13,
            },
            {
                nota: 6,
                alumno_id: 385,
                materia_id: 14,
            },
            {
                nota: 1,
                alumno_id: 385,
                materia_id: 15,
            },
            {
                nota: 7,
                alumno_id: 386,
                materia_id: 8,
            },
            {
                nota: 1,
                alumno_id: 386,
                materia_id: 9,
            },
            {
                nota: 6.5,
                alumno_id: 386,
                materia_id: 10,
            },
            {
                nota: 5,
                alumno_id: 386,
                materia_id: 11,
            },
            {
                nota: 4,
                alumno_id: 386,
                materia_id: 12,
            },
            {
                nota: 7.5,
                alumno_id: 386,
                materia_id: 13,
            },
            {
                nota: 6,
                alumno_id: 386,
                materia_id: 14,
            },
            {
                nota: 6,
                alumno_id: 386,
                materia_id: 15,
            },
            {
                nota: 1,
                alumno_id: 387,
                materia_id: 8,
            },
            {
                nota: 1,
                alumno_id: 387,
                materia_id: 9,
            },
            {
                nota: 1,
                alumno_id: 387,
                materia_id: 10,
            },
            {
                nota: 1,
                alumno_id: 387,
                materia_id: 11,
            },
            {
                nota: 4,
                alumno_id: 387,
                materia_id: 12,
            },
            {
                nota: 7,
                alumno_id: 387,
                materia_id: 13,
            },
            {
                nota: 6,
                alumno_id: 387,
                materia_id: 14,
            },
            {
                nota: 1,
                alumno_id: 387,
                materia_id: 15,
            },
            {
                nota: 6,
                alumno_id: 388,
                materia_id: 8,
            },
            {
                nota: 6,
                alumno_id: 388,
                materia_id: 9,
            },
            {
                nota: 8,
                alumno_id: 388,
                materia_id: 10,
            },
            {
                nota: 7.5,
                alumno_id: 388,
                materia_id: 11,
            },
            {
                nota: 8,
                alumno_id: 388,
                materia_id: 12,
            },
            {
                nota: 7.5,
                alumno_id: 388,
                materia_id: 13,
            },
            {
                nota: 7.5,
                alumno_id: 388,
                materia_id: 14,
            },
            {
                nota: 6,
                alumno_id: 388,
                materia_id: 15,
            },
            {
                nota: 7,
                alumno_id: 389,
                materia_id: 8,
            },
            {
                nota: 6,
                alumno_id: 389,
                materia_id: 9,
            },
            {
                nota: 7,
                alumno_id: 389,
                materia_id: 10,
            },
            {
                nota: 6,
                alumno_id: 389,
                materia_id: 11,
            },
            {
                nota: 8.5,
                alumno_id: 389,
                materia_id: 12,
            },
            {
                nota: 6.5,
                alumno_id: 389,
                materia_id: 13,
            },
            {
                nota: 7,
                alumno_id: 389,
                materia_id: 14,
            },
            {
                nota: 6,
                alumno_id: 389,
                materia_id: 15,
            },
            {
                nota: 6,
                alumno_id: 390,
                materia_id: 8,
            },
            {
                nota: 6,
                alumno_id: 390,
                materia_id: 9,
            },
            {
                nota: 6.5,
                alumno_id: 390,
                materia_id: 10,
            },
            {
                nota: 7,
                alumno_id: 390,
                materia_id: 11,
            },
            {
                nota: 6.5,
                alumno_id: 390,
                materia_id: 12,
            },
            {
                nota: 7.5,
                alumno_id: 390,
                materia_id: 13,
            },
            {
                nota: 7,
                alumno_id: 390,
                materia_id: 14,
            },
            {
                nota: 6,
                alumno_id: 390,
                materia_id: 15,
            },
            {
                nota: 1,
                alumno_id: 391,
                materia_id: 8,
            },
            {
                nota: 1,
                alumno_id: 391,
                materia_id: 9,
            },
            {
                nota: 1,
                alumno_id: 391,
                materia_id: 10,
            },
            {
                nota: 1,
                alumno_id: 391,
                materia_id: 11,
            },
            {
                nota: 1,
                alumno_id: 391,
                materia_id: 12,
            },
            {
                nota: 1,
                alumno_id: 391,
                materia_id: 13,
            },
            {
                nota: 1,
                alumno_id: 391,
                materia_id: 14,
            },
            {
                nota: 1,
                alumno_id: 391,
                materia_id: 15,
            },
            {
                nota: 9,
                alumno_id: 392,
                materia_id: 8,
            },
            {
                nota: 10,
                alumno_id: 392,
                materia_id: 9,
            },
            {
                nota: 9.5,
                alumno_id: 392,
                materia_id: 10,
            },
            {
                nota: 9,
                alumno_id: 392,
                materia_id: 11,
            },
            {
                nota: 7.5,
                alumno_id: 392,
                materia_id: 12,
            },
            {
                nota: 7.5,
                alumno_id: 392,
                materia_id: 13,
            },
            {
                nota: 8,
                alumno_id: 392,
                materia_id: 14,
            },
            {
                nota: 8,
                alumno_id: 392,
                materia_id: 15,
            },
            {
                nota: 6.5,
                alumno_id: 393,
                materia_id: 8,
            },
            {
                nota: 7,
                alumno_id: 393,
                materia_id: 9,
            },
            {
                nota: 9.5,
                alumno_id: 393,
                materia_id: 10,
            },
            {
                nota: 9,
                alumno_id: 393,
                materia_id: 11,
            },
            {
                nota: 6,
                alumno_id: 393,
                materia_id: 12,
            },
            {
                nota: 7.5,
                alumno_id: 393,
                materia_id: 13,
            },
            {
                nota: 7.5,
                alumno_id: 393,
                materia_id: 14,
            },
            {
                nota: 6,
                alumno_id: 393,
                materia_id: 15,
            },
            {
                nota: 6,
                alumno_id: 394,
                materia_id: 8,
            },
            {
                nota: 6,
                alumno_id: 394,
                materia_id: 9,
            },
            {
                nota: 6,
                alumno_id: 394,
                materia_id: 10,
            },
            {
                nota: 6.5,
                alumno_id: 394,
                materia_id: 11,
            },
            {
                nota: 8.5,
                alumno_id: 394,
                materia_id: 12,
            },
            {
                nota: 6,
                alumno_id: 394,
                materia_id: 13,
            },
            {
                nota: 7,
                alumno_id: 394,
                materia_id: 14,
            },
            {
                nota: 6,
                alumno_id: 394,
                materia_id: 15,
            },
            {
                nota: 1,
                alumno_id: 395,
                materia_id: 8,
            },
            {
                nota: 1,
                alumno_id: 395,
                materia_id: 9,
            },
            {
                nota: 1,
                alumno_id: 395,
                materia_id: 10,
            },
            {
                nota: 1,
                alumno_id: 395,
                materia_id: 11,
            },
            {
                nota: 1,
                alumno_id: 395,
                materia_id: 12,
            },
            {
                nota: 1,
                alumno_id: 395,
                materia_id: 13,
            },
            {
                nota: 6,
                alumno_id: 395,
                materia_id: 14,
            },
            {
                nota: 1,
                alumno_id: 395,
                materia_id: 15,
            },
            {
                nota: 4,
                alumno_id: 396,
                materia_id: 8,
            },
            {
                nota: 1,
                alumno_id: 396,
                materia_id: 9,
            },
            {
                nota: 6,
                alumno_id: 396,
                materia_id: 10,
            },
            {
                nota: 6,
                alumno_id: 396,
                materia_id: 11,
            },
            {
                nota: 7,
                alumno_id: 396,
                materia_id: 12,
            },
            {
                nota: 7.5,
                alumno_id: 396,
                materia_id: 13,
            },
            {
                nota: 7,
                alumno_id: 396,
                materia_id: 14,
            },
            {
                nota: 6,
                alumno_id: 396,
                materia_id: 15,
            },
            {
                nota: 1,
                alumno_id: 397,
                materia_id: 8,
            },
            {
                nota: 1,
                alumno_id: 397,
                materia_id: 9,
            },
            {
                nota: 1,
                alumno_id: 397,
                materia_id: 10,
            },
            {
                nota: 1,
                alumno_id: 397,
                materia_id: 11,
            },
            {
                nota: 1,
                alumno_id: 397,
                materia_id: 12,
            },
            {
                nota: 1,
                alumno_id: 397,
                materia_id: 13,
            },
            {
                nota: 1,
                alumno_id: 397,
                materia_id: 14,
            },
            {
                nota: 1,
                alumno_id: 397,
                materia_id: 15,
            },
            {
                nota: 4,
                alumno_id: 398,
                materia_id: 8,
            },
            {
                nota: 8,
                alumno_id: 398,
                materia_id: 9,
            },
            {
                nota: 6,
                alumno_id: 398,
                materia_id: 10,
            },
            {
                nota: 7.5,
                alumno_id: 398,
                materia_id: 11,
            },
            {
                nota: 8.5,
                alumno_id: 398,
                materia_id: 12,
            },
            {
                nota: 7,
                alumno_id: 398,
                materia_id: 13,
            },
            {
                nota: 6.5,
                alumno_id: 398,
                materia_id: 14,
            },
            {
                nota: 6,
                alumno_id: 398,
                materia_id: 15,
            },
            {
                nota: 6.5,
                alumno_id: 399,
                materia_id: 8,
            },
            {
                nota: 6,
                alumno_id: 399,
                materia_id: 9,
            },
            {
                nota: 8,
                alumno_id: 399,
                materia_id: 10,
            },
            {
                nota: 8.5,
                alumno_id: 399,
                materia_id: 11,
            },
            {
                nota: 8.5,
                alumno_id: 399,
                materia_id: 12,
            },
            {
                nota: 6.5,
                alumno_id: 399,
                materia_id: 13,
            },
            {
                nota: 8,
                alumno_id: 399,
                materia_id: 14,
            },
            {
                nota: 7,
                alumno_id: 399,
                materia_id: 15,
            },
            {
                nota: 8,
                alumno_id: 400,
                materia_id: 8,
            },
            {
                nota: 7,
                alumno_id: 400,
                materia_id: 9,
            },
            {
                nota: 8.5,
                alumno_id: 400,
                materia_id: 10,
            },
            {
                nota: 7,
                alumno_id: 400,
                materia_id: 11,
            },
            {
                nota: 9.5,
                alumno_id: 400,
                materia_id: 12,
            },
            {
                nota: 8,
                alumno_id: 400,
                materia_id: 13,
            },
            {
                nota: 7,
                alumno_id: 400,
                materia_id: 14,
            },
            {
                nota: 6,
                alumno_id: 400,
                materia_id: 15,
            },
            {
                nota: 7.5,
                alumno_id: 401,
                materia_id: 8,
            },
            {
                nota: 2,
                alumno_id: 401,
                materia_id: 9,
            },
            {
                nota: 7,
                alumno_id: 401,
                materia_id: 10,
            },
            {
                nota: 6,
                alumno_id: 401,
                materia_id: 11,
            },
            {
                nota: 6.5,
                alumno_id: 401,
                materia_id: 12,
            },
            {
                nota: 7,
                alumno_id: 401,
                materia_id: 13,
            },
            {
                nota: 6,
                alumno_id: 401,
                materia_id: 14,
            },
            {
                nota: 6,
                alumno_id: 401,
                materia_id: 15,
            },
            {
                nota: 6,
                alumno_id: 402,
                materia_id: 8,
            },
            {
                nota: 6,
                alumno_id: 402,
                materia_id: 9,
            },
            {
                nota: 6,
                alumno_id: 402,
                materia_id: 10,
            },
            {
                nota: 7,
                alumno_id: 402,
                materia_id: 11,
            },
            {
                nota: 7,
                alumno_id: 402,
                materia_id: 12,
            },
            {
                nota: 8,
                alumno_id: 402,
                materia_id: 13,
            },
            {
                nota: 6.5,
                alumno_id: 402,
                materia_id: 14,
            },
            {
                nota: 6,
                alumno_id: 402,
                materia_id: 15,
            },
            {
                nota: 8,
                alumno_id: 403,
                materia_id: 8,
            },
            {
                nota: 9,
                alumno_id: 403,
                materia_id: 9,
            },
            {
                nota: 6,
                alumno_id: 403,
                materia_id: 10,
            },
            {
                nota: 9.5,
                alumno_id: 403,
                materia_id: 11,
            },
            {
                nota: 6.5,
                alumno_id: 403,
                materia_id: 12,
            },
            {
                nota: 10,
                alumno_id: 403,
                materia_id: 13,
            },
            {
                nota: 7,
                alumno_id: 403,
                materia_id: 14,
            },
            {
                nota: 6,
                alumno_id: 403,
                materia_id: 15,
            },
            {
                nota: 0,
                alumno_id: 404,
                materia_id: 8,
            },
            {
                nota: 0,
                alumno_id: 404,
                materia_id: 9,
            },
            {
                nota: 0,
                alumno_id: 404,
                materia_id: 10,
            },
            {
                nota: 0,
                alumno_id: 404,
                materia_id: 11,
            },
            {
                nota: 0,
                alumno_id: 404,
                materia_id: 12,
            },
            {
                nota: 0,
                alumno_id: 404,
                materia_id: 13,
            },
            {
                nota: 0,
                alumno_id: 404,
                materia_id: 14,
            },
            {
                nota: 0,
                alumno_id: 404,
                materia_id: 15,
            },
            {
                nota: 4,
                alumno_id: 405,
                materia_id: 8,
            },
            {
                nota: 6,
                alumno_id: 405,
                materia_id: 9,
            },
            {
                nota: 6,
                alumno_id: 405,
                materia_id: 10,
            },
            {
                nota: 7,
                alumno_id: 405,
                materia_id: 11,
            },
            {
                nota: 6,
                alumno_id: 405,
                materia_id: 12,
            },
            {
                nota: 6,
                alumno_id: 405,
                materia_id: 13,
            },
            {
                nota: 6.5,
                alumno_id: 405,
                materia_id: 14,
            },
            {
                nota: 6,
                alumno_id: 405,
                materia_id: 15,
            },
            {
                nota: 9,
                alumno_id: 406,
                materia_id: 8,
            },
            {
                nota: 6,
                alumno_id: 406,
                materia_id: 9,
            },
            {
                nota: 1,
                alumno_id: 406,
                materia_id: 10,
            },
            {
                nota: 6,
                alumno_id: 406,
                materia_id: 11,
            },
            {
                nota: 6,
                alumno_id: 406,
                materia_id: 12,
            },
            {
                nota: 6.5,
                alumno_id: 406,
                materia_id: 13,
            },
            {
                nota: 7,
                alumno_id: 406,
                materia_id: 14,
            },
            {
                nota: 6,
                alumno_id: 406,
                materia_id: 15,
            },
            {
                nota: 7.5,
                alumno_id: 407,
                materia_id: 8,
            },
            {
                nota: 7,
                alumno_id: 407,
                materia_id: 9,
            },
            {
                nota: 7,
                alumno_id: 407,
                materia_id: 10,
            },
            {
                nota: 8,
                alumno_id: 407,
                materia_id: 11,
            },
            {
                nota: 6.5,
                alumno_id: 407,
                materia_id: 12,
            },
            {
                nota: 7.5,
                alumno_id: 407,
                materia_id: 13,
            },
            {
                nota: 7,
                alumno_id: 407,
                materia_id: 14,
            },
            {
                nota: 6,
                alumno_id: 407,
                materia_id: 15,
            },
            {
                nota: 5,
                alumno_id: 408,
                materia_id: 8,
            },
            {
                nota: 6,
                alumno_id: 408,
                materia_id: 9,
            },
            {
                nota: 6,
                alumno_id: 408,
                materia_id: 10,
            },
            {
                nota: 5,
                alumno_id: 408,
                materia_id: 11,
            },
            {
                nota: 8,
                alumno_id: 408,
                materia_id: 12,
            },
            {
                nota: 7,
                alumno_id: 408,
                materia_id: 13,
            },
            {
                nota: 6,
                alumno_id: 408,
                materia_id: 14,
            },
            {
                nota: 6,
                alumno_id: 408,
                materia_id: 15,
            },
            {
                nota: 7,
                alumno_id: 409,
                materia_id: 8,
            },
            {
                nota: 6,
                alumno_id: 409,
                materia_id: 9,
            },
            {
                nota: 7,
                alumno_id: 409,
                materia_id: 10,
            },
            {
                nota: 9.5,
                alumno_id: 409,
                materia_id: 11,
            },
            {
                nota: 7,
                alumno_id: 409,
                materia_id: 12,
            },
            {
                nota: 7.5,
                alumno_id: 409,
                materia_id: 13,
            },
            {
                nota: 6.5,
                alumno_id: 409,
                materia_id: 14,
            },
            {
                nota: 6,
                alumno_id: 409,
                materia_id: 15,
            },
            {
                nota: 1,
                alumno_id: 410,
                materia_id: 8,
            },
            {
                nota: 1,
                alumno_id: 410,
                materia_id: 9,
            },
            {
                nota: 1,
                alumno_id: 410,
                materia_id: 10,
            },
            {
                nota: 1,
                alumno_id: 410,
                materia_id: 11,
            },
            {
                nota: 1,
                alumno_id: 410,
                materia_id: 12,
            },
            {
                nota: 1,
                alumno_id: 410,
                materia_id: 13,
            },
            {
                nota: 1,
                alumno_id: 410,
                materia_id: 14,
            },
            {
                nota: 1,
                alumno_id: 410,
                materia_id: 15,
            },
            {
                nota: 7,
                alumno_id: 411,
                materia_id: 8,
            },
            {
                nota: 7,
                alumno_id: 411,
                materia_id: 9,
            },
            {
                nota: 9.5,
                alumno_id: 411,
                materia_id: 10,
            },
            {
                nota: 8,
                alumno_id: 411,
                materia_id: 11,
            },
            {
                nota: 8,
                alumno_id: 411,
                materia_id: 12,
            },
            {
                nota: 6.5,
                alumno_id: 411,
                materia_id: 13,
            },
            {
                nota: 6,
                alumno_id: 411,
                materia_id: 14,
            },
            {
                nota: 7,
                alumno_id: 411,
                materia_id: 15,
            },
            {
                nota: 1,
                alumno_id: 412,
                materia_id: 8,
            },
            {
                nota: 9,
                alumno_id: 412,
                materia_id: 9,
            },
            {
                nota: 6,
                alumno_id: 412,
                materia_id: 10,
            },
            {
                nota: 9.5,
                alumno_id: 412,
                materia_id: 11,
            },
            {
                nota: 8,
                alumno_id: 412,
                materia_id: 12,
            },
            {
                nota: 10,
                alumno_id: 412,
                materia_id: 13,
            },
            {
                nota: 7.5,
                alumno_id: 412,
                materia_id: 14,
            },
            {
                nota: 8,
                alumno_id: 412,
                materia_id: 15,
            },
            {
                nota: 7,
                alumno_id: 413,
                materia_id: 8,
            },
            {
                nota: 7,
                alumno_id: 413,
                materia_id: 9,
            },
            {
                nota: 6,
                alumno_id: 413,
                materia_id: 10,
            },
            {
                nota: 7,
                alumno_id: 413,
                materia_id: 11,
            },
            {
                nota: 6,
                alumno_id: 413,
                materia_id: 12,
            },
            {
                nota: 7,
                alumno_id: 413,
                materia_id: 13,
            },
            {
                nota: 7,
                alumno_id: 413,
                materia_id: 14,
            },
            {
                nota: 6,
                alumno_id: 413,
                materia_id: 15,
            },
            {
                nota: 8,
                alumno_id: 414,
                materia_id: 8,
            },
            {
                nota: 7,
                alumno_id: 414,
                materia_id: 9,
            },
            {
                nota: 8.5,
                alumno_id: 414,
                materia_id: 10,
            },
            {
                nota: 6,
                alumno_id: 414,
                materia_id: 11,
            },
            {
                nota: 8.5,
                alumno_id: 414,
                materia_id: 12,
            },
            {
                nota: 6.5,
                alumno_id: 414,
                materia_id: 13,
            },
            {
                nota: 7,
                alumno_id: 414,
                materia_id: 14,
            },
            {
                nota: 7,
                alumno_id: 414,
                materia_id: 15,
            },
            {
                nota: 7,
                alumno_id: 415,
                materia_id: 8,
            },
            {
                nota: 6,
                alumno_id: 415,
                materia_id: 9,
            },
            {
                nota: 7.5,
                alumno_id: 415,
                materia_id: 10,
            },
            {
                nota: 6,
                alumno_id: 415,
                materia_id: 11,
            },
            {
                nota: 7.5,
                alumno_id: 415,
                materia_id: 12,
            },
            {
                nota: 7,
                alumno_id: 415,
                materia_id: 13,
            },
            {
                nota: 6.5,
                alumno_id: 415,
                materia_id: 14,
            },
            {
                nota: 6,
                alumno_id: 415,
                materia_id: 15,
            },
            {
                nota: 6,
                alumno_id: 416,
                materia_id: 8,
            },
            {
                nota: 0,
                alumno_id: 416,
                materia_id: 9,
            },
            {
                nota: 0,
                alumno_id: 416,
                materia_id: 10,
            },
            {
                nota: 0,
                alumno_id: 416,
                materia_id: 11,
            },
            {
                nota: 0,
                alumno_id: 416,
                materia_id: 12,
            },
            {
                nota: 0,
                alumno_id: 416,
                materia_id: 13,
            },
            {
                nota: 0,
                alumno_id: 416,
                materia_id: 14,
            },
            {
                nota: 0,
                alumno_id: 416,
                materia_id: 15,
            },
            {
                nota: 0,
                alumno_id: 417,
                materia_id: 8,
            },
            {
                nota: 0,
                alumno_id: 417,
                materia_id: 9,
            },
            {
                nota: 0,
                alumno_id: 417,
                materia_id: 10,
            },
            {
                nota: 0,
                alumno_id: 417,
                materia_id: 11,
            },
            {
                nota: 0,
                alumno_id: 417,
                materia_id: 12,
            },
            {
                nota: 0,
                alumno_id: 417,
                materia_id: 13,
            },
            {
                nota: 0,
                alumno_id: 417,
                materia_id: 14,
            },
            {
                nota: 0,
                alumno_id: 417,
                materia_id: 15,
            },
            {
                nota: 8,
                alumno_id: 418,
                materia_id: 8,
            },
            {
                nota: 7,
                alumno_id: 418,
                materia_id: 9,
            },
            {
                nota: 9.5,
                alumno_id: 418,
                materia_id: 10,
            },
            {
                nota: 10,
                alumno_id: 418,
                materia_id: 11,
            },
            {
                nota: 10,
                alumno_id: 418,
                materia_id: 12,
            },
            {
                nota: 8.5,
                alumno_id: 418,
                materia_id: 13,
            },
            {
                nota: 9,
                alumno_id: 418,
                materia_id: 14,
            },
            {
                nota: 10,
                alumno_id: 418,
                materia_id: 15,
            },
            {
                nota: 1,
                alumno_id: 419,
                materia_id: 8,
            },
            {
                nota: 1,
                alumno_id: 419,
                materia_id: 9,
            },
            {
                nota: 1,
                alumno_id: 419,
                materia_id: 10,
            },
            {
                nota: 1,
                alumno_id: 419,
                materia_id: 11,
            },
            {
                nota: 1,
                alumno_id: 419,
                materia_id: 12,
            },
            {
                nota: 1,
                alumno_id: 419,
                materia_id: 13,
            },
            {
                nota: 1,
                alumno_id: 419,
                materia_id: 14,
            },
            {
                nota: 1,
                alumno_id: 419,
                materia_id: 15,
            },
            {
                nota: 6,
                alumno_id: 420,
                materia_id: 8,
            },
            {
                nota: 6,
                alumno_id: 420,
                materia_id: 9,
            },
            {
                nota: 7,
                alumno_id: 420,
                materia_id: 10,
            },
            {
                nota: 7,
                alumno_id: 420,
                materia_id: 11,
            },
            {
                nota: 6.5,
                alumno_id: 420,
                materia_id: 12,
            },
            {
                nota: 8,
                alumno_id: 420,
                materia_id: 13,
            },
            {
                nota: 6.5,
                alumno_id: 420,
                materia_id: 14,
            },
            {
                nota: 6,
                alumno_id: 420,
                materia_id: 15,
            },
            {
                nota: 8,
                alumno_id: 421,
                materia_id: 8,
            },
            {
                nota: 6.5,
                alumno_id: 421,
                materia_id: 9,
            },
            {
                nota: 6,
                alumno_id: 421,
                materia_id: 10,
            },
            {
                nota: 6,
                alumno_id: 421,
                materia_id: 11,
            },
            {
                nota: 4,
                alumno_id: 421,
                materia_id: 12,
            },
            {
                nota: 7.5,
                alumno_id: 421,
                materia_id: 13,
            },
            {
                nota: 1,
                alumno_id: 421,
                materia_id: 14,
            },
            {
                nota: 6,
                alumno_id: 421,
                materia_id: 15,
            },
            {
                nota: 6,
                alumno_id: 422,
                materia_id: 8,
            },
            {
                nota: 6,
                alumno_id: 422,
                materia_id: 9,
            },
            {
                nota: 8,
                alumno_id: 422,
                materia_id: 10,
            },
            {
                nota: 7,
                alumno_id: 422,
                materia_id: 11,
            },
            {
                nota: 6,
                alumno_id: 422,
                materia_id: 12,
            },
            {
                nota: 8,
                alumno_id: 422,
                materia_id: 13,
            },
            {
                nota: 6,
                alumno_id: 422,
                materia_id: 14,
            },
            {
                nota: 6,
                alumno_id: 422,
                materia_id: 15,
            },
            {
                nota: 1,
                alumno_id: 423,
                materia_id: 8,
            },
            {
                nota: 6,
                alumno_id: 423,
                materia_id: 9,
            },
            {
                nota: 6.5,
                alumno_id: 423,
                materia_id: 10,
            },
            {
                nota: 6,
                alumno_id: 423,
                materia_id: 11,
            },
            {
                nota: 5,
                alumno_id: 423,
                materia_id: 12,
            },
            {
                nota: 8,
                alumno_id: 423,
                materia_id: 13,
            },
            {
                nota: 1,
                alumno_id: 423,
                materia_id: 14,
            },
            {
                nota: 7,
                alumno_id: 423,
                materia_id: 15,
            },
            {
                nota: 0,
                alumno_id: 424,
                materia_id: 8,
            },
            {
                nota: 0,
                alumno_id: 424,
                materia_id: 9,
            },
            {
                nota: 0,
                alumno_id: 424,
                materia_id: 10,
            },
            {
                nota: 0,
                alumno_id: 424,
                materia_id: 11,
            },
            {
                nota: 0,
                alumno_id: 424,
                materia_id: 12,
            },
            {
                nota: 0,
                alumno_id: 424,
                materia_id: 13,
            },
            {
                nota: 0,
                alumno_id: 424,
                materia_id: 14,
            },
            {
                nota: 0,
                alumno_id: 424,
                materia_id: 15,
            },
            {
                nota: 3,
                alumno_id: 425,
                materia_id: 8,
            },
            {
                nota: 6,
                alumno_id: 425,
                materia_id: 9,
            },
            {
                nota: 6,
                alumno_id: 425,
                materia_id: 10,
            },
            {
                nota: 6,
                alumno_id: 425,
                materia_id: 11,
            },
            {
                nota: 7,
                alumno_id: 425,
                materia_id: 12,
            },
            {
                nota: 7,
                alumno_id: 425,
                materia_id: 13,
            },
            {
                nota: 6,
                alumno_id: 425,
                materia_id: 14,
            },
            {
                nota: 6,
                alumno_id: 425,
                materia_id: 15,
            },
            {
                nota: 6,
                alumno_id: 426,
                materia_id: 8,
            },
            {
                nota: 6.5,
                alumno_id: 426,
                materia_id: 9,
            },
            {
                nota: 9,
                alumno_id: 426,
                materia_id: 10,
            },
            {
                nota: 8,
                alumno_id: 426,
                materia_id: 11,
            },
            {
                nota: 6,
                alumno_id: 426,
                materia_id: 12,
            },
            {
                nota: 7.5,
                alumno_id: 426,
                materia_id: 13,
            },
            {
                nota: 8,
                alumno_id: 426,
                materia_id: 14,
            },
            {
                nota: 6,
                alumno_id: 426,
                materia_id: 15,
            },
            {
                nota: 1,
                alumno_id: 427,
                materia_id: 8,
            },
            {
                nota: 1,
                alumno_id: 427,
                materia_id: 9,
            },
            {
                nota: 1,
                alumno_id: 427,
                materia_id: 10,
            },
            {
                nota: 1,
                alumno_id: 427,
                materia_id: 11,
            },
            {
                nota: 1,
                alumno_id: 427,
                materia_id: 12,
            },
            {
                nota: 1,
                alumno_id: 427,
                materia_id: 13,
            },
            {
                nota: 1,
                alumno_id: 427,
                materia_id: 14,
            },
            {
                nota: 1,
                alumno_id: 427,
                materia_id: 15,
            },
            {
                nota: 1,
                alumno_id: 428,
                materia_id: 8,
            },
            {
                nota: 1,
                alumno_id: 428,
                materia_id: 9,
            },
            {
                nota: 1,
                alumno_id: 428,
                materia_id: 10,
            },
            {
                nota: 1,
                alumno_id: 428,
                materia_id: 11,
            },
            {
                nota: 1,
                alumno_id: 428,
                materia_id: 12,
            },
            {
                nota: 1,
                alumno_id: 428,
                materia_id: 13,
            },
            {
                nota: 1,
                alumno_id: 428,
                materia_id: 14,
            },
            {
                nota: 1,
                alumno_id: 428,
                materia_id: 15,
            },
            {
                nota: 1,
                alumno_id: 429,
                materia_id: 8,
            },
            {
                nota: 1,
                alumno_id: 429,
                materia_id: 9,
            },
            {
                nota: 1,
                alumno_id: 429,
                materia_id: 10,
            },
            {
                nota: 1,
                alumno_id: 429,
                materia_id: 11,
            },
            {
                nota: 1,
                alumno_id: 429,
                materia_id: 12,
            },
            {
                nota: 1,
                alumno_id: 429,
                materia_id: 13,
            },
            {
                nota: 1,
                alumno_id: 429,
                materia_id: 14,
            },
            {
                nota: 1,
                alumno_id: 429,
                materia_id: 15,
            },
            {
                nota: 1,
                alumno_id: 430,
                materia_id: 8,
            },
            {
                nota: 6.5,
                alumno_id: 430,
                materia_id: 9,
            },
            {
                nota: 6,
                alumno_id: 430,
                materia_id: 10,
            },
            {
                nota: 6,
                alumno_id: 430,
                materia_id: 11,
            },
            {
                nota: 1,
                alumno_id: 430,
                materia_id: 12,
            },
            {
                nota: 7.5,
                alumno_id: 430,
                materia_id: 13,
            },
            {
                nota: 1,
                alumno_id: 430,
                materia_id: 14,
            },
            {
                nota: 6,
                alumno_id: 430,
                materia_id: 15,
            },
            {
                nota: 1,
                alumno_id: 431,
                materia_id: 8,
            },
            {
                nota: 7.5,
                alumno_id: 431,
                materia_id: 9,
            },
            {
                nota: 6.5,
                alumno_id: 431,
                materia_id: 10,
            },
            {
                nota: 8,
                alumno_id: 431,
                materia_id: 11,
            },
            {
                nota: 4,
                alumno_id: 431,
                materia_id: 12,
            },
            {
                nota: 7.5,
                alumno_id: 431,
                materia_id: 13,
            },
            {
                nota: 6,
                alumno_id: 431,
                materia_id: 14,
            },
            {
                nota: 7,
                alumno_id: 431,
                materia_id: 15,
            },
            {
                nota: 9.5,
                alumno_id: 432,
                materia_id: 8,
            },
            {
                nota: 7.5,
                alumno_id: 432,
                materia_id: 9,
            },
            {
                nota: 10,
                alumno_id: 432,
                materia_id: 10,
            },
            {
                nota: 8,
                alumno_id: 432,
                materia_id: 11,
            },
            {
                nota: 7,
                alumno_id: 432,
                materia_id: 12,
            },
            {
                nota: 8,
                alumno_id: 432,
                materia_id: 13,
            },
            {
                nota: 9,
                alumno_id: 432,
                materia_id: 14,
            },
            {
                nota: 7,
                alumno_id: 432,
                materia_id: 15,
            },
            {
                nota: 1,
                alumno_id: 433,
                materia_id: 8,
            },
            {
                nota: 7,
                alumno_id: 433,
                materia_id: 9,
            },
            {
                nota: 8.5,
                alumno_id: 433,
                materia_id: 10,
            },
            {
                nota: 7.5,
                alumno_id: 433,
                materia_id: 11,
            },
            {
                nota: 6,
                alumno_id: 433,
                materia_id: 12,
            },
            {
                nota: 8,
                alumno_id: 433,
                materia_id: 13,
            },
            {
                nota: 1,
                alumno_id: 433,
                materia_id: 14,
            },
            {
                nota: 7,
                alumno_id: 433,
                materia_id: 15,
            },
            {
                nota: 1,
                alumno_id: 434,
                materia_id: 8,
            },
            {
                nota: 1,
                alumno_id: 434,
                materia_id: 9,
            },
            {
                nota: 1,
                alumno_id: 434,
                materia_id: 10,
            },
            {
                nota: 1,
                alumno_id: 434,
                materia_id: 11,
            },
            {
                nota: 1,
                alumno_id: 434,
                materia_id: 12,
            },
            {
                nota: 7,
                alumno_id: 434,
                materia_id: 13,
            },
            {
                nota: 1,
                alumno_id: 434,
                materia_id: 14,
            },
            {
                nota: 7,
                alumno_id: 434,
                materia_id: 15,
            },
            {
                nota: 1,
                alumno_id: 435,
                materia_id: 8,
            },
            {
                nota: 8,
                alumno_id: 435,
                materia_id: 9,
            },
            {
                nota: 9,
                alumno_id: 435,
                materia_id: 10,
            },
            {
                nota: 7,
                alumno_id: 435,
                materia_id: 11,
            },
            {
                nota: 7,
                alumno_id: 435,
                materia_id: 12,
            },
            {
                nota: 8.5,
                alumno_id: 435,
                materia_id: 13,
            },
            {
                nota: 6,
                alumno_id: 435,
                materia_id: 14,
            },
            {
                nota: 7,
                alumno_id: 435,
                materia_id: 15,
            },
            {
                nota: 8,
                alumno_id: 436,
                materia_id: 8,
            },
            {
                nota: 8.5,
                alumno_id: 436,
                materia_id: 9,
            },
            {
                nota: 10,
                alumno_id: 436,
                materia_id: 10,
            },
            {
                nota: 9.5,
                alumno_id: 436,
                materia_id: 11,
            },
            {
                nota: 9,
                alumno_id: 436,
                materia_id: 12,
            },
            {
                nota: 8.5,
                alumno_id: 436,
                materia_id: 13,
            },
            {
                nota: 9.5,
                alumno_id: 436,
                materia_id: 14,
            },
            {
                nota: 9,
                alumno_id: 436,
                materia_id: 15,
            },
            {
                nota: 7.5,
                alumno_id: 437,
                materia_id: 8,
            },
            {
                nota: 6.5,
                alumno_id: 437,
                materia_id: 9,
            },
            {
                nota: 9,
                alumno_id: 437,
                materia_id: 10,
            },
            {
                nota: 6,
                alumno_id: 437,
                materia_id: 11,
            },
            {
                nota: 8.5,
                alumno_id: 437,
                materia_id: 12,
            },
            {
                nota: 8,
                alumno_id: 437,
                materia_id: 13,
            },
            {
                nota: 6,
                alumno_id: 437,
                materia_id: 14,
            },
            {
                nota: 7,
                alumno_id: 437,
                materia_id: 15,
            },
            {
                nota: 6,
                alumno_id: 438,
                materia_id: 8,
            },
            {
                nota: 8.5,
                alumno_id: 438,
                materia_id: 9,
            },
            {
                nota: 7,
                alumno_id: 438,
                materia_id: 10,
            },
            {
                nota: 7.5,
                alumno_id: 438,
                materia_id: 11,
            },
            {
                nota: 8,
                alumno_id: 438,
                materia_id: 12,
            },
            {
                nota: 8,
                alumno_id: 438,
                materia_id: 13,
            },
            {
                nota: 8,
                alumno_id: 438,
                materia_id: 14,
            },
            {
                nota: 8,
                alumno_id: 438,
                materia_id: 15,
            },
            {
                nota: 6,
                alumno_id: 439,
                materia_id: 8,
            },
            {
                nota: 7.5,
                alumno_id: 439,
                materia_id: 9,
            },
            {
                nota: 7.5,
                alumno_id: 439,
                materia_id: 10,
            },
            {
                nota: 9,
                alumno_id: 439,
                materia_id: 11,
            },
            {
                nota: 7.5,
                alumno_id: 439,
                materia_id: 12,
            },
            {
                nota: 9,
                alumno_id: 439,
                materia_id: 13,
            },
            {
                nota: 6,
                alumno_id: 439,
                materia_id: 14,
            },
            {
                nota: 7,
                alumno_id: 439,
                materia_id: 15,
            },
            {
                nota: 7,
                alumno_id: 440,
                materia_id: 8,
            },
            {
                nota: 6.5,
                alumno_id: 440,
                materia_id: 9,
            },
            {
                nota: 7,
                alumno_id: 440,
                materia_id: 10,
            },
            {
                nota: 6,
                alumno_id: 440,
                materia_id: 11,
            },
            {
                nota: 1,
                alumno_id: 440,
                materia_id: 12,
            },
            {
                nota: 7.5,
                alumno_id: 440,
                materia_id: 13,
            },
            {
                nota: 6,
                alumno_id: 440,
                materia_id: 14,
            },
            {
                nota: 6,
                alumno_id: 440,
                materia_id: 15,
            },
            {
                nota: 9.5,
                alumno_id: 441,
                materia_id: 8,
            },
            {
                nota: 7.5,
                alumno_id: 441,
                materia_id: 9,
            },
            {
                nota: 10,
                alumno_id: 441,
                materia_id: 10,
            },
            {
                nota: 9,
                alumno_id: 441,
                materia_id: 11,
            },
            {
                nota: 10,
                alumno_id: 441,
                materia_id: 12,
            },
            {
                nota: 8.5,
                alumno_id: 441,
                materia_id: 13,
            },
            {
                nota: 9,
                alumno_id: 441,
                materia_id: 14,
            },
            {
                nota: 7,
                alumno_id: 441,
                materia_id: 15,
            },
            {
                nota: 1,
                alumno_id: 442,
                materia_id: 8,
            },
            {
                nota: 7,
                alumno_id: 442,
                materia_id: 9,
            },
            {
                nota: 8,
                alumno_id: 442,
                materia_id: 10,
            },
            {
                nota: 7.5,
                alumno_id: 442,
                materia_id: 11,
            },
            {
                nota: 6,
                alumno_id: 442,
                materia_id: 12,
            },
            {
                nota: 7.5,
                alumno_id: 442,
                materia_id: 13,
            },
            {
                nota: 1,
                alumno_id: 442,
                materia_id: 14,
            },
            {
                nota: 7,
                alumno_id: 442,
                materia_id: 15,
            },
            {
                nota: 6,
                alumno_id: 443,
                materia_id: 8,
            },
            {
                nota: 8,
                alumno_id: 443,
                materia_id: 9,
            },
            {
                nota: 6.5,
                alumno_id: 443,
                materia_id: 10,
            },
            {
                nota: 8,
                alumno_id: 443,
                materia_id: 11,
            },
            {
                nota: 4,
                alumno_id: 443,
                materia_id: 12,
            },
            {
                nota: 8.5,
                alumno_id: 443,
                materia_id: 13,
            },
            {
                nota: 6,
                alumno_id: 443,
                materia_id: 14,
            },
            {
                nota: 6,
                alumno_id: 443,
                materia_id: 15,
            },
            {
                nota: 6,
                alumno_id: 444,
                materia_id: 8,
            },
            {
                nota: 6.5,
                alumno_id: 444,
                materia_id: 9,
            },
            {
                nota: 1,
                alumno_id: 444,
                materia_id: 10,
            },
            {
                nota: 1,
                alumno_id: 444,
                materia_id: 11,
            },
            {
                nota: 1,
                alumno_id: 444,
                materia_id: 12,
            },
            {
                nota: 1,
                alumno_id: 444,
                materia_id: 13,
            },
            {
                nota: 1,
                alumno_id: 444,
                materia_id: 14,
            },
            {
                nota: 1,
                alumno_id: 444,
                materia_id: 15,
            },
            {
                nota: 1,
                alumno_id: 445,
                materia_id: 8,
            },
            {
                nota: 6,
                alumno_id: 445,
                materia_id: 9,
            },
            {
                nota: 8,
                alumno_id: 445,
                materia_id: 10,
            },
            {
                nota: 6,
                alumno_id: 445,
                materia_id: 11,
            },
            {
                nota: 4,
                alumno_id: 445,
                materia_id: 12,
            },
            {
                nota: 8,
                alumno_id: 445,
                materia_id: 13,
            },
            {
                nota: 1,
                alumno_id: 445,
                materia_id: 14,
            },
            {
                nota: 6,
                alumno_id: 445,
                materia_id: 15,
            },
            {
                nota: 1,
                alumno_id: 446,
                materia_id: 8,
            },
            {
                nota: 7.5,
                alumno_id: 446,
                materia_id: 9,
            },
            {
                nota: 7,
                alumno_id: 446,
                materia_id: 10,
            },
            {
                nota: 6.5,
                alumno_id: 446,
                materia_id: 11,
            },
            {
                nota: 6.5,
                alumno_id: 446,
                materia_id: 12,
            },
            {
                nota: 8.5,
                alumno_id: 446,
                materia_id: 13,
            },
            {
                nota: 1,
                alumno_id: 446,
                materia_id: 14,
            },
            {
                nota: 6,
                alumno_id: 446,
                materia_id: 15,
            },
            {
                nota: 8,
                alumno_id: 447,
                materia_id: 8,
            },
            {
                nota: 7.5,
                alumno_id: 447,
                materia_id: 9,
            },
            {
                nota: 9,
                alumno_id: 447,
                materia_id: 10,
            },
            {
                nota: 8.5,
                alumno_id: 447,
                materia_id: 11,
            },
            {
                nota: 8,
                alumno_id: 447,
                materia_id: 12,
            },
            {
                nota: 8,
                alumno_id: 447,
                materia_id: 13,
            },
            {
                nota: 9.5,
                alumno_id: 447,
                materia_id: 14,
            },
            {
                nota: 7,
                alumno_id: 447,
                materia_id: 15,
            },
            {
                nota: 1,
                alumno_id: 448,
                materia_id: 8,
            },
            {
                nota: 1,
                alumno_id: 448,
                materia_id: 9,
            },
            {
                nota: 1,
                alumno_id: 448,
                materia_id: 10,
            },
            {
                nota: 1,
                alumno_id: 448,
                materia_id: 11,
            },
            {
                nota: 1,
                alumno_id: 448,
                materia_id: 12,
            },
            {
                nota: 7,
                alumno_id: 448,
                materia_id: 13,
            },
            {
                nota: 1,
                alumno_id: 448,
                materia_id: 14,
            },
            {
                nota: 1,
                alumno_id: 448,
                materia_id: 15,
            },
            {
                nota: 6,
                alumno_id: 449,
                materia_id: 8,
            },
            {
                nota: 6,
                alumno_id: 449,
                materia_id: 9,
            },
            {
                nota: 8,
                alumno_id: 449,
                materia_id: 10,
            },
            {
                nota: 6.5,
                alumno_id: 449,
                materia_id: 11,
            },
            {
                nota: 7,
                alumno_id: 449,
                materia_id: 12,
            },
            {
                nota: 8,
                alumno_id: 449,
                materia_id: 13,
            },
            {
                nota: 1,
                alumno_id: 449,
                materia_id: 14,
            },
            {
                nota: 6,
                alumno_id: 449,
                materia_id: 15,
            },
            {
                nota: 1,
                alumno_id: 450,
                materia_id: 8,
            },
            {
                nota: 1,
                alumno_id: 450,
                materia_id: 9,
            },
            {
                nota: 1,
                alumno_id: 450,
                materia_id: 10,
            },
            {
                nota: 1,
                alumno_id: 450,
                materia_id: 11,
            },
            {
                nota: 1,
                alumno_id: 450,
                materia_id: 12,
            },
            {
                nota: 1,
                alumno_id: 450,
                materia_id: 13,
            },
            {
                nota: 1,
                alumno_id: 450,
                materia_id: 14,
            },
            {
                nota: 1,
                alumno_id: 450,
                materia_id: 15,
            },
            {
                nota: 8,
                alumno_id: 451,
                materia_id: 8,
            },
            {
                nota: 6.5,
                alumno_id: 451,
                materia_id: 9,
            },
            {
                nota: 10,
                alumno_id: 451,
                materia_id: 10,
            },
            {
                nota: 7,
                alumno_id: 451,
                materia_id: 11,
            },
            {
                nota: 9,
                alumno_id: 451,
                materia_id: 12,
            },
            {
                nota: 8.5,
                alumno_id: 451,
                materia_id: 13,
            },
            {
                nota: 8,
                alumno_id: 451,
                materia_id: 14,
            },
            {
                nota: 7,
                alumno_id: 451,
                materia_id: 15,
            },
            {
                nota: 6,
                alumno_id: 452,
                materia_id: 8,
            },
            {
                nota: 7.5,
                alumno_id: 452,
                materia_id: 9,
            },
            {
                nota: 8,
                alumno_id: 452,
                materia_id: 10,
            },
            {
                nota: 9,
                alumno_id: 452,
                materia_id: 11,
            },
            {
                nota: 6,
                alumno_id: 452,
                materia_id: 12,
            },
            {
                nota: 9,
                alumno_id: 452,
                materia_id: 13,
            },
            {
                nota: 6,
                alumno_id: 452,
                materia_id: 14,
            },
            {
                nota: 7,
                alumno_id: 452,
                materia_id: 15,
            },
            {
                nota: 6,
                alumno_id: 453,
                materia_id: 8,
            },
            {
                nota: 7,
                alumno_id: 453,
                materia_id: 9,
            },
            {
                nota: 9,
                alumno_id: 453,
                materia_id: 10,
            },
            {
                nota: 7.5,
                alumno_id: 453,
                materia_id: 11,
            },
            {
                nota: 6.5,
                alumno_id: 453,
                materia_id: 12,
            },
            {
                nota: 7.5,
                alumno_id: 453,
                materia_id: 13,
            },
            {
                nota: 7,
                alumno_id: 453,
                materia_id: 14,
            },
            {
                nota: 6,
                alumno_id: 453,
                materia_id: 15,
            },
            {
                nota: 0,
                alumno_id: 454,
                materia_id: 8,
            },
            {
                nota: 0,
                alumno_id: 454,
                materia_id: 9,
            },
            {
                nota: 0,
                alumno_id: 454,
                materia_id: 10,
            },
            {
                nota: 0,
                alumno_id: 454,
                materia_id: 11,
            },
            {
                nota: 0,
                alumno_id: 454,
                materia_id: 12,
            },
            {
                nota: 0,
                alumno_id: 454,
                materia_id: 13,
            },
            {
                nota: 0,
                alumno_id: 454,
                materia_id: 14,
            },
            {
                nota: 0,
                alumno_id: 454,
                materia_id: 15,
            },
            {
                nota: 3,
                alumno_id: 455,
                materia_id: 8,
            },
            {
                nota: 6.5,
                alumno_id: 455,
                materia_id: 9,
            },
            {
                nota: 7,
                alumno_id: 455,
                materia_id: 10,
            },
            {
                nota: 8,
                alumno_id: 455,
                materia_id: 11,
            },
            {
                nota: 6,
                alumno_id: 455,
                materia_id: 12,
            },
            {
                nota: 8.5,
                alumno_id: 455,
                materia_id: 13,
            },
            {
                nota: 6,
                alumno_id: 455,
                materia_id: 14,
            },
            {
                nota: 8,
                alumno_id: 455,
                materia_id: 15,
            },
            {
                nota: 6,
                alumno_id: 456,
                materia_id: 8,
            },
            {
                nota: 6.5,
                alumno_id: 456,
                materia_id: 9,
            },
            {
                nota: 6,
                alumno_id: 456,
                materia_id: 10,
            },
            {
                nota: 7.5,
                alumno_id: 456,
                materia_id: 11,
            },
            {
                nota: 6,
                alumno_id: 456,
                materia_id: 12,
            },
            {
                nota: 8.5,
                alumno_id: 456,
                materia_id: 13,
            },
            {
                nota: 6,
                alumno_id: 456,
                materia_id: 14,
            },
            {
                nota: 8,
                alumno_id: 456,
                materia_id: 15,
            },
            {
                nota: 1,
                alumno_id: 457,
                materia_id: 8,
            },
            {
                nota: 6.5,
                alumno_id: 457,
                materia_id: 9,
            },
            {
                nota: 6,
                alumno_id: 457,
                materia_id: 10,
            },
            {
                nota: 6,
                alumno_id: 457,
                materia_id: 11,
            },
            {
                nota: 4,
                alumno_id: 457,
                materia_id: 12,
            },
            {
                nota: 6,
                alumno_id: 457,
                materia_id: 13,
            },
            {
                nota: 6,
                alumno_id: 457,
                materia_id: 14,
            },
            {
                nota: 6,
                alumno_id: 457,
                materia_id: 15,
            },
            {
                nota: 1,
                alumno_id: 458,
                materia_id: 8,
            },
            {
                nota: 7.5,
                alumno_id: 458,
                materia_id: 9,
            },
            {
                nota: 9,
                alumno_id: 458,
                materia_id: 10,
            },
            {
                nota: 7.5,
                alumno_id: 458,
                materia_id: 11,
            },
            {
                nota: 7,
                alumno_id: 458,
                materia_id: 12,
            },
            {
                nota: 7.5,
                alumno_id: 458,
                materia_id: 13,
            },
            {
                nota: 6,
                alumno_id: 458,
                materia_id: 14,
            },
            {
                nota: 6,
                alumno_id: 458,
                materia_id: 15,
            },
            {
                nota: 7.5,
                alumno_id: 459,
                materia_id: 8,
            },
            {
                nota: 8.5,
                alumno_id: 459,
                materia_id: 9,
            },
            {
                nota: 9.5,
                alumno_id: 459,
                materia_id: 10,
            },
            {
                nota: 8.5,
                alumno_id: 459,
                materia_id: 11,
            },
            {
                nota: 9,
                alumno_id: 459,
                materia_id: 12,
            },
            {
                nota: 8,
                alumno_id: 459,
                materia_id: 13,
            },
            {
                nota: 7,
                alumno_id: 459,
                materia_id: 14,
            },
            {
                nota: 8.5,
                alumno_id: 459,
                materia_id: 15,
            },
            {
                nota: 0,
                alumno_id: 460,
                materia_id: 8,
            },
            {
                nota: 0,
                alumno_id: 460,
                materia_id: 9,
            },
            {
                nota: 0,
                alumno_id: 460,
                materia_id: 10,
            },
            {
                nota: 0,
                alumno_id: 460,
                materia_id: 11,
            },
            {
                nota: 0,
                alumno_id: 460,
                materia_id: 12,
            },
            {
                nota: 1,
                alumno_id: 460,
                materia_id: 13,
            },
            {
                nota: 0,
                alumno_id: 460,
                materia_id: 14,
            },
            {
                nota: 0,
                alumno_id: 460,
                materia_id: 15,
            },
            {
                nota: 6,
                alumno_id: 461,
                materia_id: 16,
            },
            {
                nota: 7,
                alumno_id: 461,
                materia_id: 17,
            },
            {
                nota: 8,
                alumno_id: 461,
                materia_id: 18,
            },
            {
                nota: 8.5,
                alumno_id: 461,
                materia_id: 19,
            },
            {
                nota: 7.5,
                alumno_id: 461,
                materia_id: 20,
            },
            {
                nota: 7,
                alumno_id: 461,
                materia_id: 21,
            },
            {
                nota: 9,
                alumno_id: 461,
                materia_id: 22,
            },
            {
                nota: 6,
                alumno_id: 461,
                materia_id: 23,
            },
            {
                nota: 6.5,
                alumno_id: 461,
                materia_id: 24,
            },
            {
                nota: 7.5,
                alumno_id: 461,
                materia_id: 25,
            },
            {
                nota: 1,
                alumno_id: 462,
                materia_id: 16,
            },
            {
                nota: 1,
                alumno_id: 462,
                materia_id: 17,
            },
            {
                nota: 1,
                alumno_id: 462,
                materia_id: 18,
            },
            {
                nota: 4,
                alumno_id: 462,
                materia_id: 19,
            },
            {
                nota: 6,
                alumno_id: 462,
                materia_id: 20,
            },
            {
                nota: 7,
                alumno_id: 462,
                materia_id: 21,
            },
            {
                nota: 6,
                alumno_id: 462,
                materia_id: 22,
            },
            {
                nota: 6,
                alumno_id: 462,
                materia_id: 23,
            },
            {
                nota: 6,
                alumno_id: 462,
                materia_id: 24,
            },
            {
                nota: 6,
                alumno_id: 462,
                materia_id: 25,
            },
            {
                nota: 6,
                alumno_id: 463,
                materia_id: 16,
            },
            {
                nota: 1,
                alumno_id: 463,
                materia_id: 17,
            },
            {
                nota: 6,
                alumno_id: 463,
                materia_id: 18,
            },
            {
                nota: 4,
                alumno_id: 463,
                materia_id: 19,
            },
            {
                nota: 6,
                alumno_id: 463,
                materia_id: 20,
            },
            {
                nota: 7,
                alumno_id: 463,
                materia_id: 21,
            },
            {
                nota: 6,
                alumno_id: 463,
                materia_id: 22,
            },
            {
                nota: 7,
                alumno_id: 463,
                materia_id: 23,
            },
            {
                nota: 6,
                alumno_id: 463,
                materia_id: 24,
            },
            {
                nota: 6,
                alumno_id: 463,
                materia_id: 25,
            },
            {
                nota: 8,
                alumno_id: 464,
                materia_id: 16,
            },
            {
                nota: 9,
                alumno_id: 464,
                materia_id: 17,
            },
            {
                nota: 7.5,
                alumno_id: 464,
                materia_id: 18,
            },
            {
                nota: 7,
                alumno_id: 464,
                materia_id: 19,
            },
            {
                nota: 8,
                alumno_id: 464,
                materia_id: 20,
            },
            {
                nota: 9,
                alumno_id: 464,
                materia_id: 21,
            },
            {
                nota: 8.5,
                alumno_id: 464,
                materia_id: 22,
            },
            {
                nota: 9.5,
                alumno_id: 464,
                materia_id: 23,
            },
            {
                nota: 7,
                alumno_id: 464,
                materia_id: 24,
            },
            {
                nota: 8,
                alumno_id: 464,
                materia_id: 25,
            },
            {
                nota: 1,
                alumno_id: 465,
                materia_id: 16,
            },
            {
                nota: 1,
                alumno_id: 465,
                materia_id: 17,
            },
            {
                nota: 1,
                alumno_id: 465,
                materia_id: 18,
            },
            {
                nota: 1,
                alumno_id: 465,
                materia_id: 19,
            },
            {
                nota: 4,
                alumno_id: 465,
                materia_id: 20,
            },
            {
                nota: 7,
                alumno_id: 465,
                materia_id: 21,
            },
            {
                nota: 6,
                alumno_id: 465,
                materia_id: 22,
            },
            {
                nota: 1,
                alumno_id: 465,
                materia_id: 23,
            },
            {
                nota: 6,
                alumno_id: 465,
                materia_id: 24,
            },
            {
                nota: 6,
                alumno_id: 465,
                materia_id: 25,
            },
            {
                nota: 8,
                alumno_id: 466,
                materia_id: 16,
            },
            {
                nota: 6,
                alumno_id: 466,
                materia_id: 17,
            },
            {
                nota: 8,
                alumno_id: 466,
                materia_id: 18,
            },
            {
                nota: 7.5,
                alumno_id: 466,
                materia_id: 19,
            },
            {
                nota: 6.5,
                alumno_id: 466,
                materia_id: 20,
            },
            {
                nota: 7,
                alumno_id: 466,
                materia_id: 21,
            },
            {
                nota: 8,
                alumno_id: 466,
                materia_id: 22,
            },
            {
                nota: 6,
                alumno_id: 466,
                materia_id: 23,
            },
            {
                nota: 8,
                alumno_id: 466,
                materia_id: 24,
            },
            {
                nota: 7.5,
                alumno_id: 466,
                materia_id: 25,
            },
            {
                nota: 8,
                alumno_id: 467,
                materia_id: 16,
            },
            {
                nota: 6,
                alumno_id: 467,
                materia_id: 17,
            },
            {
                nota: 1,
                alumno_id: 467,
                materia_id: 18,
            },
            {
                nota: 1,
                alumno_id: 467,
                materia_id: 19,
            },
            {
                nota: 6.5,
                alumno_id: 467,
                materia_id: 20,
            },
            {
                nota: 7,
                alumno_id: 467,
                materia_id: 21,
            },
            {
                nota: 6,
                alumno_id: 467,
                materia_id: 22,
            },
            {
                nota: 6,
                alumno_id: 467,
                materia_id: 23,
            },
            {
                nota: 6,
                alumno_id: 467,
                materia_id: 24,
            },
            {
                nota: 6.5,
                alumno_id: 467,
                materia_id: 25,
            },
            {
                nota: 6,
                alumno_id: 468,
                materia_id: 16,
            },
            {
                nota: 7,
                alumno_id: 468,
                materia_id: 17,
            },
            {
                nota: 1,
                alumno_id: 468,
                materia_id: 18,
            },
            {
                nota: 1,
                alumno_id: 468,
                materia_id: 19,
            },
            {
                nota: 6.5,
                alumno_id: 468,
                materia_id: 20,
            },
            {
                nota: 7,
                alumno_id: 468,
                materia_id: 21,
            },
            {
                nota: 6,
                alumno_id: 468,
                materia_id: 22,
            },
            {
                nota: 6,
                alumno_id: 468,
                materia_id: 23,
            },
            {
                nota: 6,
                alumno_id: 468,
                materia_id: 24,
            },
            {
                nota: 6,
                alumno_id: 468,
                materia_id: 25,
            },
            {
                nota: 8,
                alumno_id: 469,
                materia_id: 16,
            },
            {
                nota: 7,
                alumno_id: 469,
                materia_id: 17,
            },
            {
                nota: 6.5,
                alumno_id: 469,
                materia_id: 18,
            },
            {
                nota: 6,
                alumno_id: 469,
                materia_id: 19,
            },
            {
                nota: 6.5,
                alumno_id: 469,
                materia_id: 20,
            },
            {
                nota: 7,
                alumno_id: 469,
                materia_id: 21,
            },
            {
                nota: 7.5,
                alumno_id: 469,
                materia_id: 22,
            },
            {
                nota: 7,
                alumno_id: 469,
                materia_id: 23,
            },
            {
                nota: 6.5,
                alumno_id: 469,
                materia_id: 24,
            },
            {
                nota: 7,
                alumno_id: 469,
                materia_id: 25,
            },
            {
                nota: 6,
                alumno_id: 470,
                materia_id: 16,
            },
            {
                nota: 6,
                alumno_id: 470,
                materia_id: 17,
            },
            {
                nota: 6,
                alumno_id: 470,
                materia_id: 18,
            },
            {
                nota: 4,
                alumno_id: 470,
                materia_id: 19,
            },
            {
                nota: 6,
                alumno_id: 470,
                materia_id: 20,
            },
            {
                nota: 7,
                alumno_id: 470,
                materia_id: 21,
            },
            {
                nota: 6,
                alumno_id: 470,
                materia_id: 22,
            },
            {
                nota: 6,
                alumno_id: 470,
                materia_id: 23,
            },
            {
                nota: 6,
                alumno_id: 470,
                materia_id: 24,
            },
            {
                nota: 6.5,
                alumno_id: 470,
                materia_id: 25,
            },
            {
                nota: 0,
                alumno_id: 471,
                materia_id: 16,
            },
            {
                nota: 0,
                alumno_id: 471,
                materia_id: 17,
            },
            {
                nota: 0,
                alumno_id: 471,
                materia_id: 18,
            },
            {
                nota: 0,
                alumno_id: 471,
                materia_id: 19,
            },
            {
                nota: 0,
                alumno_id: 471,
                materia_id: 20,
            },
            {
                nota: 0,
                alumno_id: 471,
                materia_id: 21,
            },
            {
                nota: 0,
                alumno_id: 471,
                materia_id: 22,
            },
            {
                nota: 0,
                alumno_id: 471,
                materia_id: 23,
            },
            {
                nota: 0,
                alumno_id: 471,
                materia_id: 24,
            },
            {
                nota: 0,
                alumno_id: 471,
                materia_id: 25,
            },
            {
                nota: 1,
                alumno_id: 472,
                materia_id: 16,
            },
            {
                nota: 1,
                alumno_id: 472,
                materia_id: 17,
            },
            {
                nota: 1,
                alumno_id: 472,
                materia_id: 18,
            },
            {
                nota: 4,
                alumno_id: 472,
                materia_id: 19,
            },
            {
                nota: 6.5,
                alumno_id: 472,
                materia_id: 20,
            },
            {
                nota: 7,
                alumno_id: 472,
                materia_id: 21,
            },
            {
                nota: 6,
                alumno_id: 472,
                materia_id: 22,
            },
            {
                nota: 7,
                alumno_id: 472,
                materia_id: 23,
            },
            {
                nota: 6,
                alumno_id: 472,
                materia_id: 24,
            },
            {
                nota: 6,
                alumno_id: 472,
                materia_id: 25,
            },
            {
                nota: 6,
                alumno_id: 473,
                materia_id: 16,
            },
            {
                nota: 6,
                alumno_id: 473,
                materia_id: 17,
            },
            {
                nota: 6,
                alumno_id: 473,
                materia_id: 18,
            },
            {
                nota: 6,
                alumno_id: 473,
                materia_id: 19,
            },
            {
                nota: 7.5,
                alumno_id: 473,
                materia_id: 20,
            },
            {
                nota: 7,
                alumno_id: 473,
                materia_id: 21,
            },
            {
                nota: 7.5,
                alumno_id: 473,
                materia_id: 22,
            },
            {
                nota: 8,
                alumno_id: 473,
                materia_id: 23,
            },
            {
                nota: 6.5,
                alumno_id: 473,
                materia_id: 24,
            },
            {
                nota: 6,
                alumno_id: 473,
                materia_id: 25,
            },
            {
                nota: 1,
                alumno_id: 474,
                materia_id: 16,
            },
            {
                nota: 1,
                alumno_id: 474,
                materia_id: 17,
            },
            {
                nota: 1,
                alumno_id: 474,
                materia_id: 18,
            },
            {
                nota: 1,
                alumno_id: 474,
                materia_id: 19,
            },
            {
                nota: 1,
                alumno_id: 474,
                materia_id: 20,
            },
            {
                nota: 7,
                alumno_id: 474,
                materia_id: 21,
            },
            {
                nota: 1,
                alumno_id: 474,
                materia_id: 22,
            },
            {
                nota: 1,
                alumno_id: 474,
                materia_id: 23,
            },
            {
                nota: 1,
                alumno_id: 474,
                materia_id: 24,
            },
            {
                nota: 1,
                alumno_id: 474,
                materia_id: 25,
            },
            {
                nota: 6,
                alumno_id: 475,
                materia_id: 16,
            },
            {
                nota: 1,
                alumno_id: 475,
                materia_id: 17,
            },
            {
                nota: 6,
                alumno_id: 475,
                materia_id: 18,
            },
            {
                nota: 6,
                alumno_id: 475,
                materia_id: 19,
            },
            {
                nota: 7,
                alumno_id: 475,
                materia_id: 20,
            },
            {
                nota: 7,
                alumno_id: 475,
                materia_id: 21,
            },
            {
                nota: 7,
                alumno_id: 475,
                materia_id: 22,
            },
            {
                nota: 6,
                alumno_id: 475,
                materia_id: 23,
            },
            {
                nota: 6,
                alumno_id: 475,
                materia_id: 24,
            },
            {
                nota: 6.5,
                alumno_id: 475,
                materia_id: 25,
            },
            {
                nota: 0,
                alumno_id: 476,
                materia_id: 16,
            },
            {
                nota: 0,
                alumno_id: 476,
                materia_id: 17,
            },
            {
                nota: 0,
                alumno_id: 476,
                materia_id: 18,
            },
            {
                nota: 0,
                alumno_id: 476,
                materia_id: 19,
            },
            {
                nota: 0,
                alumno_id: 476,
                materia_id: 20,
            },
            {
                nota: 0,
                alumno_id: 476,
                materia_id: 21,
            },
            {
                nota: 0,
                alumno_id: 476,
                materia_id: 22,
            },
            {
                nota: 0,
                alumno_id: 476,
                materia_id: 23,
            },
            {
                nota: 0,
                alumno_id: 476,
                materia_id: 24,
            },
            {
                nota: 0,
                alumno_id: 476,
                materia_id: 25,
            },
            {
                nota: 6,
                alumno_id: 477,
                materia_id: 16,
            },
            {
                nota: 7,
                alumno_id: 477,
                materia_id: 17,
            },
            {
                nota: 7,
                alumno_id: 477,
                materia_id: 18,
            },
            {
                nota: 4,
                alumno_id: 477,
                materia_id: 19,
            },
            {
                nota: 8,
                alumno_id: 477,
                materia_id: 20,
            },
            {
                nota: 7,
                alumno_id: 477,
                materia_id: 21,
            },
            {
                nota: 6,
                alumno_id: 477,
                materia_id: 22,
            },
            {
                nota: 8,
                alumno_id: 477,
                materia_id: 23,
            },
            {
                nota: 6,
                alumno_id: 477,
                materia_id: 24,
            },
            {
                nota: 6.5,
                alumno_id: 477,
                materia_id: 25,
            },
            {
                nota: 6,
                alumno_id: 478,
                materia_id: 16,
            },
            {
                nota: 7,
                alumno_id: 478,
                materia_id: 17,
            },
            {
                nota: 7,
                alumno_id: 478,
                materia_id: 18,
            },
            {
                nota: 4,
                alumno_id: 478,
                materia_id: 19,
            },
            {
                nota: 6.5,
                alumno_id: 478,
                materia_id: 20,
            },
            {
                nota: 7,
                alumno_id: 478,
                materia_id: 21,
            },
            {
                nota: 8.5,
                alumno_id: 478,
                materia_id: 22,
            },
            {
                nota: 6,
                alumno_id: 478,
                materia_id: 23,
            },
            {
                nota: 6,
                alumno_id: 478,
                materia_id: 24,
            },
            {
                nota: 6,
                alumno_id: 478,
                materia_id: 25,
            },
            {
                nota: 1,
                alumno_id: 479,
                materia_id: 16,
            },
            {
                nota: 6,
                alumno_id: 479,
                materia_id: 17,
            },
            {
                nota: 1,
                alumno_id: 479,
                materia_id: 18,
            },
            {
                nota: 8.5,
                alumno_id: 479,
                materia_id: 19,
            },
            {
                nota: 6,
                alumno_id: 479,
                materia_id: 20,
            },
            {
                nota: 7,
                alumno_id: 479,
                materia_id: 21,
            },
            {
                nota: 8.5,
                alumno_id: 479,
                materia_id: 22,
            },
            {
                nota: 6,
                alumno_id: 479,
                materia_id: 23,
            },
            {
                nota: 6,
                alumno_id: 479,
                materia_id: 24,
            },
            {
                nota: 6,
                alumno_id: 479,
                materia_id: 25,
            },
            {
                nota: 6,
                alumno_id: 480,
                materia_id: 16,
            },
            {
                nota: 6,
                alumno_id: 480,
                materia_id: 17,
            },
            {
                nota: 6,
                alumno_id: 480,
                materia_id: 18,
            },
            {
                nota: 4,
                alumno_id: 480,
                materia_id: 19,
            },
            {
                nota: 6.5,
                alumno_id: 480,
                materia_id: 20,
            },
            {
                nota: 7,
                alumno_id: 480,
                materia_id: 21,
            },
            {
                nota: 8,
                alumno_id: 480,
                materia_id: 22,
            },
            {
                nota: 6,
                alumno_id: 480,
                materia_id: 23,
            },
            {
                nota: 6,
                alumno_id: 480,
                materia_id: 24,
            },
            {
                nota: 6,
                alumno_id: 480,
                materia_id: 25,
            },
            {
                nota: 6,
                alumno_id: 481,
                materia_id: 16,
            },
            {
                nota: 6,
                alumno_id: 481,
                materia_id: 17,
            },
            {
                nota: 6,
                alumno_id: 481,
                materia_id: 18,
            },
            {
                nota: 4,
                alumno_id: 481,
                materia_id: 19,
            },
            {
                nota: 6,
                alumno_id: 481,
                materia_id: 20,
            },
            {
                nota: 7,
                alumno_id: 481,
                materia_id: 21,
            },
            {
                nota: 7,
                alumno_id: 481,
                materia_id: 22,
            },
            {
                nota: 7,
                alumno_id: 481,
                materia_id: 23,
            },
            {
                nota: 6,
                alumno_id: 481,
                materia_id: 24,
            },
            {
                nota: 6,
                alumno_id: 481,
                materia_id: 25,
            },
            {
                nota: 0,
                alumno_id: 482,
                materia_id: 16,
            },
            {
                nota: 0,
                alumno_id: 482,
                materia_id: 17,
            },
            {
                nota: 0,
                alumno_id: 482,
                materia_id: 18,
            },
            {
                nota: 0,
                alumno_id: 482,
                materia_id: 19,
            },
            {
                nota: 0,
                alumno_id: 482,
                materia_id: 20,
            },
            {
                nota: 0,
                alumno_id: 482,
                materia_id: 21,
            },
            {
                nota: 0,
                alumno_id: 482,
                materia_id: 22,
            },
            {
                nota: 0,
                alumno_id: 482,
                materia_id: 23,
            },
            {
                nota: 0,
                alumno_id: 482,
                materia_id: 24,
            },
            {
                nota: 0,
                alumno_id: 482,
                materia_id: 25,
            },
            {
                nota: 6,
                alumno_id: 483,
                materia_id: 16,
            },
            {
                nota: 6,
                alumno_id: 483,
                materia_id: 17,
            },
            {
                nota: 6.5,
                alumno_id: 483,
                materia_id: 18,
            },
            {
                nota: 5,
                alumno_id: 483,
                materia_id: 19,
            },
            {
                nota: 6.5,
                alumno_id: 483,
                materia_id: 20,
            },
            {
                nota: 7,
                alumno_id: 483,
                materia_id: 21,
            },
            {
                nota: 9,
                alumno_id: 483,
                materia_id: 22,
            },
            {
                nota: 7,
                alumno_id: 483,
                materia_id: 23,
            },
            {
                nota: 6,
                alumno_id: 483,
                materia_id: 24,
            },
            {
                nota: 6,
                alumno_id: 483,
                materia_id: 25,
            },
            {
                nota: 1,
                alumno_id: 484,
                materia_id: 16,
            },
            {
                nota: 1,
                alumno_id: 484,
                materia_id: 17,
            },
            {
                nota: 1,
                alumno_id: 484,
                materia_id: 18,
            },
            {
                nota: 1,
                alumno_id: 484,
                materia_id: 19,
            },
            {
                nota: 7,
                alumno_id: 484,
                materia_id: 20,
            },
            {
                nota: 7,
                alumno_id: 484,
                materia_id: 21,
            },
            {
                nota: 7,
                alumno_id: 484,
                materia_id: 22,
            },
            {
                nota: 7,
                alumno_id: 484,
                materia_id: 23,
            },
            {
                nota: 6,
                alumno_id: 484,
                materia_id: 24,
            },
            {
                nota: 6,
                alumno_id: 484,
                materia_id: 25,
            },
            {
                nota: 1,
                alumno_id: 485,
                materia_id: 16,
            },
            {
                nota: 1,
                alumno_id: 485,
                materia_id: 17,
            },
            {
                nota: 7.5,
                alumno_id: 485,
                materia_id: 18,
            },
            {
                nota: 1,
                alumno_id: 485,
                materia_id: 19,
            },
            {
                nota: 6,
                alumno_id: 485,
                materia_id: 20,
            },
            {
                nota: 9,
                alumno_id: 485,
                materia_id: 21,
            },
            {
                nota: 6,
                alumno_id: 485,
                materia_id: 22,
            },
            {
                nota: 6,
                alumno_id: 485,
                materia_id: 23,
            },
            {
                nota: 6,
                alumno_id: 485,
                materia_id: 24,
            },
            {
                nota: 6,
                alumno_id: 485,
                materia_id: 25,
            },
            {
                nota: 0,
                alumno_id: 486,
                materia_id: 16,
            },
            {
                nota: 0,
                alumno_id: 486,
                materia_id: 17,
            },
            {
                nota: 0,
                alumno_id: 486,
                materia_id: 18,
            },
            {
                nota: 0,
                alumno_id: 486,
                materia_id: 19,
            },
            {
                nota: 0,
                alumno_id: 486,
                materia_id: 20,
            },
            {
                nota: 0,
                alumno_id: 486,
                materia_id: 21,
            },
            {
                nota: 0,
                alumno_id: 486,
                materia_id: 22,
            },
            {
                nota: 0,
                alumno_id: 486,
                materia_id: 23,
            },
            {
                nota: 0,
                alumno_id: 486,
                materia_id: 24,
            },
            {
                nota: 0,
                alumno_id: 486,
                materia_id: 25,
            },
            {
                nota: 1,
                alumno_id: 487,
                materia_id: 16,
            },
            {
                nota: 6,
                alumno_id: 487,
                materia_id: 17,
            },
            {
                nota: 6.5,
                alumno_id: 487,
                materia_id: 18,
            },
            {
                nota: 7.5,
                alumno_id: 487,
                materia_id: 19,
            },
            {
                nota: 9,
                alumno_id: 487,
                materia_id: 20,
            },
            {
                nota: 7,
                alumno_id: 487,
                materia_id: 21,
            },
            {
                nota: 6,
                alumno_id: 487,
                materia_id: 22,
            },
            {
                nota: 6,
                alumno_id: 487,
                materia_id: 23,
            },
            {
                nota: 6,
                alumno_id: 487,
                materia_id: 24,
            },
            {
                nota: 6,
                alumno_id: 487,
                materia_id: 25,
            },
            {
                nota: 6.5,
                alumno_id: 488,
                materia_id: 16,
            },
            {
                nota: 9,
                alumno_id: 488,
                materia_id: 17,
            },
            {
                nota: 7,
                alumno_id: 488,
                materia_id: 18,
            },
            {
                nota: 6,
                alumno_id: 488,
                materia_id: 19,
            },
            {
                nota: 5,
                alumno_id: 488,
                materia_id: 20,
            },
            {
                nota: 9,
                alumno_id: 488,
                materia_id: 21,
            },
            {
                nota: 9,
                alumno_id: 488,
                materia_id: 22,
            },
            {
                nota: 9,
                alumno_id: 488,
                materia_id: 23,
            },
            {
                nota: 6,
                alumno_id: 488,
                materia_id: 24,
            },
            {
                nota: 6.5,
                alumno_id: 488,
                materia_id: 25,
            },
            {
                nota: 7.5,
                alumno_id: 489,
                materia_id: 16,
            },
            {
                nota: 8,
                alumno_id: 489,
                materia_id: 17,
            },
            {
                nota: 8,
                alumno_id: 489,
                materia_id: 18,
            },
            {
                nota: 8.5,
                alumno_id: 489,
                materia_id: 19,
            },
            {
                nota: 9,
                alumno_id: 489,
                materia_id: 20,
            },
            {
                nota: 9,
                alumno_id: 489,
                materia_id: 21,
            },
            {
                nota: 9,
                alumno_id: 489,
                materia_id: 22,
            },
            {
                nota: 8,
                alumno_id: 489,
                materia_id: 23,
            },
            {
                nota: 7,
                alumno_id: 489,
                materia_id: 24,
            },
            {
                nota: 10,
                alumno_id: 489,
                materia_id: 25,
            },
            {
                nota: 6,
                alumno_id: 490,
                materia_id: 16,
            },
            {
                nota: 6,
                alumno_id: 490,
                materia_id: 17,
            },
            {
                nota: 7,
                alumno_id: 490,
                materia_id: 18,
            },
            {
                nota: 4,
                alumno_id: 490,
                materia_id: 19,
            },
            {
                nota: 7,
                alumno_id: 490,
                materia_id: 20,
            },
            {
                nota: 9,
                alumno_id: 490,
                materia_id: 21,
            },
            {
                nota: 8,
                alumno_id: 490,
                materia_id: 22,
            },
            {
                nota: 7,
                alumno_id: 490,
                materia_id: 23,
            },
            {
                nota: 6,
                alumno_id: 490,
                materia_id: 24,
            },
            {
                nota: 6,
                alumno_id: 490,
                materia_id: 25,
            },
            {
                nota: 6,
                alumno_id: 491,
                materia_id: 16,
            },
            {
                nota: 1,
                alumno_id: 491,
                materia_id: 17,
            },
            {
                nota: 7,
                alumno_id: 491,
                materia_id: 18,
            },
            {
                nota: 5,
                alumno_id: 491,
                materia_id: 19,
            },
            {
                nota: 7.5,
                alumno_id: 491,
                materia_id: 20,
            },
            {
                nota: 9,
                alumno_id: 491,
                materia_id: 21,
            },
            {
                nota: 8,
                alumno_id: 491,
                materia_id: 22,
            },
            {
                nota: 7,
                alumno_id: 491,
                materia_id: 23,
            },
            {
                nota: 6,
                alumno_id: 491,
                materia_id: 24,
            },
            {
                nota: 6.5,
                alumno_id: 491,
                materia_id: 25,
            },
            {
                nota: 1,
                alumno_id: 492,
                materia_id: 16,
            },
            {
                nota: 1,
                alumno_id: 492,
                materia_id: 17,
            },
            {
                nota: 1,
                alumno_id: 492,
                materia_id: 18,
            },
            {
                nota: 1,
                alumno_id: 492,
                materia_id: 19,
            },
            {
                nota: 6.5,
                alumno_id: 492,
                materia_id: 20,
            },
            {
                nota: 7,
                alumno_id: 492,
                materia_id: 21,
            },
            {
                nota: 6,
                alumno_id: 492,
                materia_id: 22,
            },
            {
                nota: 6,
                alumno_id: 492,
                materia_id: 23,
            },
            {
                nota: 6,
                alumno_id: 492,
                materia_id: 24,
            },
            {
                nota: 6,
                alumno_id: 492,
                materia_id: 25,
            },
            {
                nota: 0,
                alumno_id: 493,
                materia_id: 16,
            },
            {
                nota: 0,
                alumno_id: 493,
                materia_id: 17,
            },
            {
                nota: 0,
                alumno_id: 493,
                materia_id: 18,
            },
            {
                nota: 0,
                alumno_id: 493,
                materia_id: 19,
            },
            {
                nota: 0,
                alumno_id: 493,
                materia_id: 20,
            },
            {
                nota: 0,
                alumno_id: 493,
                materia_id: 21,
            },
            {
                nota: 0,
                alumno_id: 493,
                materia_id: 22,
            },
            {
                nota: 0,
                alumno_id: 493,
                materia_id: 23,
            },
            {
                nota: 0,
                alumno_id: 493,
                materia_id: 24,
            },
            {
                nota: 0,
                alumno_id: 493,
                materia_id: 25,
            },
            {
                nota: 6,
                alumno_id: 494,
                materia_id: 16,
            },
            {
                nota: 8,
                alumno_id: 494,
                materia_id: 17,
            },
            {
                nota: 8,
                alumno_id: 494,
                materia_id: 18,
            },
            {
                nota: 8.5,
                alumno_id: 494,
                materia_id: 19,
            },
            {
                nota: 9,
                alumno_id: 494,
                materia_id: 20,
            },
            {
                nota: 9,
                alumno_id: 494,
                materia_id: 21,
            },
            {
                nota: 7.5,
                alumno_id: 494,
                materia_id: 22,
            },
            {
                nota: 8,
                alumno_id: 494,
                materia_id: 23,
            },
            {
                nota: 7,
                alumno_id: 494,
                materia_id: 24,
            },
            {
                nota: 10,
                alumno_id: 494,
                materia_id: 25,
            },
            {
                nota: 6,
                alumno_id: 495,
                materia_id: 16,
            },
            {
                nota: 7,
                alumno_id: 495,
                materia_id: 17,
            },
            {
                nota: 1,
                alumno_id: 495,
                materia_id: 18,
            },
            {
                nota: 4,
                alumno_id: 495,
                materia_id: 19,
            },
            {
                nota: 6,
                alumno_id: 495,
                materia_id: 20,
            },
            {
                nota: 9,
                alumno_id: 495,
                materia_id: 21,
            },
            {
                nota: 6,
                alumno_id: 495,
                materia_id: 22,
            },
            {
                nota: 6,
                alumno_id: 495,
                materia_id: 23,
            },
            {
                nota: 6,
                alumno_id: 495,
                materia_id: 24,
            },
            {
                nota: 6,
                alumno_id: 495,
                materia_id: 25,
            },
            {
                nota: 6,
                alumno_id: 496,
                materia_id: 16,
            },
            {
                nota: 7,
                alumno_id: 496,
                materia_id: 17,
            },
            {
                nota: 8.5,
                alumno_id: 496,
                materia_id: 18,
            },
            {
                nota: 6,
                alumno_id: 496,
                materia_id: 19,
            },
            {
                nota: 9,
                alumno_id: 496,
                materia_id: 20,
            },
            {
                nota: 9,
                alumno_id: 496,
                materia_id: 21,
            },
            {
                nota: 7,
                alumno_id: 496,
                materia_id: 22,
            },
            {
                nota: 6,
                alumno_id: 496,
                materia_id: 23,
            },
            {
                nota: 6,
                alumno_id: 496,
                materia_id: 24,
            },
            {
                nota: 9.5,
                alumno_id: 496,
                materia_id: 25,
            },
            {
                nota: 6,
                alumno_id: 497,
                materia_id: 16,
            },
            {
                nota: 7,
                alumno_id: 497,
                materia_id: 17,
            },
            {
                nota: 7,
                alumno_id: 497,
                materia_id: 18,
            },
            {
                nota: 4,
                alumno_id: 497,
                materia_id: 19,
            },
            {
                nota: 7,
                alumno_id: 497,
                materia_id: 20,
            },
            {
                nota: 9,
                alumno_id: 497,
                materia_id: 21,
            },
            {
                nota: 6.5,
                alumno_id: 497,
                materia_id: 22,
            },
            {
                nota: 6,
                alumno_id: 497,
                materia_id: 23,
            },
            {
                nota: 6,
                alumno_id: 497,
                materia_id: 24,
            },
            {
                nota: 6,
                alumno_id: 497,
                materia_id: 25,
            },
            {
                nota: 7,
                alumno_id: 498,
                materia_id: 16,
            },
            {
                nota: 6,
                alumno_id: 498,
                materia_id: 17,
            },
            {
                nota: 1,
                alumno_id: 498,
                materia_id: 18,
            },
            {
                nota: 6,
                alumno_id: 498,
                materia_id: 19,
            },
            {
                nota: 6,
                alumno_id: 498,
                materia_id: 20,
            },
            {
                nota: 6,
                alumno_id: 498,
                materia_id: 21,
            },
            {
                nota: 7,
                alumno_id: 498,
                materia_id: 22,
            },
            {
                nota: 6,
                alumno_id: 498,
                materia_id: 23,
            },
            {
                nota: 6,
                alumno_id: 498,
                materia_id: 24,
            },
            {
                nota: 6,
                alumno_id: 498,
                materia_id: 25,
            },
            {
                nota: 9,
                alumno_id: 499,
                materia_id: 16,
            },
            {
                nota: 6,
                alumno_id: 499,
                materia_id: 17,
            },
            {
                nota: 8,
                alumno_id: 499,
                materia_id: 18,
            },
            {
                nota: 7.5,
                alumno_id: 499,
                materia_id: 19,
            },
            {
                nota: 8,
                alumno_id: 499,
                materia_id: 20,
            },
            {
                nota: 6,
                alumno_id: 499,
                materia_id: 21,
            },
            {
                nota: 6.5,
                alumno_id: 499,
                materia_id: 22,
            },
            {
                nota: 9,
                alumno_id: 499,
                materia_id: 23,
            },
            {
                nota: 8.5,
                alumno_id: 499,
                materia_id: 24,
            },
            {
                nota: 7,
                alumno_id: 499,
                materia_id: 25,
            },
            {
                nota: 10,
                alumno_id: 500,
                materia_id: 16,
            },
            {
                nota: 6,
                alumno_id: 500,
                materia_id: 17,
            },
            {
                nota: 5,
                alumno_id: 500,
                materia_id: 18,
            },
            {
                nota: 6,
                alumno_id: 500,
                materia_id: 19,
            },
            {
                nota: 6,
                alumno_id: 500,
                materia_id: 20,
            },
            {
                nota: 9,
                alumno_id: 500,
                materia_id: 21,
            },
            {
                nota: 7.5,
                alumno_id: 500,
                materia_id: 22,
            },
            {
                nota: 6,
                alumno_id: 500,
                materia_id: 23,
            },
            {
                nota: 6,
                alumno_id: 500,
                materia_id: 24,
            },
            {
                nota: 6.5,
                alumno_id: 500,
                materia_id: 25,
            },
            {
                nota: 6.5,
                alumno_id: 501,
                materia_id: 16,
            },
            {
                nota: 6,
                alumno_id: 501,
                materia_id: 17,
            },
            {
                nota: 1,
                alumno_id: 501,
                materia_id: 18,
            },
            {
                nota: 6,
                alumno_id: 501,
                materia_id: 19,
            },
            {
                nota: 6.5,
                alumno_id: 501,
                materia_id: 20,
            },
            {
                nota: 8,
                alumno_id: 501,
                materia_id: 21,
            },
            {
                nota: 7,
                alumno_id: 501,
                materia_id: 22,
            },
            {
                nota: 7,
                alumno_id: 501,
                materia_id: 23,
            },
            {
                nota: 6,
                alumno_id: 501,
                materia_id: 24,
            },
            {
                nota: 7,
                alumno_id: 501,
                materia_id: 25,
            },
            {
                nota: 7.5,
                alumno_id: 502,
                materia_id: 16,
            },
            {
                nota: 7,
                alumno_id: 502,
                materia_id: 17,
            },
            {
                nota: 7,
                alumno_id: 502,
                materia_id: 18,
            },
            {
                nota: 7.5,
                alumno_id: 502,
                materia_id: 19,
            },
            {
                nota: 7.5,
                alumno_id: 502,
                materia_id: 20,
            },
            {
                nota: 8.5,
                alumno_id: 502,
                materia_id: 21,
            },
            {
                nota: 6.5,
                alumno_id: 502,
                materia_id: 22,
            },
            {
                nota: 8,
                alumno_id: 502,
                materia_id: 23,
            },
            {
                nota: 6,
                alumno_id: 502,
                materia_id: 24,
            },
            {
                nota: 7,
                alumno_id: 502,
                materia_id: 25,
            },
            {
                nota: 1,
                alumno_id: 503,
                materia_id: 16,
            },
            {
                nota: 7,
                alumno_id: 503,
                materia_id: 17,
            },
            {
                nota: 2,
                alumno_id: 503,
                materia_id: 18,
            },
            {
                nota: 6.5,
                alumno_id: 503,
                materia_id: 19,
            },
            {
                nota: 6.5,
                alumno_id: 503,
                materia_id: 20,
            },
            {
                nota: 7,
                alumno_id: 503,
                materia_id: 21,
            },
            {
                nota: 7.5,
                alumno_id: 503,
                materia_id: 22,
            },
            {
                nota: 7,
                alumno_id: 503,
                materia_id: 23,
            },
            {
                nota: 7,
                alumno_id: 503,
                materia_id: 24,
            },
            {
                nota: 7.5,
                alumno_id: 503,
                materia_id: 25,
            },
            {
                nota: 7,
                alumno_id: 504,
                materia_id: 16,
            },
            {
                nota: 5,
                alumno_id: 504,
                materia_id: 17,
            },
            {
                nota: 7.5,
                alumno_id: 504,
                materia_id: 18,
            },
            {
                nota: 6.5,
                alumno_id: 504,
                materia_id: 19,
            },
            {
                nota: 7,
                alumno_id: 504,
                materia_id: 20,
            },
            {
                nota: 6,
                alumno_id: 504,
                materia_id: 21,
            },
            {
                nota: 6.5,
                alumno_id: 504,
                materia_id: 22,
            },
            {
                nota: 8,
                alumno_id: 504,
                materia_id: 23,
            },
            {
                nota: 6,
                alumno_id: 504,
                materia_id: 24,
            },
            {
                nota: 7,
                alumno_id: 504,
                materia_id: 25,
            },
            {
                nota: 4,
                alumno_id: 505,
                materia_id: 16,
            },
            {
                nota: 8,
                alumno_id: 505,
                materia_id: 17,
            },
            {
                nota: 6,
                alumno_id: 505,
                materia_id: 18,
            },
            {
                nota: 6,
                alumno_id: 505,
                materia_id: 19,
            },
            {
                nota: 7,
                alumno_id: 505,
                materia_id: 20,
            },
            {
                nota: 9,
                alumno_id: 505,
                materia_id: 21,
            },
            {
                nota: 7.5,
                alumno_id: 505,
                materia_id: 22,
            },
            {
                nota: 7,
                alumno_id: 505,
                materia_id: 23,
            },
            {
                nota: 6,
                alumno_id: 505,
                materia_id: 24,
            },
            {
                nota: 7,
                alumno_id: 505,
                materia_id: 25,
            },
            {
                nota: 6,
                alumno_id: 506,
                materia_id: 16,
            },
            {
                nota: 7,
                alumno_id: 506,
                materia_id: 17,
            },
            {
                nota: 6,
                alumno_id: 506,
                materia_id: 18,
            },
            {
                nota: 6,
                alumno_id: 506,
                materia_id: 19,
            },
            {
                nota: 7,
                alumno_id: 506,
                materia_id: 20,
            },
            {
                nota: 8,
                alumno_id: 506,
                materia_id: 21,
            },
            {
                nota: 7,
                alumno_id: 506,
                materia_id: 22,
            },
            {
                nota: 8,
                alumno_id: 506,
                materia_id: 23,
            },
            {
                nota: 8,
                alumno_id: 506,
                materia_id: 24,
            },
            {
                nota: 7.5,
                alumno_id: 506,
                materia_id: 25,
            },
            {
                nota: 6.5,
                alumno_id: 507,
                materia_id: 16,
            },
            {
                nota: 8,
                alumno_id: 507,
                materia_id: 17,
            },
            {
                nota: 2,
                alumno_id: 507,
                materia_id: 18,
            },
            {
                nota: 6,
                alumno_id: 507,
                materia_id: 19,
            },
            {
                nota: 6,
                alumno_id: 507,
                materia_id: 20,
            },
            {
                nota: 7,
                alumno_id: 507,
                materia_id: 21,
            },
            {
                nota: 7.5,
                alumno_id: 507,
                materia_id: 22,
            },
            {
                nota: 6,
                alumno_id: 507,
                materia_id: 23,
            },
            {
                nota: 6,
                alumno_id: 507,
                materia_id: 24,
            },
            {
                nota: 6.5,
                alumno_id: 507,
                materia_id: 25,
            },
            {
                nota: 6,
                alumno_id: 508,
                materia_id: 16,
            },
            {
                nota: 6,
                alumno_id: 508,
                materia_id: 17,
            },
            {
                nota: 1,
                alumno_id: 508,
                materia_id: 18,
            },
            {
                nota: 1,
                alumno_id: 508,
                materia_id: 19,
            },
            {
                nota: 5,
                alumno_id: 508,
                materia_id: 20,
            },
            {
                nota: 9,
                alumno_id: 508,
                materia_id: 21,
            },
            {
                nota: 6.5,
                alumno_id: 508,
                materia_id: 22,
            },
            {
                nota: 6,
                alumno_id: 508,
                materia_id: 23,
            },
            {
                nota: 6,
                alumno_id: 508,
                materia_id: 24,
            },
            {
                nota: 7,
                alumno_id: 508,
                materia_id: 25,
            },
            {
                nota: 5,
                alumno_id: 509,
                materia_id: 16,
            },
            {
                nota: 1,
                alumno_id: 509,
                materia_id: 17,
            },
            {
                nota: 1,
                alumno_id: 509,
                materia_id: 18,
            },
            {
                nota: 1,
                alumno_id: 509,
                materia_id: 19,
            },
            {
                nota: 6,
                alumno_id: 509,
                materia_id: 20,
            },
            {
                nota: 6,
                alumno_id: 509,
                materia_id: 21,
            },
            {
                nota: 6.5,
                alumno_id: 509,
                materia_id: 22,
            },
            {
                nota: 6,
                alumno_id: 509,
                materia_id: 23,
            },
            {
                nota: 1,
                alumno_id: 509,
                materia_id: 24,
            },
            {
                nota: 6.5,
                alumno_id: 509,
                materia_id: 25,
            },
            {
                nota: 10,
                alumno_id: 510,
                materia_id: 16,
            },
            {
                nota: 6,
                alumno_id: 510,
                materia_id: 17,
            },
            {
                nota: 7.5,
                alumno_id: 510,
                materia_id: 18,
            },
            {
                nota: 7.5,
                alumno_id: 510,
                materia_id: 19,
            },
            {
                nota: 8,
                alumno_id: 510,
                materia_id: 20,
            },
            {
                nota: 7,
                alumno_id: 510,
                materia_id: 21,
            },
            {
                nota: 6.5,
                alumno_id: 510,
                materia_id: 22,
            },
            {
                nota: 8,
                alumno_id: 510,
                materia_id: 23,
            },
            {
                nota: 8.5,
                alumno_id: 510,
                materia_id: 24,
            },
            {
                nota: 7,
                alumno_id: 510,
                materia_id: 25,
            },
            {
                nota: 4,
                alumno_id: 511,
                materia_id: 16,
            },
            {
                nota: 6,
                alumno_id: 511,
                materia_id: 17,
            },
            {
                nota: 5,
                alumno_id: 511,
                materia_id: 18,
            },
            {
                nota: 6,
                alumno_id: 511,
                materia_id: 19,
            },
            {
                nota: 6,
                alumno_id: 511,
                materia_id: 20,
            },
            {
                nota: 8,
                alumno_id: 511,
                materia_id: 21,
            },
            {
                nota: 7.5,
                alumno_id: 511,
                materia_id: 22,
            },
            {
                nota: 6,
                alumno_id: 511,
                materia_id: 23,
            },
            {
                nota: 6,
                alumno_id: 511,
                materia_id: 24,
            },
            {
                nota: 6.5,
                alumno_id: 511,
                materia_id: 25,
            },
            {
                nota: 6,
                alumno_id: 512,
                materia_id: 16,
            },
            {
                nota: 6,
                alumno_id: 512,
                materia_id: 17,
            },
            {
                nota: 6,
                alumno_id: 512,
                materia_id: 18,
            },
            {
                nota: 6,
                alumno_id: 512,
                materia_id: 19,
            },
            {
                nota: 6.5,
                alumno_id: 512,
                materia_id: 20,
            },
            {
                nota: 7.5,
                alumno_id: 512,
                materia_id: 21,
            },
            {
                nota: 7.5,
                alumno_id: 512,
                materia_id: 22,
            },
            {
                nota: 8,
                alumno_id: 512,
                materia_id: 23,
            },
            {
                nota: 8,
                alumno_id: 512,
                materia_id: 24,
            },
            {
                nota: 7.5,
                alumno_id: 512,
                materia_id: 25,
            },
            {
                nota: 5,
                alumno_id: 513,
                materia_id: 16,
            },
            {
                nota: 8,
                alumno_id: 513,
                materia_id: 17,
            },
            {
                nota: 1,
                alumno_id: 513,
                materia_id: 18,
            },
            {
                nota: 1,
                alumno_id: 513,
                materia_id: 19,
            },
            {
                nota: 6,
                alumno_id: 513,
                materia_id: 20,
            },
            {
                nota: 4,
                alumno_id: 513,
                materia_id: 21,
            },
            {
                nota: 6,
                alumno_id: 513,
                materia_id: 22,
            },
            {
                nota: 6,
                alumno_id: 513,
                materia_id: 23,
            },
            {
                nota: 1,
                alumno_id: 513,
                materia_id: 24,
            },
            {
                nota: 6,
                alumno_id: 513,
                materia_id: 25,
            },
            {
                nota: 0,
                alumno_id: 514,
                materia_id: 16,
            },
            {
                nota: 0,
                alumno_id: 514,
                materia_id: 17,
            },
            {
                nota: 0,
                alumno_id: 514,
                materia_id: 18,
            },
            {
                nota: 0,
                alumno_id: 514,
                materia_id: 19,
            },
            {
                nota: 0,
                alumno_id: 514,
                materia_id: 20,
            },
            {
                nota: 0,
                alumno_id: 514,
                materia_id: 21,
            },
            {
                nota: 0,
                alumno_id: 514,
                materia_id: 22,
            },
            {
                nota: 0,
                alumno_id: 514,
                materia_id: 23,
            },
            {
                nota: 0,
                alumno_id: 514,
                materia_id: 24,
            },
            {
                nota: 0,
                alumno_id: 514,
                materia_id: 25,
            },
            {
                nota: 6,
                alumno_id: 515,
                materia_id: 16,
            },
            {
                nota: 5,
                alumno_id: 515,
                materia_id: 17,
            },
            {
                nota: 2,
                alumno_id: 515,
                materia_id: 18,
            },
            {
                nota: 1,
                alumno_id: 515,
                materia_id: 19,
            },
            {
                nota: 6,
                alumno_id: 515,
                materia_id: 20,
            },
            {
                nota: 8,
                alumno_id: 515,
                materia_id: 21,
            },
            {
                nota: 6.5,
                alumno_id: 515,
                materia_id: 22,
            },
            {
                nota: 6.5,
                alumno_id: 515,
                materia_id: 23,
            },
            {
                nota: 1,
                alumno_id: 515,
                materia_id: 24,
            },
            {
                nota: 6,
                alumno_id: 515,
                materia_id: 25,
            },
            {
                nota: 1,
                alumno_id: 516,
                materia_id: 16,
            },
            {
                nota: 1,
                alumno_id: 516,
                materia_id: 17,
            },
            {
                nota: 1,
                alumno_id: 516,
                materia_id: 18,
            },
            {
                nota: 1,
                alumno_id: 516,
                materia_id: 19,
            },
            {
                nota: 1,
                alumno_id: 516,
                materia_id: 20,
            },
            {
                nota: 7,
                alumno_id: 516,
                materia_id: 21,
            },
            {
                nota: 6.5,
                alumno_id: 516,
                materia_id: 22,
            },
            {
                nota: 6,
                alumno_id: 516,
                materia_id: 23,
            },
            {
                nota: 1,
                alumno_id: 516,
                materia_id: 24,
            },
            {
                nota: 6,
                alumno_id: 516,
                materia_id: 25,
            },
            {
                nota: 10,
                alumno_id: 517,
                materia_id: 16,
            },
            {
                nota: 8,
                alumno_id: 517,
                materia_id: 17,
            },
            {
                nota: 8,
                alumno_id: 517,
                materia_id: 18,
            },
            {
                nota: 8,
                alumno_id: 517,
                materia_id: 19,
            },
            {
                nota: 9.5,
                alumno_id: 517,
                materia_id: 20,
            },
            {
                nota: 7,
                alumno_id: 517,
                materia_id: 21,
            },
            {
                nota: 7,
                alumno_id: 517,
                materia_id: 22,
            },
            {
                nota: 10,
                alumno_id: 517,
                materia_id: 23,
            },
            {
                nota: 9,
                alumno_id: 517,
                materia_id: 24,
            },
            {
                nota: 8.5,
                alumno_id: 517,
                materia_id: 25,
            },
            {
                nota: 8.5,
                alumno_id: 518,
                materia_id: 16,
            },
            {
                nota: 1,
                alumno_id: 518,
                materia_id: 17,
            },
            {
                nota: 1,
                alumno_id: 518,
                materia_id: 18,
            },
            {
                nota: 1,
                alumno_id: 518,
                materia_id: 19,
            },
            {
                nota: 6,
                alumno_id: 518,
                materia_id: 20,
            },
            {
                nota: 7.5,
                alumno_id: 518,
                materia_id: 21,
            },
            {
                nota: 7.5,
                alumno_id: 518,
                materia_id: 22,
            },
            {
                nota: 6,
                alumno_id: 518,
                materia_id: 23,
            },
            {
                nota: 6,
                alumno_id: 518,
                materia_id: 24,
            },
            {
                nota: 6.5,
                alumno_id: 518,
                materia_id: 25,
            },
            {
                nota: 6.5,
                alumno_id: 519,
                materia_id: 16,
            },
            {
                nota: 1,
                alumno_id: 519,
                materia_id: 17,
            },
            {
                nota: 1,
                alumno_id: 519,
                materia_id: 18,
            },
            {
                nota: 1,
                alumno_id: 519,
                materia_id: 19,
            },
            {
                nota: 6,
                alumno_id: 519,
                materia_id: 20,
            },
            {
                nota: 7,
                alumno_id: 519,
                materia_id: 21,
            },
            {
                nota: 7.5,
                alumno_id: 519,
                materia_id: 22,
            },
            {
                nota: 6,
                alumno_id: 519,
                materia_id: 23,
            },
            {
                nota: 1,
                alumno_id: 519,
                materia_id: 24,
            },
            {
                nota: 6,
                alumno_id: 519,
                materia_id: 25,
            },
            {
                nota: 1,
                alumno_id: 520,
                materia_id: 16,
            },
            {
                nota: 1,
                alumno_id: 520,
                materia_id: 17,
            },
            {
                nota: 1,
                alumno_id: 520,
                materia_id: 18,
            },
            {
                nota: 1,
                alumno_id: 520,
                materia_id: 19,
            },
            {
                nota: 6,
                alumno_id: 520,
                materia_id: 20,
            },
            {
                nota: 6,
                alumno_id: 520,
                materia_id: 21,
            },
            {
                nota: 7.5,
                alumno_id: 520,
                materia_id: 22,
            },
            {
                nota: 6,
                alumno_id: 520,
                materia_id: 23,
            },
            {
                nota: 1,
                alumno_id: 520,
                materia_id: 24,
            },
            {
                nota: 6,
                alumno_id: 520,
                materia_id: 25,
            },
            {
                nota: 7,
                alumno_id: 521,
                materia_id: 16,
            },
            {
                nota: 8,
                alumno_id: 521,
                materia_id: 17,
            },
            {
                nota: 7,
                alumno_id: 521,
                materia_id: 18,
            },
            {
                nota: 6,
                alumno_id: 521,
                materia_id: 19,
            },
            {
                nota: 8,
                alumno_id: 521,
                materia_id: 20,
            },
            {
                nota: 7.5,
                alumno_id: 521,
                materia_id: 21,
            },
            {
                nota: 7.5,
                alumno_id: 521,
                materia_id: 22,
            },
            {
                nota: 8.5,
                alumno_id: 521,
                materia_id: 23,
            },
            {
                nota: 6,
                alumno_id: 521,
                materia_id: 24,
            },
            {
                nota: 7.5,
                alumno_id: 521,
                materia_id: 25,
            },
            {
                nota: 9,
                alumno_id: 522,
                materia_id: 16,
            },
            {
                nota: 1,
                alumno_id: 522,
                materia_id: 17,
            },
            {
                nota: 8,
                alumno_id: 522,
                materia_id: 18,
            },
            {
                nota: 1,
                alumno_id: 522,
                materia_id: 19,
            },
            {
                nota: 8,
                alumno_id: 522,
                materia_id: 20,
            },
            {
                nota: 6,
                alumno_id: 522,
                materia_id: 21,
            },
            {
                nota: 7.5,
                alumno_id: 522,
                materia_id: 22,
            },
            {
                nota: 6,
                alumno_id: 522,
                materia_id: 23,
            },
            {
                nota: 6,
                alumno_id: 522,
                materia_id: 24,
            },
            {
                nota: 7.5,
                alumno_id: 522,
                materia_id: 25,
            },
            {
                nota: 9,
                alumno_id: 523,
                materia_id: 16,
            },
            {
                nota: 8,
                alumno_id: 523,
                materia_id: 17,
            },
            {
                nota: 3,
                alumno_id: 523,
                materia_id: 18,
            },
            {
                nota: 6,
                alumno_id: 523,
                materia_id: 19,
            },
            {
                nota: 7.5,
                alumno_id: 523,
                materia_id: 20,
            },
            {
                nota: 6.5,
                alumno_id: 523,
                materia_id: 21,
            },
            {
                nota: 6.5,
                alumno_id: 523,
                materia_id: 22,
            },
            {
                nota: 8.5,
                alumno_id: 523,
                materia_id: 23,
            },
            {
                nota: 6,
                alumno_id: 523,
                materia_id: 24,
            },
            {
                nota: 7,
                alumno_id: 523,
                materia_id: 25,
            },
            {
                nota: 4,
                alumno_id: 524,
                materia_id: 16,
            },
            {
                nota: 1,
                alumno_id: 524,
                materia_id: 17,
            },
            {
                nota: 2,
                alumno_id: 524,
                materia_id: 18,
            },
            {
                nota: 1,
                alumno_id: 524,
                materia_id: 19,
            },
            {
                nota: 6,
                alumno_id: 524,
                materia_id: 20,
            },
            {
                nota: 7,
                alumno_id: 524,
                materia_id: 21,
            },
            {
                nota: 6.5,
                alumno_id: 524,
                materia_id: 22,
            },
            {
                nota: 6,
                alumno_id: 524,
                materia_id: 23,
            },
            {
                nota: 1,
                alumno_id: 524,
                materia_id: 24,
            },
            {
                nota: 6,
                alumno_id: 524,
                materia_id: 25,
            },
            {
                nota: 1,
                alumno_id: 525,
                materia_id: 16,
            },
            {
                nota: 1,
                alumno_id: 525,
                materia_id: 17,
            },
            {
                nota: 1,
                alumno_id: 525,
                materia_id: 18,
            },
            {
                nota: 1,
                alumno_id: 525,
                materia_id: 19,
            },
            {
                nota: 7.5,
                alumno_id: 525,
                materia_id: 20,
            },
            {
                nota: 6,
                alumno_id: 525,
                materia_id: 21,
            },
            {
                nota: 6.5,
                alumno_id: 525,
                materia_id: 22,
            },
            {
                nota: 8,
                alumno_id: 525,
                materia_id: 23,
            },
            {
                nota: 1,
                alumno_id: 525,
                materia_id: 24,
            },
            {
                nota: 6,
                alumno_id: 525,
                materia_id: 25,
            },
            {
                nota: 8,
                alumno_id: 526,
                materia_id: 16,
            },
            {
                nota: 1,
                alumno_id: 526,
                materia_id: 17,
            },
            {
                nota: 1,
                alumno_id: 526,
                materia_id: 18,
            },
            {
                nota: 1,
                alumno_id: 526,
                materia_id: 19,
            },
            {
                nota: 1,
                alumno_id: 526,
                materia_id: 20,
            },
            {
                nota: 6,
                alumno_id: 526,
                materia_id: 21,
            },
            {
                nota: 6.5,
                alumno_id: 526,
                materia_id: 22,
            },
            {
                nota: 6,
                alumno_id: 526,
                materia_id: 23,
            },
            {
                nota: 6,
                alumno_id: 526,
                materia_id: 24,
            },
            {
                nota: 6.5,
                alumno_id: 526,
                materia_id: 25,
            },
            {
                nota: 6,
                alumno_id: 527,
                materia_id: 16,
            },
            {
                nota: 6,
                alumno_id: 527,
                materia_id: 17,
            },
            {
                nota: 8,
                alumno_id: 527,
                materia_id: 18,
            },
            {
                nota: 6,
                alumno_id: 527,
                materia_id: 19,
            },
            {
                nota: 7.5,
                alumno_id: 527,
                materia_id: 20,
            },
            {
                nota: 8.5,
                alumno_id: 527,
                materia_id: 21,
            },
            {
                nota: 7.5,
                alumno_id: 527,
                materia_id: 22,
            },
            {
                nota: 8,
                alumno_id: 527,
                materia_id: 23,
            },
            {
                nota: 8,
                alumno_id: 527,
                materia_id: 24,
            },
            {
                nota: 6.5,
                alumno_id: 527,
                materia_id: 25,
            },
            {
                nota: 4,
                alumno_id: 528,
                materia_id: 16,
            },
            {
                nota: 6,
                alumno_id: 528,
                materia_id: 17,
            },
            {
                nota: 6,
                alumno_id: 528,
                materia_id: 18,
            },
            {
                nota: 6,
                alumno_id: 528,
                materia_id: 19,
            },
            {
                nota: 9,
                alumno_id: 528,
                materia_id: 20,
            },
            {
                nota: 8,
                alumno_id: 528,
                materia_id: 21,
            },
            {
                nota: 7,
                alumno_id: 528,
                materia_id: 22,
            },
            {
                nota: 9.5,
                alumno_id: 528,
                materia_id: 23,
            },
            {
                nota: 8,
                alumno_id: 528,
                materia_id: 24,
            },
            {
                nota: 7,
                alumno_id: 528,
                materia_id: 25,
            },
            {
                nota: 1,
                alumno_id: 529,
                materia_id: 16,
            },
            {
                nota: 1,
                alumno_id: 529,
                materia_id: 17,
            },
            {
                nota: 1,
                alumno_id: 529,
                materia_id: 18,
            },
            {
                nota: 1,
                alumno_id: 529,
                materia_id: 19,
            },
            {
                nota: 8,
                alumno_id: 529,
                materia_id: 20,
            },
            {
                nota: 1,
                alumno_id: 529,
                materia_id: 21,
            },
            {
                nota: 6.5,
                alumno_id: 529,
                materia_id: 22,
            },
            {
                nota: 8.5,
                alumno_id: 529,
                materia_id: 23,
            },
            {
                nota: 1,
                alumno_id: 529,
                materia_id: 24,
            },
            {
                nota: 6.5,
                alumno_id: 529,
                materia_id: 25,
            },
            {
                nota: 6,
                alumno_id: 530,
                materia_id: 16,
            },
            {
                nota: 1,
                alumno_id: 530,
                materia_id: 17,
            },
            {
                nota: 1,
                alumno_id: 530,
                materia_id: 18,
            },
            {
                nota: 7.5,
                alumno_id: 530,
                materia_id: 19,
            },
            {
                nota: 7.5,
                alumno_id: 530,
                materia_id: 20,
            },
            {
                nota: 8,
                alumno_id: 530,
                materia_id: 21,
            },
            {
                nota: 6.5,
                alumno_id: 530,
                materia_id: 22,
            },
            {
                nota: 9,
                alumno_id: 530,
                materia_id: 23,
            },
            {
                nota: 6,
                alumno_id: 530,
                materia_id: 24,
            },
            {
                nota: 6.5,
                alumno_id: 530,
                materia_id: 25,
            },
            {
                nota: 8.5,
                alumno_id: 531,
                materia_id: 16,
            },
            {
                nota: 1,
                alumno_id: 531,
                materia_id: 17,
            },
            {
                nota: 1,
                alumno_id: 531,
                materia_id: 18,
            },
            {
                nota: 1,
                alumno_id: 531,
                materia_id: 19,
            },
            {
                nota: 1,
                alumno_id: 531,
                materia_id: 20,
            },
            {
                nota: 9,
                alumno_id: 531,
                materia_id: 21,
            },
            {
                nota: 7.5,
                alumno_id: 531,
                materia_id: 22,
            },
            {
                nota: 6,
                alumno_id: 531,
                materia_id: 23,
            },
            {
                nota: 1,
                alumno_id: 531,
                materia_id: 24,
            },
            {
                nota: 6,
                alumno_id: 531,
                materia_id: 25,
            },
            {
                nota: 4,
                alumno_id: 532,
                materia_id: 16,
            },
            {
                nota: 6,
                alumno_id: 532,
                materia_id: 17,
            },
            {
                nota: 7,
                alumno_id: 532,
                materia_id: 18,
            },
            {
                nota: 1,
                alumno_id: 532,
                materia_id: 19,
            },
            {
                nota: 6,
                alumno_id: 532,
                materia_id: 20,
            },
            {
                nota: 1,
                alumno_id: 532,
                materia_id: 21,
            },
            {
                nota: 2,
                alumno_id: 532,
                materia_id: 22,
            },
            {
                nota: 6,
                alumno_id: 532,
                materia_id: 23,
            },
            {
                nota: 4,
                alumno_id: 532,
                materia_id: 24,
            },
            {
                nota: 4,
                alumno_id: 532,
                materia_id: 25,
            },
            {
                nota: 7,
                alumno_id: 533,
                materia_id: 16,
            },
            {
                nota: 7,
                alumno_id: 533,
                materia_id: 17,
            },
            {
                nota: 7,
                alumno_id: 533,
                materia_id: 18,
            },
            {
                nota: 6.5,
                alumno_id: 533,
                materia_id: 19,
            },
            {
                nota: 1,
                alumno_id: 533,
                materia_id: 20,
            },
            {
                nota: 7,
                alumno_id: 533,
                materia_id: 21,
            },
            {
                nota: 2,
                alumno_id: 533,
                materia_id: 22,
            },
            {
                nota: 7,
                alumno_id: 533,
                materia_id: 23,
            },
            {
                nota: 6.5,
                alumno_id: 533,
                materia_id: 24,
            },
            {
                nota: 7,
                alumno_id: 533,
                materia_id: 25,
            },
            {
                nota: 1,
                alumno_id: 534,
                materia_id: 16,
            },
            {
                nota: 1,
                alumno_id: 534,
                materia_id: 17,
            },
            {
                nota: 7,
                alumno_id: 534,
                materia_id: 18,
            },
            {
                nota: 1,
                alumno_id: 534,
                materia_id: 19,
            },
            {
                nota: 7,
                alumno_id: 534,
                materia_id: 20,
            },
            {
                nota: 1,
                alumno_id: 534,
                materia_id: 21,
            },
            {
                nota: 1,
                alumno_id: 534,
                materia_id: 22,
            },
            {
                nota: 1,
                alumno_id: 534,
                materia_id: 23,
            },
            {
                nota: 1,
                alumno_id: 534,
                materia_id: 24,
            },
            {
                nota: 1,
                alumno_id: 534,
                materia_id: 25,
            },
            {
                nota: 10,
                alumno_id: 535,
                materia_id: 16,
            },
            {
                nota: 8,
                alumno_id: 535,
                materia_id: 17,
            },
            {
                nota: 7,
                alumno_id: 535,
                materia_id: 18,
            },
            {
                nota: 7,
                alumno_id: 535,
                materia_id: 19,
            },
            {
                nota: 6,
                alumno_id: 535,
                materia_id: 20,
            },
            {
                nota: 6,
                alumno_id: 535,
                materia_id: 21,
            },
            {
                nota: 6,
                alumno_id: 535,
                materia_id: 22,
            },
            {
                nota: 6,
                alumno_id: 535,
                materia_id: 23,
            },
            {
                nota: 6,
                alumno_id: 535,
                materia_id: 24,
            },
            {
                nota: 6,
                alumno_id: 535,
                materia_id: 25,
            },
            {
                nota: 7,
                alumno_id: 536,
                materia_id: 16,
            },
            {
                nota: 6,
                alumno_id: 536,
                materia_id: 17,
            },
            {
                nota: 7,
                alumno_id: 536,
                materia_id: 18,
            },
            {
                nota: 6.5,
                alumno_id: 536,
                materia_id: 19,
            },
            {
                nota: 6.5,
                alumno_id: 536,
                materia_id: 20,
            },
            {
                nota: 6.5,
                alumno_id: 536,
                materia_id: 21,
            },
            {
                nota: 1,
                alumno_id: 536,
                materia_id: 22,
            },
            {
                nota: 6,
                alumno_id: 536,
                materia_id: 23,
            },
            {
                nota: 6,
                alumno_id: 536,
                materia_id: 24,
            },
            {
                nota: 9,
                alumno_id: 536,
                materia_id: 25,
            },
            {
                nota: 8,
                alumno_id: 537,
                materia_id: 16,
            },
            {
                nota: 9,
                alumno_id: 537,
                materia_id: 17,
            },
            {
                nota: 7,
                alumno_id: 537,
                materia_id: 18,
            },
            {
                nota: 6,
                alumno_id: 537,
                materia_id: 19,
            },
            {
                nota: 6,
                alumno_id: 537,
                materia_id: 20,
            },
            {
                nota: 6,
                alumno_id: 537,
                materia_id: 21,
            },
            {
                nota: 2,
                alumno_id: 537,
                materia_id: 22,
            },
            {
                nota: 6,
                alumno_id: 537,
                materia_id: 23,
            },
            {
                nota: 6,
                alumno_id: 537,
                materia_id: 24,
            },
            {
                nota: 6,
                alumno_id: 537,
                materia_id: 25,
            },
            {
                nota: 9,
                alumno_id: 538,
                materia_id: 16,
            },
            {
                nota: 8,
                alumno_id: 538,
                materia_id: 17,
            },
            {
                nota: 7,
                alumno_id: 538,
                materia_id: 18,
            },
            {
                nota: 6.5,
                alumno_id: 538,
                materia_id: 19,
            },
            {
                nota: 6.5,
                alumno_id: 538,
                materia_id: 20,
            },
            {
                nota: 9,
                alumno_id: 538,
                materia_id: 21,
            },
            {
                nota: 6,
                alumno_id: 538,
                materia_id: 22,
            },
            {
                nota: 8,
                alumno_id: 538,
                materia_id: 23,
            },
            {
                nota: 7,
                alumno_id: 538,
                materia_id: 24,
            },
            {
                nota: 9.5,
                alumno_id: 538,
                materia_id: 25,
            },
            {
                nota: 1,
                alumno_id: 539,
                materia_id: 16,
            },
            {
                nota: 1,
                alumno_id: 539,
                materia_id: 17,
            },
            {
                nota: 7,
                alumno_id: 539,
                materia_id: 18,
            },
            {
                nota: 1,
                alumno_id: 539,
                materia_id: 19,
            },
            {
                nota: 1,
                alumno_id: 539,
                materia_id: 20,
            },
            {
                nota: 1,
                alumno_id: 539,
                materia_id: 21,
            },
            {
                nota: 1,
                alumno_id: 539,
                materia_id: 22,
            },
            {
                nota: 6,
                alumno_id: 539,
                materia_id: 23,
            },
            {
                nota: 5,
                alumno_id: 539,
                materia_id: 24,
            },
            {
                nota: 4,
                alumno_id: 539,
                materia_id: 25,
            },
            {
                nota: 1,
                alumno_id: 540,
                materia_id: 16,
            },
            {
                nota: 1,
                alumno_id: 540,
                materia_id: 17,
            },
            {
                nota: 7,
                alumno_id: 540,
                materia_id: 18,
            },
            {
                nota: 1,
                alumno_id: 540,
                materia_id: 19,
            },
            {
                nota: 1,
                alumno_id: 540,
                materia_id: 20,
            },
            {
                nota: 1,
                alumno_id: 540,
                materia_id: 21,
            },
            {
                nota: 1,
                alumno_id: 540,
                materia_id: 22,
            },
            {
                nota: 1,
                alumno_id: 540,
                materia_id: 23,
            },
            {
                nota: 1,
                alumno_id: 540,
                materia_id: 24,
            },
            {
                nota: 1,
                alumno_id: 540,
                materia_id: 25,
            },
            {
                nota: 6,
                alumno_id: 541,
                materia_id: 16,
            },
            {
                nota: 5,
                alumno_id: 541,
                materia_id: 17,
            },
            {
                nota: 7,
                alumno_id: 541,
                materia_id: 18,
            },
            {
                nota: 6,
                alumno_id: 541,
                materia_id: 19,
            },
            {
                nota: 7.5,
                alumno_id: 541,
                materia_id: 20,
            },
            {
                nota: 9,
                alumno_id: 541,
                materia_id: 21,
            },
            {
                nota: 2,
                alumno_id: 541,
                materia_id: 22,
            },
            {
                nota: 6,
                alumno_id: 541,
                materia_id: 23,
            },
            {
                nota: 6,
                alumno_id: 541,
                materia_id: 24,
            },
            {
                nota: 9,
                alumno_id: 541,
                materia_id: 25,
            },
            {
                nota: 7,
                alumno_id: 542,
                materia_id: 16,
            },
            {
                nota: 1,
                alumno_id: 542,
                materia_id: 17,
            },
            {
                nota: 7,
                alumno_id: 542,
                materia_id: 18,
            },
            {
                nota: 1,
                alumno_id: 542,
                materia_id: 19,
            },
            {
                nota: 6,
                alumno_id: 542,
                materia_id: 20,
            },
            {
                nota: 1,
                alumno_id: 542,
                materia_id: 21,
            },
            {
                nota: 1,
                alumno_id: 542,
                materia_id: 22,
            },
            {
                nota: 6,
                alumno_id: 542,
                materia_id: 23,
            },
            {
                nota: 1,
                alumno_id: 542,
                materia_id: 24,
            },
            {
                nota: 1,
                alumno_id: 542,
                materia_id: 25,
            },
            {
                nota: 0,
                alumno_id: 543,
                materia_id: 16,
            },
            {
                nota: 0,
                alumno_id: 543,
                materia_id: 17,
            },
            {
                nota: 0,
                alumno_id: 543,
                materia_id: 18,
            },
            {
                nota: 0,
                alumno_id: 543,
                materia_id: 19,
            },
            {
                nota: 0,
                alumno_id: 543,
                materia_id: 20,
            },
            {
                nota: 0,
                alumno_id: 543,
                materia_id: 21,
            },
            {
                nota: 0,
                alumno_id: 543,
                materia_id: 22,
            },
            {
                nota: 0,
                alumno_id: 543,
                materia_id: 23,
            },
            {
                nota: 0,
                alumno_id: 543,
                materia_id: 24,
            },
            {
                nota: 0,
                alumno_id: 543,
                materia_id: 25,
            },
            {
                nota: 8,
                alumno_id: 544,
                materia_id: 16,
            },
            {
                nota: 6,
                alumno_id: 544,
                materia_id: 17,
            },
            {
                nota: 7,
                alumno_id: 544,
                materia_id: 18,
            },
            {
                nota: 6,
                alumno_id: 544,
                materia_id: 19,
            },
            {
                nota: 5,
                alumno_id: 544,
                materia_id: 20,
            },
            {
                nota: 4,
                alumno_id: 544,
                materia_id: 21,
            },
            {
                nota: 1,
                alumno_id: 544,
                materia_id: 22,
            },
            {
                nota: 6,
                alumno_id: 544,
                materia_id: 23,
            },
            {
                nota: 4,
                alumno_id: 544,
                materia_id: 24,
            },
            {
                nota: 7,
                alumno_id: 544,
                materia_id: 25,
            },
            {
                nota: 8,
                alumno_id: 545,
                materia_id: 16,
            },
            {
                nota: 6,
                alumno_id: 545,
                materia_id: 17,
            },
            {
                nota: 7,
                alumno_id: 545,
                materia_id: 18,
            },
            {
                nota: 6,
                alumno_id: 545,
                materia_id: 19,
            },
            {
                nota: 6,
                alumno_id: 545,
                materia_id: 20,
            },
            {
                nota: 1,
                alumno_id: 545,
                materia_id: 21,
            },
            {
                nota: 1,
                alumno_id: 545,
                materia_id: 22,
            },
            {
                nota: 6,
                alumno_id: 545,
                materia_id: 23,
            },
            {
                nota: 5,
                alumno_id: 545,
                materia_id: 24,
            },
            {
                nota: 7,
                alumno_id: 545,
                materia_id: 25,
            },
            {
                nota: 4,
                alumno_id: 546,
                materia_id: 16,
            },
            {
                nota: 1,
                alumno_id: 546,
                materia_id: 17,
            },
            {
                nota: 7,
                alumno_id: 546,
                materia_id: 18,
            },
            {
                nota: 6,
                alumno_id: 546,
                materia_id: 19,
            },
            {
                nota: 5,
                alumno_id: 546,
                materia_id: 20,
            },
            {
                nota: 3,
                alumno_id: 546,
                materia_id: 21,
            },
            {
                nota: 1,
                alumno_id: 546,
                materia_id: 22,
            },
            {
                nota: 6,
                alumno_id: 546,
                materia_id: 23,
            },
            {
                nota: 4,
                alumno_id: 546,
                materia_id: 24,
            },
            {
                nota: 4,
                alumno_id: 546,
                materia_id: 25,
            },
            {
                nota: 8,
                alumno_id: 547,
                materia_id: 16,
            },
            {
                nota: 8,
                alumno_id: 547,
                materia_id: 17,
            },
            {
                nota: 7,
                alumno_id: 547,
                materia_id: 18,
            },
            {
                nota: 6,
                alumno_id: 547,
                materia_id: 19,
            },
            {
                nota: 7,
                alumno_id: 547,
                materia_id: 20,
            },
            {
                nota: 7,
                alumno_id: 547,
                materia_id: 21,
            },
            {
                nota: 6,
                alumno_id: 547,
                materia_id: 22,
            },
            {
                nota: 6,
                alumno_id: 547,
                materia_id: 23,
            },
            {
                nota: 7,
                alumno_id: 547,
                materia_id: 24,
            },
            {
                nota: 9,
                alumno_id: 547,
                materia_id: 25,
            },
            {
                nota: 9,
                alumno_id: 548,
                materia_id: 16,
            },
            {
                nota: 5,
                alumno_id: 548,
                materia_id: 17,
            },
            {
                nota: 7,
                alumno_id: 548,
                materia_id: 18,
            },
            {
                nota: 6,
                alumno_id: 548,
                materia_id: 19,
            },
            {
                nota: 7.5,
                alumno_id: 548,
                materia_id: 20,
            },
            {
                nota: 8.5,
                alumno_id: 548,
                materia_id: 21,
            },
            {
                nota: 1,
                alumno_id: 548,
                materia_id: 22,
            },
            {
                nota: 6,
                alumno_id: 548,
                materia_id: 23,
            },
            {
                nota: 4,
                alumno_id: 548,
                materia_id: 24,
            },
            {
                nota: 6,
                alumno_id: 548,
                materia_id: 25,
            },
            {
                nota: 8,
                alumno_id: 549,
                materia_id: 16,
            },
            {
                nota: 7,
                alumno_id: 549,
                materia_id: 17,
            },
            {
                nota: 7,
                alumno_id: 549,
                materia_id: 18,
            },
            {
                nota: 6,
                alumno_id: 549,
                materia_id: 19,
            },
            {
                nota: 6,
                alumno_id: 549,
                materia_id: 20,
            },
            {
                nota: 6,
                alumno_id: 549,
                materia_id: 21,
            },
            {
                nota: 2,
                alumno_id: 549,
                materia_id: 22,
            },
            {
                nota: 6,
                alumno_id: 549,
                materia_id: 23,
            },
            {
                nota: 6,
                alumno_id: 549,
                materia_id: 24,
            },
            {
                nota: 6.5,
                alumno_id: 549,
                materia_id: 25,
            },
            {
                nota: 8,
                alumno_id: 550,
                materia_id: 16,
            },
            {
                nota: 9,
                alumno_id: 550,
                materia_id: 17,
            },
            {
                nota: 8.5,
                alumno_id: 550,
                materia_id: 18,
            },
            {
                nota: 7,
                alumno_id: 550,
                materia_id: 19,
            },
            {
                nota: 7,
                alumno_id: 550,
                materia_id: 20,
            },
            {
                nota: 10,
                alumno_id: 550,
                materia_id: 21,
            },
            {
                nota: 6,
                alumno_id: 550,
                materia_id: 22,
            },
            {
                nota: 6,
                alumno_id: 550,
                materia_id: 23,
            },
            {
                nota: 6,
                alumno_id: 550,
                materia_id: 24,
            },
            {
                nota: 8.5,
                alumno_id: 550,
                materia_id: 25,
            },
            {
                nota: 10,
                alumno_id: 551,
                materia_id: 16,
            },
            {
                nota: 9,
                alumno_id: 551,
                materia_id: 17,
            },
            {
                nota: 8.5,
                alumno_id: 551,
                materia_id: 18,
            },
            {
                nota: 8,
                alumno_id: 551,
                materia_id: 19,
            },
            {
                nota: 9.5,
                alumno_id: 551,
                materia_id: 20,
            },
            {
                nota: 9.5,
                alumno_id: 551,
                materia_id: 21,
            },
            {
                nota: 6,
                alumno_id: 551,
                materia_id: 22,
            },
            {
                nota: 9,
                alumno_id: 551,
                materia_id: 23,
            },
            {
                nota: 8,
                alumno_id: 551,
                materia_id: 24,
            },
            {
                nota: 10,
                alumno_id: 551,
                materia_id: 25,
            },
            {
                nota: 0,
                alumno_id: 552,
                materia_id: 16,
            },
            {
                nota: 0,
                alumno_id: 552,
                materia_id: 17,
            },
            {
                nota: 0,
                alumno_id: 552,
                materia_id: 18,
            },
            {
                nota: 0,
                alumno_id: 552,
                materia_id: 19,
            },
            {
                nota: 0,
                alumno_id: 552,
                materia_id: 20,
            },
            {
                nota: 0,
                alumno_id: 552,
                materia_id: 21,
            },
            {
                nota: 0,
                alumno_id: 552,
                materia_id: 22,
            },
            {
                nota: 0,
                alumno_id: 552,
                materia_id: 23,
            },
            {
                nota: 0,
                alumno_id: 552,
                materia_id: 24,
            },
            {
                nota: 0,
                alumno_id: 552,
                materia_id: 25,
            },
            {
                nota: 7,
                alumno_id: 553,
                materia_id: 16,
            },
            {
                nota: 6,
                alumno_id: 553,
                materia_id: 17,
            },
            {
                nota: 7,
                alumno_id: 553,
                materia_id: 18,
            },
            {
                nota: 6.5,
                alumno_id: 553,
                materia_id: 19,
            },
            {
                nota: 6,
                alumno_id: 553,
                materia_id: 20,
            },
            {
                nota: 6,
                alumno_id: 553,
                materia_id: 21,
            },
            {
                nota: 6,
                alumno_id: 553,
                materia_id: 22,
            },
            {
                nota: 7,
                alumno_id: 553,
                materia_id: 23,
            },
            {
                nota: 6,
                alumno_id: 553,
                materia_id: 24,
            },
            {
                nota: 7.5,
                alumno_id: 553,
                materia_id: 25,
            },
            {
                nota: 0,
                alumno_id: 554,
                materia_id: 16,
            },
            {
                nota: 0,
                alumno_id: 554,
                materia_id: 17,
            },
            {
                nota: 0,
                alumno_id: 554,
                materia_id: 18,
            },
            {
                nota: 0,
                alumno_id: 554,
                materia_id: 19,
            },
            {
                nota: 0,
                alumno_id: 554,
                materia_id: 20,
            },
            {
                nota: 0,
                alumno_id: 554,
                materia_id: 21,
            },
            {
                nota: 0,
                alumno_id: 554,
                materia_id: 22,
            },
            {
                nota: 0,
                alumno_id: 554,
                materia_id: 23,
            },
            {
                nota: 0,
                alumno_id: 554,
                materia_id: 24,
            },
            {
                nota: 0,
                alumno_id: 554,
                materia_id: 25,
            },
            {
                nota: 10,
                alumno_id: 555,
                materia_id: 16,
            },
            {
                nota: 8,
                alumno_id: 555,
                materia_id: 17,
            },
            {
                nota: 7,
                alumno_id: 555,
                materia_id: 18,
            },
            {
                nota: 6.5,
                alumno_id: 555,
                materia_id: 19,
            },
            {
                nota: 9.5,
                alumno_id: 555,
                materia_id: 20,
            },
            {
                nota: 7.5,
                alumno_id: 555,
                materia_id: 21,
            },
            {
                nota: 6,
                alumno_id: 555,
                materia_id: 22,
            },
            {
                nota: 9,
                alumno_id: 555,
                materia_id: 23,
            },
            {
                nota: 6,
                alumno_id: 555,
                materia_id: 24,
            },
            {
                nota: 7.5,
                alumno_id: 555,
                materia_id: 25,
            },
            {
                nota: 7,
                alumno_id: 556,
                materia_id: 16,
            },
            {
                nota: 6,
                alumno_id: 556,
                materia_id: 17,
            },
            {
                nota: 7,
                alumno_id: 556,
                materia_id: 18,
            },
            {
                nota: 1,
                alumno_id: 556,
                materia_id: 19,
            },
            {
                nota: 6,
                alumno_id: 556,
                materia_id: 20,
            },
            {
                nota: 6,
                alumno_id: 556,
                materia_id: 21,
            },
            {
                nota: 2,
                alumno_id: 556,
                materia_id: 22,
            },
            {
                nota: 6,
                alumno_id: 556,
                materia_id: 23,
            },
            {
                nota: 4,
                alumno_id: 556,
                materia_id: 24,
            },
            {
                nota: 6,
                alumno_id: 556,
                materia_id: 25,
            },
            {
                nota: 1,
                alumno_id: 557,
                materia_id: 16,
            },
            {
                nota: 1,
                alumno_id: 557,
                materia_id: 17,
            },
            {
                nota: 7,
                alumno_id: 557,
                materia_id: 18,
            },
            {
                nota: 1,
                alumno_id: 557,
                materia_id: 19,
            },
            {
                nota: 1,
                alumno_id: 557,
                materia_id: 20,
            },
            {
                nota: 1,
                alumno_id: 557,
                materia_id: 21,
            },
            {
                nota: 1,
                alumno_id: 557,
                materia_id: 22,
            },
            {
                nota: 6,
                alumno_id: 557,
                materia_id: 23,
            },
            {
                nota: 4,
                alumno_id: 557,
                materia_id: 24,
            },
            {
                nota: 6,
                alumno_id: 557,
                materia_id: 25,
            },
            {
                nota: 10,
                alumno_id: 558,
                materia_id: 16,
            },
            {
                nota: 7,
                alumno_id: 558,
                materia_id: 17,
            },
            {
                nota: 8.5,
                alumno_id: 558,
                materia_id: 18,
            },
            {
                nota: 6,
                alumno_id: 558,
                materia_id: 19,
            },
            {
                nota: 7,
                alumno_id: 558,
                materia_id: 20,
            },
            {
                nota: 9.5,
                alumno_id: 558,
                materia_id: 21,
            },
            {
                nota: 7,
                alumno_id: 558,
                materia_id: 22,
            },
            {
                nota: 7,
                alumno_id: 558,
                materia_id: 23,
            },
            {
                nota: 6,
                alumno_id: 558,
                materia_id: 24,
            },
            {
                nota: 9.5,
                alumno_id: 558,
                materia_id: 25,
            },
            {
                nota: 8,
                alumno_id: 559,
                materia_id: 16,
            },
            {
                nota: 7,
                alumno_id: 559,
                materia_id: 17,
            },
            {
                nota: 7,
                alumno_id: 559,
                materia_id: 18,
            },
            {
                nota: 6,
                alumno_id: 559,
                materia_id: 19,
            },
            {
                nota: 8,
                alumno_id: 559,
                materia_id: 20,
            },
            {
                nota: 6,
                alumno_id: 559,
                materia_id: 21,
            },
            {
                nota: 2,
                alumno_id: 559,
                materia_id: 22,
            },
            {
                nota: 6,
                alumno_id: 559,
                materia_id: 23,
            },
            {
                nota: 10,
                alumno_id: 559,
                materia_id: 24,
            },
            {
                nota: 6,
                alumno_id: 559,
                materia_id: 25,
            },
            {
                nota: 6,
                alumno_id: 560,
                materia_id: 16,
            },
            {
                nota: 1,
                alumno_id: 560,
                materia_id: 17,
            },
            {
                nota: 7,
                alumno_id: 560,
                materia_id: 18,
            },
            {
                nota: 1,
                alumno_id: 560,
                materia_id: 19,
            },
            {
                nota: 5,
                alumno_id: 560,
                materia_id: 20,
            },
            {
                nota: 6,
                alumno_id: 560,
                materia_id: 21,
            },
            {
                nota: 1,
                alumno_id: 560,
                materia_id: 22,
            },
            {
                nota: 6,
                alumno_id: 560,
                materia_id: 23,
            },
            {
                nota: 4,
                alumno_id: 560,
                materia_id: 24,
            },
            {
                nota: 6,
                alumno_id: 560,
                materia_id: 25,
            },
            {
                nota: 0,
                alumno_id: 561,
                materia_id: 16,
            },
            {
                nota: 0,
                alumno_id: 561,
                materia_id: 17,
            },
            {
                nota: 0,
                alumno_id: 561,
                materia_id: 18,
            },
            {
                nota: 0,
                alumno_id: 561,
                materia_id: 19,
            },
            {
                nota: 0,
                alumno_id: 561,
                materia_id: 20,
            },
            {
                nota: 0,
                alumno_id: 561,
                materia_id: 21,
            },
            {
                nota: 0,
                alumno_id: 561,
                materia_id: 22,
            },
            {
                nota: 0,
                alumno_id: 561,
                materia_id: 23,
            },
            {
                nota: 0,
                alumno_id: 561,
                materia_id: 24,
            },
            {
                nota: 0,
                alumno_id: 561,
                materia_id: 25,
            },
            {
                nota: 7,
                alumno_id: 562,
                materia_id: 16,
            },
            {
                nota: 0,
                alumno_id: 562,
                materia_id: 17,
            },
            {
                nota: 8.5,
                alumno_id: 562,
                materia_id: 18,
            },
            {
                nota: 0,
                alumno_id: 562,
                materia_id: 19,
            },
            {
                nota: 0,
                alumno_id: 562,
                materia_id: 20,
            },
            {
                nota: 6,
                alumno_id: 562,
                materia_id: 21,
            },
            {
                nota: 0,
                alumno_id: 562,
                materia_id: 22,
            },
            {
                nota: 0,
                alumno_id: 562,
                materia_id: 23,
            },
            {
                nota: 0,
                alumno_id: 562,
                materia_id: 24,
            },
            {
                nota: 0,
                alumno_id: 562,
                materia_id: 25,
            },
            {
                nota: 0,
                alumno_id: 563,
                materia_id: 16,
            },
            {
                nota: 7,
                alumno_id: 563,
                materia_id: 17,
            },
            {
                nota: 0,
                alumno_id: 563,
                materia_id: 18,
            },
            {
                nota: 0,
                alumno_id: 563,
                materia_id: 19,
            },
            {
                nota: 7,
                alumno_id: 563,
                materia_id: 20,
            },
            {
                nota: 0,
                alumno_id: 563,
                materia_id: 21,
            },
            {
                nota: 6,
                alumno_id: 563,
                materia_id: 22,
            },
            {
                nota: 0,
                alumno_id: 563,
                materia_id: 23,
            },
            {
                nota: 0,
                alumno_id: 563,
                materia_id: 24,
            },
            {
                nota: 0,
                alumno_id: 563,
                materia_id: 25,
            },
            {
                nota: 0,
                alumno_id: 564,
                materia_id: 16,
            },
            {
                nota: 0,
                alumno_id: 564,
                materia_id: 17,
            },
            {
                nota: 0,
                alumno_id: 564,
                materia_id: 18,
            },
            {
                nota: 0,
                alumno_id: 564,
                materia_id: 19,
            },
            {
                nota: 0,
                alumno_id: 564,
                materia_id: 20,
            },
            {
                nota: 0,
                alumno_id: 564,
                materia_id: 21,
            },
            {
                nota: 0,
                alumno_id: 564,
                materia_id: 22,
            },
            {
                nota: 0,
                alumno_id: 564,
                materia_id: 23,
            },
            {
                nota: 0,
                alumno_id: 564,
                materia_id: 24,
            },
            {
                nota: 0,
                alumno_id: 564,
                materia_id: 25,
            },
            {
                nota: 1,
                alumno_id: 565,
                materia_id: 16,
            },
            {
                nota: 0,
                alumno_id: 565,
                materia_id: 17,
            },
            {
                nota: 0,
                alumno_id: 565,
                materia_id: 18,
            },
            {
                nota: 0,
                alumno_id: 565,
                materia_id: 19,
            },
            {
                nota: 1,
                alumno_id: 565,
                materia_id: 20,
            },
            {
                nota: 0,
                alumno_id: 565,
                materia_id: 21,
            },
            {
                nota: 1,
                alumno_id: 565,
                materia_id: 22,
            },
            {
                nota: 0,
                alumno_id: 565,
                materia_id: 23,
            },
            {
                nota: 1,
                alumno_id: 565,
                materia_id: 24,
            },
            {
                nota: 1,
                alumno_id: 565,
                materia_id: 25,
            },
            {
                nota: 0,
                alumno_id: 566,
                materia_id: 16,
            },
            {
                nota: 0,
                alumno_id: 566,
                materia_id: 17,
            },
            {
                nota: 0,
                alumno_id: 566,
                materia_id: 18,
            },
            {
                nota: 0,
                alumno_id: 566,
                materia_id: 19,
            },
            {
                nota: 0,
                alumno_id: 566,
                materia_id: 20,
            },
            {
                nota: 0,
                alumno_id: 566,
                materia_id: 21,
            },
            {
                nota: 7,
                alumno_id: 566,
                materia_id: 22,
            },
            {
                nota: 0,
                alumno_id: 566,
                materia_id: 23,
            },
            {
                nota: 9,
                alumno_id: 566,
                materia_id: 24,
            },
            {
                nota: 8.5,
                alumno_id: 566,
                materia_id: 25,
            },
            {
                nota: 0,
                alumno_id: 567,
                materia_id: 16,
            },
            {
                nota: 0,
                alumno_id: 567,
                materia_id: 17,
            },
            {
                nota: 0,
                alumno_id: 567,
                materia_id: 18,
            },
            {
                nota: 6,
                alumno_id: 567,
                materia_id: 19,
            },
            {
                nota: 0,
                alumno_id: 567,
                materia_id: 20,
            },
            {
                nota: 0,
                alumno_id: 567,
                materia_id: 21,
            },
            {
                nota: 7,
                alumno_id: 567,
                materia_id: 22,
            },
            {
                nota: 0,
                alumno_id: 567,
                materia_id: 23,
            },
            {
                nota: 7,
                alumno_id: 567,
                materia_id: 24,
            },
            {
                nota: 0,
                alumno_id: 567,
                materia_id: 25,
            },
            {
                nota: 1,
                alumno_id: 568,
                materia_id: 16,
            },
            {
                nota: 1,
                alumno_id: 568,
                materia_id: 17,
            },
            {
                nota: 7,
                alumno_id: 568,
                materia_id: 18,
            },
            {
                nota: 5,
                alumno_id: 568,
                materia_id: 19,
            },
            {
                nota: 6,
                alumno_id: 568,
                materia_id: 20,
            },
            {
                nota: 6,
                alumno_id: 568,
                materia_id: 21,
            },
            {
                nota: 6,
                alumno_id: 568,
                materia_id: 22,
            },
            {
                nota: 6,
                alumno_id: 568,
                materia_id: 23,
            },
            {
                nota: 5,
                alumno_id: 568,
                materia_id: 24,
            },
            {
                nota: 5,
                alumno_id: 568,
                materia_id: 25,
            },
            {
                nota: 1,
                alumno_id: 569,
                materia_id: 16,
            },
            {
                nota: 8,
                alumno_id: 569,
                materia_id: 17,
            },
            {
                nota: 7,
                alumno_id: 569,
                materia_id: 18,
            },
            {
                nota: 6,
                alumno_id: 569,
                materia_id: 19,
            },
            {
                nota: 5,
                alumno_id: 569,
                materia_id: 20,
            },
            {
                nota: 4,
                alumno_id: 569,
                materia_id: 21,
            },
            {
                nota: 6.5,
                alumno_id: 569,
                materia_id: 22,
            },
            {
                nota: 6,
                alumno_id: 569,
                materia_id: 23,
            },
            {
                nota: 6,
                alumno_id: 569,
                materia_id: 24,
            },
            {
                nota: 6,
                alumno_id: 569,
                materia_id: 25,
            },
            {
                nota: 1,
                alumno_id: 570,
                materia_id: 16,
            },
            {
                nota: 6,
                alumno_id: 570,
                materia_id: 17,
            },
            {
                nota: 7,
                alumno_id: 570,
                materia_id: 18,
            },
            {
                nota: 6,
                alumno_id: 570,
                materia_id: 19,
            },
            {
                nota: 1,
                alumno_id: 570,
                materia_id: 20,
            },
            {
                nota: 7,
                alumno_id: 570,
                materia_id: 21,
            },
            {
                nota: 6,
                alumno_id: 570,
                materia_id: 22,
            },
            {
                nota: 7,
                alumno_id: 570,
                materia_id: 23,
            },
            {
                nota: 6,
                alumno_id: 570,
                materia_id: 24,
            },
            {
                nota: 7,
                alumno_id: 570,
                materia_id: 25,
            },
            {
                nota: 1,
                alumno_id: 571,
                materia_id: 16,
            },
            {
                nota: 1,
                alumno_id: 571,
                materia_id: 17,
            },
            {
                nota: 7,
                alumno_id: 571,
                materia_id: 18,
            },
            {
                nota: 5,
                alumno_id: 571,
                materia_id: 19,
            },
            {
                nota: 1,
                alumno_id: 571,
                materia_id: 20,
            },
            {
                nota: 6.5,
                alumno_id: 571,
                materia_id: 21,
            },
            {
                nota: 6,
                alumno_id: 571,
                materia_id: 22,
            },
            {
                nota: 6,
                alumno_id: 571,
                materia_id: 23,
            },
            {
                nota: 6,
                alumno_id: 571,
                materia_id: 24,
            },
            {
                nota: 5,
                alumno_id: 571,
                materia_id: 25,
            },
            {
                nota: 0,
                alumno_id: 572,
                materia_id: 16,
            },
            {
                nota: 0,
                alumno_id: 572,
                materia_id: 17,
            },
            {
                nota: 0,
                alumno_id: 572,
                materia_id: 18,
            },
            {
                nota: 0,
                alumno_id: 572,
                materia_id: 19,
            },
            {
                nota: 0,
                alumno_id: 572,
                materia_id: 20,
            },
            {
                nota: 0,
                alumno_id: 572,
                materia_id: 21,
            },
            {
                nota: 0,
                alumno_id: 572,
                materia_id: 22,
            },
            {
                nota: 0,
                alumno_id: 572,
                materia_id: 23,
            },
            {
                nota: 0,
                alumno_id: 572,
                materia_id: 24,
            },
            {
                nota: 0,
                alumno_id: 572,
                materia_id: 25,
            },
            {
                nota: 7,
                alumno_id: 573,
                materia_id: 16,
            },
            {
                nota: 7,
                alumno_id: 573,
                materia_id: 17,
            },
            {
                nota: 8.5,
                alumno_id: 573,
                materia_id: 18,
            },
            {
                nota: 10,
                alumno_id: 573,
                materia_id: 19,
            },
            {
                nota: 9,
                alumno_id: 573,
                materia_id: 20,
            },
            {
                nota: 6,
                alumno_id: 573,
                materia_id: 21,
            },
            {
                nota: 8,
                alumno_id: 573,
                materia_id: 22,
            },
            {
                nota: 7,
                alumno_id: 573,
                materia_id: 23,
            },
            {
                nota: 10,
                alumno_id: 573,
                materia_id: 24,
            },
            {
                nota: 10,
                alumno_id: 573,
                materia_id: 25,
            },
            {
                nota: 0,
                alumno_id: 574,
                materia_id: 16,
            },
            {
                nota: 0,
                alumno_id: 574,
                materia_id: 17,
            },
            {
                nota: 0,
                alumno_id: 574,
                materia_id: 18,
            },
            {
                nota: 0,
                alumno_id: 574,
                materia_id: 19,
            },
            {
                nota: 0,
                alumno_id: 574,
                materia_id: 20,
            },
            {
                nota: 0,
                alumno_id: 574,
                materia_id: 21,
            },
            {
                nota: 0,
                alumno_id: 574,
                materia_id: 22,
            },
            {
                nota: 0,
                alumno_id: 574,
                materia_id: 23,
            },
            {
                nota: 0,
                alumno_id: 574,
                materia_id: 24,
            },
            {
                nota: 0,
                alumno_id: 574,
                materia_id: 25,
            },
            {
                nota: 1,
                alumno_id: 575,
                materia_id: 16,
            },
            {
                nota: 6,
                alumno_id: 575,
                materia_id: 17,
            },
            {
                nota: 7,
                alumno_id: 575,
                materia_id: 18,
            },
            {
                nota: 7,
                alumno_id: 575,
                materia_id: 19,
            },
            {
                nota: 7,
                alumno_id: 575,
                materia_id: 20,
            },
            {
                nota: 6,
                alumno_id: 575,
                materia_id: 21,
            },
            {
                nota: 6,
                alumno_id: 575,
                materia_id: 22,
            },
            {
                nota: 6,
                alumno_id: 575,
                materia_id: 23,
            },
            {
                nota: 6,
                alumno_id: 575,
                materia_id: 24,
            },
            {
                nota: 6,
                alumno_id: 575,
                materia_id: 25,
            },
            {
                nota: 1,
                alumno_id: 576,
                materia_id: 16,
            },
            {
                nota: 1,
                alumno_id: 576,
                materia_id: 17,
            },
            {
                nota: 7,
                alumno_id: 576,
                materia_id: 18,
            },
            {
                nota: 7.5,
                alumno_id: 576,
                materia_id: 19,
            },
            {
                nota: 1,
                alumno_id: 576,
                materia_id: 20,
            },
            {
                nota: 4,
                alumno_id: 576,
                materia_id: 21,
            },
            {
                nota: 6,
                alumno_id: 576,
                materia_id: 22,
            },
            {
                nota: 7,
                alumno_id: 576,
                materia_id: 23,
            },
            {
                nota: 6,
                alumno_id: 576,
                materia_id: 24,
            },
            {
                nota: 6,
                alumno_id: 576,
                materia_id: 25,
            },
            {
                nota: 6,
                alumno_id: 577,
                materia_id: 16,
            },
            {
                nota: 7,
                alumno_id: 577,
                materia_id: 17,
            },
            {
                nota: 7,
                alumno_id: 577,
                materia_id: 18,
            },
            {
                nota: 10,
                alumno_id: 577,
                materia_id: 19,
            },
            {
                nota: 9,
                alumno_id: 577,
                materia_id: 20,
            },
            {
                nota: 8.5,
                alumno_id: 577,
                materia_id: 21,
            },
            {
                nota: 8,
                alumno_id: 577,
                materia_id: 22,
            },
            {
                nota: 9,
                alumno_id: 577,
                materia_id: 23,
            },
            {
                nota: 10,
                alumno_id: 577,
                materia_id: 24,
            },
            {
                nota: 10,
                alumno_id: 577,
                materia_id: 25,
            },
            {
                nota: 1,
                alumno_id: 578,
                materia_id: 16,
            },
            {
                nota: 1,
                alumno_id: 578,
                materia_id: 17,
            },
            {
                nota: 7,
                alumno_id: 578,
                materia_id: 18,
            },
            {
                nota: 6.5,
                alumno_id: 578,
                materia_id: 19,
            },
            {
                nota: 1,
                alumno_id: 578,
                materia_id: 20,
            },
            {
                nota: 1,
                alumno_id: 578,
                materia_id: 21,
            },
            {
                nota: 1,
                alumno_id: 578,
                materia_id: 22,
            },
            {
                nota: 1,
                alumno_id: 578,
                materia_id: 23,
            },
            {
                nota: 6,
                alumno_id: 578,
                materia_id: 24,
            },
            {
                nota: 6.5,
                alumno_id: 578,
                materia_id: 25,
            },
            {
                nota: 6,
                alumno_id: 579,
                materia_id: 16,
            },
            {
                nota: 8,
                alumno_id: 579,
                materia_id: 17,
            },
            {
                nota: 7,
                alumno_id: 579,
                materia_id: 18,
            },
            {
                nota: 6.5,
                alumno_id: 579,
                materia_id: 19,
            },
            {
                nota: 6,
                alumno_id: 579,
                materia_id: 20,
            },
            {
                nota: 7.5,
                alumno_id: 579,
                materia_id: 21,
            },
            {
                nota: 6.5,
                alumno_id: 579,
                materia_id: 22,
            },
            {
                nota: 7,
                alumno_id: 579,
                materia_id: 23,
            },
            {
                nota: 7,
                alumno_id: 579,
                materia_id: 24,
            },
            {
                nota: 7,
                alumno_id: 579,
                materia_id: 25,
            },
            {
                nota: 0,
                alumno_id: 580,
                materia_id: 16,
            },
            {
                nota: 0,
                alumno_id: 580,
                materia_id: 17,
            },
            {
                nota: 0,
                alumno_id: 580,
                materia_id: 18,
            },
            {
                nota: 0,
                alumno_id: 580,
                materia_id: 19,
            },
            {
                nota: 0,
                alumno_id: 580,
                materia_id: 20,
            },
            {
                nota: 0,
                alumno_id: 580,
                materia_id: 21,
            },
            {
                nota: 0,
                alumno_id: 580,
                materia_id: 22,
            },
            {
                nota: 0,
                alumno_id: 580,
                materia_id: 23,
            },
            {
                nota: 0,
                alumno_id: 580,
                materia_id: 24,
            },
            {
                nota: 0,
                alumno_id: 580,
                materia_id: 25,
            },
            {
                nota: 1,
                alumno_id: 581,
                materia_id: 16,
            },
            {
                nota: 7.5,
                alumno_id: 581,
                materia_id: 17,
            },
            {
                nota: 7,
                alumno_id: 581,
                materia_id: 18,
            },
            {
                nota: 7.5,
                alumno_id: 581,
                materia_id: 19,
            },
            {
                nota: 7.5,
                alumno_id: 581,
                materia_id: 20,
            },
            {
                nota: 6.5,
                alumno_id: 581,
                materia_id: 21,
            },
            {
                nota: 8,
                alumno_id: 581,
                materia_id: 22,
            },
            {
                nota: 7,
                alumno_id: 581,
                materia_id: 23,
            },
            {
                nota: 8,
                alumno_id: 581,
                materia_id: 24,
            },
            {
                nota: 9,
                alumno_id: 581,
                materia_id: 25,
            },
            {
                nota: 1,
                alumno_id: 582,
                materia_id: 16,
            },
            {
                nota: 4,
                alumno_id: 582,
                materia_id: 17,
            },
            {
                nota: 7,
                alumno_id: 582,
                materia_id: 18,
            },
            {
                nota: 8,
                alumno_id: 582,
                materia_id: 19,
            },
            {
                nota: 8,
                alumno_id: 582,
                materia_id: 20,
            },
            {
                nota: 6,
                alumno_id: 582,
                materia_id: 21,
            },
            {
                nota: 7,
                alumno_id: 582,
                materia_id: 22,
            },
            {
                nota: 5,
                alumno_id: 582,
                materia_id: 23,
            },
            {
                nota: 6,
                alumno_id: 582,
                materia_id: 24,
            },
            {
                nota: 6,
                alumno_id: 582,
                materia_id: 25,
            },
            {
                nota: 6,
                alumno_id: 583,
                materia_id: 16,
            },
            {
                nota: 1,
                alumno_id: 583,
                materia_id: 17,
            },
            {
                nota: 7,
                alumno_id: 583,
                materia_id: 18,
            },
            {
                nota: 5,
                alumno_id: 583,
                materia_id: 19,
            },
            {
                nota: 1,
                alumno_id: 583,
                materia_id: 20,
            },
            {
                nota: 6.5,
                alumno_id: 583,
                materia_id: 21,
            },
            {
                nota: 6,
                alumno_id: 583,
                materia_id: 22,
            },
            {
                nota: 7,
                alumno_id: 583,
                materia_id: 23,
            },
            {
                nota: 5,
                alumno_id: 583,
                materia_id: 24,
            },
            {
                nota: 6,
                alumno_id: 583,
                materia_id: 25,
            },
            {
                nota: 7,
                alumno_id: 584,
                materia_id: 16,
            },
            {
                nota: 10,
                alumno_id: 584,
                materia_id: 17,
            },
            {
                nota: 8.5,
                alumno_id: 584,
                materia_id: 18,
            },
            {
                nota: 8.5,
                alumno_id: 584,
                materia_id: 19,
            },
            {
                nota: 8.5,
                alumno_id: 584,
                materia_id: 20,
            },
            {
                nota: 8,
                alumno_id: 584,
                materia_id: 21,
            },
            {
                nota: 8,
                alumno_id: 584,
                materia_id: 22,
            },
            {
                nota: 7,
                alumno_id: 584,
                materia_id: 23,
            },
            {
                nota: 8,
                alumno_id: 584,
                materia_id: 24,
            },
            {
                nota: 9,
                alumno_id: 584,
                materia_id: 25,
            },
            {
                nota: 1,
                alumno_id: 585,
                materia_id: 16,
            },
            {
                nota: 4,
                alumno_id: 585,
                materia_id: 17,
            },
            {
                nota: 7,
                alumno_id: 585,
                materia_id: 18,
            },
            {
                nota: 6.5,
                alumno_id: 585,
                materia_id: 19,
            },
            {
                nota: 1,
                alumno_id: 585,
                materia_id: 20,
            },
            {
                nota: 6.5,
                alumno_id: 585,
                materia_id: 21,
            },
            {
                nota: 6,
                alumno_id: 585,
                materia_id: 22,
            },
            {
                nota: 5,
                alumno_id: 585,
                materia_id: 23,
            },
            {
                nota: 7,
                alumno_id: 585,
                materia_id: 24,
            },
            {
                nota: 6.5,
                alumno_id: 585,
                materia_id: 25,
            },
            {
                nota: 0,
                alumno_id: 586,
                materia_id: 16,
            },
            {
                nota: 0,
                alumno_id: 586,
                materia_id: 17,
            },
            {
                nota: 0,
                alumno_id: 586,
                materia_id: 18,
            },
            {
                nota: 0,
                alumno_id: 586,
                materia_id: 19,
            },
            {
                nota: 0,
                alumno_id: 586,
                materia_id: 20,
            },
            {
                nota: 0,
                alumno_id: 586,
                materia_id: 21,
            },
            {
                nota: 0,
                alumno_id: 586,
                materia_id: 22,
            },
            {
                nota: 0,
                alumno_id: 586,
                materia_id: 23,
            },
            {
                nota: 0,
                alumno_id: 586,
                materia_id: 24,
            },
            {
                nota: 0,
                alumno_id: 586,
                materia_id: 25,
            },
            {
                nota: 6,
                alumno_id: 587,
                materia_id: 16,
            },
            {
                nota: 5,
                alumno_id: 587,
                materia_id: 17,
            },
            {
                nota: 7,
                alumno_id: 587,
                materia_id: 18,
            },
            {
                nota: 8,
                alumno_id: 587,
                materia_id: 19,
            },
            {
                nota: 7,
                alumno_id: 587,
                materia_id: 20,
            },
            {
                nota: 6.5,
                alumno_id: 587,
                materia_id: 21,
            },
            {
                nota: 6,
                alumno_id: 587,
                materia_id: 22,
            },
            {
                nota: 6,
                alumno_id: 587,
                materia_id: 23,
            },
            {
                nota: 6,
                alumno_id: 587,
                materia_id: 24,
            },
            {
                nota: 7.5,
                alumno_id: 587,
                materia_id: 25,
            },
            {
                nota: 1,
                alumno_id: 588,
                materia_id: 16,
            },
            {
                nota: 4,
                alumno_id: 588,
                materia_id: 17,
            },
            {
                nota: 7,
                alumno_id: 588,
                materia_id: 18,
            },
            {
                nota: 7,
                alumno_id: 588,
                materia_id: 19,
            },
            {
                nota: 6,
                alumno_id: 588,
                materia_id: 20,
            },
            {
                nota: 1,
                alumno_id: 588,
                materia_id: 21,
            },
            {
                nota: 6,
                alumno_id: 588,
                materia_id: 22,
            },
            {
                nota: 7,
                alumno_id: 588,
                materia_id: 23,
            },
            {
                nota: 6,
                alumno_id: 588,
                materia_id: 24,
            },
            {
                nota: 7,
                alumno_id: 588,
                materia_id: 25,
            },
            {
                nota: 9.5,
                alumno_id: 589,
                materia_id: 16,
            },
            {
                nota: 8,
                alumno_id: 589,
                materia_id: 17,
            },
            {
                nota: 7,
                alumno_id: 589,
                materia_id: 18,
            },
            {
                nota: 9,
                alumno_id: 589,
                materia_id: 19,
            },
            {
                nota: 8,
                alumno_id: 589,
                materia_id: 20,
            },
            {
                nota: 7,
                alumno_id: 589,
                materia_id: 21,
            },
            {
                nota: 7,
                alumno_id: 589,
                materia_id: 22,
            },
            {
                nota: 10,
                alumno_id: 589,
                materia_id: 23,
            },
            {
                nota: 7,
                alumno_id: 589,
                materia_id: 24,
            },
            {
                nota: 9,
                alumno_id: 589,
                materia_id: 25,
            },
            {
                nota: 1,
                alumno_id: 590,
                materia_id: 16,
            },
            {
                nota: 8.5,
                alumno_id: 590,
                materia_id: 17,
            },
            {
                nota: 7,
                alumno_id: 590,
                materia_id: 18,
            },
            {
                nota: 9.5,
                alumno_id: 590,
                materia_id: 19,
            },
            {
                nota: 6.5,
                alumno_id: 590,
                materia_id: 20,
            },
            {
                nota: 6.5,
                alumno_id: 590,
                materia_id: 21,
            },
            {
                nota: 6.5,
                alumno_id: 590,
                materia_id: 22,
            },
            {
                nota: 6,
                alumno_id: 590,
                materia_id: 23,
            },
            {
                nota: 7,
                alumno_id: 590,
                materia_id: 24,
            },
            {
                nota: 9,
                alumno_id: 590,
                materia_id: 25,
            },
            {
                nota: 1,
                alumno_id: 591,
                materia_id: 16,
            },
            {
                nota: 8,
                alumno_id: 591,
                materia_id: 17,
            },
            {
                nota: 7,
                alumno_id: 591,
                materia_id: 18,
            },
            {
                nota: 9,
                alumno_id: 591,
                materia_id: 19,
            },
            {
                nota: 7.5,
                alumno_id: 591,
                materia_id: 20,
            },
            {
                nota: 7.5,
                alumno_id: 591,
                materia_id: 21,
            },
            {
                nota: 8,
                alumno_id: 591,
                materia_id: 22,
            },
            {
                nota: 6,
                alumno_id: 591,
                materia_id: 23,
            },
            {
                nota: 7,
                alumno_id: 591,
                materia_id: 24,
            },
            {
                nota: 10,
                alumno_id: 591,
                materia_id: 25,
            },
            {
                nota: 8,
                alumno_id: 592,
                materia_id: 16,
            },
            {
                nota: 6.5,
                alumno_id: 592,
                materia_id: 17,
            },
            {
                nota: 7,
                alumno_id: 592,
                materia_id: 18,
            },
            {
                nota: 10,
                alumno_id: 592,
                materia_id: 19,
            },
            {
                nota: 8,
                alumno_id: 592,
                materia_id: 20,
            },
            {
                nota: 6,
                alumno_id: 592,
                materia_id: 21,
            },
            {
                nota: 6,
                alumno_id: 592,
                materia_id: 22,
            },
            {
                nota: 7,
                alumno_id: 592,
                materia_id: 23,
            },
            {
                nota: 8,
                alumno_id: 592,
                materia_id: 24,
            },
            {
                nota: 8,
                alumno_id: 592,
                materia_id: 25,
            },
            {
                nota: 1,
                alumno_id: 593,
                materia_id: 16,
            },
            {
                nota: 1,
                alumno_id: 593,
                materia_id: 17,
            },
            {
                nota: 8.5,
                alumno_id: 593,
                materia_id: 18,
            },
            {
                nota: 7,
                alumno_id: 593,
                materia_id: 19,
            },
            {
                nota: 7.5,
                alumno_id: 593,
                materia_id: 20,
            },
            {
                nota: 6,
                alumno_id: 593,
                materia_id: 21,
            },
            {
                nota: 6.5,
                alumno_id: 593,
                materia_id: 22,
            },
            {
                nota: 6,
                alumno_id: 593,
                materia_id: 23,
            },
            {
                nota: 6,
                alumno_id: 593,
                materia_id: 24,
            },
            {
                nota: 7,
                alumno_id: 593,
                materia_id: 25,
            },
            {
                nota: 1,
                alumno_id: 594,
                materia_id: 16,
            },
            {
                nota: 1,
                alumno_id: 594,
                materia_id: 17,
            },
            {
                nota: 7,
                alumno_id: 594,
                materia_id: 18,
            },
            {
                nota: 6,
                alumno_id: 594,
                materia_id: 19,
            },
            {
                nota: 1,
                alumno_id: 594,
                materia_id: 20,
            },
            {
                nota: 5,
                alumno_id: 594,
                materia_id: 21,
            },
            {
                nota: 6,
                alumno_id: 594,
                materia_id: 22,
            },
            {
                nota: 6,
                alumno_id: 594,
                materia_id: 23,
            },
            {
                nota: 6,
                alumno_id: 594,
                materia_id: 24,
            },
            {
                nota: 6,
                alumno_id: 594,
                materia_id: 25,
            },
            {
                nota: 1,
                alumno_id: 595,
                materia_id: 16,
            },
            {
                nota: 1,
                alumno_id: 595,
                materia_id: 17,
            },
            {
                nota: 7,
                alumno_id: 595,
                materia_id: 18,
            },
            {
                nota: 6,
                alumno_id: 595,
                materia_id: 19,
            },
            {
                nota: 1,
                alumno_id: 595,
                materia_id: 20,
            },
            {
                nota: 1,
                alumno_id: 595,
                materia_id: 21,
            },
            {
                nota: 6,
                alumno_id: 595,
                materia_id: 22,
            },
            {
                nota: 6,
                alumno_id: 595,
                materia_id: 23,
            },
            {
                nota: 6,
                alumno_id: 595,
                materia_id: 24,
            },
            {
                nota: 6,
                alumno_id: 595,
                materia_id: 25,
            },
            {
                nota: 8,
                alumno_id: 596,
                materia_id: 16,
            },
            {
                nota: 10,
                alumno_id: 596,
                materia_id: 17,
            },
            {
                nota: 7,
                alumno_id: 596,
                materia_id: 18,
            },
            {
                nota: 7.5,
                alumno_id: 596,
                materia_id: 19,
            },
            {
                nota: 1,
                alumno_id: 596,
                materia_id: 20,
            },
            {
                nota: 7,
                alumno_id: 596,
                materia_id: 21,
            },
            {
                nota: 6,
                alumno_id: 596,
                materia_id: 22,
            },
            {
                nota: 8,
                alumno_id: 596,
                materia_id: 23,
            },
            {
                nota: 6,
                alumno_id: 596,
                materia_id: 24,
            },
            {
                nota: 6,
                alumno_id: 596,
                materia_id: 25,
            },
            {
                nota: 7,
                alumno_id: 597,
                materia_id: 16,
            },
            {
                nota: 8,
                alumno_id: 597,
                materia_id: 17,
            },
            {
                nota: 7,
                alumno_id: 597,
                materia_id: 18,
            },
            {
                nota: 8,
                alumno_id: 597,
                materia_id: 19,
            },
            {
                nota: 7,
                alumno_id: 597,
                materia_id: 20,
            },
            {
                nota: 7,
                alumno_id: 597,
                materia_id: 21,
            },
            {
                nota: 7,
                alumno_id: 597,
                materia_id: 22,
            },
            {
                nota: 8,
                alumno_id: 597,
                materia_id: 23,
            },
            {
                nota: 9,
                alumno_id: 597,
                materia_id: 24,
            },
            {
                nota: 9,
                alumno_id: 597,
                materia_id: 25,
            },
            {
                nota: 6,
                alumno_id: 598,
                materia_id: 16,
            },
            {
                nota: 1,
                alumno_id: 598,
                materia_id: 17,
            },
            {
                nota: 7,
                alumno_id: 598,
                materia_id: 18,
            },
            {
                nota: 6,
                alumno_id: 598,
                materia_id: 19,
            },
            {
                nota: 7.5,
                alumno_id: 598,
                materia_id: 20,
            },
            {
                nota: 4,
                alumno_id: 598,
                materia_id: 21,
            },
            {
                nota: 6.5,
                alumno_id: 598,
                materia_id: 22,
            },
            {
                nota: 6,
                alumno_id: 598,
                materia_id: 23,
            },
            {
                nota: 7,
                alumno_id: 598,
                materia_id: 24,
            },
            {
                nota: 6,
                alumno_id: 598,
                materia_id: 25,
            },
            {
                nota: 2,
                alumno_id: 599,
                materia_id: 16,
            },
            {
                nota: 6,
                alumno_id: 599,
                materia_id: 17,
            },
            {
                nota: 7,
                alumno_id: 599,
                materia_id: 18,
            },
            {
                nota: 9,
                alumno_id: 599,
                materia_id: 19,
            },
            {
                nota: 8,
                alumno_id: 599,
                materia_id: 20,
            },
            {
                nota: 7,
                alumno_id: 599,
                materia_id: 21,
            },
            {
                nota: 7,
                alumno_id: 599,
                materia_id: 22,
            },
            {
                nota: 7,
                alumno_id: 599,
                materia_id: 23,
            },
            {
                nota: 7,
                alumno_id: 599,
                materia_id: 24,
            },
            {
                nota: 10,
                alumno_id: 599,
                materia_id: 25,
            },
            {
                nota: 1,
                alumno_id: 600,
                materia_id: 16,
            },
            {
                nota: 6.5,
                alumno_id: 600,
                materia_id: 17,
            },
            {
                nota: 7,
                alumno_id: 600,
                materia_id: 18,
            },
            {
                nota: 6,
                alumno_id: 600,
                materia_id: 19,
            },
            {
                nota: 6,
                alumno_id: 600,
                materia_id: 20,
            },
            {
                nota: 6,
                alumno_id: 600,
                materia_id: 21,
            },
            {
                nota: 6,
                alumno_id: 600,
                materia_id: 22,
            },
            {
                nota: 6,
                alumno_id: 600,
                materia_id: 23,
            },
            {
                nota: 6,
                alumno_id: 600,
                materia_id: 24,
            },
            {
                nota: 7,
                alumno_id: 600,
                materia_id: 25,
            },
            {
                nota: 1,
                alumno_id: 601,
                materia_id: 16,
            },
            {
                nota: 6.5,
                alumno_id: 601,
                materia_id: 17,
            },
            {
                nota: 7,
                alumno_id: 601,
                materia_id: 18,
            },
            {
                nota: 10,
                alumno_id: 601,
                materia_id: 19,
            },
            {
                nota: 8,
                alumno_id: 601,
                materia_id: 20,
            },
            {
                nota: 7,
                alumno_id: 601,
                materia_id: 21,
            },
            {
                nota: 7,
                alumno_id: 601,
                materia_id: 22,
            },
            {
                nota: 7,
                alumno_id: 601,
                materia_id: 23,
            },
            {
                nota: 8,
                alumno_id: 601,
                materia_id: 24,
            },
            {
                nota: 8.5,
                alumno_id: 601,
                materia_id: 25,
            },
            {
                nota: 1,
                alumno_id: 602,
                materia_id: 16,
            },
            {
                nota: 5,
                alumno_id: 602,
                materia_id: 17,
            },
            {
                nota: 7,
                alumno_id: 602,
                materia_id: 18,
            },
            {
                nota: 6.5,
                alumno_id: 602,
                materia_id: 19,
            },
            {
                nota: 6,
                alumno_id: 602,
                materia_id: 20,
            },
            {
                nota: 5,
                alumno_id: 602,
                materia_id: 21,
            },
            {
                nota: 6,
                alumno_id: 602,
                materia_id: 22,
            },
            {
                nota: 6,
                alumno_id: 602,
                materia_id: 23,
            },
            {
                nota: 5,
                alumno_id: 602,
                materia_id: 24,
            },
            {
                nota: 7,
                alumno_id: 602,
                materia_id: 25,
            },
            {
                nota: 1,
                alumno_id: 603,
                materia_id: 16,
            },
            {
                nota: 5,
                alumno_id: 603,
                materia_id: 17,
            },
            {
                nota: 8.5,
                alumno_id: 603,
                materia_id: 18,
            },
            {
                nota: 10,
                alumno_id: 603,
                materia_id: 19,
            },
            {
                nota: 6,
                alumno_id: 603,
                materia_id: 20,
            },
            {
                nota: 1,
                alumno_id: 603,
                materia_id: 21,
            },
            {
                nota: 6,
                alumno_id: 603,
                materia_id: 22,
            },
            {
                nota: 6,
                alumno_id: 603,
                materia_id: 23,
            },
            {
                nota: 10,
                alumno_id: 603,
                materia_id: 24,
            },
            {
                nota: 10,
                alumno_id: 603,
                materia_id: 25,
            },
            {
                nota: 6,
                alumno_id: 604,
                materia_id: 16,
            },
            {
                nota: 7,
                alumno_id: 604,
                materia_id: 17,
            },
            {
                nota: 7,
                alumno_id: 604,
                materia_id: 18,
            },
            {
                nota: 7.5,
                alumno_id: 604,
                materia_id: 19,
            },
            {
                nota: 7,
                alumno_id: 604,
                materia_id: 20,
            },
            {
                nota: 7.5,
                alumno_id: 604,
                materia_id: 21,
            },
            {
                nota: 7,
                alumno_id: 604,
                materia_id: 22,
            },
            {
                nota: 6,
                alumno_id: 604,
                materia_id: 23,
            },
            {
                nota: 7,
                alumno_id: 604,
                materia_id: 24,
            },
            {
                nota: 7,
                alumno_id: 604,
                materia_id: 25,
            },
            {
                nota: 0,
                alumno_id: 605,
                materia_id: 16,
            },
            {
                nota: 0,
                alumno_id: 605,
                materia_id: 17,
            },
            {
                nota: 0,
                alumno_id: 605,
                materia_id: 18,
            },
            {
                nota: 0,
                alumno_id: 605,
                materia_id: 19,
            },
            {
                nota: 0,
                alumno_id: 605,
                materia_id: 20,
            },
            {
                nota: 0,
                alumno_id: 605,
                materia_id: 21,
            },
            {
                nota: 0,
                alumno_id: 605,
                materia_id: 22,
            },
            {
                nota: 0,
                alumno_id: 605,
                materia_id: 23,
            },
            {
                nota: 0,
                alumno_id: 605,
                materia_id: 24,
            },
            {
                nota: 0,
                alumno_id: 605,
                materia_id: 25,
            },
            {
                nota: 1,
                alumno_id: 606,
                materia_id: 16,
            },
            {
                nota: 8,
                alumno_id: 606,
                materia_id: 17,
            },
            {
                nota: 7,
                alumno_id: 606,
                materia_id: 18,
            },
            {
                nota: 7,
                alumno_id: 606,
                materia_id: 19,
            },
            {
                nota: 7,
                alumno_id: 606,
                materia_id: 20,
            },
            {
                nota: 6,
                alumno_id: 606,
                materia_id: 21,
            },
            {
                nota: 7.5,
                alumno_id: 606,
                materia_id: 22,
            },
            {
                nota: 6,
                alumno_id: 606,
                materia_id: 23,
            },
            {
                nota: 8,
                alumno_id: 606,
                materia_id: 24,
            },
            {
                nota: 9,
                alumno_id: 606,
                materia_id: 25,
            },
            {
                nota: 0,
                alumno_id: 607,
                materia_id: 16,
            },
            {
                nota: 0,
                alumno_id: 607,
                materia_id: 17,
            },
            {
                nota: 0,
                alumno_id: 607,
                materia_id: 18,
            },
            {
                nota: 0,
                alumno_id: 607,
                materia_id: 19,
            },
            {
                nota: 0,
                alumno_id: 607,
                materia_id: 20,
            },
            {
                nota: 0,
                alumno_id: 607,
                materia_id: 21,
            },
            {
                nota: 0,
                alumno_id: 607,
                materia_id: 22,
            },
            {
                nota: 0,
                alumno_id: 607,
                materia_id: 23,
            },
            {
                nota: 0,
                alumno_id: 607,
                materia_id: 24,
            },
            {
                nota: 0,
                alumno_id: 607,
                materia_id: 25,
            },
            {
                nota: 0,
                alumno_id: 608,
                materia_id: 16,
            },
            {
                nota: 0,
                alumno_id: 608,
                materia_id: 17,
            },
            {
                nota: 0,
                alumno_id: 608,
                materia_id: 18,
            },
            {
                nota: 0,
                alumno_id: 608,
                materia_id: 19,
            },
            {
                nota: 1,
                alumno_id: 608,
                materia_id: 20,
            },
            {
                nota: 0,
                alumno_id: 608,
                materia_id: 21,
            },
            {
                nota: 0,
                alumno_id: 608,
                materia_id: 22,
            },
            {
                nota: 0,
                alumno_id: 608,
                materia_id: 23,
            },
            {
                nota: 0,
                alumno_id: 608,
                materia_id: 24,
            },
            {
                nota: 0,
                alumno_id: 608,
                materia_id: 25,
            },


            // NOTAS ALUMNOS PCTBI 2013


            
        ]);
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("notas", null, {});
    },
};
