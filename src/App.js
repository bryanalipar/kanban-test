import React, { Component } from 'react';
import Board from 'react-trello'
import logo from './logo.svg';
import './App.css';

const data = {
  lanes: [
    {
      id: 'lane1',
      title: 'Backlog',
      label: '2/2',
      cards: [
        {id: 'Card1', title: 'Story #1', description: '‘Story #1 description', label: '30 mins'}
      ]
    },
    {
      id: 'lane2',
      title: 'In Progress'
    },
    {
      id: 'lane3',
      title: 'Done'
    }
  ]
}

class App extends Component {
  render() {
    return (
      <div className="App from-home">
        <Board 
          data={data} 
          draggable
          editable

         />
      </div>
    );
  }
}

export default App;
