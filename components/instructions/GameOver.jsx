import React, {useContext} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {AppContext} from '../../context/Context';

const GameOver = () => {
    const { score, reset } = useContext(AppContext);
  return (
    <View>
        <Text>Game over!</Text>
        <Text>
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

export default GameOver