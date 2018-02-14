// Modal.js

import React, { Component } from 'react';
import '../Modal.css';

class Modal extends Component {

	render() {

		// Renders nothing if the 'show' prop is false
		if(!this.props.show) {
	      return null;
	    }


		return (
			<div className="backdrop">
				<div className="instruction_modal">
					<h2>Getting Started With Trello</h2>
					
					<div className="row">
						<div className="col-sm-4">
							<h3 className="ins_heading"><span className="ins_numbr">1</span> Add Cards</h3>
							<p>Add cards for each task that needs to be completed by clicking “Add A Card” in the first list. </p>
						</div>
						<div className="col-sm-4">
							<h3 className="ins_heading"><span className="ins_numbr">2</span> Drag Cards</h3>
							<p>Drag cards on any across boards. You can also drag cards to re-order vertically.</p>
						</div>
						<div className="col-sm-4">
							<h3 className="ins_heading"><span className="ins_numbr">3</span> Edit Cards</h3>
							<p>Edit cards by clicking on the card title or removing a card by clicking on the 'x' button when you hover on a card.</p>
						</div>
					</div>

					<button className="global_button" onClick={this.props.onClose}>Got it!</button>
				</div>
			</div>
		);
	}
}

export default Modal;
