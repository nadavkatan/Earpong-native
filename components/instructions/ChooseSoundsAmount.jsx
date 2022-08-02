import React, { useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { AppContext } from "../../context/Context";

const ChooseSoundsAmount = () => {
    const { handleSoundsAmountChoice } = useContext(AppContext);
    const buttonText = [3, 4, 5, 6, 7];

  return (
    <View style={styles.chooseSoundsWrapper}>
      <View style={styles.chooseSoundsContainer}>
      <Text style={styles.chooseSoundsText}> How many sounds would you like your practice to consist?</Text>
      <View style={styles.chooseSoundsButtonsContainer}>
      {
            buttonText.map((button, i)=>{
                return <Button title={button.toString()} key={button} onPress={()=> handleSoundsAmountChoice(i+3)} />
            })
        }
        <Button title="Chromatic" key='chromatic' onPress={()=> handleSoundsAmountChoice(12)} />
      </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    chooseSoundsWrapper: {
      flex: 4,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      },
      chooseSoundsContainer: {
        width: "80%",
      },
      chooseSoundsText:{
        fontSize:20,
        lineHeight:40,
        marginBottom: 30
      },
      chooseSoundsButtonsContainer:{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }
})

export default ChooseSoundsAmount;
