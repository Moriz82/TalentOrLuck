import { Box, Button, CheckIcon, Icon, StatusBar, Text } from "native-base";
import React from 'react';
import {SafeAreaView} from 'react-native';
import {StyledButton} from '../../components/StyledButton';
import { TextInput } from "../../components/TextInput";

const SignIn = (props: {navigation: any}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#222222'}}>
      <StatusBar barStyle={'light-content'} />
      <Box>
        <StyledButton
          onPress={() => props.navigation.navigate('SignUp')}
          buttonText={'Click Me'}
        />
        <TextInput placeholderText={'Test'} />
        <Text>Hello World</Text>
      </Box>
    </SafeAreaView>
  );
};

export default SignIn;
