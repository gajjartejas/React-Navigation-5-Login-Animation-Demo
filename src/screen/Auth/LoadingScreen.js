import React from 'react';
import {StyleSheet, View} from 'react-native';

//ThirdParty
import CustomSplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-community/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {Transitioning, Transition} from 'react-native-reanimated';

//Redux
import {connect} from 'react-redux';
import {store} from '../../store/index';
import {updateuser, updatelanguage} from '../../actions/userActions';

//Custom Modules
import AuthNavigator from '../../navigator/AuthNavigator';
import MainNavigator from '../..//navigator/MainNavigator';

const transition_fade = (
  <Transition.Sequence>
    <Transition.Together>
      <Transition.In type="fade" durationMs={600} delayMs={0} />
    </Transition.Together>
  </Transition.Sequence>
);

const transitions_slide_bottomout_fade = (
  <Transition.Sequence>
    <Transition.Together>
      <Transition.Out type="slide-bottom" durationMs={600} interpolation="easeOut" propagation="bottom" />
      <Transition.In type="fade" durationMs={100} delayMs={0} />
    </Transition.Together>
  </Transition.Sequence>
);

const transition_scale_fade = (
  <Transition.Together>
    <Transition.Out durationMs={600} type="scale" />
    <Transition.Out durationMs={600} type="fade" />
  </Transition.Together>
);

const transition_fade_silde_bottom_right = (
  <Transition.Sequence>
    <Transition.Together>
      <Transition.Out type="fade" durationMs={600} interpolation="easeOut" />
      <Transition.Out type="slide-bottom" durationMs={600} interpolation="easeOut" propagation="bottom" />
      <Transition.In type="slide-right" delayMs={100} durationMs={500} interpolation="easeOut" propagation="bottom" />
      <Transition.In type="fade" durationMs={600} delayMs={0} />
    </Transition.Together>
  </Transition.Sequence>
);

//Assign above transition
const transition = transition_fade;

class LoadingScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    CustomSplashScreen.hide();

    this.getAsyncData();

    this.vref = React.createRef();
  }

  getAsyncData = async () => {
    //Get User data
    let data = await AsyncStorage.getItem('data');

    //Update redux state
    store.dispatch(updateuser(data));
  };

  render() {
    if (this.props.loginStatus === -1) {
      // We haven't finished checking for the user logged in or not
      return <View style={styles.container}></View>;
    }

    this.vref && this.vref.current && this.vref.current.animateNextTransition();

    return (
      <NavigationContainer>
        <Transitioning.View ref={this.vref} transition={transition} style={styles.transitionContainer}>
          {this.props.loginStatus === 1 && <MainNavigator />}
          {this.props.loginStatus === 0 && <AuthNavigator />}
        </Transitioning.View>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  transitionContainer: {flex: 1, backgroundColor: '#FFFFFF'},
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
});

const mapStateToProps = (store) => {
  return {
    userdata: store.user.userdata,
    loginStatus: store.user.loginStatus,
  };
};

export default connect(mapStateToProps)(LoadingScreen);
