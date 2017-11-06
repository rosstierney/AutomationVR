import React from 'react';
import {
  AppRegistry,
  View,
} from 'react-vr';
import MainFunction from './Components/MainFunction.js';

export default class AutomationVR extends React.Component {
  render() {
    return (
      <View>
        <MainFunction />
      </View>
      );
  }
};

AppRegistry.registerComponent('AutomationVR', () => AutomationVR);

// <VrButton
//   style={{width: 2, layoutOrigin: [0.5, 1.5], transform: [{translate: [0, 0, -8]}],}}
//   onClick={()=>this.toggle()}>
//   <Image style={{width:1, height:1}}
//     source={asset(this.state.chevron)}
//     inset={[0.2,0.2,0.2,0.2]}
//     insetSize={[0.05,0.45,0.55,0.15]} >
//   </Image>
// </VrButton>
