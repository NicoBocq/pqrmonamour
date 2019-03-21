import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
     quote: 'Générer votre titre #pqrmonamour',
  }

  handleClick = () => {
      this.setState({
         quote: 'Ivre, il collectionne les prospectus publicitaires',
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
         Nicolas Bocquet
         </a>
        </footer>
      </div>
    );
  }
}

export default App;
