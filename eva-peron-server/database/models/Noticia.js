module.exports = (sequelize, DataTypes) => {
    let alias = 'Noticia';
    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        titulo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        adelanto: {
            type: DataTypes.TEXT('tiny'),
            allowNull: true,
        },
        cuerpo: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        fecha_creacion: {
            type: DataTypes.DATEONLY,
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
        tableName: 'noticias',
        timestamps: true,
    };

    const Noticia = sequelize.define(alias, cols, config);



    return Noticia;
}