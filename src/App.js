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
        {id: 'Card1', title: 'Write Blog', description: 'Can AI make memes', label: '30 mins'},
      {id: 'Card2', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: {sha: 'be312a1'}}
      ]
    },
    {
      id: 'lane2',
      title: 'In Progress',
      label: '0/0',
      cards: []
    },
    {
      id: 'lane3',
      title: 'Done',
      label: '0/0',
      cards: []
    }
  ]
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Board data={data} draggable />
      </div>
    );
  }
}

export default App;