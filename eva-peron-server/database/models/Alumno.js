module.exports = (sequelize, DataTypes) => {
  let alias = 'Alumno'
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
    apellido: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    dni: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      unique: true,
    },
    fecha_nacimiento: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    telefono: {
      type: DataTypes.INTEGER(15).UNSIGNED,
      allowNull: true,
    },
    curso_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      references: {
        model: {
          tableName: 'cursos',
        },
        key: 'id',
      },
      allowNull: false,
      onDelete: 'CASCADE',
    },
    sexo_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      references: {
        model: {
          tableName: 'sexos',
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
    tableName: 'alumnos',
    timestamps: true,
  };

  const Alumno = sequelize.define(alias, cols, config);


  return Alumno;
}