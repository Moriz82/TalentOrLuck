import React from 'react';
import { extendTheme, NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from './screens/SignIn/SignIn';
import SignUp from './screens/SignUp/SignUp';

function App(): JSX.Element {
  const Stack = createNativeStackNavigator();

  // const colorTheme = {
  //   brand: {
  //     backgroundGray: '#222222',
  //     cricketGreen: '#005B04',
  //   },
  // };

  const theme = extendTheme({
    components: {
      Text: {
        baseStyle: {
          fontFamily: 'Urbanist-Regular',
          color: 'white'
        }
      }
    }
  });

  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='SignIn' component={SignIn} options={{ headerShown: false, title: ''}}/>
          <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: false, title: ''}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
