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
        <Text style={styles.chooseLangText}> Are you an 'A B C' or 'Do Re Mi' kind of musician?</Text>
        <View style={styles.chooseLangButtonsContainer}>
          <Button title="A B C" onPress={()=>handleLangChoice("english")}/>
          <Button title="Do Re Me" onPress={()=>handleLangChoice("italian")}/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chooseLangWrapper: {
    flex: 4,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  chooseLangContainer: {
    width: "80%",
  },
  chooseLangText:{
    fontSize:20,
    lineHeight:40,
    marginBottom: 30
  },
  chooseLangButtonsContainer:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  }
});

export default ChooseLanguage;
