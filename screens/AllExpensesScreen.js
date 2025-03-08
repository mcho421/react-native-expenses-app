import { FlatList, StyleSheet, Text, View } from "react-native";
import ExpenseItem from "../components/ExpenseItem";
import EditModal from "../components/EditModal";
import { useState } from "react";

export default function AllExpensesScreen() {
  [isEditing, setIsEditing] = useState(false);

  const expenses = [
    { key: 1, title: "Test", date: "2022-5-19", price: 19.99 },
    { key: 2, title: "A pair of shoes", date: "2022-2-19", price: 59.99 },
    { key: 3, title: "A pair of trousers", date: "2022-1-5", price: 89.29 },
    { key: 4, title: "Some bananas", date: "2021-12-1", price: 5.99 },
    { key: 5, title: "Test!!!!!", date: "2022-5-20", price: 29.99 },
    { key: 6, title: "A pair of trousers", date: "2022-1-5", price: 89.29 },
    { key: 7, title: "Some bananas", date: "2021-12-1", price: 5.99 },
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
          <Text style={{ color: "purple" }}>Total</Text>
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
