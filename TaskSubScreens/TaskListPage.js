import { View, Text,ScrollView } from "react-native";
import React from "react";
import TopIcons from "../Components/General Components/TopIcons";
import { Dimensions } from "react-native";
import { Feather } from "@expo/vector-icons";
const { width, height } = Dimensions.get("window");
import taskdata from "../task.json";
import Tasklistcomponent from "../Components/TaskComponents/Tasklistcomponent";
import TaskDetailsPage from "./TaskDetailsPage";

const TaskListPage = ({route,navigation}) => {
  const {skillid}=route.params;
  return (
    <View style={{ backgroundColor: "#1b1f24",flex:1 }}>
      <TopIcons />
      <View
        style={{
          justifyContent: "space-evenly",
          flexDirection: "row",
          width: width,
          marginTop:80,
        }}
      >
        <View
          style={{
            height: 30,
            width: 30,
            alignSelf:"center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Feather name={"arrow-left"} size={25} color={"white"} />
        </View>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "white",
            alignSelf:"center",
            alignItems: "center",
            justifyContent: "center",
            textAlign:"center"
          }}
        >
          {taskdata.skills[skillid].name}
        </Text>
        <View
          style={{
            height: 30,
            width: 30,
            alignSelf:"center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Feather name={"calendar"} size={25} color={"white"} />
        </View>
      </View>
      <View
        style={{
          height: 70,
          width: 300,
          backgroundColor: "#2b3138",
          alignSelf: "center",
          borderRadius: 25,
          borderWidth: 3,
          borderColor: taskdata["skills"][skillid].color,
          justifyContent: "space-evenly",
          alignItems: "center",
          flexDirection: "row",
          marginTop:10,
          marginBottom:30
        }}
      >
        <View
          style={{
            backgroundColor: taskdata["skills"][skillid].color,
            height: 30,
            width: 70,
            borderTopRightRadius: 30,
            borderBottomLeftRadius: 30,
            alignItems: "center",
            justifyContent: "center",
          }}
        ></View>
        <Text style={{ fontSize: 28, color: taskdata["skills"][skillid].color, fontWeight: "bold" }}>
          {taskdata["skills"][skillid].dudepoints}
        </Text>
        <View
          style={{
            backgroundColor: taskdata["skills"][skillid].color,
            height: 30,
            width: 70,
            borderTopLeftRadius: 30,
            borderBottomRightRadius: 30,
            alignItems: "center",
            justifyContent: "center",
          }}
        ></View>
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: taskdata["skills"][skillid].color,
          flex: 0.5,
        }}
      ></View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {taskdata.skills[skillid].weektasks.map((item,index)=>(
          <Tasklistcomponent id={skillid} taskdata={taskdata} item={item} index={index} navigation={navigation}/>
        ))}
      </ScrollView>
    </View>
  );
};

export default TaskListPage;
