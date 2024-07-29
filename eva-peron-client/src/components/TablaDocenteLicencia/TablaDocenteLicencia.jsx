import * as React from 'react';
import styles from './TablaDocenteLicencia.module.css'
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


export const TablaDocenteLicencia = ({ docentes, url }) => {

  return (
    <TableContainer component={Paper} sx={{minWidth: 300}}>
      <Table sx={{ minWidth: 300}} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="justify">DOCENTE</StyledTableCell>
            <StyledTableCell align="justify">CARGO</StyledTableCell>
            <StyledTableCell align="center">VER</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {docentes.map((docente) => (
            <StyledTableRow key={docente.id}>
              <StyledTableCell component="th" scope="row" align="justify">{docente.apellido} {docente.nombre}</StyledTableCell>
              <StyledTableCell align="justify">{docente.docente_cargo.nombre}</StyledTableCell>
              <StyledTableCell align="center"><Link to={url + docente.id} className={styles.iconoEditar}><i className="fa-solid fa-magnifying-glass fa-xl"></i></Link></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}