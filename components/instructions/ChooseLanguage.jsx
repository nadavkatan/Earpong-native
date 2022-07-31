import React, { useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { AppContext } from '../../context/Context';

const ChooseLanguage = () => {
    const { setStep, setLanguage } = useContext(AppContext);

    const handleLangChoice = (lang)=>{
        setLanguage(lang);
        setStep(3)
    }

  return (
    <View style={styles.chooseLangWrapper}>
      <View style={styles.chooseLangContainer}>
        <Text> Are you an 'A B C' or 'Do Re Mi' kind of musician?</Text>
        <Button title="A B C" onPress={()=>handleLangChoice("english")}/>
        <Button title="Do Re Me" onPress={()=>handleLangChoice("italian")}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chooseLangWrapper: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  chooseLangContainer: {
    width: "80%",
  },
});

export default ChooseLanguage;
