import { View, Text, ListRenderItem, StyleSheet } from "react-native";

const ListOfGoals = () => {
  return (
    <View>
      <Text style={styles.goals}>Goals</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  goals: {
    marginVertical: 10,
    // textTransform: "uppercase",
  },
});

export default ListOfGoals;
