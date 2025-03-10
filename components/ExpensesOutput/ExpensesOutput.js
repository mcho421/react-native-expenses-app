import { StyleSheet, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

export default function ExpensesOutput({
  expenses,
  summaryTitle,
  setIsEditing,
}) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} summaryTitle={summaryTitle} />
      <ExpensesList expenses={expenses} setIsEditing={setIsEditing} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "darkblue",
    alignItems: "center",
    padding: 24,
  },
});
