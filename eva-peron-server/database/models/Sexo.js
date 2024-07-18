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

    Sexo.associate = (models) => {
        Sexo.hasMany(models.Usuario, {
            as: 'sexo_usuario',
            foreignKey: 'sexo_id',
        });

        Sexo.hasMany(models.Docente, {
            as: 'sexo_docente',
            foreignKey: 'sexo_id',
        });
        
        Sexo.hasMany(models.Alumno, {
            as: 'sexo_alumno',
            foreignKey: 'sexo_id',
        });
    }

    return Sexo;
}