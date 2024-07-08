module.exports = (sequelize, DataTypes) => {
    let alias = "Licencia";
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
        fecha: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        archivo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
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
        tableName: "licencias",
        timestamps: true,
    };

    const Licencia = sequelize.define(alias, cols, config);

    Licencia.associate = (models) => {
        Licencia.belongsTo(models.Docente, {
            as: "licencia_docente",
            foreignKey: "docente_id",
        });
    };

    return Licencia;
};
