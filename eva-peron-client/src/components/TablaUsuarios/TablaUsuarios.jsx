import * as React from 'react';
import styles from './TablaUsuarios.module.css'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

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


export const TablaUsuarios = ({ usuarios, accion, url }) => {

  return (
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
            <StyledTableCell align="center">{accion}</StyledTableCell>
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
              <StyledTableCell align="center"><Link to={url + usuario.id} className={styles.iconoEditar}><i className="fa-solid fa-user-pen fa-xl"></i></Link></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}