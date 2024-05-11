'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('sexos', [
      {nombre: 'Masculino'},
      {nombre: 'Femenino'}
    ]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('sexos', null, {});
  }
};
