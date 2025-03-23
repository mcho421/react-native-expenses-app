import { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";

export default function RecentExpensesScreen() {
  const expensesCtx = useContext(ExpensesContext);
  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 365 * 3); // TODO: change to 7

    return expense.date > date7DaysAgo;
  });

  return <ExpensesOutput expenses={recentExpenses} periodName="Last 7 Days" />;
}
