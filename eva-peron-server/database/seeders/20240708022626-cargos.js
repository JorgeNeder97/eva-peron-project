'use strict';


module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('cargos', [
      // id: 1
      {nombre: 'Rector/a'},

      // id: 2
      {nombre: 'Secretario/a'},

      // id: 3
      {nombre: 'Auxiliar de Secretaría'},

      // id: 4
      {nombre: 'Maestro/a de Enseñanza Práctica'},

      // id: 5
      {nombre: 'Preceptor/a'},

      // id: 6
      {nombre: 'Ayudante Técnico/a'},

      // id: 7
      {nombre: 'Catedrático/a'},

      // id: 8
      {nombre: 'Maestranza'},

      // id: 9
      {nombre: 'Bibliotecario/a'},
      
      // id: 10
      {nombre: 'Asesor/a Pedagógico/a'},
    ]);
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('cargos', null, {});
  }
};
