import EditModal from "../components/EditModal";
import { useState } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

export default function AllExpensesScreen() {
  [isEditing, setIsEditing] = useState(false);

  const expenses = [
    { id: 1, description: "Test", date: "2022-5-19", amount: 19.99 },
    {
      id: 2,
      description: "A pair of shoes",
      date: "2022-2-19",
      amount: 59.99,
    },
    {
      id: 3,
      description: "A pair of trousers",
      date: "2022-1-5",
      amount: 89.29,
    },
    { id: 4, description: "Some bananas", date: "2021-12-1", amount: 5.99 },
    { id: 5, description: "Test!!!!!", date: "2022-5-20", amount: 29.99 },
    {
      id: 6,
      description: "A pair of trousers",
      date: "2022-1-5",
      amount: 89.29,
    },
    { id: 7, description: "Some bananas", date: "2021-12-1", amount: 5.99 },
  ];

  return (
    <>
      <EditModal visible={isEditing} onClose={() => setIsEditing(false)} />
      <ExpensesOutput
        expenses={expenses}
        periodName="Total"
        setIsEditing={setIsEditing}
      />
    </>
  );
}
