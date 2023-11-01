import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TransfarScreen from "./src/TransfarScreen";
import BalanceScreen from "./src/BalanceScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    MontserratRegular: require("./assets/fonts/Montserrat-Regular.ttf"),
  });
 
 if (!fontsLoaded) {
   return null;
 }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TransfarScreen"
          component={TransfarScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BalanceScreen"
          component={BalanceScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
