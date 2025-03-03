import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import AllExpensesScreen from "./screens/AllExpensesScreen";
import RecentExpensesScreen from "./screens/RecentExpensesScreen";

const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen
          name="Recent Expenses"
          component={RecentExpensesScreen}
        />
        <BottomTab.Screen name="All Expenses" component={AllExpensesScreen} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
