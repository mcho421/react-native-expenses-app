import EditModal from "../components/EditModal";
import { useState } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

export default function RecentExpensesScreen() {
  [isEditing, setIsEditing] = useState(false);

  const expenses = [
    { key: 1, description: "A book", date: "2022-2-19", price: 14.99 },
    { key: 2, description: "Another book", date: "2022-2-18", price: 18.59 },
    { key: 3, description: "A book", date: "2023-2-19", price: 14.99 },
    { key: 4, description: "Another book", date: "2022-2-18", price: 18.59 },
  ];

  return (
    <>
      <EditModal visible={isEditing} onClose={() => setIsEditing(false)} />
      <ExpensesOutput
        expenses={expenses}
        periodName="Last 7 Days"
        setIsEditing={setIsEditing}
      />
    </>
  );
}
