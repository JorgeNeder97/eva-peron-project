module.exports = (sequelize, DataTypes) => {
    let alias = 'Licencia';
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
        usuario_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            references: {
                model: {
                    tableName: 'usuarios'
                },
                key: 'id'
            },
            allowNull: false,
            onDelete: 'CASCADE',
        },
        createdAt: {
            type: DataTypes.DATE,
        },
        updatedAt: {
            type: DataTypes.DATE,
        },
    };
    let config = {
        tableName: 'licencias',
        timestamps: true,
    };

    const Licencia = sequelize.define(alias, cols, config);


    return Licencia;
}