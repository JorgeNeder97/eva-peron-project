"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("cursos", [
            // id: 1
            { nombre: "A", año_academico: 1, propuesta_academica: 0 , año: 2013},
            // id: 2
            { nombre: "B", año_academico: 1, propuesta_academica: 0 , año: 2013},
            // id: 3
            { nombre: "C", año_academico: 1, propuesta_academica: 0 , año: 2013},
            // id: 4
            { nombre: "D", año_academico: 1, propuesta_academica: 0 , año: 2013},
            // id: 5
            { nombre: "E", año_academico: 1, propuesta_academica: 0 , año: 2013},
            // id: 6
            { nombre: "F", año_academico: 1, propuesta_academica: 0 , año: 2013},
            // id: 7
            { nombre: "A", año_academico: 2, propuesta_academica: 0 , año: 2013},
            // id: 8
            { nombre: "B", año_academico: 2, propuesta_academica: 0 , año: 2013},
            // id: 9
            { nombre: "C", año_academico: 2, propuesta_academica: 0 , año: 2013},
            // id: 10
            { nombre: "D", año_academico: 2, propuesta_academica: 0 , año: 2013},
            // id: 11
            { nombre: "A", año_academico: 3, propuesta_academica: 0 , año: 2013},
            // id: 12
            { nombre: "B", año_academico: 3, propuesta_academica: 0 , año: 2013},
            // id: 13
            { nombre: "C", año_academico: 3, propuesta_academica: 0 , año: 2013},
            // id: 14
            { nombre: "D", año_academico: 3, propuesta_academica: 0 , año: 2013},
            // id: 15
            { nombre: "A", año_academico: 1, propuesta_academica: 0 , año: 2014},
            // id: 16
            { nombre: "B", año_academico: 1, propuesta_academica: 0 , año: 2014},
            // id: 17
            { nombre: "C", año_academico: 1, propuesta_academica: 0 , año: 2014},
            // id: 18
            { nombre: "D", año_academico: 1, propuesta_academica: 0 , año: 2014},
            // id: 19
            { nombre: "E", año_academico: 1, propuesta_academica: 0 , año: 2014},
            // id: 20
            { nombre: "F", año_academico: 1, propuesta_academica: 0 , año: 2014},
            // id: 21
            { nombre: "A", año_academico: 2, propuesta_academica: 0 , año: 2014},
            // id: 22
            { nombre: "B", año_academico: 2, propuesta_academica: 0 , año: 2014},
            // id: 23
            { nombre: "C", año_academico: 2, propuesta_academica: 0 , año: 2014},
            // id: 24
            { nombre: "D", año_academico: 2, propuesta_academica: 0 , año: 2014},
            // id: 25
            { nombre: "A", año_academico: 3, propuesta_academica: 0 , año: 2014},
            // id: 26
            { nombre: "B", año_academico: 3, propuesta_academica: 0 , año: 2014},
            // id: 27
            { nombre: "C", año_academico: 3, propuesta_academica: 0 , año: 2014},
            // id: 28
            { nombre: "D", año_academico: 3, propuesta_academica: 0 , año: 2014},
            // id: 29
            { nombre: "A", año_academico: 1, propuesta_academica: 0 , año: 2015},
            // id: 30
            { nombre: "B", año_academico: 1, propuesta_academica: 0 , año: 2015},
            // id: 31
            { nombre: "C", año_academico: 1, propuesta_academica: 0 , año: 2015},
            // id: 32
            { nombre: "D", año_academico: 1, propuesta_academica: 0 , año: 2015},
            // id: 33
            { nombre: "E", año_academico: 1, propuesta_academica: 0 , año: 2015},
            // id: 34
            { nombre: "F", año_academico: 1, propuesta_academica: 0 , año: 2015},
            // id: 35
            { nombre: "A", año_academico: 2, propuesta_academica: 0 , año: 2015},
            // id: 36
            { nombre: "B", año_academico: 2, propuesta_academica: 0 , año: 2015},
            // id: 37
            { nombre: "C", año_academico: 2, propuesta_academica: 0 , año: 2015},
            // id: 38
            { nombre: "D", año_academico: 2, propuesta_academica: 0 , año: 2015},
            // id: 39
            { nombre: "A", año_academico: 3, propuesta_academica: 0 , año: 2015},
            // id: 40
            { nombre: "B", año_academico: 3, propuesta_academica: 0 , año: 2015},
            // id: 41
            { nombre: "C", año_academico: 3, propuesta_academica: 0 , año: 2015},
            // id: 42
            { nombre: "D", año_academico: 3, propuesta_academica: 0 , año: 2015},
            // id: 43
            { nombre: "A", año_academico: 1, propuesta_academica: 0 , año: 2016},
            // id: 44
            { nombre: "B", año_academico: 1, propuesta_academica: 0 , año: 2016},
            // id: 45
            { nombre: "C", año_academico: 1, propuesta_academica: 0 , año: 2016},
            // id: 46
            { nombre: "D", año_academico: 1, propuesta_academica: 0 , año: 2016},
            // id: 47
            { nombre: "E", año_academico: 1, propuesta_academica: 0 , año: 2016},
            // id: 48
            { nombre: "F", año_academico: 1, propuesta_academica: 0 , año: 2016},
            // id: 49
            { nombre: "A", año_academico: 2, propuesta_academica: 0 , año: 2016},
            // id: 50
            { nombre: "B", año_academico: 2, propuesta_academica: 0 , año: 2016},
            // id: 51
            { nombre: "C", año_academico: 2, propuesta_academica: 0 , año: 2016},
            // id: 52
            { nombre: "D", año_academico: 2, propuesta_academica: 0 , año: 2016},
            // id: 53
            { nombre: "A", año_academico: 3, propuesta_academica: 0 , año: 2016},
            // id: 54
            { nombre: "B", año_academico: 3, propuesta_academica: 0 , año: 2016},
            // id: 55
            { nombre: "C", año_academico: 3, propuesta_academica: 0 , año: 2016},
            // id: 56
            { nombre: "D", año_academico: 3, propuesta_academica: 0 , año: 2016},
            // id: 57
            { nombre: "A", año_academico: 1, propuesta_academica: 0 , año: 2017},
            // id: 58
            { nombre: "B", año_academico: 1, propuesta_academica: 0 , año: 2017},
            // id: 59
            { nombre: "C", año_academico: 1, propuesta_academica: 0 , año: 2017},
            // id: 60
            { nombre: "D", año_academico: 1, propuesta_academica: 0 , año: 2017},
            // id: 61
            { nombre: "E", año_academico: 1, propuesta_academica: 0 , año: 2017},
            // id: 62
            { nombre: "F", año_academico: 1, propuesta_academica: 0 , año: 2017},
            // id: 63
            { nombre: "A", año_academico: 2, propuesta_academica: 0 , año: 2017},
            // id: 64
            { nombre: "B", año_academico: 2, propuesta_academica: 0 , año: 2017},
            // id: 65
            { nombre: "C", año_academico: 2, propuesta_academica: 0 , año: 2017},
            // id: 66
            { nombre: "D", año_academico: 2, propuesta_academica: 0 , año: 2017},
            // id: 67
            { nombre: "A", año_academico: 3, propuesta_academica: 0 , año: 2017},
            // id: 68
            { nombre: "B", año_academico: 3, propuesta_academica: 0 , año: 2017},
            // id: 69
            { nombre: "C", año_academico: 3, propuesta_academica: 0 , año: 2017},
            // id: 70
            { nombre: "D", año_academico: 3, propuesta_academica: 0 , año: 2017},
            // id: 71
            { nombre: "A", año_academico: 1, propuesta_academica: 0 , año: 2018},
            // id: 72
            { nombre: "B", año_academico: 1, propuesta_academica: 0 , año: 2018},
            // id: 73
            { nombre: "C", año_academico: 1, propuesta_academica: 0 , año: 2018},
            // id: 74
            { nombre: "D", año_academico: 1, propuesta_academica: 0 , año: 2018},
            // id: 75
            { nombre: "E", año_academico: 1, propuesta_academica: 0 , año: 2018},
            // id: 76
            { nombre: "F", año_academico: 1, propuesta_academica: 0 , año: 2018},
            // id: 77
            { nombre: "A", año_academico: 2, propuesta_academica: 0 , año: 2018},
            // id: 78
            { nombre: "B", año_academico: 2, propuesta_academica: 0 , año: 2018},
            // id: 79
            { nombre: "C", año_academico: 2, propuesta_academica: 0 , año: 2018},
            // id: 80
            { nombre: "D", año_academico: 2, propuesta_academica: 0 , año: 2018},
            // id: 81
            { nombre: "A", año_academico: 3, propuesta_academica: 0 , año: 2018},
            // id: 82
            { nombre: "B", año_academico: 3, propuesta_academica: 0 , año: 2018},
            // id: 83
            { nombre: "C", año_academico: 3, propuesta_academica: 0 , año: 2018},
            // id: 84
            { nombre: "D", año_academico: 3, propuesta_academica: 0 , año: 2018},
            // id: 85
            { nombre: "A", año_academico: 1, propuesta_academica: 0 , año: 2019},
            // id: 86
            { nombre: "B", año_academico: 1, propuesta_academica: 0 , año: 2019},
            // id: 87
            { nombre: "C", año_academico: 1, propuesta_academica: 0 , año: 2019},
            // id: 88
            { nombre: "D", año_academico: 1, propuesta_academica: 0 , año: 2019},
            // id: 89
            { nombre: "E", año_academico: 1, propuesta_academica: 0 , año: 2019},
            // id: 90
            { nombre: "F", año_academico: 1, propuesta_academica: 0 , año: 2019},
            // id: 91
            { nombre: "A", año_academico: 2, propuesta_academica: 0 , año: 2019},
            // id: 92
            { nombre: "B", año_academico: 2, propuesta_academica: 0 , año: 2019},
            // id: 93
            { nombre: "C", año_academico: 2, propuesta_academica: 0 , año: 2019},
            // id: 94
            { nombre: "D", año_academico: 2, propuesta_academica: 0 , año: 2019},
            // id: 95
            { nombre: "A", año_academico: 3, propuesta_academica: 0 , año: 2019},
            // id: 96
            { nombre: "B", año_academico: 3, propuesta_academica: 0 , año: 2019},
            // id: 97
            { nombre: "C", año_academico: 3, propuesta_academica: 0 , año: 2019},
            // id: 98
            { nombre: "D", año_academico: 3, propuesta_academica: 0 , año: 2019},
            // id: 99
            { nombre: "A", año_academico: 1, propuesta_academica: 0 , año: 2020},
            // id: 100
            { nombre: "B", año_academico: 1, propuesta_academica: 0 , año: 2020},
            // id: 101
            { nombre: "C", año_academico: 1, propuesta_academica: 0 , año: 2020},
            // id: 102
            { nombre: "D", año_academico: 1, propuesta_academica: 0 , año: 2020},
            // id: 103
            { nombre: "E", año_academico: 1, propuesta_academica: 0 , año: 2020},
            // id: 104
            { nombre: "F", año_academico: 1, propuesta_academica: 0 , año: 2020},
            // id: 105
            { nombre: "A", año_academico: 2, propuesta_academica: 0 , año: 2020},
            // id: 106
            { nombre: "B", año_academico: 2, propuesta_academica: 0 , año: 2020},
            // id: 107
            { nombre: "C", año_academico: 2, propuesta_academica: 0 , año: 2020},
            // id: 108
            { nombre: "D", año_academico: 2, propuesta_academica: 0 , año: 2020},
            // id: 109
            { nombre: "A", año_academico: 3, propuesta_academica: 0 , año: 2020},
            // id: 110
            { nombre: "B", año_academico: 3, propuesta_academica: 0 , año: 2020},
            // id: 111
            { nombre: "C", año_academico: 3, propuesta_academica: 0 , año: 2020},
            // id: 112
            { nombre: "D", año_academico: 3, propuesta_academica: 0 , año: 2020},
            // id: 113
            { nombre: "A", año_academico: 1, propuesta_academica: 0 , año: 2021},
            // id: 114
            { nombre: "B", año_academico: 1, propuesta_academica: 0 , año: 2021},
            // id: 115
            { nombre: "C", año_academico: 1, propuesta_academica: 0 , año: 2021},
            // id: 116
            { nombre: "D", año_academico: 1, propuesta_academica: 0 , año: 2021},
            // id: 117
            { nombre: "E", año_academico: 1, propuesta_academica: 0 , año: 2021},
            // id: 118
            { nombre: "F", año_academico: 1, propuesta_academica: 0 , año: 2021},
            // id: 119
            { nombre: "A", año_academico: 2, propuesta_academica: 0 , año: 2021},
            // id: 120
            { nombre: "B", año_academico: 2, propuesta_academica: 0 , año: 2021},
            // id: 121
            { nombre: "C", año_academico: 2, propuesta_academica: 0 , año: 2021},
            // id: 122
            { nombre: "D", año_academico: 2, propuesta_academica: 0 , año: 2021},
            // id: 123
            { nombre: "A", año_academico: 3, propuesta_academica: 0 , año: 2021},
            // id: 124
            { nombre: "B", año_academico: 3, propuesta_academica: 0 , año: 2021},
            // id: 125
            { nombre: "C", año_academico: 3, propuesta_academica: 0 , año: 2021},
            // id: 126
            { nombre: "D", año_academico: 3, propuesta_academica: 0 , año: 2021},
            // id: 127
            { nombre: "A", año_academico: 1, propuesta_academica: 0 , año: 2022},
            // id: 128
            { nombre: "B", año_academico: 1, propuesta_academica: 0 , año: 2022},
            // id: 129
            { nombre: "C", año_academico: 1, propuesta_academica: 0 , año: 2022},
            // id: 130
            { nombre: "D", año_academico: 1, propuesta_academica: 0 , año: 2022},
            // id: 131
            { nombre: "E", año_academico: 1, propuesta_academica: 0 , año: 2022},
            // id: 132
            { nombre: "F", año_academico: 1, propuesta_academica: 0 , año: 2022},
            // id: 133
            { nombre: "A", año_academico: 2, propuesta_academica: 0 , año: 2022},
            // id: 134
            { nombre: "B", año_academico: 2, propuesta_academica: 0 , año: 2022},
            // id: 135
            { nombre: "C", año_academico: 2, propuesta_academica: 0 , año: 2022},
            // id: 136
            { nombre: "D", año_academico: 2, propuesta_academica: 0 , año: 2022},
            // id: 137
            { nombre: "A", año_academico: 3, propuesta_academica: 0 , año: 2022},
            // id: 138
            { nombre: "B", año_academico: 3, propuesta_academica: 0 , año: 2022},
            // id: 139
            { nombre: "C", año_academico: 3, propuesta_academica: 0 , año: 2022},
            // id: 140
            { nombre: "D", año_academico: 3, propuesta_academica: 0 , año: 2022},
            // id: 141
            { nombre: "A", año_academico: 1, propuesta_academica: 0 , año: 2023},
            // id: 142
            { nombre: "B", año_academico: 1, propuesta_academica: 0 , año: 2023},
            // id: 143
            { nombre: "C", año_academico: 1, propuesta_academica: 0 , año: 2023},
            // id: 144
            { nombre: "D", año_academico: 1, propuesta_academica: 0 , año: 2023},
            // id: 145
            { nombre: "E", año_academico: 1, propuesta_academica: 0 , año: 2023},
            // id: 146
            { nombre: "F", año_academico: 1, propuesta_academica: 0 , año: 2023},
            // id: 147
            { nombre: "A", año_academico: 2, propuesta_academica: 0 , año: 2023},
            // id: 148
            { nombre: "B", año_academico: 2, propuesta_academica: 0 , año: 2023},
            // id: 149
            { nombre: "C", año_academico: 2, propuesta_academica: 0 , año: 2023},
            // id: 150
            { nombre: "D", año_academico: 2, propuesta_academica: 0 , año: 2023},
            // id: 151
            { nombre: "A", año_academico: 3, propuesta_academica: 0 , año: 2023},
            // id: 152
            { nombre: "B", año_academico: 3, propuesta_academica: 0 , año: 2023},
            // id: 153
            { nombre: "C", año_academico: 3, propuesta_academica: 0 , año: 2023},
            // id: 154
            { nombre: "D", año_academico: 3, propuesta_academica: 0 , año: 2023},
            // id: 155
            { nombre: "A", año_academico: 1, propuesta_academica: 0 , año: 2024},
            // id: 156
            { nombre: "B", año_academico: 1, propuesta_academica: 0 , año: 2024},
            // id: 157
            { nombre: "C", año_academico: 1, propuesta_academica: 0 , año: 2024},
            // id: 158
            { nombre: "D", año_academico: 1, propuesta_academica: 0 , año: 2024},
            // id: 159
            { nombre: "E", año_academico: 1, propuesta_academica: 0 , año: 2024},
            // id: 160
            { nombre: "F", año_academico: 1, propuesta_academica: 0 , año: 2024},
            // id: 161
            { nombre: "A", año_academico: 2, propuesta_academica: 0 , año: 2024},
            // id: 162
            { nombre: "B", año_academico: 2, propuesta_academica: 0 , año: 2024},
            // id: 163
            { nombre: "C", año_academico: 2, propuesta_academica: 0 , año: 2024},
            // id: 164
            { nombre: "D", año_academico: 2, propuesta_academica: 0 , año: 2024},
            // id: 165
            { nombre: "A", año_academico: 3, propuesta_academica: 0 , año: 2024},
            // id: 166
            { nombre: "B", año_academico: 3, propuesta_academica: 0 , año: 2024},
            // id: 167
            { nombre: "C", año_academico: 3, propuesta_academica: 0 , año: 2024},
            // id: 168
            { nombre: "D", año_academico: 3, propuesta_academica: 0 , año: 2024},
        ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("cursos", null, {});
    },
};
