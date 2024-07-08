import * as React from 'react';
import styles from './TablaCargos.module.css'
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


export const TablaCargos = ({ cargos }) => {

  return (
    <TableContainer component={Paper} sx={{minWidth: 300, maxWidth: 700}}>
      <Table sx={{ minWidth: 300, maxWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="justify">CARGO</StyledTableCell>
            <StyledTableCell align="center">OCUPANTES</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cargos.map((cargo) => (
            <StyledTableRow key={cargo.nombre}>
              <StyledTableCell component="th" scope="row" align="justify">{cargo.nombre}</StyledTableCell>
              {/* <StyledTableCell align="justify">{cargo.cantidad}</StyledTableCell> */}
              <StyledTableCell align="center">{cargo.cantidadDocentes}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}