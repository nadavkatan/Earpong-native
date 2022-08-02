import { Audio } from "expo-av";

export const getSound = async (audioSound, cb) => {
  await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });
  let soundObj;
  switch (audioSound) {
    case "a":
      soundObj = await Audio.Sound.createAsync(
        require("../assets/sounds/a.mp3")
      );
      return soundObj;
      break;
      case "a_sharp":
        soundObj = await Audio.Sound.createAsync(
          require("../assets/sounds/a_sharp.mp3")
        );
        return soundObj;
        break;
    case "b":
      soundObj = await Audio.Sound.createAsync(
        require("../assets/sounds/b.mp3")
      );
      return soundObj;
      break;
    case "c":
      soundObj = await Audio.Sound.createAsync(
        require("../assets/sounds/c.mp3")
      );
      return soundObj;
      break;
    case "c_sharp":
      soundObj = await Audio.Sound.createAsync(
        require("../assets/sounds/c_sharp.mp3")
      );
      return soundObj;
      break;
    case "d":
      soundObj = await Audio.Sound.createAsync(
        require("../assets/sounds/d.mp3")
      );
      return soundObj;
      break;
    case "d_sharp":
      soundObj = await Audio.Sound.createAsync(
        require("../assets/sounds/d_sharp.mp3")
      );
      return soundObj;
      break;
    case "e":
      soundObj = await Audio.Sound.createAsync(
        require("../assets/sounds/e.mp3")
      );
      return soundObj;
      break;
    case "f":
      soundObj = await Audio.Sound.createAsync(
        require("../assets/sounds/f.mp3")
      );
      return soundObj;
      break;
    case "f_sharp":
      soundObj = await Audio.Sound.createAsync(
        require("../assets/sounds/f_sharp.mp3")
      );
      return soundObj;
      break;
    case "g":
      soundObj = await Audio.Sound.createAsync(
        require("../assets/sounds/g.mp3")
      );
      return soundObj;
      break;
    case "g_sharp":
      soundObj = await Audio.Sound.createAsync(
        require("../assets/sounds/g_sharp.mp3")
      );
      return soundObj;
      break;
  }
};
