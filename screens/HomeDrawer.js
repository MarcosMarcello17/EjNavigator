import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const HomeDrawer = ({ navigation }) => {
  const [name, setName] = useState("");
  const value = Math.random() * 10000;

  useEffect(() => {
    const unsuscribe = navigation.addListener("focus", () => {
      console.log("Home");
    });
    return unsuscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>Home Screen: {value}</Text>
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
