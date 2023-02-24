import React from 'react';
import {CheckIcon, Icon, Input} from 'native-base';
import {StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {
  placeholderText: string;
};

export function TextInput(props: Props) {
  return (
    <Input
      w={{
        base: '75%',
        md: '25%',
      }}
      style={styles.root}
      leftElement={
        <MaterialCommunityIcons style={styles.root} name="email" color="black" size={25} />
      }
      placeholder={props.placeholderText}
    />
  );
}

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
