import * as React from 'react';
import styles from './TablaLicencias.module.css'
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


export const TablaLicencias = ({ licencias }) => {

  const formatearFecha = (fecha) => {
    const fechaFormateada = new Date(fecha);

    const dia = fechaFormateada.getUTCDate(); // Día del mes (1-31)
    const mes = fechaFormateada.getUTCMonth() + 1; // Mes (0-11, por lo que sumamos 1)
    const año = fechaFormateada.getUTCFullYear();
    const fechaCompleta = `${dia.toString().length == 2 ? dia : '0' + dia}/${mes.toString().length == 2 ? mes : '0' + mes}/${año}`;

    return fechaCompleta;
}

  return (
    <TableContainer component={Paper} sx={{minWidth: 300}}>
      <Table sx={{minWidth: 300}} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="justify">LICENCIA</StyledTableCell>
            <StyledTableCell align="justify">FECHA</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {licencias.length === 0 ?
            <StyledTableRow>
              <StyledTableCell component="th" scope="row" align="justify">No solicitó ninguna licencia aún</StyledTableCell>
              <StyledTableCell align="justify">-</StyledTableCell>
            </StyledTableRow>
            : licencias.map((licencia) => (
              <StyledTableRow key={licencia.id}>
                <StyledTableCell component="th" scope="row" align="justify">{licencia.licencia}</StyledTableCell>
                <StyledTableCell align="justify">{formatearFecha(licencia.fecha)}</StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}