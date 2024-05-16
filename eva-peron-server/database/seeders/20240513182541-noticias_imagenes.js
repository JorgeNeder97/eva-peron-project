'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('noticias_imagenes', [
      {noticia_id: 1, imagen_id: 1},
      {noticia_id: 2, imagen_id: 2},
      {noticia_id: 3, imagen_id: 3},
      {noticia_id: 4, imagen_id: 4},
      {noticia_id: 5, imagen_id: 5},
      {noticia_id: 6, imagen_id: 6},
    ]);
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('noticias_imagenes', null, {});
  }
};
