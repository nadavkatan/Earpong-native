import React, {useState, useEffect} from 'react';
import { Audio } from 'expo-av';
import { getSound } from '../utilities/playSound.utilities';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AppContext = React.createContext({});

const Context = ({children}) => {
    const soundGroups = [
        {
          name: "italianDiatonicSounds",
          text: ["do", "re", "mi", "fa", "sol", "la", "si"],
          sounds: ["c", "d", "e", "f", "g", "a", "b"],
        },
        {
          name: "italianChromaticSounds",
          text: [
            "do",
            "do #",
            "re",
            "re #",
            "mi",
            "fa",
            "fa #",
            "sol",
            "sol #",
            "la",
            "la #",
            "si",
          ],
          sounds: [
            "c",
            "c_sharp",
            "d",
            "d_sharp",
            "e",
            "f",
            "f_sharp",
            "g",
            "g_sharp",
            "a",
            "a_sharp",
            "b",
          ],
        },
        {
          name: "englishDiatonicSounds",
          sounds: ["c", "d", "e", "f", "g", "a", "b"],
          text: ["c", "d", "e", "f", "g", "a", "b"],
        },
        {
          name: "englishChromaticSounds",
          text: ["c", "c#", "d", "d#", "e", "f", "f#", "g", "g#", "a", "a#", "b"],
          sounds: [
            "c",
            "c_sharp",
            "d",
            "d_sharp",
            "e",
            "f",
            "f_sharp",
            "g",
            "g_sharp",
            "a",
            "a_sharp",
            "b",
          ],
        },
      ];
      const [activeSoundGroup, setActiveSoundGroup] = useState(soundGroups[0]);
      const [soundsAmount, setSoundsAmount] = useState(0);
      const [prevPlayedSound, setPrevPlayedSound] = useState({
        sound: "",
        index: "",
      });
      const [sound, setSound] = useState();
      const [score, setScore] = useState(0);
      const [highestScore, setHighestScore] = useState(0);
      const [mistakes, setMistakes] = useState(0);
      const [step, setStep] = useState(1);
      const [language, setLanguage] = useState(undefined);
      const [currentAvatar, setCurrentAvatar] = useState('neutral');

        //set the amount of sounds to be practiced on, set the active sound group and proceed to the next step
  const handleSoundsAmountChoice = (num)=>{
    setSoundsAmount(num)
    if(language === "english"){
        if(num === 12){
            setActiveSoundGroup(soundGroups[3])
        }else{
            setActiveSoundGroup(soundGroups[2])
        }
    }else{
        if(num === 12){
          console.log('italian chromatic')
            setActiveSoundGroup(soundGroups[1])
        }else{
            setActiveSoundGroup(soundGroups[0])
        }
    }

setStep((prev) => prev + 1);
}

const getRandomSound = (sounds) => {
    let randomIndex = Math.floor(Math.random() * soundsAmount);
    let randomSound = sounds[randomIndex];
    if (randomSound === prevPlayedSound.sound) {
      return getRandomSound(sounds);
    }
    return { randomSound, randomIndex };
  };

  const playRandomSound = async() => {
    
    setCurrentAvatar('neutral')

    const { randomSound, randomIndex } = getRandomSound(
        activeSoundGroup.sounds
    );
    // store the played sound to be compared later with the user's answer
    setPrevPlayedSound({
      sound: randomSound,
      index: randomIndex,
    });
    //play the random sound
    const { sound } = await getSound(randomSound);
    setSound(sound);
     await sound.playAsync();
};

const playSound = async(index, soundName)=>{
  if(soundName){
    const { sound } = await getSound(soundName);
    setSound(sound);
    await sound.playAsync();
  }else{
    const { sound } = await getSound(activeSoundGroup.sounds[index]);
    setSound(sound);
    await sound.playAsync();
  }
}

  const checkAnswer = (index) => {
    // check if the index of button that the user pressed matches the index of the played sound (prevPlayedSound)
    if (index === prevPlayedSound.index) {
      // console.log("correct");
      setCurrentAvatar('neutral')
      setScore((prev) => prev + 1);
      return true;
    } else {
      // console.log("wrong");
      setCurrentAvatar('angry')
      setMistakes((prev) => prev + 1);
      return false;
    }
  };

  const reset = (step) => {
    setScore(0);
    setStep(step);
    setMistakes(0);
  };

  const storeHighestScore = async (score) => {
    try {
      await AsyncStorage.setItem('@earpong_highest_score', score.toString())
    } catch (e) {
      // saving error
      console.log(e)
    }
  }

const getStoredHighestScore = async () => {
  try {
    const storedHighestScore = await AsyncStorage.getItem('@earpong_highest_score');
    console.log('storedHighestScore', storedHighestScore);
    if(storedHighestScore === null) {
      storeHighestScore("0");
    }else{
      setHighestScore(Number(storedHighestScore));
    }
  } catch(e) {
    // error reading value
    console.log(e)
  }
}

const updateHighestScore = () =>{
  if(score > highestScore){
    setHighestScore(score)
    storeHighestScore(score)
  }
}

  useEffect(()=>{
    getStoredHighestScore()
  },[])

  useEffect(()=>{
    return sound
      ? () => {
          sound.unloadAsync(); }
      : undefined;
  },[sound])

  return (
    <AppContext.Provider value={{
        soundGroups,
        setScore,
        reset,
        step,
        playSound,
        setStep,
        language,
        setLanguage,
        mistakes,
        setActiveSoundGroup,
        soundsAmount,
        setSoundsAmount,
        activeSoundGroup,
        prevPlayedSound,
        score,
        currentAvatar,
        setCurrentAvatar,
        highestScore,
        updateHighestScore,
        playRandomSound,
        checkAnswer,
        handleSoundsAmountChoice
    }}>
        {children}
    </AppContext.Provider>
  )
}

export default Context