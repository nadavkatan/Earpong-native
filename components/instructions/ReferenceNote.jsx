import React, { useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { AppContext } from "../../context/Context";

const ReferenceNote = () => {
  const { setStep, playC, language, playSound } = useContext(AppContext);

  const handlePlayC = () => {
    // playC();
    playSound(null, 'c');
    setStep((prev) => prev + 1);
  };

  return (
    <View style={styles.referenceWrapper}>
      <View style={styles.referenceContainer}>
        <Text>
          I will now play the note {language === "english" ? "C" : "Do"} for you
          to have a reference. Then, once your ready, click 'Start training.
        </Text>
        <Button
          title={`Play ${language === "english" ? "C" : "Do"}`}
          onPress={handlePlayC}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  referenceWrapper: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  referenceContainer: {
    width: "80%",
  },
});

export default ReferenceNote;
