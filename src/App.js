import React from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import TypoGraphy from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import HeroForm from './components/forms/HeroForm';
import HeroList from './components/hero-list/HeroList';
import MARVEL_API_KEY from './secrets';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { heroes: [] };
    fetch('https://gateway.marvel.com:443/v1/public/characters?modifiedSince=20160101&limit=20&apikey=' + MARVEL_API_KEY)
      .then(response => {
        if(!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      }).then(response => {
        let heroes = response.data.results.map((hero, index) => {
          return {
            id: index,
            name: hero.name,
            description: hero.description,
            thumbnail: hero.thumbnail.path + '.' + hero.thumbnail.extension
          }
        });
        this.setState({heroes});
      }).catch(error => {
        console.error('Error', error);
      });
  }

  addHero = (hero) => {
    hero.id = this.state.heroes + 1;
    this.setState({ heroes: [hero, ...this.state.heroes]});
  }

  removeHero = (heroId) => {
    this.setState({heroes: this.state.heroes.filter(hero => hero.id !== heroId)})
  }

  render(){
    return (
      <div>
        <AppBar color="primary" position="static">
          <ToolBar>
            <TypoGraphy variant="h6" color="inherit">Marvel Heroes</TypoGraphy>
          </ToolBar>
        </AppBar>
        <Container className="container" maxWidth="md">
          <HeroForm submitHandler={this.addHero} />
          <HeroList heroes={this.state.heroes} removeHandler={this.removeHero} />
        </Container>
      </div>
    );
  }
}

export default App;
