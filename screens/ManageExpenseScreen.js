import { useLayoutEffect } from "react";
import { Button, Text, View } from "react-native";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";

export default function ManageExpense({ route, navigation }) {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {
    navigation.goBack();
  }

  return (
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
          {isEditing ? "Edit Expense" : "Add Expense"}
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
            <Button title={isEditing ? "Update" : "Add"} />
          </View>
        </View>
        {isEditing && (
          <View
            style={{
              marginTop: 16,
              paddingTop: 8,
              borderTopWidth: 2,
              borderTopColor: GlobalStyles.colors.primary200,
              alignItems: "center",
            }}
          >
            <IconButton
              icon="trash"
              color={GlobalStyles.colors.error500}
              size={36}
              onPress={deleteExpenseHandler}
            />
          </View>
        )}
      </View>
    </View>
  );
}
