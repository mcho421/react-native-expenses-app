import { StyleSheet, View, FlatList } from "react-native";
import ExpenseItem from "../ExpenseItem";
import ExpensesSummary from "./ExpensesSummary";

export default function ExpensesOutput({
  expenses,
  summaryTitle,
  setIsEditing,
}) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} summaryTitle={summaryTitle} />
      <FlatList
        style={{ width: "100%", gap: 12 }}
        data={expenses}
        renderItem={(itemData) => (
          <ExpenseItem
            title={itemData.item.title}
            date={itemData.item.date}
            price={itemData.item.price}
            onPress={() => setIsEditing(true)}
          />
        )}
      />
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
