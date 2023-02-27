import {Box, Button, StatusBar, Text} from 'native-base';
import React, { useState } from 'react';
import {SafeAreaView, TextInputBase} from 'react-native';
import { CustomTextInput } from "../../components/CustomTextInput";

// ZANE IS WORKING ON THIS
// line height and height to fix labels

const SignUp = (props: {navigation: any}) => {
  const [emailText, setEmailText] = useState();

  return (
    <><Box>
      <Text>Sign Up Screen</Text>
    </Box><>
        <SafeAreaView style={{ backgroundColor: '#222222', flex: 1 }}>
          <Text style={{ fontSize: 25, paddingTop: 100 }}>Hello! Register to get started</Text>

          <Box style={{ justifyContent: 'space-evenly', paddingTop: 20, alignItems: 'center' }}>
            <CustomTextInput placeholderText={'Test'} value={emailText} onChangeText={(newText: any) => setEmailText(newText)} />
          </Box>
        </SafeAreaView>
      </></>
  );
};

export default SignUp;
