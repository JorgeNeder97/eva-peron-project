module.exports = (sequelize, DataTypes) => {
    let alias = "Docente";
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
        apellido: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        cuil: {
            type: DataTypes.INTEGER(11).UNSIGNED,
            allowNull: false,
            unique: true,
        },
        dni: {
            type: DataTypes.INTEGER(8).UNSIGNED,
            allowNull: false,
            unique: true,
        },
        contraseña: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        edad: {
            type: DataTypes.INTEGER(2).UNSIGNED,
            allowNull: false,
        },
        domicilio: {
            type: DataTypes.STRING(150),
            allowNull: false,
        },
        titulo: {
            type: DataTypes.STRING(150),
            allowNull: false,
        },
        fecha_prom_inc_doce: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        // un docente tiene pertenece a un solo cargo y un cargo tiene muchos docentes
        cargo_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            references: {
                model: {
                    tableName: "cargos",
                },
                key: "id",
            },
            allowNull: false,
            onDelete: "NULL",
        },
        situacion_revista: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        fecha_inc_cargo_actual: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        alta_expte: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
        fecha_baja: {
            type: DataTypes.DATEONLY,
            allowNull: true,
        },
        cese_causa: {
            type: DataTypes.STRING(200),
            allowNull: true,
        },
        expediente_baja: {
            type: DataTypes.STRING(200),
            allowNull: true,
        },
        resolucion_baja: {
            type: DataTypes.STRING(200),
            allowNull: true,
        },
        observaciones: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
    };
    let config = {
        tableName: "docentes",
        timestamps: true,
    };

    const Docente = sequelize.define(alias, cols, config);

    Docente.associate = (models) => {
        Docente.hasMany(models.Licencia, {
            as: 'licencia_docente',
            foreignKey: 'docente_id',
        });

        Docente.belongsTo(models.Cargo, {
            as: 'docente_cargo',
            foreignKey: 'cargo_id',
        });

        Docente.hasMany(models.Asignatura, {
            as: 'asignatura_docente',
            foreignKey: 'docente_id',
        });

        Docente.hasMany(models.Cupof, {
            as: 'cupof_docente',
            foreignKey: 'docente_id',
        });
    }

    return Docente;
};
