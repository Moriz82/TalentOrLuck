import React, {useState} from 'react';
import {extendTheme, NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from './screens/SignIn/SignIn';
import SignUp from './screens/SignUp/SignUp';

function App(): JSX.Element {
  const Stack = createNativeStackNavigator();
  const [username, setUsername] = useState('');

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
          fontFamily: 'Urbanist',
          fontStyle: 'normal',
          fontWeight: 600,
          fontSize: 15,
          textAlign: 'center',
          lineHeight: 18,
          color: 'white',
        },
      },
      Button: {
        baseStyle: {
          backgroundColor: '#005B04',
          borderRadius: 8,
        },
      },
    },
  });

  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{headerShown: false, title: ''}}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{headerShown: false, title: ''}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
