import { View, Text } from 'react-native'
import React from 'react'
import { Dimensions } from "react-native";
import { Feather } from "@expo/vector-icons";
const { width, height } = Dimensions.get("window");

const TopIcons = () => {
  return (
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
          <Feather name={"user"} size={25} color={"white"} />
        </View>
        <View
          style={{
            height: 30,
            width: 30,
            margin: 30,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Feather name={"bell"} size={25} color={"white"} />
        </View>
      </View>
  )
}

export default TopIcons