import { Button, Modal, Text, View } from "react-native";

export default function ManageExpense({ navigation }) {
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
}
