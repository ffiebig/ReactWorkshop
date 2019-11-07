import React, {useState, useEffect} from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import TypoGraphy from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import HeroForm from './components/forms/HeroForm';
import HeroList from './components/hero-list/HeroList';
import MARVEL_API_KEY from './secrets';

const App = () => {

  const [heroes, setHeroes] = useState([]);

  useEffect(
    ()=> {
      fetch('https://gateway.marvel.com:443/v1/public/characters?modifiedSince=20160101&limit=20&apikey=' + MARVEL_API_KEY)
      .then( response => {
        if(!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(response => {
        let heroes = response.data.results.map((hero, index) => {
          return {
            id: index,
            name: hero.name,
            description: hero.description,
            thumbnail: hero.thumbnail.path + '.' + hero.thumbnail.extension
          }
        });
        setHeroes(heroes);
      }).catch(error => {
        console.error('Error', error);
      });
    }, []);

  const addHero = (hero) => {
    hero.id = heroes.length + 1;
    setHeroes([hero, ...heroes]);
  }

  const removeHero = (heroId) => {
    setHeroes(heroes.filter(hero => hero.id != heroId));
  }

  return (
    <div>
      <AppBar color="primary" position="static">
        <ToolBar>
          <TypoGraphy variant="h6" color="inherit">Marvel Heroes</TypoGraphy>
        </ToolBar>
      </AppBar>
      <Container className="container" maxWidth="md">
        <HeroForm submitHandler={addHero} />
        <HeroList heroes={heroes} removeHandler={removeHero} />
      </Container>
    </div>
  );
}
export default App;
