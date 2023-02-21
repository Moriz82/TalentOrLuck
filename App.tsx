import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from './screens/SignIn/SignIn';
import SignUp from './screens/SignUp/SignUp';

function App(): JSX.Element {
  const Stack = createNativeStackNavigator();

  return (
    <NativeBaseProvider>
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
