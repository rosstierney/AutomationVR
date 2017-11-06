import React from 'react';
import {
  Animated,
  asset,
  Model,
  Text,
  View,
  AmbientLight,
} from 'react-vr';

import { Easing } from 'react-native';

export default class AnimatedModels extends React.Component {

    constructor(props)
    {
        super(props)
        this.state = {
            spin: new Animated.Value(0), // init opacity 0
        };
    }

    animateIn = () => {
      Animated.timing(
        this.state.animatedTranslation,
        {
          toValue: 0.125,
          duration: 100,
          easing: Easing.in,
        }
      ).start();
    }

    animateOut = () => {
      Animated.timing(
        this.state.animatedTranslation,
        {
          toValue: 0,
          duration: 100,
          easing: Easing.in,
        }
      ).start();
    }

    componentDidMount() {
      this.spinAnimation();
    }

    spinAnimation() {
      this.state.spin.setValue(0);
      Animated.timing(
        this.state.spin,
        {
         toValue: 1,
         duration: 3000,
         easing: Easing.linear
        }
      ).start( () => this.spinAnimation() );
    }

  render() {

      var spin = this.state.spin.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
      });

      var AnimatedModel = Animated.createAnimatedComponent(Model);

      return (
             <View>
                <AnimatedModel
                  source={{
                    obj: asset('bugatti.obj'),
                    mtl: asset('bugatti.mtl'),
                  }}
                  scale={0.2}
                  style={{position: 'absolute', height: .1, width: .1, layoutOrigin: [0, -10],
                  transform: [{translate: [0, -6, 20]}, {rotateY: spin}]}}
                  lit={true}
                />
             </View>
           );
      }
};
