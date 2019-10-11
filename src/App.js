import React from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import TypoGraphy from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import HeroForm from './components/forms/HeroForm';

function App() {
  return (
    <div>
      <AppBar color="primary" position="static">
        <ToolBar>
          <TypoGraphy variant="h6" color="inherit">Marvel Heroes</TypoGraphy>
        </ToolBar>
      </AppBar>
      <Container className="container" maxWidth="md">
        <HeroForm />
      </Container>
    </div>
  );
}

export default App;
