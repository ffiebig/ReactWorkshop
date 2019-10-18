import React from 'react';
import { Typography, TextField, Paper, Button } from '@material-ui/core';

class HeroForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { id: '', name: '', description: '', thumbnail: '' };
    this.submitHandler = this.props.submitHandler; 
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    let hero = this.state;
    if (!hero.name || !hero.description || !hero.thumbnail) return;

    this.submitHandler(this.state);
    this.setState({ id: '', name: '', description: '', thumbnail: ''});
  }

  render(){
    return (
      <Paper style={{padding: 20}}>
        <Typography gutterBottom variant="h5" component="h2">Agrega un Héroe</Typography>
        <form className="hero-form" onSubmit={this.handleSubmit}>
          <TextField
            name="name"
            label="Nombre"
            value={this.state.name}
            fullWidth
            placeholder="Calcetín con Rombos-man"
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={this.handleChange}
          />
          <TextField
            name="description"
            label="Descripción"
            value={this.state.description}
            multiline
            fullWidth
            rows="4"
            placeholder="Calcetín con Rombos-man (shu-ru-ru-ruru) tiene el poder de ser asombroso!"
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={this.handleChange}
          />
          <TextField
            name="thumbnail"
            label="URL Avatar"
            value={this.state.thumbnail}
            fullWidth
            placeholder="https://via.placeholder.com/150"
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={this.handleChange}
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