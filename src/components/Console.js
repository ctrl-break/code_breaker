import React, { Component } from 'react';
import ReactTerminal, { ReactThemes, ReactOutputRenderers } from 'react-terminal-component';
import {
  EmulatorState, OutputFactory, CommandMapping, Outputs
} from 'javascript-terminal';

class Console extends Component {
  render() {
    const customState = EmulatorState.create({
          'commandMapping': CommandMapping.create({
            'start': {
              'function': (state, opts) => {
                return {
                  state: state.setOutputs( Outputs.create() ),
                  output: OutputFactory.makeTextOutput(`Let's start a game.`)
                };
              },
              'optDef': {}
            },
            'clear': {
              'function': (state, opts ) => {
                  return { state: state.setOutputs( Outputs.create() )}
               },
               'optDef': {}
            },
          })
    });
    return (<div className="console">
              <ReactTerminal
                  theme={ReactThemes.sea}
                  promptSymbol='>‍'
                  emulatorState={customState}
              />
            </div>);
  }
}

export default Console;
