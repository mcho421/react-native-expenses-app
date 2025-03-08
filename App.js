import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import AllExpensesScreen from "./screens/AllExpensesScreen";
import RecentExpensesScreen from "./screens/RecentExpensesScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable } from "react-native";
import { useState } from "react";
import AddModal from "./components/AddModal";
import { StatusBar } from "expo-status-bar";

const BottomTab = createBottomTabNavigator();

export default function App() {
  [isAdding, setIsAdding] = useState(false);

  return (
    <>
      <StatusBar style="light" />
      <AddModal visible={isAdding} onClose={() => setIsAdding(false)} />
      <NavigationContainer>
        <BottomTab.Navigator
          screenOptions={{
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: "blue",
            },
            headerRight: () => (
              <Pressable
                style={{ marginRight: 12 }}
                onPress={() => setIsAdding(true)}
              >
                <Ionicons name="add" size={24} color="white" />
              </Pressable>
            ),
            tabBarStyle: {
              backgroundColor: "blue",
            },
            tabBarActiveTintColor: "yellow",
            tabBarInactiveTintColor: "gray",
          }}
        >
          <BottomTab.Screen
            name="Recent Expenses"
            component={RecentExpensesScreen}
            options={{
              title: "Recent",
              headerTitle: "Recent Expenses",
              tabBarIcon: ({ color }) => (
                <Ionicons name="hourglass" size={24} color={color} />
              ),
            }}
          />
          <BottomTab.Screen
            name="All Expenses"
            component={AllExpensesScreen}
            options={{
              title: "All Expenses",
              headerTitle: "All Expenses",
              tabBarIcon: ({ color }) => (
                <Ionicons name="calendar" size={24} color={color} />
              ),
            }}
          />
        </BottomTab.Navigator>
      </NavigationContainer>
    </>
  );
}
