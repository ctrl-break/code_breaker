import React, { Component } from 'react';
import Message from './components/Message';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
            <header>
               <h1>code_breaker</h1>
               <Message name='star1t'/>
            </header>
        </div>


      </div>
    );
  }
}

export default App;
