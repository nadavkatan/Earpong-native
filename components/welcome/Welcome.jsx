import React, { useContext } from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Animated, { Keyframe } from 'react-native-reanimated';
import { AppContext } from '../../context/Context';

const Welcome = () => {
    const { currentAvatar } = useContext(AppContext);

    const fadeOut = new Keyframe({
        0:{
            opacity: 1,
            transform: [{scale: '1'}]
        },
        10:{
            opacity: 0.5,
            transform: [{scale: '0.5'}]
        },
        20:{
            opacity: 0,
        },
        100:{
            opacity: 0,
            transform: [{scale: '0'}]
        }
    })

  return (
    <>
    <Animated.View exiting={fadeOut.duration(1000)}>
    <View style={styles.welcomeWrapper}>
        <Text style={styles.welcomeText}>Welcome to Ear-Pong! </Text>
    </View>
    </Animated.View>
    {/* <Image 
      style={styles.avatar}
        source={require('../../assets/images/neutral.png')}
      /> */}
      </>
  )
}

const styles = StyleSheet.create({
    welcomeWrapper: {
        flex: 4,
        alignItems: "center",
        justifyContent: "center",
      },
      welcomeText:{
        color:'white', 
        fontSize:30
      },
      avatar:{
        flex: 3,
        width: 300,
        height:300,
        
      },
})

export default Welcome