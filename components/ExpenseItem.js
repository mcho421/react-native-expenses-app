import { View, Text } from "react-native";

export default function ExpenseItem({ title, date, price }) {
  return (
    <View
      style={{
        backgroundColor: "blue",
        flexDirection: "row",
        padding: 12,
        borderRadius: 4,
        width: "100%",
        justifyContent: "space-between",
        marginVertical: 6,
      }}
    >
      <View>
        <Text style={{ color: "white", fontWeight: "bold" }}>{title}</Text>
        <Text style={{ color: "white" }}>{date}</Text>
      </View>
      <View
        style={{
          backgroundColor: "white",
          width: "20%",
          borderRadius: 4,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "purple", fontWeight: "bold" }}>{price}</Text>
      </View>
    </View>
  );
}
