import {StyleSheet} from 'react-native';

const signUpStyles = StyleSheet.create({
  safeAreaViewStyle: {
    flex: 1,
    backgroundColor: '#222222',
  },
  headerText: {
    fontSize: 30,
    paddingTop: 50,
    textAlign: 'left',
  },
  emailTextInput: {
    paddingTop: 30,
  },
  passwordTextInput: {},
  confirmPassInput: {
    paddingTop: 30,
    paddingBottom: 30,
  },
  forgotPasswordText: {
    paddingBottom: 30,
  },
  passwordInput: {
    paddingTop: 30,
  },
  registerNowText: {
    paddingTop: 30,
  },
  errText: {
    color: "red",
  },
});

export default signUpStyles;
