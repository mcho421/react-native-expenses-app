import { useLayoutEffect } from "react";
import { View } from "react-native";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import Button from "../components/UI/Button";

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

  function cancelHandler() {
    navigation.goBack();
  }

  function confirmHandler() {}

  return (
    <View
      style={{
        backgroundColor: GlobalStyles.colors.primary800,
        flex: 1,
        padding: 24,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 18,
        }}
      >
        <Button
          mode="flat"
          onPress={cancelHandler}
          style={{ minWidth: 120, marginHorizontal: 8 }}
        >
          Cancel
        </Button>
        <Button
          onPress={confirmHandler}
          style={{ minWidth: 120, marginHorizontal: 8 }}
        >
          {isEditing ? "Update" : "Add"}
        </Button>
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
  );
}
