import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./Stack/TabStack";
import TaskPage from "./Screens/TaskPage";


const App = () => {
  return (
    <NavigationContainer>
      <TabNavigation/>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b1f24',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
