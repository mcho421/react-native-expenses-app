import { StyleSheet, Text, View } from "react-native";

export default function AllExpensesScreen() {
  return (
    <View style={styles.container}>
      <Text>All Expenses</Text>
    </View>
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
