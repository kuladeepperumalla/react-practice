import React from "react";

export default class UserName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    this.onSubmit(this.state.text);
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.text}
            onChange={(e) => this.setState({text: e.target.value})}
            pattern="[a-zA-Z0-9]+"
            required
          />
          <button> create! </button>
        </form>
      </>
    );
  }
}