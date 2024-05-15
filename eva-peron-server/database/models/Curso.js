module.exports = (sequelize, DataTypes) => {
    let alias = "Curso";
    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nombre: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        año_academico: {
            type: DataTypes.TINYINT(3).UNSIGNED,
            allowNull: false,
        },
        // propuesta_academica 0 = PCTBI, propuesta_academica 1 = FORMACION PROFESIONAL
        propuesta_academica: {
            type: DataTypes.TINYINT(1).UNSIGNED,
            allowNull: false,
        },
        año: {
            type: DataTypes.INTEGER(4).UNSIGNED,
            allowNull: false,
        },
    };
    let config = {
        tableName: "cursos",
        timestamps: true,
    };

    const Curso = sequelize.define(alias, cols, config);
    
    Curso.associate = (models) => {
        Curso.belongsToMany(models.Materia, {
            as: "materia_curso",
            through: "materias_cursos",
            foreignKey: "curso_id",
            otherKey: "materia_id",
            timestamps: false,
        });

        Curso.hasMany(models.Alumno, {
            as: 'curso_alumno',
            foreignKey: 'curso_id'
        });

        Curso.hasMany(models.Examen, {
            as: 'examen_curso',
            foreignKey: 'curso_id',
        });
    };

    return Curso;
};
