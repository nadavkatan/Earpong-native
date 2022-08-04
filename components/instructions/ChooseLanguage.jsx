import React, { useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { AppContext } from '../../context/Context';
import {LinearGradient} from 'expo-linear-gradient';
import StyledContainer from '../styledContainer/StyledContainer';


const ChooseLanguage = () => {
    const { setStep, setLanguage } = useContext(AppContext);

    const handleLangChoice = (lang)=>{
        setLanguage(lang);
        setStep(3)
    }

  return (
    <View style={styles.chooseLangWrapper}>
      {/* <LinearGradient style={styles.chooseLangContainer}> */}
      <StyledContainer>
      <Text style={styles.chooseLangText}> Are you an 'A B C' or 'Do Re Mi' kind of musician?</Text>
        <View style={styles.chooseLangButtonsContainer}>
          <Button title="A B C" onPress={()=>handleLangChoice("english")}/>
          <Button title="Do Re Me" onPress={()=>handleLangChoice("italian")}/>
        </View>
      </StyledContainer>

      {/* </LinearGradient> */}
    </View>
  );
};

const styles = StyleSheet.create({
  chooseLangWrapper: {
    flex: 4,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  chooseLangContainer: {
    width: "80%",
  },
  chooseLangText:{
    fontSize:20,
    lineHeight:40,
    marginBottom: 30,
    color:'white'
  },
  chooseLangButtonsContainer:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  }
});

export default ChooseLanguage;
