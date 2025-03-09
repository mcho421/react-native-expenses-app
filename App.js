import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllExpensesScreen from "./screens/AllExpensesScreen";
import RecentExpensesScreen from "./screens/RecentExpensesScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import ManageExpense from "./screens/ManageExpenseScreen";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function ExpensesOverview({ navigation }) {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "blue",
        },
        headerRight: () => (
          <Pressable
            style={{ marginRight: 12 }}
            onPress={() => navigation.navigate("ManageExpense")}
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
        name="RecentExpenses"
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
        name="AllExpenses"
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
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="ExpensesOverview"
            component={ExpensesOverview}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="ManageExpense" component={ManageExpense} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
