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

    Noticia.associate = (models) => {
        Noticia.belongsToMany(models.Imagen, {
            as: 'noticia_imagen',
            through: 'noticias_imagenes',
            foreignKey: 'noticia_id',
            otherKey: 'imagen_id',
        });
    }

    return Noticia;
}