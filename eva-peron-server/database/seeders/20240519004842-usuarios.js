"use strict";

// Roles: 
//  1.admin
//  2.seccion alumnos
//  3.secretaria/o
//  4.asesor pedagogico
//  5.alumno


module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("usuarios", [
            {
                nombre: "Jorge Lian",
                apellido: "Neder Allub",
                dni: 40169051,
                // Jorge97
                contraseña: "$2a$11$3pnhAaheypYLifEBm6cIIOyT06njFyTCYsQH.zzmJjyL8VLsCls0W",
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
                // 12345678
                contraseña: '$2a$11$Miqs4nbqvhJ7qu.MRHwNAuoOr1myFpb55/oLI.9N/qdWQNdxP1f7S',
                sexo_id: 3,
                rol_id: 2,
            },
            {
                nombre: "Secretaria",
                apellido: "Uno",
                dni: 40169052,
                // 12345678
                contraseña: '$2a$11$Miqs4nbqvhJ7qu.MRHwNAuoOr1myFpb55/oLI.9N/qdWQNdxP1f7S',
                sexo_id: 2,
                rol_id: 3,
            },
            {
                nombre: "Asesor Pedagógico",
                apellido: "Uno",
                dni: 13248765,
                // 12345678
                contraseña: '$2a$11$Miqs4nbqvhJ7qu.MRHwNAuoOr1myFpb55/oLI.9N/qdWQNdxP1f7S',
                sexo_id: 1,
                rol_id: 4,
            },
            {
                nombre: "Alumno",
                apellido: "Uno",
                dni: 75648321,
                // 12345678
                contraseña: '$2a$11$Miqs4nbqvhJ7qu.MRHwNAuoOr1myFpb55/oLI.9N/qdWQNdxP1f7S',
                sexo_id: 3,
                rol_id: 5,
            },
            
            
        ]);
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("usuarios", null, {});
    },
};
