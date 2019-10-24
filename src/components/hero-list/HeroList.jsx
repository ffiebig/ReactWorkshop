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

const HeroList = props => {
    return(
      <Paper className="hero-list">
        {props.heroes.length > 0 ? (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Imagen</TableCell>
                <TableCell>Nombre</TableCell>
                <TableCell>Descripción</TableCell>
                <TableCell>Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                props.heroes.map(hero => (
                  <TableRow key={hero.id}>
                    <TableCell><Avatar alt={hero.name} src={hero.thumbnail} className="bigAvatar" /></TableCell>
                    <TableCell>{hero.name}</TableCell>
                    <TableCell>{hero.description}</TableCell>
                    <TableCell>
                      <Button variant="contained" color="secondary"
                        onClick={() => props.removeHandler(hero.id)}>
                            Eliminar
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        ) : (
          <Typography className="empty-hero-list-message" align="center" variant="subtitle1" gutterBottom>
            No hay heroes :(
          </Typography>
        )}
      </Paper>
    );
}
export default HeroList;
