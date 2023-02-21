import { Box, Button, Text } from "native-base";
import React from "react";
import { SafeAreaView } from "react-native";

const SignIn = (props: { navigation: any }) => {
    return(
        <Box style={{alignItems: 'center', justifyContent: 'space-evenly', backgroundColor: '#9cffac', marginTop: 50}}>
          <Text style={{fontSize: 40, color: '#10611d'}}>Welcome To TalentOrLuck :/</Text>
          <Button onPress={() => props.navigation.navigate("SignUp")}>Click Me</Button>
        </Box>
    );
};

export default SignIn;