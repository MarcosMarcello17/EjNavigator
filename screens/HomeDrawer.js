import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const HomeDrawer = ({ navigation }) => {
  const [name, setName] = useState("");
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          navigation.navigate("DetailsDrewer", { userName: name });
        }}
      />
    </View>
  );
};

export default HomeDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
