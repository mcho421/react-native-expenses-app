import { StyleSheet, Text, View } from "react-native";

export default function RecentExpensesScreen() {
  return (
    <View style={styles.container}>
      <Text>Recent Expenses</Text>
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
