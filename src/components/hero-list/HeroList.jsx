import React from 'react';
import { 
  Typography, 
  Avatar, 
  Paper, 
  Table, 
  TableHead, 
  TableRow, 
  TableCell, 
  TableBody,
  Button
} from '@material-ui/core';
import './HeroList.css';

class HeroList extends React.Component {

  render() {
    return(
      <Paper className="hero-list">
          {/* <Table>
            <TableHead>
              <TableRow>
                <TableCell>Imagen</TableCell>
                <TableCell>Nombre</TableCell>
                <TableCell>Descripción</TableCell>
                <TableCell>Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow key={1}>
                <TableCell><Avatar alt="Continuum" src="https://continuum.cl/assets/images/medusa-00882081.svg" className="bigAvatar" /></TableCell>
                <TableCell>Continuum</TableCell>
                <TableCell>Visión, Experiencia y cultura</TableCell>
                <TableCell>
                  <Button variant="contained" color="secondary">
                      Eliminar
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table> */}

          <Typography className="empty-hero-list-message" align="center" variant="subtitle1" gutterBottom>
            No hay heroes :(
          </Typography>
      </Paper>
    );
  }
}

export default HeroList;