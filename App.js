import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
} from "react-native";
import Input from "./Textinput";
import ListOfGoals from "./Goals";

export default function App() {
  return (
    <View style={styles.container}>
      <Input />
      <ListOfGoals />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 25,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
