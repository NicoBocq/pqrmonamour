import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

const words = ["Nancy : il mord les testicules du contrôleur dans le train",
"Perpignan : cachée dans un caveau, elle découvre que la pilleuse de tombes est une sexagénaire fortunée",
"Oise : il prend sa belle-mère pour un lapin et lui tire dessus",
"Elle surprend un homme en train de se secouer la quéquette sur la route",
"Digne : ils ont uriné dans le manège",
"Speedating au cyclorail : un bilan mitigé",
"L'automobiliste faisait du yoga nu sur la bande d'arrêt d'urgence",
"Reims : nu, il broutait de l'herbe en pleine rue"
];

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
'Marseille'
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
'se prenait pour la réincarnation de Staline',
'découvre sa femme dans le lit du maire',
'mord les testicules du gendarme ',
'frappe un passant avec un gode ceinture',
'se bat avec un pêcheur breton',
'oublie ses enfants dans le sex shop',
'urinait sur le tapis',
's\'est introduit nu dans la cours de récréation'
];

class App extends Component {

  state = {
     quote: 'Générer votre titre #pqrmonamour'
  }

  wordPick() {
     const word =
      words[Math.floor(Math.random() * words.length)];
      console.log(word);
  }

  handleClick = () => {
    const location =
      locations[Math.floor(Math.random() * locations.length)];
    const subject =
      subjects[Math.floor(Math.random() * subjects.length)];
    const verbe =
      verbes[Math.floor(Math.random() * verbes.length)];

    this.setState({
         quote: location + ' : '+ subject + ' ' + verbe }); //new quote
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            {this.state.quote}
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
