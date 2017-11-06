import React from 'react';
import {
  Animated,
  AmbientLight,
  AppRegistry,
  asset,
  Image,
  Model,
  Pano,
  PointLight,
  Sound,
  Text,
  View,
  Video,
  VrButton,
  Value,
  MediaPlayerState,
  VideoControl,
} from 'react-vr';
import GazeButton from 'react-vr-gaze-button'
import * as THREE from 'three';
import { Easing } from 'react-native';
import BouncingText from './Components/BouncingText';
import AnimatedModels from './Components/AnimatedModel';

export default class AutomationVR extends React.Component {

    constructor(props)
    {
        super(props)
        this.state = {
            buttonIsClicked: false,
            playerState: new MediaPlayerState({autoPlay: false, muted: true}), // init with muted, autoPlay
            stage: 'office.jpg'
        };
    }

    toggle()
    {
      switch(this.state.stage)
      {
        case 'office.jpg':
        {
          this.setState(() => ({ stage: 'lobby.jpg' }));
          return <AnimatedModels />
        }
        case 'lobby.jpg':
        {
          this.setState(() => ({ stage: 'office1.jpg' }));
        }
        case 'office1.jpg':
        {
          this.setState(() => ({ stage: 'office.jpg' }));
        }
      }
    }

    renderModel()
    {
        if(this.state.stage == 'lobby.jpg')
        return <AnimatedModels />
    }

    render() {

        const {buttonIsClicked} = this.state

          return (
            <View>
              <Pano source={asset(this.state.stage)}/>
              <AmbientLight intensity={0.5} />
              <PointLight
                style={{
                  color:'white', transform:[{translate:[0, 0, 0]}]
                }}
              />
               <BouncingText />
              <VrButton onClick={()=>this.toggle()} duration={3000}
                style={{position: 'relative', height: .2, width: .2, backgroundColor: '#ff0000', layoutOrigin: [-0.5, -0.5],
                transform: [{translate: [0, 0, 2]}]}}

                  onEnterSound={{
                    mp3: asset('bugattiSFX.mp3'),
                  }}
                  />

              {this.renderModel()}

              <Video onEnter={()=>this.state.playerState.play()}
                     onExit={()=>this.state.playerState.pause()}
                     style={{position: 'absolute', height: 2.5, width: 4, layoutOrigin: [1.5, 0.45], transform: [{translate: [0, 0, -2.8]}, {rotateY: -270}]}}
                     source={asset('big-buck-bunny.webm')}
                     playerState={this.state.playerState}
                    />
              <VideoControl
                     style={{position: 'absolute', height: 0.2, width: 4, layoutOrigin: [1.5, -6.2], transform: [{translate: [0, 0, -2.8]}, {rotateY: -270}]}}
                     playerState={this.state.playerState} />

              <GazeButton onClick={()=>this.toggle()}  style={{
                                position: 'absolute'}} duration={3000}>
                        {time => (
                          <Text style={{
                                            backgroundColor: '#000',
                                            fontSize: 0.8,
                                            fontWeight: '400',
                                            layoutOrigin: [0.5, 1.5],
                                            marginLeft: 0.5,
                                            marginRight: 0.5,
                                            textAlign: 'center',
                                            textAlignVertical: 'center',
                                            transform: [{translate: [0, 0, -8]}],
                                          }}>
                            {`${time}`}
                          </Text>

                        )}

              </GazeButton>

            </View>
      );

      window.setTimeout(window.onload = function (){
        document.getElementById('loader').style.display = "none"
      }, 10000);
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
