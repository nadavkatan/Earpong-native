import React, { useState, useContext, useEffect } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { AppContext } from "../../context/Context";

const SoundButton = (props) => {
  const [correct, setCorrect] = useState(undefined);
  const { checkAnswer, playRandomSound, setStep, mistakes, playSound, updateHighestScore, setCurrentAvatar } =
    useContext(AppContext);

  const handleClick = () => {
    playSound(props.index);
    setCorrect(checkAnswer(props.index));
    //check if game over
    if (mistakes === 4) {
      setCorrect(undefined);
      setCurrentAvatar('neutral')
      updateHighestScore();
      setStep((prev) => prev + 1);
    } else {
      setTimeout(() => {
        setCorrect(undefined);
        setCurrentAvatar('neutral')
        playRandomSound();
      }, 1000);
    }
  };

  const btnStyle = () => {
    return {
      padding: 20,
      borderRadius: 5,
      backgroundColor: correct
        ? "#5BB318"
        : correct === undefined
        ? "#1C3879"
        : "#EB1D36",
      margin: 8,
      boxShadow: "0 0 20px gray",
    };
  };

  return (
    <Pressable
      onPress={handleClick}
      style={({ pressed }) => pressed && styles.pressedButton}
    >
      <View style={[btnStyle(), styles.shadowProp]}>
        <Text style={styles.buttonText}>{props.soundName}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 20,
    color: "white",
  },
  pressedButton: {
    opacity: 0.5,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: {
      width: -2,
      height: 8,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});

export default SoundButton;
