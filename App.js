import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import AllExpensesScreen from "./screens/AllExpensesScreen";
import RecentExpensesScreen from "./screens/RecentExpensesScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable } from "react-native";
import EditModal from "./components/EditModal";
import { useState } from "react";

const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen
          name="Recent Expenses"
          component={RecentExpensesScreen}
          options={{
            title: "Recent",
            headerTitle: "Recent Expenses",
            tabBarIcon: () => <Ionicons name="hourglass" size={24} />,
          }}
        />
        <BottomTab.Screen
          name="All Expenses"
          component={AllExpensesScreen}
          options={{
            title: "All Expenses",
            headerTitle: "All Expenses",
            tabBarIcon: () => <Ionicons name="calendar" size={24} />,
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
