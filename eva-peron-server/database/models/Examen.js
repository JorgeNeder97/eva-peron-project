module.exports = (sequelize, DataTypes) => {
  let alias = 'Examen';
  let cols = {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nota: {
      type: DataTypes.TINYINT(10).UNSIGNED,
      allowNull: false,
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    libr: {
      type: DataTypes.TINYINT(50).UNSIGNED,
      allowNull: false,
    },
    folio: {
      type: DataTypes.TINYINT(200).UNSIGNED,
      allowNull: false,
    },
    alumno_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      references: {
        model: {
          tableName: 'alumnos'
        },
        key: 'id',
      },
      allowNull: false,
      onDelete: 'CASCADE',
    },
    materia_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      references: {
        model: {
          tableName: 'materias',
        },
        key: 'id',
      },
      allowNull: false,
      onDelete: 'CASCADE',
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
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  };
  let config = {
    tableName: 'examenes',
    timestamps: true,
  };

  const Examen = sequelize.define(alias, cols, config);



  return Examen;
}