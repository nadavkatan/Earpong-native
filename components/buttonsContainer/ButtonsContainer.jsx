import React, { useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { AppContext } from "../../context/Context";
import SoundButton from "../soundButton/SoundButton";

const ButtonsContainer = () => {
  const {
    step,
    activeSoundGroup,
    soundsAmount,
    playRandomSound,
    score,
    highestScore,
    mistakes,
  } = useContext(AppContext);

  return (
    <View style={styles.buttonsWrapper}>
      <Text style={styles.buttonsContainerText}>Your highest score: {highestScore} </Text>
      <Text style={styles.buttonsContainerText}>Score: {score}</Text>
      <Text style={styles.buttonsContainerText}>mistakes: {mistakes}</Text>
      <View style={styles.buttonsContainer}>
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
      {step === 5 && (
        <Button title="Start!" onPress={playRandomSound} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsWrapper:{
    display: "flex",
    flex: 4,
    justifyContent: "center",
    alignItems: "center",

  },
  buttonsContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 10,
    padding: 10,
  },
  buttonsContainerText:{
    fontSize:20,
    lineHeight:40,
  },
});

export default ButtonsContainer;
