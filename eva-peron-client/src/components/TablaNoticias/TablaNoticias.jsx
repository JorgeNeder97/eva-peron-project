import * as React from 'react';
import styles from './TablaNoticias.module.css'
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


export const TablaNoticias = ({ noticias, accion, url }) => {

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Título</StyledTableCell>
            <StyledTableCell align="center">Adelanto</StyledTableCell>
            <StyledTableCell align="center">{accion}</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {noticias.map((noticia) => (
            <StyledTableRow key={noticia.id}>
              <StyledTableCell component="th" scope="row" align="justify">{noticia.titulo}</StyledTableCell>
              <StyledTableCell align="justify">{noticia.adelanto}</StyledTableCell>
              <StyledTableCell align="center"><Link to={url + noticia.id} className={styles.iconoEditar}><i className="fa-solid fa-pen-to-square fa-xl"></i></Link></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}