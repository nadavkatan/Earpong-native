import React from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import { StyleSheet } from "react-native";



const StyledContainer = ({children}) => {
  return (
    <LinearGradient 
    colors={['#100720', '#1C3879', '#31087B']} 
    style={styles.styledContainer}>
    {children}
    </LinearGradient>
  )
}
const styles = StyleSheet.create({
    styledContainer:{
        width: "95%",
        boxShadow: '0px 0px 40px 40px #DBA632',
        padding: 20,
        borderRadius: 15,
        minHeight: '46%',
        display: 'flex',
        justifyContent: 'center',
    }
})

export default StyledContainer