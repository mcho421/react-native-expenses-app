import { FlatList, StyleSheet, Text, View } from "react-native";
import ExpenseItem from "../components/ExpenseItem";
import EditModal from "../components/EditModal";
import { useState } from "react";

export default function RecentExpensesScreen() {
  [isEditing, setIsEditing] = useState(false);

  const expenses = [
    { key: 1, title: "A book", date: "2022-2-19", price: 14.99 },
    { key: 2, title: "Another book", date: "2022-2-18", price: 18.59 },
    { key: 3, title: "A book", date: "2022-2-19", price: 14.99 },
    { key: 4, title: "Another book", date: "2022-2-18", price: 18.59 },
  ];
  const totalExpense = expenses
    .map((expense) => expense.price)
    .reduce((acc, value) => acc + value, 0);

  return (
    <>
      <EditModal visible={isEditing} onClose={() => setIsEditing(false)} />
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
          <Text style={{ color: "purple" }}>Last 7 Days</Text>
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
    </>
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
