import { useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const DetailsDrawer = ({ route, navigation }) => {
  const { userName } = route.params;
  const value = Math.random() * 10000;
  useEffect(() => {
    const unsuscribe = navigation.addListener("focus", () => {
      console.log("Details");
    });
    return unsuscribe;
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Text>Random: {value}</Text>
      <Button
        title="Go Back"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};

export default DetailsDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
