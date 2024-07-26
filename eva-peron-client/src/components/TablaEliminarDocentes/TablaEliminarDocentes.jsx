import * as React from 'react';
import styles from './TablaEliminarDocentes.module.css'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { eliminarDocenteRequest } from '../../api/docentesCRUD';
import { ModalEliminadoCorrectamente } from '../ModalEliminadoCorrectamente/ModalEliminadoCorrectamente';
import { ModalEliminar } from '../ModalEliminar/ModalEliminar';
import { useForm } from 'react-hook-form';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


export const TablaEliminarDocentes = ({ docentes, accion }) => {

  const [docenteId, setDocenteId] = useState(null);
  const [eliminado, setEliminado] = useState(false);
  const [estadoModal, setEstadoModal] = useState(false);
  const [codigoModal, setCodigoModal] = useState(generarCodigo());
  const [redirigir, setRedirigir] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const inputRef = useRef();
  const { register, handleSubmit, setValue } = useForm();


  const EliminarDocente = async (data) => {
    try {
      eliminarDocenteRequest(data);
      setEstadoModal(false);
      setEliminado(true);
    } catch (error) {
      console.log(error);
    }
  }

  const onSubmitDos = (e) => {
    setEstadoModal(true);
    e.preventDefault();
  }

  const onSubmit = handleSubmit((data) => {
    EliminarDocente(data);
  });

  // Nos permite redirigir al apretar en "Aceptar"
  const handleAceptar = (e) => {
    setRedirigir(true);
  }

  // Definimos asi la funcion para poder utilizarla en cualquier parte del codigo
  function generarCodigo() {
    // Generar un número aleatorio entre 0 y 999999
    let codigo = Math.floor(Math.random() * 1000000);

    // Asegurarse de que el número tenga 6 dígitos, rellenando con ceros a la izquierda si es necesario
    let codigoString = codigo.toString().padStart(6, '0');

    return codigoString;
  }

  // Funcion que verifica que los codigos coincidan
  const onChange = (e) => {
    let codigoIngresado = e.target.value;
    if (codigoIngresado === codigoModal) {
      setIsButtonDisabled(false);
    }
    else {
      setIsButtonDisabled(true);
    }
  }

  // Setea un codigo distinto cada vez que se monta el modal
  useEffect(() => {
    setCodigoModal(generarCodigo());
  }, [estadoModal]);

  // Permite redirigir al tocar "Aceptar" en el modal
  if (redirigir) return <Navigate to="/secretaria/gestionDocentes" />;

  return (
    <>
      {eliminado &&
        <ModalEliminadoCorrectamente
          titulo="GESTION DOCENTES"
          mostrarHeader={true}
          estado={eliminado}
          cambiarEstado={setEliminado}
        >
          <h2>¡Docente dado de baja con éxito!</h2>
          <button onClick={handleAceptar}>ACEPTAR</button>
        </ModalEliminadoCorrectamente>
      }
      {estadoModal &&
        <ModalEliminar
          titulo="GESTION DOCENTES"
          mostrarHeader={true}
          estado={estadoModal}
          cambiarEstado={setEstadoModal}
          inputRef={inputRef}
        >
          <h2><i className="fa-solid fa-triangle-exclamation fa-xl"></i>¡ADVERTENCIA!<i className="fa-solid fa-triangle-exclamation fa-xl"></i></h2>
          <p>Estas a punto de dar de baja a un <strong>Docente</strong>, para continuar ingresa el siguiente código y se habilitará el botón <i>Dar de Baja</i></p>
          <span>{codigoModal}</span>
          <input type="text" onChange={onChange} maxLength={6} ref={inputRef} />
          <form onSubmit={onSubmit}>
            <input
              className={styles.inputInvisible}
              type="text"
              {...register("id")}
            />
            <button disabled={isButtonDisabled} type="submit" onClick={(e) => setValue("id", docenteId)}>DAR DE BAJA</button>
          </form>
        </ModalEliminar>
      }
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="justify">NOMBRE Y APELLIDO</StyledTableCell>
              <StyledTableCell align="justify">D.N.I</StyledTableCell>
              <StyledTableCell align="justify">EMAIL</StyledTableCell>
              <StyledTableCell align="justify">CARGO</StyledTableCell>
              <StyledTableCell align="center">{accion}</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {docentes.map((docente) => (
              <StyledTableRow key={docente.id}>
                <StyledTableCell component="th" scope="row" align="justify">{docente.nombre} {docente.apellido}</StyledTableCell>
                <StyledTableCell align="justify">{docente.dni}</StyledTableCell>
                <StyledTableCell align="justify">{docente.email}</StyledTableCell>
                <StyledTableCell align="justify">{docente.docente_cargo.nombre}</StyledTableCell>
                <StyledTableCell align="center">
                  <form onSubmit={onSubmitDos}>
                    <button className={styles.iconoEliminar} type="submit" onClick={(e) => setDocenteId(docente.id)}><i className="fa-solid fa-trash-can fa-xl"></i></button>
                  </form>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}