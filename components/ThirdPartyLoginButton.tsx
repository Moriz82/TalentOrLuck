import React from 'react';
import {Text} from 'native-base';
import {GestureResponderEvent, Pressable, StyleSheet, TouchableOpacity, View} from 'react-native';
import { Image } from 'react-native';


type Props = {
  logoImage: any
    onPress: (event: GestureResponderEvent) => void;
};

export function ThirdPartyLoginButton (props: Props) {

  return (
      <TouchableOpacity style={{borderRadius: 15, backgroundColor: 'white', height: 60, width: 150, justifyContent: 'center', alignItems: 'center'}} onPress={() => {}}>
          <Image style={{height: 30, width: 30}} source={props.logoImage}/>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    buttonStyle: {

    }
});

