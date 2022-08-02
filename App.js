import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// import Greeting from './components/instructions/Greeting';
import Home from "./components/home/Home";
import Context from "./context/Context";

export default function App() {
  return (
    <Context>
      <Home />
    </Context>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
