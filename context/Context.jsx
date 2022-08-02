import React, {useState, useEffect} from 'react';
import { Audio } from 'expo-av';
import { getSound } from '../utilities/playSound.utilities';

export const AppContext = React.createContext({});


const Context = ({children}) => {
    const soundGroups = [
        {
          name: "italianDiatonicSounds",
          active: false,
          text: ["do", "re", "mi", "fa", "sol", "la", "si"],
          sounds: ["c", "d", "e", "f", "g", "a", "b"],
        },
        {
          name: "italianChromaticSounds",
          active: false,
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
          active: true,
          sounds: ["c", "d", "e", "f", "g", "a", "b"],
          text: ["c", "d", "e", "f", "g", "a", "b"],
        },
        {
          name: "englishChromaticSounds",
          active: false,
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
      const [activeSoundGroup, setActiveSoundGroup] = useState(2);
      const [soundsAmount, setSoundsAmount] = useState(0);
      const [prevPlayedSound, setPrevPlayedSound] = useState({
        sound: "",
        index: "",
      });
      const [sound, setSound] = useState();
      const [score, setScore] = useState(0);
      const [mistakes, setMistakes] = useState(0);
      const [step, setStep] = useState(1);
      const [language, setLanguage] = useState(undefined);

        //set the amount of sounds to be practiced on, set the active sound group and proceed to the next step
  const handleSoundsAmountChoice = (num)=>{
    setSoundsAmount(num)
    if(language === "english"){
        if(num === 12){
            setActiveSoundGroup(3)
        }else{
            setActiveSoundGroup(2)
        }
    }else{
        if(num === 12){
          console.log('italian chromatic')
            setActiveSoundGroup(1)
        }else{
            setActiveSoundGroup(0)
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
 
    const currentSoundGroup = soundGroups[activeSoundGroup];
    
    const { randomSound, randomIndex } = getRandomSound(
        currentSoundGroup.sounds
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
    const currentSoundGroup = soundGroups[activeSoundGroup];
    const { sound } = await getSound(currentSoundGroup.sounds[index]);
    setSound(sound);
    await sound.playAsync();
  }
}

  const checkAnswer = (index) => {
    // check if the index of button that the user pressed matches the index of the played sound (prevPlayedSound)
    if (index === prevPlayedSound.index) {
      // console.log("correct");
      setScore((prev) => prev + 1);
      return true;
    } else {
      // console.log("wrong");
      setMistakes((prev) => prev + 1);
      return false;
    }
  };

  const reset = (step) => {
    setScore(0);
    setStep(step);
    setMistakes(0);
  };

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
        playRandomSound,
        checkAnswer,
        handleSoundsAmountChoice
    }}>
        {children}
    </AppContext.Provider>
  )
}

export default Context