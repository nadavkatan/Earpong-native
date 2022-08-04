import React, { useContext, useEffect } from "react";
import {
  Button,
  View,
  StyleSheet,
  Image,
  Pressable,
  Text,
  ImageBackground,
} from "react-native";
import Greeting from "../instructions/Greeting";
import ChooseLanguage from "../instructions/ChooseLanguage";
import ChooseSoundsAmount from "../instructions/ChooseSoundsAmount";
import ReferenceNote from "../instructions/ReferenceNote";
import ButtonsContainer from "../buttonsContainer/ButtonsContainer";
import { AppContext } from "../../context/Context";
import GameOver from "../instructions/GameOver";
import Welcome from "../welcome/Welcome";
import Animated, { Keyframe } from 'react-native-reanimated';

const background = require("../../assets/images/background.jpg");

const Home = () => {
  const { step, setStep, currentAvatar } = useContext(AppContext);
  useEffect(() => {
    console.log("step: ", step);
  }, [step]);

  const fadeIn = new Keyframe({
    0:{
      opacity: 0,
      transform: [{scale: '0'}]

  },
  80:{
    opacity: 0,
    transform: [{scale: '0'}]

  },
  90:{
      opacity: 0.5,
      transform: [{scale: '0.5'}]

  },
  100:{
      opacity: 1,
      transform: [{scale: '1'}]
  }
  })

  useEffect(() => {
    setTimeout(() => {
      setStep(1);
    }, 4000);
  }, []);

  return (
    <View 
    style={styles.homeWrapper}
    >
      <ImageBackground
        source={background}
        resizeMode="stretch"
        style={styles.backgroundImage}
      >
      {/* <Animated.View
      entering={step === 1 && fadeIn.duration(4000)}
      > */}
        {step === 0 ? (
          <Welcome />
        ) : step === 1 ? (
          <Animated.View
          style={styles.animationContainer}
          entering={fadeIn.duration(1000)}
          >
          <Greeting />
          <Image
            style={styles.avatar}
            source={
              currentAvatar === "neutral"
                ? require("../../assets/images/neutral.png")
                : require("../../assets/images/angry.png")
            }
          />
          </Animated.View>
        ) : step === 2 ? (
          <ChooseLanguage />
        ) : step === 3 ? (
          <ChooseSoundsAmount />
        ) : step === 4 ? (
          <ReferenceNote />
        ) : step === 5 || step === 6 ? (
          <ButtonsContainer />
        ) : step === 7 ? (
          <GameOver />
        ) : null}
          <Image
            style={styles.avatar}
            source={
              currentAvatar === "neutral"
                ? require("../../assets/images/neutral.png")
                : require("../../assets/images/angry.png")
            }
          />
          {/* </Animated.View> */}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  homeWrapper: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    flex: 3,
    width: 300,
    height: 300,
  },
  backgroundImage: {
    margin: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  animationContainer:{
    display: "flex",
    alignItems: "center"
  }
});

export default Home;
