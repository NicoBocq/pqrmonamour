import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

const locations = [
'Saint-Michel-Chef-Chef',
'Courthézon',
'Valence',
'Angoulême',
'Autun',
'Draguignan',
'Carnoux',
'Saint Germain au Mont d\'Or',
'Valence',
'Issy-les-Moulineaux',
'Marseille',
'Le Pontet'
];

const subjects = [
'il',
'elle',
'le curé',
'le gendarme',
'le dealer',
'le maire',
'le prof',
'l\'employé de la mairie',
'le voyeur',
'l\'automobiliste'
];

const verbes = [
'aimait trop les vieilles dames ',
'volait la paroisse',
'vendait de la drogue aux enfants',
'faisait le tour du rond-point en sens inverse',
'se prenait pour Staline',
'découvre sa femme dans le lit du maire',
'mord les testicules du gendarme ',
'frappe un passant avec une canne à pêche',
'se bat avec un pêcheur breton',
'oublie ses enfants dans le sex shop',
'urinait sur le tapis',
's\'est introduit nu dans la cours de récréation'
];

class App extends Component {

  state = {
     title: 'Générer votre titre #pqrmonamour'
  }

  randomPick = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  }

  // fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(response => response.json())
  //   .then(data => console.log(JSON.stringify(data)))

  handleClick = () => {
    const location = this.randomPick(locations);
    const subject = this.randomPick(subjects);
    const verbe = this.randomPick(verbes);

    this.setState({
         title: location + ' : '+ subject + ' ' + verbe }); //new title
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            {this.state.title}
          </h1>
          <button
            className="App-btn"
            onClick={this.handleClick}
          >

              Générer un nouveau titre
                        </button>
        </header>



        <footer className="App-footer">
         V. 0.001 - <a
          href="https://twitter.com/_nicolasbocquet"
          target="_blank"
          rel="noopener noreferrer"
         >
         @1h12
         </a>
        </footer>
      </div>
    );
  }
}

export default App;
