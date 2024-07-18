import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { listarDocentesRequest } from '../../api/docentesCRUD';


export const ExportarExcel = () => {


  const [docentes, setDocentes] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const listarDocentes = async () => {
      const res = await listarDocentesRequest();
      setDocentes(res.data.data);
      setLoading(false);
  }

  listarDocentes();
  }, []);
  const handleExport = () => {
    // Datos de ejemplo
    const data = docentes.map(docente => {
      return {
        nombre: docente.nombre,
        apellid: docente.apellido,
        cuil: docente.cuil,
        cargo: docente.docente_cargo.nombre,
        sit_revista: docente.situacion_revista,
        altaExpte: docente.alta_expte,
        fecha_prom_inc_doce: docente.fecha_prom_inc_doce,
        fecha_inc_cargo_actual: docente.fecha_inc_cargo_actual,
      }
    });
    
    // [
    //   { name: 'John Doe', age: 30, email: 'john@example.com', CUPOF: '58805-DFE-SDEAR-1837D' },
    //   { name: 'Jane Smith', age: 25, email: 'jane@example.com' },
    //   { name: 'Sam Green', age: 35, email: 'sam@example.com' }
    // ];

    // Convertir los datos a un worksheet
    const worksheet = XLSX.utils.json_to_sheet(data);
    // Crear un nuevo workbook y añadir el worksheet
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

    // Generar el archivo Excel y guardarlo
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(blob, 'Planta Funcional Eva Perón.xlsx');
  };

  return (
    <div>
      <button onClick={handleExport}>Exportar a Excel</button>
    </div>
  );
};

