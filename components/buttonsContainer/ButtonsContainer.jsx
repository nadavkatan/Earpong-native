import React, { useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { AppContext } from "../../context/Context";
import SoundButton from '../soundButton/SoundButton';

const ButtonsContainer = () => {
  const { step, soundGroups, activeSoundGroup, soundsAmount, playRandomSound, score, mistakes } =
    useContext(AppContext);

  return (
    <>
    <Text>Score: { score }</Text>
    <Text>mistakes: { mistakes }</Text>
      <View  style={styles.buttonsContainer}>
        {soundGroups[activeSoundGroup].text.map((sound, i) => {
          if (i < soundsAmount) {
            return (
              <View key={sound}>
                <SoundButton soundName={sound} index={i}/>
              </View>
            );
          } else {
            return null;
          }
        })}
      </View>
      {step === 5 && (
        <Button title="play random sound" onPress={playRandomSound}/>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  buttonsContainer:{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 10,
    padding: 10
  }
})

export default ButtonsContainer;
