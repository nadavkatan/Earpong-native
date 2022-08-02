import React, { useContext, useEffect } from "react";
import { Button, View, StyleSheet, Text } from "react-native";
import Greeting from "../instructions/Greeting";
import ChooseLanguage from "../instructions/ChooseLanguage";
import ChooseSoundsAmount from "../instructions/ChooseSoundsAmount";
import ReferenceNote from "../instructions/ReferenceNote";
import ButtonsContainer from "../buttonsContainer/ButtonsContainer";
import { AppContext } from "../../context/Context";
import GameOver from "../instructions/GameOver";

const Home = () => {
  const { step, score, mistakes } = useContext(AppContext);
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
});

export default Home;
