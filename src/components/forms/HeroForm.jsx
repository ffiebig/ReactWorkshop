import React, { useState } from 'react';
import { Typography, TextField, Paper, Button } from '@material-ui/core';

const HeroForm = props => {

  const initialHeroState = { id: '', name: '', description: '', thumbnail: '' };
  const [hero, setHero] = useState(initialHeroState);

  const handleChange = event => {
    const { name, value } = event.target;
    setHero({ ...hero, [name]: value });
  }

  const handleSubmit = event => {
    event.preventDefault();
    if (!hero.name || !hero.description || !hero.thumbnail) return;

    props.submitHandler(hero);
    setHero(initialHeroState);
  }

  return (
    <Paper style={{padding: 20}}>
      <Typography gutterBottom variant="h5" component="h2">Agrega un Héroe</Typography>
      <form className="hero-form" onSubmit={handleSubmit}>
        <TextField
          name="name"
          label="Nombre"
          value={hero.name}
          fullWidth
          placeholder="Calcetín con Rombos-man"
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleChange}
        />
        <TextField
          name="description"
          label="Descripción"
          value={hero.description}
          multiline
          fullWidth
          rows="4"
          placeholder="Calcetín con Rombos-man (shu-ru-ru-ruru) tiene el poder de ser asombroso!"
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleChange}
        />
        <TextField
          name="thumbnail"
          label="URL Avatar"
          value={hero.thumbnail}
          fullWidth
          placeholder="https://via.placeholder.com/150"
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleChange}
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

export default HeroForm;