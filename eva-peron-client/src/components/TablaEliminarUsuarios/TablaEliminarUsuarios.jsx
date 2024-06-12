import * as React from 'react';
import styles from './TablaEliminarUsuarios.module.css'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useForm } from 'react-hook-form';
import { deleteRequest } from '../../api/usersCRUD';
import { useState } from 'react';
import { ModalEliminar } from '../ModalEliminar/ModalEliminar';
import { useEffect, useRef } from 'react';
import { Navigate } from 'react-router-dom';
import { ModalEliminadoCorrectamente } from '../ModalEliminadoCorrectamente/ModalEliminadoCorrectamente';


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


export const TablaEliminarUsuarios = ({ usuarios }) => {

  const [usuarioId, setUsuarioId] = useState(null);
  const [eliminado, setEliminado] = useState(false);
  const [estadoModal, setEstadoModal] = useState(false);
  const [codigoModal, setCodigoModal] = useState(generarCodigo());
  const [redirigir, setRedirigir] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const inputRef = useRef();
  const { register, handleSubmit, setValue } = useForm();


  const EliminarUsuarios = async (data) => {
    try {
      deleteRequest(data);
      setEstadoModal(false);
      setEliminado(true);
    } catch (error) {
      console.log(error);
    }
  }

  const onSubmitDos = (e) => {
    setEstadoModal(true);
    console.log(usuarioId);
    e.preventDefault();
  }

  const onSubmit = handleSubmit((data) => {
    EliminarUsuarios(data);
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
      console.log('es correcto');
    }
    else {
      setIsButtonDisabled(true);
      console.log('no es correcto');
    }
  }

  // Setea un codigo distinto cada vez que se monta el modal
  useEffect(() => {
    setCodigoModal(generarCodigo());
  }, [estadoModal]);

  // Permite redirigir al tocar "Aceptar" en el modal
  if (redirigir) return <Navigate to="/rectoria/gestionUsuarios" />;

  return (
    <>
      {eliminado &&
        <ModalEliminadoCorrectamente
          titulo="GESTION USUARIOS"
          mostrarHeader={true}
          estado={eliminado}
          cambiarEstado={setEliminado}
        >
          <h2>¡Usuario eliminado con éxito!</h2>
          <button onClick={handleAceptar}>ACEPTAR</button>
        </ModalEliminadoCorrectamente>
      }
      {estadoModal &&
        <ModalEliminar
          titulo="GESTION USUARIOS"
          mostrarHeader={true}
          estado={estadoModal}
          cambiarEstado={setEstadoModal}
          inputRef={inputRef}
        >
          <h2><i className="fa-solid fa-triangle-exclamation fa-xl"></i>¡ADVERTENCIA!<i className="fa-solid fa-triangle-exclamation fa-xl"></i></h2>
          <p>Estas a punto de eliminar un usuario, para continuar ingresa el siguiente código y se habilitará el botón <i>Eliminar usuario</i></p>
          <span>{codigoModal}</span>
          <input type="text" onChange={onChange} maxLength={6} ref={inputRef} />
          <form onSubmit={onSubmit}>
            <input
              className={styles.inputInvisible}
              type="text"
              {...register("id")}
            />
            <button disabled={isButtonDisabled} type="submit" onClick={(e) => setValue("id", usuarioId)}>ELIMINAR USUARIO</button>
          </form>
        </ModalEliminar>
      }
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Nombre y Apellido</StyledTableCell>
              <StyledTableCell align="center">D.N.I.</StyledTableCell>
              <StyledTableCell align="center">Fecha de Nacimiento</StyledTableCell>
              <StyledTableCell align="center">Correo</StyledTableCell>
              <StyledTableCell align="center">Teléfono</StyledTableCell>
              <StyledTableCell align="center">Sexo</StyledTableCell>
              <StyledTableCell align="center">ELIMINAR</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {usuarios.map((usuario) => (
              <StyledTableRow key={usuario.id}>
                <StyledTableCell component="th" scope="row">{usuario.nombre} {usuario.apellido}</StyledTableCell>
                <StyledTableCell align="center">{usuario.dni}</StyledTableCell>
                <StyledTableCell align="center">{usuario.fecha_nacimiento}</StyledTableCell>
                <StyledTableCell align="center">{usuario.email}</StyledTableCell>
                <StyledTableCell align="center">{usuario.telefono}</StyledTableCell>
                <StyledTableCell align="center">{usuario.sexo_id == 1 ? 'Masculino' : usuario.sexo_id == 2 ? 'Femenino' : 'Sin información'}</StyledTableCell>
                <StyledTableCell align="center">
                  <form onSubmit={onSubmitDos}>
                    <button className={styles.iconoEliminar} type="submit" onClick={(e) => setUsuarioId(usuario.id)}><i className="fa-solid fa-user-xmark fa-xl"></i></button>
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