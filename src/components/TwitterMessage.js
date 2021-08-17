import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: '',
    };
  }

  handleOnChange = (event) => {
    this.setState({
      message: event.target.value,
    })
  }

  render() {
    let characterCount = () => {
      return (280 - this.state.message.length);
    }
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={(event) => this.handleOnChange(event)}/>
        {characterCount()}/280 remaining
      </div>
    );
  }
}

export default TwitterMessage;
