"use strict";

// Roles: 1.admin - 2.seccion alumnos - 3.secretaria/o - 4.personal docente - 5.asesor pedagogico - 6.alumno - 7.docente

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("usuarios", [
            {
                nombre: "Jorge Lian",
                apellido: "Neder Allub",
                dni: 40169051,
                contraseña: "Jorge97",
                fecha_nacimiento: "1997-01-20",
                email: "Jorge.neder97@gmail.com",
                telefono: 3854187064,
                sexo_id: 1,
                rol_id: 1,
            },
            {
                nombre: "Seccion alumnos",
                apellido: "Uno",
                dni: 23145768,
                contraseña: '12345',
                sexo_id: 3,
                rol_id: 2,
            },
            {
                nombre: "Secretaria",
                apellido: "Uno",
                dni: 32165478,
                contraseña: "12345",
                sexo_id: 2,
                rol_id: 3,
            },
            {
                nombre: "Personal docente",
                apellido: "Uno",
                dni: 13248765,
                contraseña: "12345",
                sexo_id: 1,
                rol_id: 4,
            },
            {
                nombre: "Asesor Pedagógico",
                apellido: "Uno",
                dni: 75648321,
                contraseña: "12345",
                sexo_id: 3,
                rol_id: 5,
            },
            {
                nombre: 'Alumno',
                apellido: 'Uno',
                dni: 45361278,
                contraseña: '12345',
                sexo_id: 2,
                rol_id: 6,
            },
            {
                nombre: 'Docente',
                apellido: 'Uno',
                dni: 32541678,
                contraseña: '12345',
                sexo_id: 1,
                rol_id: 7,
            },
        ]);
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("usuarios", null, {});
    },
};
