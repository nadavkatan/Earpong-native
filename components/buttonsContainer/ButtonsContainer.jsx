import React, { useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { AppContext } from "../../context/Context";
import SoundButton from "../soundButton/SoundButton";

const ButtonsContainer = () => {
  const {
    step,
    setStep,
    activeSoundGroup,
    soundsAmount,
    playRandomSound,
    score,
    highestScore,
    mistakes,
  } = useContext(AppContext);

  const startPlay = ()=>{
    playRandomSound()
    setStep((prev) => prev + 1);
  }

  return (
    <View style={styles.buttonsWrapper}>
      <View style={styles.textContainer}>
        <Text style={styles.buttonsContainerText}>
          Your highest score: {highestScore}{" "}
        </Text>
        <Text style={styles.buttonsContainerText}>Score: {score}</Text>
        <Text style={styles.buttonsContainerText}>mistakes: {mistakes}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.soundButtonsContainer}>
        {activeSoundGroup.text.map((sound, i) => {
          if (i < soundsAmount) {
            return (
              <View key={sound}>
                <SoundButton soundName={sound} index={i} />
              </View>
            );
          } else {
            return null;
          }
        })}
      </View>
      {step === 5 && <Button title="Start!" onPress={startPlay} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsWrapper: {
    display: "flex",
    flex: 4,
    justifyContent: "center",
    // alignItems: "center",
  },
  buttonsContainer:{
    flex: 4,
  },
  soundButtonsContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 10,
    padding: 10,
  },
  buttonsContainerText: {
    fontSize: 20,
    lineHeight: 40,
    color: "white",
  },
  textContainer: {
    marginLeft: 40,
    flex: 3,
    display: "flex",
    justifyContent: "center",
  },
});

export default ButtonsContainer;
