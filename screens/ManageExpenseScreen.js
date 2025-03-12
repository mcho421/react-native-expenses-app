import { useLayoutEffect } from "react";
import { Button, Modal, Pressable, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function ManageExpense({ route, navigation }) {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  if (!isEditing) {
    return (
      <Modal animationType="slide" transparent visible={true}>
        <View
          style={{
            backgroundColor: "darkblue",
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            overflow: "hidden",
            marginTop: 12,
            flex: 1,
            elevation: 6,
          }}
        >
          <View style={{ backgroundColor: "blue", padding: 8 }}>
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              Add Expense
            </Text>
          </View>
          <View style={{ padding: 16 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                gap: 18,
              }}
            >
              <View style={{ width: "35%" }}>
                <Button
                  title="Cancel"
                  color="darkblue"
                  onPress={() => navigation.goBack()}
                />
              </View>
              <View style={{ width: "35%" }}>
                <Button title="Add" />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    );
  } else {
    return (
      <Modal animationType="slide" transparent visible={true}>
        <View
          style={{
            backgroundColor: "darkblue",
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            overflow: "hidden",
            marginTop: 12,
            flex: 1,
            elevation: 6,
          }}
        >
          <View style={{ backgroundColor: "blue", padding: 8 }}>
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              Edit Expense
            </Text>
          </View>
          <View style={{ padding: 16 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                gap: 18,
              }}
            >
              <View style={{ width: "35%" }}>
                <Button
                  title="Cancel"
                  color="darkblue"
                  onPress={() => navigation.goBack()}
                />
              </View>
              <View style={{ width: "35%" }}>
                <Button title="Update" />
              </View>
            </View>
            <View
              style={{
                borderBottomColor: "white",
                borderBottomWidth: 1,
                margin: 12,
              }}
            />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Pressable
                style={{ padding: 6 }}
                onPress={() => navigation.goBack()}
              >
                <Ionicons name="trash" color="red" size={28}></Ionicons>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}
