import React, { useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { AppContext } from "../../context/Context";

const ChooseSoundsAmount = () => {
    const { handleSoundsAmountChoice } = useContext(AppContext);
    const buttonText = [3, 4, 5, 6, 7];

  return (
    <View style={styles.chooseSoundsWrapper}>
      <View style={styles.chooseSoundsContainer}>
      <Text> How many sounds would you like your practice to consist?</Text>
        {
            buttonText.map((button, i)=>{
                return <Button title={button.toString()} key={button} onPress={()=> handleSoundsAmountChoice(i+3)} />
            })
        }
        <Button title="Chromatic" key='chromatic' onPress={()=> handleSoundsAmountChoice(12)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    chooseSoundsWrapper: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      },
      chooseSoundsContainer: {
        width: "80%",
      },
})

export default ChooseSoundsAmount;
