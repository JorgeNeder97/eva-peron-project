import * as React from 'react';
import styles from './TablaEliminarCargos.module.css'
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
import { eliminarCargoRequest } from '../../api/cargosCRUD';
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


export const TablaEliminarCargos = ({ cargos, accion }) => {

  const [cargoId, setCargoId] = useState(null);
  const [eliminado, setEliminado] = useState(false);
  const [estadoModal, setEstadoModal] = useState(false);
  const [codigoModal, setCodigoModal] = useState(generarCodigo());
  const [redirigir, setRedirigir] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const inputRef = useRef();
  const { register, handleSubmit, setValue } = useForm();


  const EliminarCargo = async (data) => {
    try {
      eliminarCargoRequest(data);
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
    EliminarCargo(data);
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
  if (redirigir) return <Navigate to="/secretaria/gestionCargos" />;

  return (
    <>
      {eliminado &&
        <ModalEliminadoCorrectamente
          titulo="GESTION CARGOS"
          mostrarHeader={true}
          estado={eliminado}
          cambiarEstado={setEliminado}
        >
          <h2>¡Cargo eliminado con éxito!</h2>
          <button onClick={handleAceptar}>ACEPTAR</button>
        </ModalEliminadoCorrectamente>
      }
      {estadoModal &&
        <ModalEliminar
          titulo="GESTION CARGOS"
          mostrarHeader={true}
          estado={estadoModal}
          cambiarEstado={setEstadoModal}
          inputRef={inputRef}
        >
          <h2><i className="fa-solid fa-triangle-exclamation fa-xl"></i>¡ADVERTENCIA!<i className="fa-solid fa-triangle-exclamation fa-xl"></i></h2>
          <p>Estas a punto de eliminar un Cargo, para continuar ingresa el siguiente código y se habilitará el botón <i>Eliminar Cargo</i></p>
          <span>{codigoModal}</span>
          <input type="text" onChange={onChange} maxLength={6} ref={inputRef} />
          <form onSubmit={onSubmit}>
            <input
              className={styles.inputInvisible}
              type="text"
              {...register("id")}
            />
            <button disabled={isButtonDisabled} type="submit" onClick={(e) => setValue("id", cargoId)}>ELIMINAR CARGO</button>
          </form>
        </ModalEliminar>
      }
      <TableContainer component={Paper} sx={{ minWidth: 300, maxWidth: 700 }}>
        <Table sx={{ minWidth: 300, maxWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="justify">CARGO</StyledTableCell>
              <StyledTableCell align="center">{accion}</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cargos.map((cargo) => (
              <StyledTableRow key={cargo.id}>
                <StyledTableCell component="th" scope="row" align="justify">{cargo.nombre}</StyledTableCell>
                <StyledTableCell align="center">
                  <form onSubmit={onSubmitDos}>
                    <button className={styles.iconoEliminar} type="submit" onClick={(e) => setCargoId(cargo.id)}><i className="fa-solid fa-trash-can fa-xl"></i></button>
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