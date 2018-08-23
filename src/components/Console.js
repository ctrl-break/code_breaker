import React, {Component} from 'react';
import ReactTerminal, {ReactThemes} from 'react-terminal-component';
import {EmulatorState, OutputFactory, CommandMapping, Outputs} from 'javascript-terminal';
import {randomCode, isValidCode, compareCodes} from '../utils/code';
import * as Print from './ConsoleMessages';

class Console extends Component {
  constructor() {
    super();
    this.state = {
        code: null
    };
  }

  checkPlayerCode = (code) => {
    if (code === this.state.code) return true;

    return compareCodes(code, this.state.code);
  }

  render() {
    const customState = EmulatorState.create({
      'commandMapping': CommandMapping.create({
        'start': {
          'function': (state, opts) => {
            const newCode = randomCode();
            this.setState({ code: newCode });
            console.log('---', this.state, newCode);
            return {
              state: state.setOutputs(Outputs.create()),
              output: Print.startMessage()
            };
          },
          'optDef': {}
        },
        'clear': {
          'function': (state, opts) => {
            return { state: state.setOutputs(Outputs.create()) };
          },
          'optDef': {}
        },
        'check': {
          'function': (state, opts) => {
            if (!this.state.code) {
              return { output: Print.empty() };
            }

            const input = opts.join(' ');
            if (!isValidCode(input)) {
              return { output: Print.noValidNumber()};
            }

            let result = this.checkPlayerCode(input);
            console.log('---', result);
            if (result === true) {
              this.setState({ code: null });
              return { output: Print.win() };
            }

            return { output: Print.input(result) };
          },
          'optDef': {}
        }
      })
    });
    return (<div className="console">
                <ReactTerminal theme={ReactThemes.sea} promptSymbol='>‍' emulatorState={customState}/>
            </div>);
  }
}

export default Console;
