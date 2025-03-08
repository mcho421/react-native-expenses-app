import { Button, Modal, Text, View } from "react-native";

export default function AddModal({ visible, onClose }) {
  return (
    <Modal animationType="slide" visible={visible}>
      <View
        style={{
          backgroundColor: "darkblue",
          borderColor: "red",
          borderWidth: 1,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          overflow: "hidden",
          marginTop: 12,
          flex: 1,
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
              <Button title="Cancel" color="darkblue" onPress={onClose} />
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
