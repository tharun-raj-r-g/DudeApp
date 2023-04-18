import { View, Text } from 'react-native'
import React from 'react'
import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
const SkillRatingCircle = ({color,percentage}) => {
  return (
    <View
    style={{
      height: height * 0.15,
      width: width * 0.3,
      backgroundColor: color,
      borderRadius: 100,
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <View
      style={{
        height: height * 0.14,
        width: width * 0.28,
        backgroundColor: "#2b3138",
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text
        style={{ fontSize: 35, fontWeight: "bold", color: color }}
      >
        {percentage}
      </Text>
    </View>
  </View>
  )
}

export default SkillRatingCircle