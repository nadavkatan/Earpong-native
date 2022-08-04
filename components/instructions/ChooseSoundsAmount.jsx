import React, { useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { AppContext } from "../../context/Context";
import StyledContainer from '../styledContainer/StyledContainer';

const ChooseSoundsAmount = () => {
    const { handleSoundsAmountChoice } = useContext(AppContext);
    const buttonText = [3, 4, 5, 6, 7];

  return (
    <View style={styles.chooseSoundsWrapper}>
      <StyledContainer>
      <Text style={styles.chooseSoundsText}> How many sounds would you like your practice to consist?</Text>
      <View style={styles.chooseSoundsButtonsContainer}>
      {
            buttonText.map((button, i)=>{
                return <Button title={button.toString()} key={button} onPress={()=> handleSoundsAmountChoice(i+3)} />
            })
        }
        <Button title="Chromatic" key='chromatic' onPress={()=> handleSoundsAmountChoice(12)} />
      </View>

      </StyledContainer>
    </View>
  );
};

const styles = StyleSheet.create({
    chooseSoundsWrapper: {
      flex: 4,
        alignItems: "center",
        justifyContent: "flex-end",
      },
      chooseSoundsContainer: {
        width: "80%",
      },
      chooseSoundsText:{
        fontSize:20,
        lineHeight:40,
        marginBottom: 30,
        color:'white'
      },
      chooseSoundsButtonsContainer:{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }
})

export default ChooseSoundsAmount;
