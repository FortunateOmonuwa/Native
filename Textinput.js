import { TextInput, Text, View, Button, StyleSheet } from "react-native";

const Input = () => {
  return (
    <View style={styles.InputContainer}>
      <TextInput
        placeholder="Enter your goal"
        placeholderTextColor={"#000"}
        style={styles.goalInputStyle}
      />
      <Button title="Add Goal" />
    </View>
  );
};
const styles = StyleSheet.create({
  goalInputStyle: {
    //borderColor: "black",
    borderWidth: 0.5,

    justifyContent: "center",
    alignItems: "center",

    //marginBottom: 10,

    width: "78%",
    borderColor: "#cccccc",
    padding: 4,
  },

  InputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "#cccccc",
    borderBottomWidth: 1,
    flex: 0.18,
  },
});

export default Input;
