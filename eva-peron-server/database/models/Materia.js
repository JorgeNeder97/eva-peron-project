module.exports = (sequelize, DataTypes) => {
    let alias = "Materia";
    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nombre: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        año_academico: {
            type: DataTypes.TINYINT(3).UNSIGNED,
            allowNull: false,
        },
        propuesta_academica: {
            type: DataTypes.TINYINT(1).UNSIGNED,
            allowNull: false,
        },
    };
    let config = {
        tableName: "materias",
        timestamps: true,
    };

    const Materia = sequelize.define(alias, cols, config);
    Materia.associate = (models) => {
        Materia.belongsToMany(models.Curso, {
            as: "materia_curso",
            through: "materias_cursos",
            foreignKey: "materia_id",
            otherKey: "curso_id",
            timestamps: false,
        });

        Materia.hasMany(models.Nota, {
            as: 'nota_materia',
            foreignKey: 'materia_id',
        });

        Materia.hasMany(models.Examen, {
            as: 'examen_materia',
            foreignKey: 'materia_id',
        });
    };

    return Materia;
};
