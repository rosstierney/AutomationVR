import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';
import GazeButton from 'react-vr-gaze-button'

export default class AutomationVR extends React.Component {

    constructor(props)
    {
        super(props)
        this.state = {
            buttonIsClicked: false
        };
    }
  render() {

  const {buttonIsClicked} = this.state

    return (
      <View>
        <Pano source={asset('office.jpg')}/>
        <GazeButton onClick={() => this.setState({buttonIsClicked: true})} duration={2000}>
                  {time => (
                    <Text style={{
                                      backgroundColor: '#000',
                                      fontSize: 0.8,
                                      fontWeight: '400',
                                      layoutOrigin: [0.5, 0.5],
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
