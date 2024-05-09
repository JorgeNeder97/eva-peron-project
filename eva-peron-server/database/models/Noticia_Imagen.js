module.exports = (sequelize, DataTypes) => {
    let alias = 'Noticia_Imagen';
    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        noticia_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            references: {
                model: {
                    tableName: 'noticias'
                },
                key: 'id'
            },
            allowNull: false,
            onDelete: 'CASCADE'
        },
        imagen_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            references: {
                model: {
                    tableName: 'imagenes'
                },
                key: 'id'
            },
            allowNull: false,
            onDelete: 'CASCADE'
        },
        createdAt: {
            type: DataTypes.DATE,
        },
        updatedAt: {
            type: DataTypes.DATE,
        },
    };
    let config = {
        tableName: 'noticias_imagenes',
        timestamps: true,
    };

    const Noticia_Imagen = sequelize.define(alias, cols, config);



    return Noticia_Imagen;
}