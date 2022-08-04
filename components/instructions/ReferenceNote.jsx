import React, { useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { AppContext } from "../../context/Context";
import StyledContainer from "../styledContainer/StyledContainer";

const ReferenceNote = () => {
  const { setStep, playC, language, playSound } = useContext(AppContext);

  const handlePlayC = () => {
    // playC();
    playSound(null, 'c');
    setStep((prev) => prev + 1);
  };

  return (
    <View style={styles.referenceWrapper}>
      {/* <View style={styles.referenceContainer}> */}
      <StyledContainer>
      <Text style={styles.referenceText}>
          I will now play the note {language === "english" ? "C" : "Do"} for you
          to have a reference. Then, once your ready, click 'Start training.
        </Text>
        <Button
          title={`Play ${language === "english" ? "C" : "Do"}`}
          onPress={handlePlayC}
        />
      </StyledContainer>

      {/* </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  referenceWrapper: {
    flex: 4,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  referenceContainer: {
    width: "80%",
  },
  referenceText:{
    fontSize:20,
    lineHeight:40,
    marginBottom: 30,
    color:'white'
  },
});

export default ReferenceNote;
