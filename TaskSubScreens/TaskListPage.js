import { View, Text,ScrollView } from "react-native";
import React from "react";
import TopIcons from "../Components/General Components/TopIcons";
import { Dimensions } from "react-native";
import { Feather } from "@expo/vector-icons";
const { width, height } = Dimensions.get("window");

const TaskListPage = () => {
  return (
    <View style={{ backgroundColor: "#1b1f24", flex: 1 }}>
      <TopIcons />
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          flexDirection: "row",
          width: width,
        }}
      >
        <View
          style={{
            height: 30,
            width: 30,
            margin: 27,
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
            margin: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          CODING
        </Text>
        <View
          style={{
            height: 30,
            width: 30,
            margin: 30,
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
          borderColor: "#ffff00",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            backgroundColor: "#ffff00",
            height: 30,
            width: 70,
            borderTopRightRadius: 30,
            borderBottomLeftRadius: 30,
            alignItems: "center",
            justifyContent: "center",
          }}
        ></View>
        <Text style={{ fontSize: 28, color: "#ffff00", fontWeight: "bold" }}>
          3000
        </Text>
        <View
          style={{
            backgroundColor: "#ffff00",
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
          borderBottomColor: "#ffff00",
          flex: 0.5,
        }}
      ></View>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ flex: 4, flexDirection: "row" }}>
        <View style={{ flex: 1 }}>
          <View
            style={{
              height: 40,
              width: 60,
              borderRadius: 20,
              backgroundColor: "white",
              marginTop: 20,
              marginLeft: 20,
              marginRight: 20,
            }}
          >
            <Text
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: 25,
                alignSelf: "center",
              }}
            >
              20
            </Text>
          </View>
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 20,
              alignSelf: "center",
            }}
          >
            Jan
          </Text>
          <Text
            style={{
              color: "grey",
              fontSize: 15,
              alignSelf: "center",
            }}
          >
            Mon
          </Text>
        </View>

        <View style={{ flex: 3 }}>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#ffff00",
              height: height * 0.1,
              width: width*0.75,
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems:"center"
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 25, flex: 1,marginLeft:20,color:"white"}}>
              Task-1
            </Text>
            <View style={{height:30,width:50,backgroundColor:"#ffff00",marginRight:20,borderRadius:20,alignItems:"center",justifyContent:"center"}}><Text style={{ color:"black"}}>
              Deets
            </Text></View>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#ffff00",
              height: height * 0.1,
              width: width*0.75,
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems:"center"
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 25, flex: 1,marginLeft:20,color:"white"}}>
              Task-2
            </Text>
            <View style={{height:30,width:50,backgroundColor:"#ffff00",marginRight:20,borderRadius:20,alignItems:"center",justifyContent:"center"}}><Text style={{ color:"black"}}>
              Deets
            </Text></View>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#ffff00",
              height: height * 0.1,
              width: width*0.75,
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems:"center"
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 25, flex: 1,marginLeft:20,color:"white"}}>
              Task-3
            </Text>
            <View style={{height:30,width:50,backgroundColor:"#ffff00",marginRight:20,borderRadius:20,alignItems:"center",justifyContent:"center"}}><Text style={{ color:"black"}}>
              Deets
            </Text></View>
          </View>
         
        </View>
        
      </View>
      
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "#ffff00",
          flex: 0.5,
        }}
      ></View>
      <View style={{ flex: 4, flexDirection: "row" }}>
        <View style={{ flex: 1 }}>
          <View
            style={{
              height: 40,
              width: 60,
              borderRadius: 20,
              backgroundColor: "white",
              marginTop: 20,
              marginLeft: 20,
              marginRight: 20,
            }}
          >
            <Text
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: 25,
                alignSelf: "center",
              }}
            >
              20
            </Text>
          </View>
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 20,
              alignSelf: "center",
            }}
          >
            Jan
          </Text>
          <Text
            style={{
              color: "grey",
              fontSize: 15,
              alignSelf: "center",
            }}
          >
            Mon
          </Text>
        </View>

        <View style={{ flex: 3 }}>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#ffff00",
              height: height * 0.1,
              width: width*0.75,
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems:"center"
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 25, flex: 1,marginLeft:20,color:"white"}}>
              Task-1
            </Text>
            <View style={{height:30,width:50,backgroundColor:"#ffff00",marginRight:20,borderRadius:20,alignItems:"center",justifyContent:"center"}}><Text style={{ color:"black"}}>
              Deets
            </Text></View>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#ffff00",
              height: height * 0.1,
              width: width*0.75,
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems:"center"
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 25, flex: 1,marginLeft:20,color:"white"}}>
              Task-2
            </Text>
            <View style={{height:30,width:50,backgroundColor:"#ffff00",marginRight:20,borderRadius:20,alignItems:"center",justifyContent:"center"}}><Text style={{ color:"black"}}>
              Deets
            </Text></View>
          </View>
         
        </View>
        
      </View>
      
      </ScrollView>
    </View>
  );
};

export default TaskListPage;
