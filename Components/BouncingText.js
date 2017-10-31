import React from 'react';
import {Animated} from 'react-vr';

export default class BouncingText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bounceValue: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.spring(this.state.bounceValue, {
      toValue: 2,
      friction: 0.5,
      tension: 4,
    }).start();
  }

  render() {
    return (
      <Animated.Text
        style={{
          position: 'absolute',
          backgroundColor: '#00ff00',
          fontSize: 0.1,
          fontWeight: '400',
          marginLeft: 0.5,
          marginRight: 0.5,
          textAlign: 'center',
          textAlignVertical: 'center',
          layoutOrigin: [0.6, 0.6],
          transform: [{translate: [-0.2, 0.8, -4]}, {scale: this.state.bounceValue}],
        }}
      >
        Look over here
      </Animated.Text>
    );
  }
}

module.exports = BouncingText;
