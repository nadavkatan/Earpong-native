import React, { useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { AppContext } from "../../context/Context";

const ButtonsContainer = () => {
  const { step, soundGroups, activeSoundGroup, soundsAmount, playRandomSound, checkAnswer } =
    useContext(AppContext);

  return (
    <>
      <View>
        {soundGroups[activeSoundGroup].text.map((sound, i) => {
          if (i < soundsAmount) {
            return (
              <View key={sound}>
                {/* <SoundButton key={sound} index={i} soundName={sound} /> */}
                <Button title={sound} onPress={()=>checkAnswer(i)}/>
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

export default ButtonsContainer;
