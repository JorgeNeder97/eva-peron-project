module.exports = (sequelize, DataTypes) => {
    let alias = "Cupof";
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
        situacion_revista: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        
        // un docente tiene muchos cupof y un cupof pertenece a un solo docente
        docente_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            references: {
                model: {
                    tableName: "docentes",
                },
                key: "id",
            },
            allowNull: false,
            onDelete: "NULL",
        },
    };
    let config = {
        tableName: "cupofs",
        timestamps: true,
    };

    const Cupof = sequelize.define(alias, cols, config);

    // Hacer relaciones con docente
    Cupof.associate = (models) => {

        Cupof.belongsTo(models.Docente, {
            as: 'cupof_docente',
            foreignKey: 'docente_id',
        });
        
    }

    return Cupof;
};
