import * as React from 'react';
import styles from './TablaDocentes.module.css'
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


export const TablaDocentes = ({ docentes, accion, url }) => {

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="justify">NOMBRE Y APELLIDO</StyledTableCell>
            <StyledTableCell align="justify">D.N.I.</StyledTableCell>
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
              <StyledTableCell align="center"><Link to={url + docente.id} className={styles.iconoEditar}><i className="fa-solid fa-pen-to-square fa-xl"></i></Link></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}