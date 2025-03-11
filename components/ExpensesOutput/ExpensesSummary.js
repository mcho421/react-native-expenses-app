import { Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

export default function ExpensesSummary({ expenses, periodName }) {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View
      style={{
        backgroundColor: GlobalStyles.colors.primary50,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 6,
        padding: 8,
      }}
    >
      <Text style={{ fontSize: 12, color: GlobalStyles.colors.primary400 }}>
        {periodName}
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: "bold",
          color: GlobalStyles.colors.primary500,
        }}
      >
        ${expensesSum.toFixed(2)}
      </Text>
    </View>
  );
}
