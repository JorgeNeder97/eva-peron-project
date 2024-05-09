module.exports = (sequelize, DataTypes) => {
    let alias = 'Materia';
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
        resolucion: {
            type: DataTypes.TINYINT(1).UNSIGNED,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
        },
        updatedAt: {
            type: DataTypes.DATE,
        },
    };
    let config = {
        tableName: 'materias',
        timestamps: true,
    };

    const Materia = sequelize.define(alias, cols, config);



    return Materia;
}