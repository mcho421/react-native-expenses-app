import { View, Text, Pressable } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { getFormattedDate } from "../../util/date";

export default function ExpenseItem({ description, date, amount, onPress }) {
  return (
    <Pressable onPress={onPress}>
      <View
        style={{
          backgroundColor: GlobalStyles.colors.primary500,
          flexDirection: "row",
          padding: 12,
          borderRadius: 6,
          width: "100%",
          justifyContent: "space-between",
          marginVertical: 8,
          elevation: 3,
          shadowColor: GlobalStyles.colors.gray500,
          shadowRadius: 4,
          shadowOffset: { width: 1, height: 1 },
          shadowOpacity: 0.4,
        }}
      >
        <View>
          <Text
            style={{
              color: GlobalStyles.colors.primary50,
              fontWeight: "bold",
              marginBottom: 4,
            }}
          >
            {description}
          </Text>
          <Text style={{ color: GlobalStyles.colors.primary50 }}>
            {getFormattedDate(date)}
          </Text>
        </View>
        <View
          style={{
            paddingHorizontal: 12,
            paddingVertical: 4,
            backgroundColor: "white",
            borderRadius: 4,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: GlobalStyles.colors.primary500,
              fontWeight: "bold",
            }}
          >
            {amount}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
