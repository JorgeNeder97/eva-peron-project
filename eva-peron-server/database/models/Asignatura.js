module.exports = (sequelize, DataTypes) => {
    let alias = "Asignatura";
    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        asignatura: {
            type: DataTypes.STRING(150),
            allowNull: false,
        },
        // un curso tiene muchas asignaturas y una asignatura pertenece a un solo curso
        curso_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            references: {
                model: {
                    tableName: "cursos",
                },
                key: "id",
            },
            allowNull: false,
            onDelete: "NULL",
        },
        division: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        horas: {
            type: DataTypes.INTEGER(2).UNSIGNED,
            allowNull: false,
        },
        // un docente tiene muchas asignaturas y una asignatura pertenece a un solo docente
        docente_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            references: {
                model: {
                    tableName: "docentes",
                },
                key: "id",
            },
            allowNull: false,
            onDelete: "NULL",
        },
    };
    let config = {
        tableName: "asignaturas",
        timestamps: true,
    };

    const Asignatura = sequelize.define(alias, cols, config);

    Asignatura.associate = (models) => {
        Asignatura.belongsTo(models.Docente, {
            as: 'asignatura_docente',
            foreignKey: 'docente_id',
        });

        Asignatura.belongsTo(models.Curso, {
            as: 'asignatura_curso',
            foreignKey: 'curso_id',
        });
    }

    return Asignatura;
};
