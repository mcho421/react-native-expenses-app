import { StyleSheet, View, Text, FlatList } from "react-native";
import ExpenseItem from "../ExpenseItem";

export default function ExpensesOutput({
  expenses,
  summaryTitle,
  setIsEditing,
}) {
  const totalExpense = expenses
    .map((expense) => expense.price)
    .reduce((acc, value) => acc + value, 0);

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "white",
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          borderRadius: 4,
          padding: 8,
        }}
      >
        <Text style={{ color: "purple" }}>{summaryTitle}</Text>
        <Text style={{ color: "purple", fontWeight: "bold" }}>
          ${totalExpense}
        </Text>
      </View>
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
