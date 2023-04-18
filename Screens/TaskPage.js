import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Dimensions } from "react-native";
import { Feather } from "@expo/vector-icons";
import SkillRatingCircle from "../Components/TaskComponents/SkillRatingCircle";
import TopIcons from "../Components/General Components/TopIcons";
const { width, height } = Dimensions.get("window");

const TaskPage = ({navigation}) => {
  return (
    <View
      style={{
        backgroundColor: "#1b1f24",
        flex: 6,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TopIcons/>
      <View
        style={{
          height: 200,
          width: 300,
          borderColor: "white",
          borderWidth: 3,
          justifyContent: "center",
          borderColor: "#00ffff",
          borderRadius: 15,
          backgroundColor: "#2b3138",
          flex: 1.5,
        }}
      >
        <Text style={{ fontSize: 14, color: "#979292", padding: 5, flex: 1 }}>
          Welcome Back!
        </Text>
        <Text
          style={{
            fontSize: 22,
            color: "white",
            padding: 5,
            fontWeight: "bold",
            flex: 2,
          }}
        >
          Subha
        </Text>
        <Text
          style={{
            fontSize: 18,
            color: "#ff00ff",
            padding: 5,
            fontWeight: "bold",
            flex: 1,
          }}
        >
          7500dp
        </Text>
        <Image
          style={[{ height: 100, width: 290, flex: 4, borderRadius: 10 }]}
          source={require("../assets/linegraph.png")}
        />
      </View>
      <View
        style={{
          height: height * 0.25,
          width: width,
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() =>
              navigation.navigate("TaskListPage")
            }>
          <SkillRatingCircle color="#ffff00" percentage="59%" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>
              navigation.navigate("TaskListPage")
            }>
          <SkillRatingCircle color="#24ff00" percentage="60%" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: height * 0.25,
          width: width,
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() =>
              navigation.navigate("TaskListPage")
            }>
          <SkillRatingCircle color="#00c2ff" percentage="50%" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>
              navigation.navigate("TaskListPage")
            }>
          <SkillRatingCircle color="#ff3737" percentage="70%" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TaskPage;
