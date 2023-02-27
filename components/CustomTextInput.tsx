import React from 'react';
import {CheckIcon, Icon} from 'native-base';
import {StyleSheet, TextInput, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {
  placeholderText: string;
  value: string | undefined;
  onChangeText: any;
};

export function CustomTextInput(props: Props) {
  return (
    <View style={{borderRadius: 10, flexDirection: 'row', backgroundColor: 'white', padding: 10, justifyContent: 'space-between'}}>
      <MaterialCommunityIcons name="email" color="gray" size={25} style={{paddingRight: 5}}/>
      <TextInput style={{flex: 1, height: 30}} placeholder={'Email'} defaultValue={props.value} onChangeText={props.onChangeText}></TextInput>
    </View>
  );
}

        // <MaterialCommunityIcons style={styles.root} name="email" color="black" size={25} />
const styles = StyleSheet.create({
  root: {
    backgroundColor: '#F7F8F9',
    borderRadius: 8,
    boxSizing: 'border-box',
  },
  placeholderText: {
    color: 'rgb(255, 255, 255)',
    fontSize: 15,
    fontWeight: '700',
  },
});
