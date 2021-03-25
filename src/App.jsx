import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div
        className='container'
      >
        <h1
          className="title"
        >
          ReactClock
          </h1>
        <div
          className='watch'
        >
          {this.state.date.toLocaleTimeString()}.
          </div>
      </div>
    );
  }
}

export default App;
