import {Box, StatusBar, Text, View} from 'native-base';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {StyledButton} from '../../components/StyledButton';
import {CustomTextInput} from '../../components/CustomTextInput';
import signInStyles from './SignIn.styles';
import {CustomLinkedText} from '../../components/CustomLinkedText';
import {ThirdPartyLoginButton} from '../../components/ThirdPartyLoginButton';
import {signInCheck} from './SignInHandler';

const SignIn = (props: {navigation: any}) => {
  const [emailText, setEmailText] = useState('');
  const [passwordText, setPasswordText] = useState('');

  return (
    <SafeAreaView style={signInStyles.safeAreaViewStyle}>
      <StatusBar barStyle={'light-content'} />
      <Box style={{padding: 10}}>
        <Text style={signInStyles.headerText}>Welcome Back!</Text>

        <View style={signInStyles.emailTextInput}>
          <CustomTextInput
            placeholderText={'Enter Email'}
            value={emailText}
            onChangeText={(newText: any) => setEmailText(newText)}
            iconName={'email'}
            isPassword={false}
          />
        </View>

        <View style={signInStyles.passwordTextInput}>
          <CustomTextInput
            placeholderText={'Enter Password'}
            value={passwordText}
            onChangeText={(newText: any) => setPasswordText(newText)}
            iconName={'lock'}
            isPassword={true}
          />
        </View>

        <View style={signInStyles.forgotPasswordText}>
          <CustomLinkedText
            displayText={'Forgot Password?'}
            onPress={props.navigation.navigate('ForgotPassword')}
          />
        </View>

        <StyledButton
          onPress={() => signInCheck(emailText, passwordText)}
          buttonText={'Login'}
        />

        <View style={signInStyles.registerNowText}>
          <CustomLinkedText
            displayText={'Register Now'}
            onPress={() => props.navigation.navigate('SignUp')}
          />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              flex: 1,
              paddingTop: 20,
            }}>
            <ThirdPartyLoginButton
              logoImage={require('../../assets/images/facebookLogo.png')}
              onPress={() => {}}
            />
            <ThirdPartyLoginButton
              logoImage={require('../../assets/images/googleLogo.png')}
              onPress={() => {}}
            />
          </View>
        </View>
      </Box>
    </SafeAreaView>
  );
};

/*<StyledButton
  onPress={() => props.navigation.navigate('SignUp')}
  buttonText={'Sign Up'}
/>*/

export default SignIn;
