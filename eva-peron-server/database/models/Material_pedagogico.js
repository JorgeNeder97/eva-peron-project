module.exports = (sequelize, DataTypes) => {
    let alias = 'Material_pedagogico';
    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        archivo_solicitado: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        archivo_entregado: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        usuario_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            references: {
                model: {
                    tableName: 'usuarios',
                },
                key: 'id',
            },
            allowNull: false,
            onDelete: 'CASCADE',
        },
    };
    let config = {
        tableName: 'material_pedagogico',
        timestamps: true,
    };

    const Material_pedagogico = sequelize.define(alias, cols, config);



    return Material_pedagogico;
}