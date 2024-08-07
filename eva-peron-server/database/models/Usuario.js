module.exports = (sequelize, DataTypes) => {
    let alias = 'Usuario';
    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nombre: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        apellido: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        dni: {
            type: DataTypes.INTEGER(8).UNSIGNED,
            allowNull: false,
            unique: true,
        },
        contraseña: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        fecha_nacimiento: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        telefono: {
            type: DataTypes.INTEGER(15).UNSIGNED,
            allowNull: false,
        },
        sexo_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            references: {
                model: {
                    tableName: 'sexos'
                },
                key: 'id'
            },
            allowNull: false,
            onDelete: 'RESTRICT',
        },
        rol_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            references: {
                model: {
                    tableName: 'roles'
                },
                key: 'id'
            },
            allowNull: false,
            onDelete: 'RESTRICT'
        },
    };
    let config = {
        tableName: 'usuarios',
        timestamps: true,
    };

    const Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = (models) => {
        Usuario.belongsTo(models.Sexo, {
            as: 'sexo_usuario',
            foreignKey: 'sexo_id',
        });

        Usuario.belongsTo(models.Rol, {
            as: 'rol_usuario',
            foreignKey: 'rol_id',
        });

    }

    return Usuario;
}