import React from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import TypoGraphy from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import HeroForm from './components/forms/HeroForm';
import HeroList from './components/hero-list/HeroList';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      heroes: [
        {
          id: 1,
          name: 'Iron Man',
          description: 'Iron man is the ironest of them all.',
          thumbnail: 'https://www.sideshow.com/storage/product-images/904599/iron-man-mark-lxxxv__silo.png'
        },
        {
          id: 2,
          name: 'The Incredible Hulk',
          description: 'He\'s really, really green... and angry.',
          thumbnail: 'https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/1563045034034-48VDAZ4XLEHAYMHJIK8E/ke17ZwdGBToddI8pDm48kNvT88LknE-K9M4pGNO0Iqd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1USOFn4xF8vTWDNAUBm5ducQhX-V3oVjSmr829Rco4W2Uo49ZdOtO_QXox0_W7i2zEA/image-asset.jpeg?format=2500w'
        }
      ]
    }
  }

  addHero = (hero) => {
    hero.id = this.state.heroes + 1;
    this.setState({ heroes: [hero, ...this.state.heroes]});
  }

  removeHero = (heroId) => {
    this.setState({heroes: this.state.heroes.filter(hero => hero.id != heroId)})
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
