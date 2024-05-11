"use strict";

// Referencias:  propuesta_academica 0 = PCTBI, propuesta_academica 1 = FORMACION PROFESIONAL
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("materias", [
            // id: 1
            {
                nombre: "Matemática",
                año_academico: 1,
                propuesta_academica: 1,
            },
            // id: 2
            {
                nombre: "Lengua y Literatura",
                año_academico: 1,
                propuesta_academica: 1,
            },
            // id: 3
            {
                nombre: "Técnicas y Prácticas Contables",
                año_academico: 1,
                propuesta_academica: 1,
            },
            // id: 4
            {
                nombre: "Historia y Geografía",
                año_academico: 1,
                propuesta_academica: 1,
            },
            // id: 5
            {
                nombre: "Inglés",
                año_academico: 1,
                propuesta_academica: 1,
            },
            // id: 6
            {
                nombre: "Educación Cívica",
                año_academico: 1,
                propuesta_academica: 1,
            },
            // id: 7
            {
                nombre: "Biología",
                año_academico: 1,
                propuesta_academica: 1,
            },
            // id: 8
            {
                nombre: "Matemática",
                año_academico: 2,
                propuesta_academica: 1,
            },
            // id: 9
            {
                nombre: "Lengua y Literatura",
                año_academico: 2,
                propuesta_academica: 1,
            },
            // id: 10
            {
                nombre: "Técnicas y Prácticas Contables",
                año_academico: 2,
                propuesta_academica: 1,
            },
            // id: 11
            {
                nombre: "Historia y Geografía",
                año_academico: 2,
                propuesta_academica: 1,
            },
            // id: 12
            {
                nombre: "Inglés",
                año_academico: 2,
                propuesta_academica: 1,
            },
            // id: 13
            {
                nombre: "Educación para la Salud",
                año_academico: 2,
                propuesta_academica: 1,
            },
            // id: 14
            {
                nombre: "Física",
                año_academico: 2,
                propuesta_academica: 1,
            },
            // id: 15
            {
                nombre: "Filosofía - Psicología",
                año_academico: 2,
                propuesta_academica: 1,
            },
            // id: 16
            {
                nombre: "Matemática",
                año_academico: 3,
                propuesta_academica: 1,
            },
            // id: 17
            {
                nombre: "Matemática Financiera",
                año_academico: 3,
                propuesta_academica: 1,
            },
            // id: 18
            {
                nombre: "Literatura",
                año_academico: 3,
                propuesta_academica: 1,
            },
            // id: 19
            {
                nombre: "Técnicas Bancarias e Impositivas",
                año_academico: 3,
                propuesta_academica: 1,
            },
            // id: 20
            {
                nombre: "Historia y Geografía",
                año_academico: 3,
                propuesta_academica: 1,
            },
            // id: 21
            {
                nombre: "Inglés",
                año_academico: 3,
                propuesta_academica: 1,
            },
            // id: 22
            {
                nombre: "Química",
                año_academico: 3,
                propuesta_academica: 1,
            },
            // id: 23
            {
                nombre: "Introducción al estudio de la Cultura y la Sociedad",
                año_academico: 3,
                propuesta_academica: 1,
            },
            // id: 24
            {
                nombre: "Economía Política",
                año_academico: 3,
                propuesta_academica: 1,
            },
            // id: 25
            {
                nombre: "Derecho Civil y Comercial",
                año_academico: 3,
                propuesta_academica: 1,
            },
        ]);
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("materias", null, {});
    },
};
