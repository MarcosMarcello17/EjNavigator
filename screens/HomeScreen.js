import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const HomeScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <TextInput
        placeholder="Nombre"
        onChangeText={(newName) => {
          setName(newName);
        }}
      />
      <Button
        title="Go to Details"
        onPress={() => {
          navigation.navigate("Details", { userName: name });
        }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
