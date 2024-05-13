'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('noticias_imagenes', [
      {noticia_id: 1, imagen_id: 1},
      {noticia_id: 2, imagen_id: 2},
      {noticia_id: 3, imagen_id: 3},
    ]);
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('noticias_imagenes', null, {});
  }
};
