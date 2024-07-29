"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("noticias", [
            {
                titulo: "Feliz Cumpleaños Escuela de Especialidades Nocturna N⁰4 María Eva Duarte de Perón",
                adelanto: "Hoy nuestra escuela está cumpliendo 75 Años, acompañando al crecimiento y desarrollo de nuestra provincia, brindando educación en sus distintas modalidades.",
                cuerpo: `Hoy nuestra escuela está cumpliendo 75 Años, acompañando al crecimiento y desarrollo de nuestra provincia, brindando educación en sus distintas modalidades.
                "1949 - 2024"...En estos 75 Años de su creación institucional queremos expresar nuestro cordial saludo a toda la comunidad educativa y celebrar juntos nuestro nuevo aniversario.
                La institución cuenta con una oferta educativa cuyo fin es brindar una sólida formación académica de calidad, de modo que los estudiantes puedan acceder a estudios superiores y que los habilite también para su desempeño social y laboral.
                ¡¡Feliz Aniversario!! ¡Por muchos años más!`,
            },
            {
                titulo: "INSCRIPCIONES 2024",
                adelanto:
                    'La Escuela de Especialidades Nocturna N⁰ 4 "María Eva Duarte de Perón" informa que continúan abiertas las "INSCRIPCIONES 2024" para el Nivel Secundario y los Talleres de Formación Profesional.',
                cuerpo: `La Escuela de Especialidades Nocturna N⁰ 4 "María Eva Duarte de Perón" informa que continúan abiertas las "INSCRIPCIONES 2024" para el Nivel Secundario y los Talleres de Formación Profesional. \n
                ◾REQUISITOS INGRESANTES A 1⁰ AÑO: \n
                - Fotocopia del DNI. \n
                - Copia del Acta de Nacimiento. \n
                - Carpeta tres solapas.\n
                - Certificado 7⁰ Grado.\n
                - Ficha de inscripción.\n
                - Copia del Código de Convivencia.\n
                - Ficha médica.\n
                - Edad: 16 Años cumplidos.\n
                ◾REQUISITOS 2⁰ Y 3⁰ AÑO:\n
                - Libreta.\n
                - Ficha Médica.\n
                - Ficha de inscripción.\n
                - Código de Convivencia.\n
                ◾TALLERES DE FORMACIÓN PROFESIONAL:\n
                ✔️ AUXILIAR DE GASTRONOMÍA\n
                ✔️ PANADERO / PASTELERO\n
                ✔️ MODELISTA / PATRONISTA\n 
                ✔️ OPERADOR DE MÁQUINA \n
                Se matrícula de Lunes a Viernes en el horario de 19:30 a 22:00 hs.\n
                ◾Se reciben contribuciones voluntarias para la cooperadora escolar.`,
            },
            {
                titulo: "Día del Escudo Nacional Argentino",
                adelanto: 'Hoy, 12 de marzo, se conmemora el "Día del Escudo Nacional Argentino" aprobado por la Asamblea General Constituyente en 1813.',
                cuerpo: `Hoy, 12 de marzo, se conmemora el "Día del Escudo Nacional Argentino" aprobado por la Asamblea General Constituyente en 1813.
                El Escudo posee una forma oval, dividida en dos “cuarteles”:
                El superior azul representa la Justicia, la Verdad, la Lealtad y la Fraternidad.
                El inferior blanco, símbolo de Pureza, Fe, Hidalguía, Integridad, Firmeza y Obediencia.
                En el cuartel inferior, dos brazos entrelazan sus manos, representando la unión fraternal de los hombres y los pueblos; sostienen una pica, símbolo de la Autoridad, el Mando, la Dignidad y la Soberanía, en cuyo extremo se ubica un gorro frigio que representa la Libertad, la Igualdad y el Sacrificio.
                A ambos lados del Escudo, se encuentran dos guías de laurel, como símbolo de Victoria y de Gloria, unidos por debajo con un lazo de cinta con los colores nacionales. En la parte superior, un sol naciente, en oro, que representa la Verdad, la Majestad y la Prosperidad. La elipse en el eje principal se divide entre celeste (azul claro) y plata o argén (blanco) y, por lo tanto, se mantiene en los colores nacionales.
                El escudo de la República Argentina es —junto con la Bandera de Argentina, el Himno Nacional Argentino y la Escarapela de Argentina — uno de los cuatro símbolos nacionales de la República Argentina. 
                Fue aceptado oficialmente el 12 de marzo de 1813 por la Asamblea General Constituyente de ese año. Aun así, se conservan documentos emitidos por la Asamblea que testimonian que antes de conocerse el decreto que aprobara su diseño ya se empleaba el actual escudo, habiéndose utilizado con anterioridad a este el escudo de armas del Virreinato del Río de la Plata.`,
            },
            {
                titulo: "Nuestros alumnos correrán en la Maratón de El Liberal",
                adelanto: "El Liberal publicó una nota sobre la preparación de nuestros alumnos para la Maratón aniversario del mismo.",
                cuerpo: `Nota del diario El Liberal sobre la preparación de nuestros alumnos para la Maratón aniversario del diario El Liberal.👏🏼👏🏼👏🏼
                <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.elliberal.com.ar%2Fnota%2F6146%2F2023%2F10%2Falumnos-correran-por-el-maraton-de-el-liberal-y-por-una-vida-saludable%3Ffbclid%3DIwZXh0bgNhZW0CMTAAAR3yTw7oJpy9RaBnJg-tSaHpI66EjDBtN7yo7BgrUGBG3MuRdYR0vyp2uto_aem_Ab25EiR7AtlIa2qNE5jKmkYVDlE42FxwBzeRbKJBZA4DxA_lC-Q0N7kBWg2hjda1mL7dAJrLplIJ4InbD9tOcsq7&h=AT1OwE7qPl10nKWtC0x1uf9Qla9O2eGh1y_zCjLcQjt44paetcOjFwd---6fTMRt2E0bokRVKnu8GKUVveq7Ise7GhsJeu_wU5NVytpfKWscBT9A7vgRuINDx4dHTKV31CiD2VrxZHW_uZbNmSwZ&__tn__=-UK-R&c[0]=AT2E9aG7fZjIfjjIG7are2jOnvHfXerHr15wDTWdZrHJJHqenj2X4_3Hbuz-iuw_CQlEEyRiDY4F1FL9wlJndyMLAXzLH1mxnzThMmjzT-9t2GdrKUBeZv3V88JIj_TFMq--Wgfvmsacb0AF7u-IGdr2HlcqStor39moBX1Hm0Q1zF8EhhPy1iyRUntRHMASqWocvipnGPFh9Nlan0xCJUhmIOKBq9rYkIca">Haz click aquí para ver la nota</a>`,
            },
            {
                titulo: "Nuestra cooperadora escolar participó del encuentro regional de fortalecimiento de las cooperadoras escolares",
                adelanto: "El encuentro se llevó a cabo en la provincia de Salta. Al mismo asistieron la Rectora de la institución Lic. Gabriela González y la Presidenta de la cooperadora Prof. Marta Barrientos",
                cuerpo: `Nuestra cooperadora escolar participó del encuentro regional de fortalecimiento de las cooperadoras escolares, que se llevó a cabo en la provincia de Salta. Al mismo asistieron la Rectora de la institución Lic. Gabriela González y la Presidenta de la cooperadora Prof. Marta Barrientos, representando a la provincia por ser uno de los proyectos ganadores seleccionados entre trescientos proyectos que fueron presentados del NOA.
                Con la premisa de conmemorar los 40 años de democracia, representantes de asociaciones cooperadoras, docentes y directivos de escuelas de Catamarca, Jujuy, La Rioja, Salta y Santiago del Estero se nuclearon en el Mercado Artesanal para participar de la jornada Cooperar 2023.
                Con el objetivo de analizar y reflexionar acerca de distintos proyectos escolares destinados a visibilizar y potenciar los espacios de democratización y participación, se concretó en el Mercado Artesanal de la ciudad de Salta el Encuentro Regional de Cooperadoras Escolares 2023, que en esta edición conmemoraron los 40 años de democracia. La iniciativa fue presidida por la secretaria de Planeamiento Educativo, Analía Guardó; la referente del Programa Nacional Cooperar, Laura Sartirana y la representante local de Cooperar, Alfonsina Morales.
                En este marco se presentaron cinco proyectos que fueron destacados a nivel nacional y cuyos creadores fueron padres de alumnos de escuelas salteñas que se encuentran asociados a distintas cooperadas escolares. Se trata de los proyectos sobre: un mural de sensibilización contra las adicciones del colegio secundario N° 5150 Las Palmas de Cerrillos; un mural sobre derechos de los niños de la escuela Camino del Inca es N° 885 de Vaqueros; una revista de democracia de la escuela Ejército Argentino, un audiovisual sobre la no determinación de origen de la escuela N° 4035 Gauffin y una gacetilla sobre inclusión cultural y diversidad del Instituto de Educación Superior N° 6056 de Nazareno.
                El Programa de Fortalecimiento a las Cooperadoras Escolares, Cooperar, busca que estos espacios se revitalicen en todos los niveles educativos de la República Argentina, potenciando el papel que juegan en el proceso de democratización y participación ciudadana. A estos fines y bajo distintas premisas, se organizan encuentros nacionales y regionales para que las cooperadoras presenten proyectos que tengan por finalidad mejorar o dar respuesta a los desafíos que con los que se enfrentan las escuelas en las que trabajan.`,
            },
            {
                titulo: "Nuestros alumnos del taller de cocineros llevaron a cabo una presentación de comidas árabes típicas",
                adelanto:
                    "En la institución se llevó a cabo la muestra, presentación y degustación de comidas típicas árabes por parte de los alumnos y docentes del taller de cocineros en el marco de sus prácticas profesionalizantes",
                cuerpo: "",
            },
        ]);
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("noticias", null, {});
    },
};
