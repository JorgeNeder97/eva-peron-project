module.exports = (sequelize, DataTypes) => {
  let alias = 'Asignacion';
  let cols = {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
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
    cargo_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      references: {
        model: {
          tableName: 'cargos',
        },
        key: 'id',
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
    tableName: 'asignaciones',
    timestamps: true,
  };

  const Asignacion = sequelize.define(alias, cols, config);



  return Asignacion;
}