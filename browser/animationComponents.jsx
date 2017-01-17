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

// pulse animation
export const effect3D = (WrappedComponent) => {
  return class Effect3D extends React.Component {
    componentDidMount() {
      const el = findDOMNode(this);
      TweenMax.to(el, 0, {transformOrigin: 'center center -150px'});
      TweenMax.to(el, 0.5, {
        scaleX: 0.8,
        scaleY: 0.8,
        force3D: true,
        yoyo: true,
        repeat: -1,
        ease: Power1.easeInOut
      });
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

// jump animation
export const jump = (WrappedComponent) => {
  return class Jump extends React.Component {
    constructor(props) {
      super(props);
      this.jump = this.jump.bind(this);
    }

    jump() {
      const el = findDOMNode(this)
      TweenLite.fromTo(el, 0.3, {
        y: 0
      }, {
        y: -100,
        onComplete: () => {
          TweenLite.fromTo(el, 0.5, {
            y: -100
          }, {
            y: 0
          });
        }
      });
    }
    render() {
      return <WrappedComponent {...this.props} jump={this.jump} />;
    }
  };
};

// flip animation
export const flip = (WrappedComponent) => {
  return class Flip extends React.Component {
    constructor(props) {
      super(props);
      this.flip = this.flip.bind(this);
    }
    flip() {
      const el = findDOMNode(this);
      let rotation = 0;
      rotation += 360;
      TweenLite.to(el, 2, {
        rotationX: rotation,
        ease: Power2.easeOut
      });
    }
    render() {
      return <WrappedComponent {...this.props} flip={this.flip} />;
    }
  };
};
