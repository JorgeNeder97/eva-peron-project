module.exports = (sequelize, DataTypes) => {
    let alias = "Materia_Curso";
    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        materia_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            references: {
                model: {
                    tableName: "materias",
                },
                key: "id",
            },
            allowNull: false,
        },
        curso_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            references: {
                model: {
                    tableName: "cursos",
                },
                key: "id",
            },
            allowNull: false,
        },
    };
    let config = {
        tableName: "materias_cursos",
        timestamps: true,
    };

    const Materia_Curso = sequelize.define(alias, cols, config);
    return Materia_Curso;
};
