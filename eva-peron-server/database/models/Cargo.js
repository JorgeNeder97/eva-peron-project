module.exports = (sequelize, DataTypes) => {
    let alias = "Cargo";
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
        disponibilidad: {
            type: DataTypes.TINYINT(1).UNSIGNED,
            allowNull: false,
        },
        usuario_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            references: {
                model: {
                    tableName: "usuarios",
                },
                key: "id",
            },
            allowNull: false,
            onDelete: "CASCADE",
        },
    };
    let config = {
        tableName: "cargos",
        timestamps: true,
    };

    const Cargo = sequelize.define(alias, cols, config);

    return Cargo;
};
