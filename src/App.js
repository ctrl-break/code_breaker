import React, { Component } from 'react';
import Message from './components/Message';
import Console from './components/Console';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
            <header>
               <h1>code_breaker</h1>
               <Message name='start'/>
            </header>
            <div className="main">
                <Console/>
            </div>
        </div>


      </div>
    );
  }
}

export default App;
