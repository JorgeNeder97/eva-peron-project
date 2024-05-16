'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('imagenes', [
      {nombre: 'foto-noticia-1.jpg'},
      {nombre: 'foto-noticia-2.jpg'},
      {nombre: 'foto-noticia-3.jpg'},
      {nombre: 'foto-noticia-4.jpg'},
      {nombre: 'foto-noticia-5.jpg'},
      {nombre: 'foto-noticia-6.jpg'},
    ]);
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('imagenes', null, {});
  }
};
