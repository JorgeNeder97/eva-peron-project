'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('sexos', [
      // id: 1
      {nombre: 'Masculino'},
      // id: 2
      {nombre: 'Femenino'},
      // id: 3
      {nombre: 'Sin información'}
    ]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('sexos', null, {});
  }
};
