import React from 'react';
import Sprawdz from './components/Sprawdz/Sprawdz.js';
import Przeslij from './components/Przeslij/Przeslij.js';
import './App.css';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      route: 'start'
    };
  }

  zmienStan = () => {
    this.setState({route: 'sprawdz'});
  };

  zmienStan2 = () => {
    this.setState({route: 'przeslij'});
  };


  render() {
    const {route} = this.state;
    return (
      <div className="App">
        { route === 'start'
          ?  ( <div className="grp1">
            <p className='CV'>CV</p>
               <div className="grp2">
                  <button className='sprawdz' onClick={this.zmienStan}><p className='sprawdz2'>Sprawdź</p></button>
                  <button className='przeslij' onClick={this.zmienStan2}><p className='przeslij2'>Prześlij CV</p></button>
                </div>
             </div> )
             : ( route === 'sprawdz'
            ? <Sprawdz />
            : <Przeslij />
             )
    }
      </div>
    );
  }
}

export default App;
