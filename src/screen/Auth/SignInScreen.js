import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Keyboard, ScrollView, SafeAreaView, Dimensions, Image} from 'react-native';

//ThirdParty
import AsyncStorage from '@react-native-community/async-storage';
import {TextField, FilledTextField, OutlinedTextField} from 'react-native-material-textfield';

//Redux
import {connect} from 'react-redux';
import {store} from '../../store/index';
import {updateuser, updatelanguage} from '../../actions/userActions';

class SignInScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  _loginPressed = () => {
    let loginData = {username: 'Tony', token: '123359595'};

    AsyncStorage.setItem('data', JSON.stringify(loginData));

    store.dispatch(updateuser(loginData));
  };

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <View style={styles.viewContainer}>
            <Image source={require('../../assets/images/ic_logo.png')} style={styles.appImage} />

            <Text style={styles.proceedLoginText}>Proceed with your </Text>
            <Text style={styles.loginText}>Login </Text>

            <TextField label="Username" containerStyle={styles.userNameTextfield} />

            <TextField label="Password" />

            <TouchableOpacity
              onPress={() => {
                this._loginPressed();
              }}
              style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forgotPassowrdButton}>
              <Text style={styles.forgotPasswordButtonText}>Forgot password?</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appImage: {
    width: 70,
    height: 100,
  },
  viewContainer: {
    marginHorizontal: 32,
    marginTop: 40,
  },
  forgotPasswordButtonText: {
    fontSize: 16,
    color: '#666666',
  },
  forgotPassowrdButton: {
    marginTop: 20,
    alignItems: 'center',
  },
  loginButtonText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  loginButton: {
    backgroundColor: '#EF0032',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginTop: 40,
  },
  userNameTextfield: {
    marginTop: 60,
  },
  loginText: {
    marginTop: 10,
    fontSize: 30,
    fontWeight: '800',
    color: '#222222',
  },
  proceedLoginText: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: '300',
    color: '#222222',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});

const mapStateToProps = (store) => {
  return {
    userdata: store.user.userdata,
    loginStatus: store.user.loginStatus,
  };
};

export default connect(mapStateToProps)(SignInScreen);
