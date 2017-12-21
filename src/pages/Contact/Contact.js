import React, { Component } from 'react';
import './Contact.css';
import Abstract from '../../components/Abstract/Abstract';

class Contact extends Component {
  render() {
    const rightHTML = (
      <div>
        WE CAN WORK TOGETHER
      </div>
    );

    const aboutAbstractData = {
      left: 'Contact Me',
      right: rightHTML,
    };

    return (
      <div>
        <Abstract data={aboutAbstractData} />
        Contact
      </div>
    );
  }
}

export default Contact;
