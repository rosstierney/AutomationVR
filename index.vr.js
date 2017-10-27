import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Video,
  MediaPlayerState,
  VideoControl,
} from 'react-vr';
import GazeButton from 'react-vr-gaze-button'

export default class AutomationVR extends React.Component {

    constructor(props)
    {
        super(props)
        this.state = {
            buttonIsClicked: false,
            playerState: new MediaPlayerState({autoPlay: true, muted: true}), // init with muted, autoPlay
        };
    }
  render() {

  const {buttonIsClicked} = this.state

    return (
      <View>
        <Pano source={asset('office.jpg')}/>

        <Video
               style={{position: 'absolute', height: 2.5, width: 4, layoutOrigin: [1.5, 0.45], transform: [{translate: [0, 0, -2.8]}, {rotateY: -270}]}}
               source={asset('big-buck-bunny.webm')}
               playerState={this.state.playerState} />
        <VideoControl
               style={{position: 'absolute', height: 0.2, width: 4, layoutOrigin: [1.5, -6.2], transform: [{translate: [0, 0, -2.8]}, {rotateY: -270}]}}
               playerState={this.state.playerState} />

        <GazeButton onClick={() => this.setState({buttonIsClicked: true})} duration={5000}>
                  {time => (
                    <Text style={{
                                      backgroundColor: '#000',
                                      fontSize: 0.8,
                                      fontWeight: '400',
                                      layoutOrigin: [0.5, 1.5],
                                      paddingLeft: 0.2,
                                      paddingRight: 0.2,
                                      textAlign: 'center',
                                      textAlignVertical: 'center',
                                      transform: [{translate: [0, 0, -8]}],
                                    }}>
                      {buttonIsClicked ? 'Boooooom!!!!!' : `Gaze me for ${time} milliseconds`}
                    </Text>
                  )}
        </GazeButton>

      </View>
    );
  }
};

AppRegistry.registerComponent('AutomationVR', () => AutomationVR);
