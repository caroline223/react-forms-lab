import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleMessageChange = event => {
    this.setState({
      message: event.target.value
    })
  }

  render() {

    let charRemain = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text" 
          name="message" 
          id="message" 
          onChange={event => this.handleMessageChange(event)}
          value={this.state.message}
        />
        {' '}Characters Remaining: {charRemain}
      </div>
    );
  }
}

export default TwitterMessage;
