'use strict';


module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('cargos', [
      {nombre: 'Rector/a'},
      {nombre: 'Secretario/a'},
      {nombre: 'Auxiliar de Secretaría'},
      {nombre: 'Maestro/a de Enseñanza Práctica'},
      {nombre: 'Preceptor/a'},
      {nombre: 'Ayudante Técnico/a'},
      {nombre: 'Catedrático/a'},
      {nombre: 'Maestranza'},
      {nombre: 'Bibliotecario/a'},
      {nombre: 'Asesor/a Pedagógico/a'},
    ]);
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('cargos', null, {});
  }
};
