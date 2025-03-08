import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import AllExpensesScreen from "./screens/AllExpensesScreen";
import RecentExpensesScreen from "./screens/RecentExpensesScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable } from "react-native";
import EditModal from "./components/EditModal";
import { useState } from "react";
import AddModal from "./components/AddModal";

const BottomTab = createBottomTabNavigator();

export default function App() {
  [isEditing, setIsEditing] = useState(false);
  [isAdding, setIsAdding] = useState(false);

  return (
    <>
      <EditModal visible={isEditing} onClose={() => setIsEditing(false)} />
      <AddModal visible={isAdding} onClose={() => setIsAdding(false)} />
      <NavigationContainer>
        <BottomTab.Navigator
          screenOptions={{
            headerRight: () => (
              <Pressable
                style={{ marginRight: 12 }}
                onPress={() => setIsAdding(true)}
              >
                <Ionicons name="add" size={24} />
              </Pressable>
            ),
          }}
        >
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
    </>
  );
}
