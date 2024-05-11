module.exports = (sequelize, DataTypes) => {
    let alias = 'Rol';
    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nombre: {
            type: DataTypes.STRING(50),
            alowNull: false,
        },
    };
    let config = {
        tableName: 'roles',
        timestamps: false,
    };

    const Rol = sequelize.define(alias, cols, config);
    
    Rol.associate = (models) => {
        Rol.hasMany(models.Usuario, {
            as: 'rol_usuario',
            foreignKey: 'rol_id',
        });
    }

    return Rol;
}