import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Message.css';

const messages = {
  'start' : 'Welcome'
}


class Message extends Component {
  render() {
    const messageText = (messages[this.props.name]) ? messages[this.props.name] : '...';
    return <div className="message">{messageText}</div>;
  }
}

Message.propTypes = {
  name: PropTypes.string.isRequired
};

export default Message;
