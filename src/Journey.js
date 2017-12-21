import React, { Component } from 'react';
import './App.css';




export class Journey extends Component {

  constructor (props) {
    super(props);

    this.state = {
       
    };
  };


  render () {
    return (
     <div className="journey-prompt">
        <h4 className="journey-prompt-text">Click here for personalized search questionaire</h4>
        <div className="journey-prompt-arrow" style={{backgroundImage: `url('src-icons/arrow2.svg')`}}></div>
     </div>
    );
  }
}


