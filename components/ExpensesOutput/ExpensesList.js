import { FlatList } from "react-native";
import ExpenseItem from "./ExpenseItem";

export default function ExpensesList({ expenses }) {
  return (
    <FlatList
      style={{ width: "100%", gap: 12 }}
      data={expenses}
      renderItem={(itemData) => <ExpenseItem {...itemData.item} />}
      keyExtractor={(item) => item.id}
    />
  );
}
