import React, {useContext} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {AppContext} from '../../context/Context';

const Greeting = () => {

    const {setStep} = useContext(AppContext)

  return (
    <View style={styles.greetingWrapper}>
    <View style={styles.greetingContainer}>
    <Text>
        I'm Nadav! your virtual ear-training teacher 🤓 Our training will work
        like this: I will play a sound, and you have to recognize which sound I
        have played. When you think you know which sound I played, simply press
        the button with the name of sound on it! Are you ready?!
        </Text>
    </View>
    <View>
        <Button title="Got it!" onPress={()=> setStep(2)}/>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    greetingWrapper: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    greetingContainer:{
        width:'80%'
    }
  });

export default Greeting