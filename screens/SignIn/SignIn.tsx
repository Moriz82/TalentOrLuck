import { Box, Button, CheckIcon, Icon, StatusBar, Text } from "native-base";
import React, { useState } from 'react';
import {SafeAreaView} from 'react-native';
import {StyledButton} from '../../components/StyledButton';
import { CustomTextInput } from "../../components/CustomTextInput";

const SignIn = (props: {navigation: any}) => {
  const [emailText, setEmailText] = useState();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#222222'}}>
      <StatusBar barStyle={'light-content'} />
      <Box style={{padding: 10}}>
        <StyledButton
          onPress={() => props.navigation.navigate('SignUp')}
          buttonText={'Sign Up'}
        />
        <CustomTextInput placeholderText={'Test'} value={emailText} onChangeText={(newText: any) => setEmailText(newText)}/>
        <Text>{emailText}</Text>
      </Box>
    </SafeAreaView>
  );
};

export default SignIn;
