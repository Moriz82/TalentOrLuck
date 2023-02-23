import { Box, Button, StatusBar, Text } from "native-base";
import React from "react";
import { SafeAreaView } from "react-native";

const SignIn = (props: { navigation: any }) => {
    return(
        <SafeAreaView style={{flex: 1, backgroundColor: '#222222'}}>
            <StatusBar barStyle={'light-content'}></StatusBar>
            <Box>
                <Button onPress={() => props.navigation.navigate("SignUp")}>Click Me</Button>
                <Text>Hello World</Text>
            </Box>
        </SafeAreaView>
    );
};

export default SignIn;