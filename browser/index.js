import React from 'react';
import ReactDOM from 'react-dom';
import {effect3D, jump, flip, randomPosition} from './animationComponents.jsx';

// main app component
class App extends React.Component {
  constructor(props) {
    super(props);
     this.state = {
      count: 0
    }
    this.incrementCount = this.incrementCount.bind(this);
    this.resetCount = this.resetCount.bind(this);
  }
  incrementCount() {
    this.setState({
      count: this.state.count + 1
    });
  }
  resetCount() {
    this.setState({
      count: 0
    });
  }
  render() {
    const children = [];

    for (var i = 0; i < this.state.count; i++) {
        children.push(<ExtendedRyanHead key={i} />);
    }
    return (
      <div className="container">
        { children }
          <button className="btn blue-btn count" onClick={this.incrementCount}><h1>{this.state.count}</h1></button>
          <button className="btn blue-btn reset" onClick={this.resetCount}><h1>RESET</h1></button>
      </div>
    );
  }
}

// image component
const RyanHead = (props) => {
  return ( <img
    style={props.position}
    onClick={props.jump}
    onMouseOver={props.flip}
    src="../public/head.png" />
  );
};

let ExtendedRyanHead = randomPosition(RyanHead)

ReactDOM.render(
  <App />,
  document.getElementById('app')
);


