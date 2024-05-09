module.exports = (sequelize, DataTypes) => {
    let alias = 'Sexo';
    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    };
    let config = {
        tableName: 'sexos',
        timestamps: false,
    };

    const Sexo = sequelize.define(alias, cols, config);



    return Sexo;
}