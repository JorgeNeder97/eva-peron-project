'use strict';


module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('roles', [
      {nombre: 'admin'},
      {nombre: 'secretaria/o'},
      {nombre: 'personal docente'},
      {nombre: 'asesor pedagógico'},
      {nombre: 'alumno'},
      {nombre: 'docente'}
    ]);
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('roles', null, {});
  }
};
