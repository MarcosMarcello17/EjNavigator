import { Button, StyleSheet, Text, View } from "react-native";

const Details = ({ route, navigation }) => {
  const { userName } = route.params;
  return (
    <View style={styles.container}>
      <Text>Hola {JSON.stringify(userName)}</Text>
      <Button
        title="Go Back"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
