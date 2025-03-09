import { Text, View } from "react-native";

export default function ExpensesSummary({ expenses, summaryTitle }) {
  const totalExpense = expenses
    .map((expense) => expense.price)
    .reduce((acc, value) => acc + value, 0);

  return (
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
  );
}
