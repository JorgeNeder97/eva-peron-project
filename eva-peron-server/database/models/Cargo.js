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
    };
    let config = {
        tableName: "cargos",
        timestamps: true,
    };

    const Cargo = sequelize.define(alias, cols, config);

    // Hacer relaciones con docente
    Cargo.associate = (models) => {
        Cargo.hasMany(models.Docente, {
            as: 'docente_cargo',
            foreignKey: 'cargo_id',
        });
    }

    return Cargo;
};
