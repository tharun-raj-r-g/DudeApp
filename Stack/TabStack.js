import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import TaskStack from "./TaskStack";
import CommunityPage from "../Screens/CommunityPage";
import ReportPage from "../Screens/ReportPage";
import NewsPage from "../Screens/NewsPage";
import TaskPage from "../Screens/TaskPage";

const Tab = createBottomTabNavigator();

const TabBarIcon = ({ iconName, focused }) => {
  return (
    <View style={{ alignItems: "center" ,backgroundColor:focused?"#00ffff":"#1b1f24",borderRadius:11,height:35,width:40}}>
      <Feather
        name={iconName}
        size={29}
        color={focused ? "black" : "#ffffff"}
      />
      
    </View>
  );
};

const TabNavigation = () => {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIconStyle: {
          marginLeft: 40,
          marginRight: 40,
        },
        tabBarLabelStyle: {
          fontSize: 10,
        },
        tabBarStyle: {
          backgroundColor: "#1b1f24",
          borderTopWidth:0,
          
        },
        tabBarHideOnKeyboard: true,
        headerShown: false,
        activeTintColor: "#ffffff",

        tabBarIcon: ({ color, size, focused }) => {
          let iconName;

          if (route.name === "Task") {
            iconName = "clipboard";
          } else if (route.name === "CommunityPage") {
            iconName = "users";
          } else if (route.name === "ReportPage") {
            iconName = "bar-chart";
          } else if (route.name === "NewsPage") {
            iconName = "globe";
          } 

          return <TabBarIcon iconName={iconName} focused={focused} />;
        },
      })}
      tabBarOptions={{
        showLabel: false,
      }}
    >
      <Tab.Screen name="Task" component={TaskStack} />
      <Tab.Screen name="CommunityPage" component={CommunityPage} />
      <Tab.Screen name="ReportPage" component={ReportPage} />
      <Tab.Screen name="NewsPage" component={NewsPage} />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
