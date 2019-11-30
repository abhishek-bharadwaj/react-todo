import React, {Component} from 'react';

import Todos from './components/Todos'

import './App.css';

class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        title: 'Do something productive.',
        completed: false
      },
      {
        id: 2,
        title: 'Feed Luna.',
        completed: false
      },
      {
        id: 3,
        title: 'Meeting with Chick!',
        completed: false
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
