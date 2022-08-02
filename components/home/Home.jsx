import React, { useContext, useEffect } from "react";
import { Button, View, StyleSheet, Image } from "react-native";
import Greeting from "../instructions/Greeting";
import ChooseLanguage from "../instructions/ChooseLanguage";
import ChooseSoundsAmount from "../instructions/ChooseSoundsAmount";
import ReferenceNote from "../instructions/ReferenceNote";
import ButtonsContainer from "../buttonsContainer/ButtonsContainer";
import { AppContext } from "../../context/Context";
import GameOver from "../instructions/GameOver";

const Home = () => {
  const { step, currentAvatar } = useContext(AppContext);
  useEffect(() => {
    console.log('step: ',step);
  }, [step]);
  return (
    <View style={styles.homeWrapper}>
      {step === 1 ? (
        <Greeting />
      ) : step === 2 ? (
        <ChooseLanguage />
      ) : step === 3 ? (
        <ChooseSoundsAmount />
      ) : step === 4 ? (
        <ReferenceNote />
      ) : step === 5 ? (
        <ButtonsContainer />
      ) : step === 6 ? (
        <GameOver />
      ) : null}
      <Image 
      style={styles.avatar}
        source={currentAvatar === 'neutral' ? require('../../assets/images/neutral.png') : require('../../assets/images/angry.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homeWrapper: {
    flex: 1,
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  avatar:{
    flex: 3,
    width: 300,
    height:300,
    
  }
});

export default Home;
