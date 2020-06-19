import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState(() => ({
      value,
    }));
  }

  render() {
    return (
      <div>
        <h1 id="qna"> React workin!!!!</h1>
      </div>
    );
  }
}

export default App;
