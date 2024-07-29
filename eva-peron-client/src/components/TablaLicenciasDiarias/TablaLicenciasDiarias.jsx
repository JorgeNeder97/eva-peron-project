import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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

export const TablaLicenciasDiarias = ({ licencias }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="justify">DOCENTE</StyledTableCell>
            <StyledTableCell align="justify">ASIGNATURA Y CURSO</StyledTableCell>
            <StyledTableCell align="justify">LICENCIA</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {licencias.length === 0 ?
            <StyledTableRow>
              <StyledTableCell component="th" scope="row" align="justify">No se solicitó ninguna licencia el día de la fecha</StyledTableCell>
              <StyledTableCell align="justify">-</StyledTableCell>
              <StyledTableCell align="justify">-</StyledTableCell>
            </StyledTableRow>
            : licencias.map((licencia) => (
              <StyledTableRow key={licencia.id}>
                <StyledTableCell component="th" scope="row" align="justify">{licencia.licencia_docente.apellido} {licencia.licencia_docente.nombre}</StyledTableCell>
                <StyledTableCell align="justify" whitespace="normal" dangerouslySetInnerHTML={{__html: licencia.licencia_docente.asignatura_docente.map(asignatura => `${asignatura.asignatura} - ${asignatura.asignatura_curso.año_academico} "${asignatura.asignatura_curso.nombre}"`).join('<br />')}} />
                <StyledTableCell align="justify">{licencia.licencia}</StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
