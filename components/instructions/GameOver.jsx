import React, {useContext} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {AppContext} from '../../context/Context';

const GameOver = () => {
    const { score, reset } = useContext(AppContext);
  return (
    <View style={styles.gameOverWrapper}>
        <Text style={styles.gameOverText}>Game over!</Text>
        <Text style={styles.gameOverText}>
        {score < 5
          ? `Your score is ${score}. Keep practicing!`
          : score < 10
          ? `Not bad! your score is ${score}. Keep practicing!`
          : `Well done! your score is ${score}! you're a real pro!`}
      </Text>
      <View>
        <Button title="Play again" onPress={()=> reset(4)}/>
        <Button title="Change amount of sounds" onPress={()=> reset(3)}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  gameOverWrapper: {
    flex: 4,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    gameOverText:{
      fontSize:20,
      // lineHeight:40,
      marginBottom: 30
    },
})

export default GameOver