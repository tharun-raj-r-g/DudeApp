import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import TopIcons from "../Components/General Components/TopIcons";

export default function App() {
  const [selectedTab, setSelectedTab] = useState(1);

  return (
    <View style={styles.container}>
      <TopIcons />
      <View style={styles.topBar}>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 1 && styles.selectedTab]}
          onPress={() => setSelectedTab(1)}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === 1 && styles.selectedTabText,
            ]}
          >
            Report
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 2 && styles.selectedTab]}
          onPress={() => setSelectedTab(2)}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === 2 && styles.selectedTabText,
            ]}
          >
            Leaderboard
          </Text>
        </TouchableOpacity>
      </View>
      {selectedTab === 1 ? (
        <View style={styles.tabContent}>
          <Text style={{ color: "#fff" }}>Tab 1 Content</Text>
        </View>
      ) : (
        <View style={styles.tabContent}>
          <Text style={{ color: "#fff" }}>Tab 2 Content</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#1b1f24",
  },
  topBar: {
    flexDirection: "row",
    width: "90%",
    height: 28,
    backgroundColor: "#283138",
    borderRadius: 10,
    alignSelf: "center",
  },
  tab: {
    flex: 1,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  selectedTab: {
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  tabText: {
    color: "#fff",
    fontSize: 18,
    opacity: 0.5,
  },
  selectedTabText: {
    color: "#000",
    opacity: 1,
  },
  tabContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
