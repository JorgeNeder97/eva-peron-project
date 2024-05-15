module.exports = (sequelize, DataTypes) => {
    let alias = 'Nota';
    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nota: {
            type: DataTypes.TINYINT(10).UNSIGNED,
            allowNull: false,
        },
        alumno_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            references: {
                model: {
                    tableName: 'alumnos',
                },
                key: 'id',
            },
            allowNull: false,
            onDelete: 'CASCADE',
        },
        materia_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            references: {
                model: {
                    tableName: 'materias',
                },
                key: 'id',
            },
            allowNull: false,
            onDelete: 'CASCADE',
        },
    };
    let config = {
        tableName: 'notas',
        timestamps: true,
    };

    const Nota = sequelize.define(alias, cols, config);

    Nota.associate = (models) => {
        Nota.belongsTo(models.Alumno, {
            as: 'nota_alumno',
            foreignKey: 'alumno_id'
        });

        Nota.belongsTo(models.Materia, {
            as: 'nota_materia',
            foreignKey: 'materia_id',
        });
    } 

    return Nota;
}