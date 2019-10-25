import React from 'react';
import { Typography, TextField, Paper, Button } from '@material-ui/core';

class HeroForm extends React.Component {

  render(){
    return (
      <Paper style={{padding: 20}}>
        <Typography gutterBottom variant="h5" component="h2">Agrega un Héroe</Typography>
        <form className="hero-form">
          <TextField
            name="name"
            label="Nombre"
            fullWidth
            placeholder="Calcetín con Rombos-man"
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            name="description"
            label="Descripción"
            multiline
            fullWidth
            rows="4"
            placeholder="Calcetín con Rombos-man (shu-ru-ru-ruru) tiene el poder de ser asombroso!"
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            name="thumbnail"
            label="URL Avatar"
            fullWidth
            placeholder="https://via.placeholder.com/150"
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button
            type="submit"
            variant="outlined"
            color="primary"
          >Guardar</Button>
        </form>
      </Paper>
    );
  }
}

export default HeroForm;