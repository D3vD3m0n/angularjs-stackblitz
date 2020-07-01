import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import '~@angular/material/theming';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React Stackblitz'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing ..
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
