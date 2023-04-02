import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TaskPage from "../Screens/TaskPage";
import TaskListPage from "../TaskSubScreens/TaskListPage";
import TaskDetailsPage from "../TaskSubScreens/TaskDetailsPage";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

function TaskStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="TaskPage" component={TaskPage} />
      <Stack.Screen name="TaskListPage" component={TaskListPage} />
      <Stack.Screen name="TaskDetailsPage" component={TaskDetailsPage} />
    </Stack.Navigator>
  );
}

export default TaskStack;
