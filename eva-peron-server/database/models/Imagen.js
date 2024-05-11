module.exports = (sequelize, DataTypes) => {
    let alias = 'Imagen';
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
        createdAt: {
            type: DataTypes.DATE,
        },
        updatedAt: {
            type: DataTypes.DATE,
        },
    };
    let config = {
        tableName: 'imagenes',
        timestamps: true,
    };

    const Imagen = sequelize.define(alias, cols, config);

    Imagen.associate = (models) => {
        Imagen.belongsToMany(models.Noticia, {
            as: 'noticia_imagen',
            through: 'noticias_imagenes',
            foreignKey: 'imagen_id',
            otherKey: 'noticia_id',
        });
    }

    return Imagen;
}