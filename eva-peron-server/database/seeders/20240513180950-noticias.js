'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('noticias', [
      {
        titulo: 'Feliz Cumpleaños Escuela de Especialidades Nocturna N⁰4 María Eva Duarte de Perón',
        adelanto: 'Hoy nuestra escuela está cumpliendo 75 Años, acompañando al crecimiento y desarrollo de nuestra provincia, brindando educación en sus distintas modalidades.',
        cuerpo: `Hoy nuestra escuela está cumpliendo 75 Años, acompañando al crecimiento y desarrollo de nuestra provincia, brindando educación en sus distintas modalidades.
        "1949 - 2024"...En estos 75 Años de su creación institucional queremos expresar nuestro cordial saludo a toda la comunidad educativa y celebrar juntos nuestro nuevo aniversario.
        La institución cuenta con una oferta educativa cuyo fin es brindar una sólida formación académica de calidad, de modo que los estudiantes puedan acceder a estudios superiores y que los habilite también para su desempeño social y laboral.
        ¡¡Feliz Aniversario!! ¡Por muchos años más!`
      },
      {
        titulo: 'INSCRIPCIONES 2024',
        adelanto: 'La Escuela de Especialidades Nocturna N⁰ 4 "María Eva Duarte de Perón" informa que continúan abiertas las "INSCRIPCIONES 2024" para el Nivel Secundario y los Talleres de Formación Profesional.',
        cuerpo: `La Escuela de Especialidades Nocturna N⁰ 4 "María Eva Duarte de Perón" informa que continúan abiertas las "INSCRIPCIONES 2024" para el Nivel Secundario y los Talleres de Formación Profesional.
        ◾REQUISITOS INGRESANTES A 1⁰ AÑO:
        - Fotocopia del DNI.
        - Copia del Acta de Nacimiento.
        - Carpeta tres solapas.
        - Certificado 7⁰ Grado.
        - Ficha de inscripción.
        - Copia del Código de Convivencia.
        - Ficha médica.
        - Edad: 16 Años cumplidos.
        ◾REQUISITOS 2⁰ Y 3⁰ AÑO:
        - Libreta.
        - Ficha Médica.
        - Ficha de inscripción.
        - Código de Convivencia.
        ◾TALLERES DE FORMACIÓN PROFESIONAL:
        ✔️ AUXILIAR DE GASTRONOMÍA
        ✔️ PANADERO / PASTELERO
        ✔️ MODELISTA / PATRONISTA 
        ✔️ OPERADOR DE MÁQUINA 
        Se matrícula de Lunes a Viernes en el horario de 19:30 a 22:00 hs.
        ◾Se reciben contribuciones voluntarias para la cooperadora escolar.`
      },
      {
        titulo: 'Día del Escudo Nacional Argentino',
        adelanto: 'Hoy, 12 de marzo, se conmemora el "Día del Escudo Nacional Argentino" aprobado por la Asamblea General Constituyente en 1813.',
        cuerpo: `Hoy, 12 de marzo, se conmemora el "Día del Escudo Nacional Argentino" aprobado por la Asamblea General Constituyente en 1813.
        El Escudo posee una forma oval, dividida en dos “cuarteles”:
        El superior azul representa la Justicia, la Verdad, la Lealtad y la Fraternidad.
        El inferior blanco, símbolo de Pureza, Fe, Hidalguía, Integridad, Firmeza y Obediencia.
        En el cuartel inferior, dos brazos entrelazan sus manos, representando la unión fraternal de los hombres y los pueblos; sostienen una pica, símbolo de la Autoridad, el Mando, la Dignidad y la Soberanía, en cuyo extremo se ubica un gorro frigio que representa la Libertad, la Igualdad y el Sacrificio.
        A ambos lados del Escudo, se encuentran dos guías de laurel, como símbolo de Victoria y de Gloria, unidos por debajo con un lazo de cinta con los colores nacionales. En la parte superior, un sol naciente, en oro, que representa la Verdad, la Majestad y la Prosperidad. La elipse en el eje principal se divide entre celeste (azul claro) y plata o argén (blanco) y, por lo tanto, se mantiene en los colores nacionales.
        El escudo de la República Argentina es —junto con la Bandera de Argentina, el Himno Nacional Argentino y la Escarapela de Argentina — uno de los cuatro símbolos nacionales de la República Argentina. 
        Fue aceptado oficialmente el 12 de marzo de 1813 por la Asamblea General Constituyente de ese año. Aun así, se conservan documentos emitidos por la Asamblea que testimonian que antes de conocerse el decreto que aprobara su diseño ya se empleaba el actual escudo, habiéndose utilizado con anterioridad a este el escudo de armas del Virreinato del Río de la Plata.`
      },
    ]);
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('noticias', null, {});
  }
};
