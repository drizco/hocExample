import React from 'react';
import ReactDOM from 'react-dom';
import {TweenLite, TweenMax} from 'gsap';
const findDOMNode = ReactDOM.findDOMNode;

// give component random position
export const randomPosition = (WrappedComponent) => {
  return class RandomPosition extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        position: {
          top: `${Math.floor(Math.random() * 100)}vh`,
          left: `${Math.floor(Math.random() * 100)}vw`
        }
      };
    }
    render() {
      return <WrappedComponent {...this.props} position={this.state.position} />;
    }
  };
};

// without decorators
const RyanHead = randomPosition(class extends React.Component {
  render(){
    return ( <img
      style={props.position}
      onClick={props.jump}
      onMouseOver={props.flip}
      src="../public/head.png" />
    );
  }
});

//with decorators
@randomPosition
class RyanHead extends React.Component {
  render(){
    return ( <img
      style={props.position}
      onClick={props.jump}
      onMouseOver={props.flip}
      src="../public/head.png" />
    );
  }
}

// dog example
function dogAbilities(target) {
  target.sleepAllDay = true;
  target.favoriteGame = 'fetch'
}

@dogAbilities
class MyDog() {};

console.log(MyDog.favoriteGame); // 'fetch'