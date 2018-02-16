import React, { Component } from 'react';
import Board from 'react-trello';
import Modal from './components/Modal';
import './App.css';


const modalFlag = sessionStorage.getItem('modalOpen')==null ? true : false;

const data = {
  lanes: [
    {
      id: 'lane1',
      title: 'Backlog',
      label: '2/2',
      cards: [
        {
          id: '001', 
          title: 'Story #1', 
          description: 'Story #1 description', 
          label: '30 mins',
          cardColor: ''
        }
      ]
    },
    {
      id: 'lane2',
      title: 'In Progress',
      label: '2/2',
      cards: []
    },
    {
      id: 'lane3',
      title: 'Done',
      label: '2/2',
      cards: []
    }
  ]
}

class App extends Component {

    constructor(props) {
      super(props);
      this.state = { firstPageLoad: modalFlag }; 
    }

    toggleModal = () => {
      this.setState({ firstPageLoad: false });
      sessionStorage.setItem('modalOpen', false);
    }

  render() {

    return (
      <div className="App container">
        <Board 
          data={data} 
          draggable
          editable
          addCardLink={<button className="add_card_button">Add Card</button> } >
         </Board>

         <Modal
          show={this.state.firstPageLoad}
          onClose={this.toggleModal}
         />
      </div>
    );
  }
}

export default App;
