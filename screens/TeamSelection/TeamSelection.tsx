import {Box, StatusBar, Text, View} from 'native-base';
import React, {useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CustomLinkedText } from '../../components/CustomLinkedText';
import teamSelectionStyles from './TeamSelection.styles';
import TeamSelectStyles from './TeamSelection.styles';

const TeamSelection = (props: {navigation: any}) => {
  const [emailText, setEmailText] = useState();

  return (
   <SafeAreaView style={teamSelectionStyles.safeAreaViewStyle}>
     <CustomLinkedText displayText='login' onPress={()=> props.navigation.navigate('SignIn')}></CustomLinkedText>
   </SafeAreaView>
  );
};

export default TeamSelection;
