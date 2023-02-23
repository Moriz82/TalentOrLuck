import React from 'react';
import {CheckIcon, Input} from 'native-base';
import {StyleSheet} from 'react-native';

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
      /*InputLeftElement={<CheckIcon size="5" mt="0.5" color="emerald.500" />}*/
      placeholder="Name"
    />
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#005B04',
    borderRadius: 8,
    height: 56,
  },
  buttonText: {
    color: 'rgb(255, 255, 255)',
    fontSize: 15,
    fontWeight: '700',
  },
});
