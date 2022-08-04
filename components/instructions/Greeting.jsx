import React, { useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { AppContext } from "../../context/Context";
import StyledContainer from "../styledContainer/StyledContainer";
import Animated, { Keyframe } from 'react-native-reanimated';

const Greeting = () => {
  const { setStep } = useContext(AppContext);

  return (
    <View style={styles.greetingWrapper}>
      <StyledContainer>
        <Text style={styles.greetingText}>
          I'm Nadav! your virtual ear-training teacher 🤓 Our training will work
          like this: I will play a sound, and you have to recognize which sound
          I have played. When you think you know which sound I played, simply
          press the button with the name of sound on it! Are you ready?!
        </Text>
        <View style={styles.greetingBtnContainer}>
          <Button title="Got it!" onPress={() => setStep(2)} />
        </View>
      </StyledContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  greetingWrapper: {
    flex: 4,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  greetingContainer: {
    width: "95%",
    boxShadow: "0px 0px 40px 40px #DBA632",
    padding: 20,
    borderRadius: 15,
  },
  greetingText: {
    fontSize: 20,
    lineHeight: 40,
    color: "white",
  },
  greetingBtnContainer: {
    marginTop: 8,
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

export default Greeting;
