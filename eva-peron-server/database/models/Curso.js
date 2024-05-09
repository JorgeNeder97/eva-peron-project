module.exports = (sequelize, DataTypes) => {
  let alias = 'Curso';
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
    año_academico: {
      type: DataTypes.TINYINT(3).UNSIGNED,
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
    tableName: 'cursos',
    timestamps: true,
  }

  const Curso = sequelize.define(alias, cols, config);


  return Curso;
}