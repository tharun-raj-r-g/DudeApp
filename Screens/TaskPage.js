import { View, Text } from "react-native";
import React from "react";

const TaskPage = () => {
  return (
    <View
      style={{
        backgroundColor: "#1b1f24",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          height: 200,
          width: 300,
          borderColor: "white",
          borderWidth: 3,
          justifyContent: "center",
          borderColor: "#00ffff",
          borderRadius: 15,
          backgroundColor:"#2b3138"
        }}
      ></View>
    </View>
  );
};

export default TaskPage;
