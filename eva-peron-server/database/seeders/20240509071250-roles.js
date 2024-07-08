'use strict';


module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('roles', [
      // id: 1
      {nombre: 'admin'},
      // id: 2
      {nombre: 'seccion alumnos'},
      // id: 3
      {nombre: 'secretaria/o'},
      // id: 4
      {nombre: 'asesor pedagógico'},
      // id: 5
      {nombre: 'alumno'},
    ]);
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('roles', null, {});
  }
};
