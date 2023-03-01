import {Box, StatusBar, Text, View} from 'native-base';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {StyledButton} from '../../components/StyledButton'
import {CustomTextInput} from '../../components/CustomTextInput';
import signInStyles from './SignUp.styles';

const SignUp = (props: {navigation: any}) => {
  const [emailText, setEmailText] = useState();
  const [passwordText, setPasswordText] = useState();
  const [confirmPasswordText, setConfirmPasswordText] = useState();

  return (
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

        <View style={signInStyles.passwordTextInput}>
        <View style={signInStyles.passwordInput}>
          <CustomTextInput
            placeholderText={'Enter Password'}
            value={passwordText}
            onChangeText={(newText: any) => setPasswordText(newText)}
            iconName={'lock'}
            isPassword={true}
          />
        </View>

        <View style={signInStyles.passwordTextInput}>
        <View style={signInStyles.confirmPassInput}>
          <CustomTextInput
            placeholderText={'Confirm Password'}
            value={confirmPasswordText}
            onChangeText={(newText: any) => setConfirmPasswordText(newText)}
            iconName={'lock'}
            isPassword={true}
          />
        </View>

        <StyledButton
          onPress={() => props.navigation.navigate('Register')}
          buttonText={'Register'}
        />
        <View style={{paddingTop: 50}}>
          <StyledButton
            onPress={() => props.navigation.navigate('Register')}
            buttonText={'Register'}
          />
        </View>
      </Box>
    </SafeAreaView>
  );
};

export default SignUp;
