import { Button, StyleSheet, Text, View } from "react-native";

const DetailsDrawer = ({ route, navigation }) => {
  const { userName } = route.params;
  return (
    <View style={styles.container}>
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
