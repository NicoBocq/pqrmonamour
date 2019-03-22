import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const words = ["Nancy : il mord les testicules du contrôleur dans le train",
"Perpignan : cachée dans un caveau, elle découvre que la pilleuse de tombes est une sexagénaire fortunée",
"Oise : il prend sa belle-mère pour un lapin et lui tire dessus",
"Elle surprend un homme en train de se secouer la quéquette sur la route",
"Digne : ils ont uriné dans le manège",
"Speedating au cyclorail : un bilan mitigé",
"L'automobiliste faisait du yoga nu sur la bande d'arrêt d'urgence"
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
    const word =
      words[Math.floor(Math.random() * words.length)];
      console.log(word);

    this.setState({
         quote: word
      }); //new quote
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
              Générer un nouveau titre          </button>
        </header>

        <footer className="App-footer">
         <a
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
