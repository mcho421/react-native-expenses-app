import EditModal from "../components/EditModal";
import { useState } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

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

  return (
    <>
      <EditModal visible={isEditing} onClose={() => setIsEditing(false)} />
      <ExpensesOutput
        expenses={expenses}
        summaryTitle="Total"
        setIsEditing={setIsEditing}
      />
    </>
  );
}
