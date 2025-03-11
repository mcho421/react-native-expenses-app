import { FlatList } from "react-native";
import ExpenseItem from "../ExpenseItem";

export default function ExpensesList({ expenses, setIsEditing }) {
  return (
    <FlatList
      style={{ width: "100%", gap: 12 }}
      data={expenses}
      renderItem={(itemData) => (
        <ExpenseItem
          description={itemData.item.description}
          date={itemData.item.date}
          amount={itemData.item.amount}
          onPress={() => setIsEditing(true)}
        />
      )}
    />
  );
}
