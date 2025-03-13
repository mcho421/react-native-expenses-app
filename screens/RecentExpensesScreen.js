import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

export default function RecentExpensesScreen() {
  const expenses = [
    {
      id: 1,
      description: "A book",
      date: new Date("2022-2-19"),
      amount: 14.99,
    },
    {
      id: 2,
      description: "Another book",
      date: new Date("2022-2-18"),
      amount: 18.59,
    },
    {
      id: 3,
      description: "A book",
      date: new Date("2023-2-19"),
      amount: 14.99,
    },
    {
      id: 4,
      description: "Another book",
      date: new Date("2022-2-18"),
      amount: 18.59,
    },
  ];

  return <ExpensesOutput expenses={expenses} periodName="Last 7 Days" />;
}
