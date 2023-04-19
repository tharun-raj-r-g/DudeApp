import { View, Text,Dimensions } from 'react-native'
import React from 'react'
import TopIcons from '../Components/General Components/TopIcons';
const { width, height } = Dimensions.get("window");
import { Feather } from "@expo/vector-icons";

const TaskDetailsPage = (props) => {
  return (
    <View style={{
      backgroundColor: "#1b1f24"
    }}>
      <TopIcons/>
      <View
        style={{
          justifyContent: "space-evenly",
          flexDirection: "row",
          width: width,
          height:height*0.1,
          paddingBottom:20,
          marginTop:80,
          borderBottomColor:props.color,
          borderBottomWidth:1,
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
          TASK DETAILS
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
        </View>

      </View>
      <View style={{padding:"4%"}}>
      <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "white",
            alignItems:"flex-start",
            marginTop:20,
            marginBottom:30,
            marginRight:220
          }}
        >
          {props.tasks.taskname}
        </Text>
        <View style={{height:height*0.3,width:width-80,alignSelf:"center",borderRadius:30,borderWidth:2,borderColor:props.color,backgroundColor:"#283138"}}></View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            color: "white",
            alignItems:"flex-start",
            marginTop:20,
            marginBottom:30,
          }}
        >
         {props.tasks.taskdetails}
        </Text>
        <View style={{height:height*0.07,width:width-160,borderRadius:10,alignSelf:"center",borderWidth:2,borderColor:props.color,justifyContent:"center"}}>
          <Text style={{alignSelf:"center",fontWeight:"bold",fontSize:25,color:props.color}}>START</Text>
        </View>
        </View>
        <View style={{marginTop:600}}></View>
    </View>
  )
}

export default TaskDetailsPage