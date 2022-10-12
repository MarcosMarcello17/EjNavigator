import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Details from "./screens/Details";
import HomeScreen from "./screens/HomeScreen";
import HomeDrawer from "./screens/HomeDrawer";
import DetailsDrawer from "./screens/DetailsDrawer";

//const stack = createNativeStackNavigator();
const drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <drawer.Navigator initialRouteName="HomeDrawer">
        <drawer.Screen name="HomeDrawer" component={HomeDrawer} />
        <drawer.Screen name="DetailsDrewer" component={DetailsDrawer} />
      </drawer.Navigator>
      {/*<stack.Navigator>
        <stack.Screen name="Home" component={HomeScreen} />
        <stack.Screen name="Details" component={Details} />
  </stack.Navigator>*/}
    </NavigationContainer>
  );
}
