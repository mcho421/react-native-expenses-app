import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: 1,
    description: "Test",
    date: new Date("2022-5-19"),
    amount: 19.99,
  },
  {
    id: 2,
    description: "A pair of shoes",
    date: new Date("2022-2-19"),
    amount: 59.99,
  },
  {
    id: 3,
    description: "A pair of trousers",
    date: new Date("2022-1-5"),
    amount: 89.29,
  },
  {
    id: 4,
    description: "Some bananas",
    date: new Date("2021-12-1"),
    amount: 5.99,
  },
  {
    id: 5,
    description: "Test!!!!!",
    date: new Date("2022-5-20"),
    amount: 29.99,
  },
  {
    id: 6,
    description: "A pair of trousers",
    date: new Date("2022-1-5"),
    amount: 89.29,
  },
  {
    id: 7,
    description: "Some bananas",
    date: new Date("2021-12-1"),
    amount: 5.99,
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id != action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
