import {Box, StatusBar, Text, View} from 'native-base';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {StyledButton} from '../../components/StyledButton';
import {CustomTextInput} from '../../components/CustomTextInput';
import signInStyles from './SignUp.styles';
import {CustomLinkedText} from '../../components/CustomLinkedText';
import {ThirdPartyLoginButton} from '../../components/ThirdPartyLoginButton';
import {registerUser} from '../SignIn/SignInHandler';
import signUpStyles from './SignUp.styles';

const SignUp = (props: {navigation: any}) => {
  const [emailText, setEmailText] = useState('');
  const [passwordText, setPasswordText] = useState('');
  const [confirmPasswordText, setConfirmPasswordText] = useState('');
  const [errText, setErrText] = useState('');

  return (
    <>
      <SafeAreaView style={signInStyles.safeAreaViewStyle}>
        <StatusBar barStyle={'light-content'} />
        <Box style={{padding: 10}}>
          <Text style={signInStyles.headerText}>Hello! Please Register</Text>

          <View style={signInStyles.emailTextInput}>
            <CustomTextInput
              placeholderText={'Enter Email'}
              value={emailText}
              onChangeText={(newText: any) => setEmailText(newText)}
              iconName={'email'}
              isPassword={false}
            />
          </View>

          <View style={signInStyles.passwordInput}>
            <CustomTextInput
              placeholderText={'Enter Password'}
              value={passwordText}
              onChangeText={(newText: any) => setPasswordText(newText)}
              iconName={'lock'}
              isPassword={true}
            />
          </View>

          <View style={signInStyles.confirmPassInput}>
            <CustomTextInput
              placeholderText={'Confirm Password'}
              value={confirmPasswordText}
              onChangeText={(newText: any) => setConfirmPasswordText(newText)}
              iconName={'lock'}
              isPassword={true}
            />
          </View>

          <View>
            <Text style={signUpStyles.errText}>{errText}</Text>
          </View>

          <View style={{paddingTop: 50}}>
            <StyledButton
              onPress={() => {
                var msg = registerUser(
                  emailText,
                  passwordText,
                  confirmPasswordText,
                );
                setErrText(msg.err);
                if (msg.didRegister) {
                  props.navigation.navigate('Login');
                }
              }}
              buttonText={'Register'}
            />
          </View>

          <View style={{padding: 10, paddingTop: 50}}>
            <Text>Or register with</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              flex: 1,
            }}>
            <ThirdPartyLoginButton
              logoImage={require('../../assets/images/facebookLogo.jpg')}
              onPress={() => {}}
            />
            <ThirdPartyLoginButton
              logoImage={require('../../assets/images/googleLogo.jpg')}
              onPress={() => {}}
            />
          </View>

          <View style={{padding: 100, width: '125%'}}>
            <CustomLinkedText
              displayText="Login"
              onPress={() => props.navigation.navigate('SignIn')}
            />
          </View>
        </Box>
      </SafeAreaView>
    </>
  );
};

export default SignUp;
