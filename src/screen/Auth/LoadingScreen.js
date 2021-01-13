import React, {useEffect, useRef} from 'react';
import {StyleSheet, View} from 'react-native';

//ThirdParty
import CustomSplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-community/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {Transitioning, Transition} from 'react-native-reanimated';

//Redux
import {updateUser} from '../../actions/userActions';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';

//Custom Modules
import AuthNavigator from '../../navigator/AuthNavigator';
import MainNavigator from '../..//navigator/MainNavigator';

const TRANSITION_FADE = (
  <Transition.Sequence>
    <Transition.Together>
      <Transition.In type="fade" durationMs={600} delayMs={0} />
    </Transition.Together>
  </Transition.Sequence>
);

const TRANSITIONS_SLIDE_BOTTOMOUT_FADE = (
  <Transition.Sequence>
    <Transition.Together>
      <Transition.Out type="slide-bottom" durationMs={600} interpolation="easeOut" propagation="bottom" />
      <Transition.In type="fade" durationMs={100} delayMs={0} />
    </Transition.Together>
  </Transition.Sequence>
);

const TRANSITION_SCALE_FADE = (
  <Transition.Together>
    <Transition.Out durationMs={600} type="scale" />
    <Transition.Out durationMs={600} type="fade" />
  </Transition.Together>
);

const TRANSITION_FADE_SILDE_BOTTOM_RIGHT = (
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
const TRANSITIONS = [TRANSITION_FADE, TRANSITIONS_SLIDE_BOTTOMOUT_FADE, TRANSITION_SCALE_FADE, TRANSITION_FADE_SILDE_BOTTOM_RIGHT];

//Pick 0 to 3 you would like
const TRANSITION = TRANSITIONS[0];

function LoadingScreen() {
  const ref = useRef();
  const loginStatus = useSelector((state) => state.user.loginStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('loginStatus', loginStatus);

    async function getAsyncData() {
      //Get User data
      let data = await AsyncStorage.getItem('data');

      console.log(data);
      //Update redux state
      dispatch(updateUser(data));
    }

    CustomSplashScreen.hide();

    getAsyncData();
  });

  if (loginStatus === -1) {
    // We haven't finished checking for the user logged in or not
    return <View style={styles.container} />;
  }

  ref && ref.current && ref.current.animateNextTransition();

  return (
    <NavigationContainer>
      <Transitioning.View ref={ref} transition={TRANSITION} style={styles.transitionContainer}>
        {loginStatus === 1 && <MainNavigator />}
        {loginStatus === 0 && <AuthNavigator />}
      </Transitioning.View>
    </NavigationContainer>
  );
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

export default LoadingScreen;
