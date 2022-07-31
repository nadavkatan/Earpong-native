import React, { useContext } from 'react';
import { Button, View, StyleSheet } from 'react-native';
import Greeting from '../instructions/Greeting';
import ChooseLanguage from '../instructions/ChooseLanguage';
import ChooseSoundsAmount from '../instructions/ChooseSoundsAmount';
import ReferenceNote from '../instructions/ReferenceNote';
import ButtonsContainer from '../buttonsContainer/ButtonsContainer';
import { AppContext } from '../../context/Context';

const Home = () => {
    const { step, playRandomSound } = useContext(AppContext);
  return (
    <View style={styles.homeWrapper}>
        {
            step === 1 ? <Greeting/> 
                : step === 2 ?  <ChooseLanguage/>
                : step === 3 ? <ChooseSoundsAmount />
                : step === 4 ? <ReferenceNote />
                : step === 5 || step === 6 ? <ButtonsContainer/>
                : null
        }
    </View>
  )
}

const styles = StyleSheet.create({
    homeWrapper: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    greetingContainer:{
        width:'80%'
    }
  });

export default Home