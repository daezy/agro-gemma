import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";

// import your screen components

import { Tabs } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

// const Tab = createBottomTabNavigator();

// styling constants
const PRIMARY = "#00B386";
const SP = 16;

export default function Layout() {
  return (
    <>
      <Tabs
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            position: "absolute",
            bottom: 40,
            left: SP,
            right: SP,
            height: 64,
            backgroundColor: "#fff",
            borderWidth: 2,
            borderColor: PRIMARY,
            borderRadius: 32,
          },
          tabBarIcon: ({ focused, color, size }) => {
            // pick the right icon name
            let iconName: React.ComponentProps<typeof Ionicons>["name"];
            if (route.name === "diagnose") iconName = "camera-outline";
            else if (route.name === "ask") iconName = "mic-outline";
            else if (route.name === "history") iconName = "time-outline";
            else iconName = "ellipse-outline";

            // when focused, render a custom inner pill/circle
            if (focused) {
              // center tab = 'ask' uses a circle
              if (route.name === "ask") {
                return (
                  <View style={[styles.circle, { backgroundColor: PRIMARY }]}>
                    {/* <Ionicons name={iconName} size={24} color="white" />{" "} */}
                    <Ionicons name={iconName} size={24} color={color} />
                  </View>
                );
              }
              // left/right tabs = pill with icon + label
              const label =
                route.name.charAt(0).toUpperCase() + route.name.slice(1);
              return (
                <View style={[styles.pill, { backgroundColor: PRIMARY }]}>
                  <Ionicons name={iconName} size={20} color={color} />
                  <Text style={styles.pillText}>{label}</Text>
                </View>
              );
            }

            // unfocused state = simple tinted icon
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tabs.Screen name="diagnose" options={{ title: "Diagnose" }} />
        <Tabs.Screen name="ask" options={{ title: "Ask" }} />
        <Tabs.Screen name="history" options={{ title: "History" }} />
      </Tabs>
    </>
  );
}
const styles = StyleSheet.create({
  pill: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 32,
  },
  pillText: {
    color: "white",
    marginLeft: 8,
    fontSize: 16,
  },
  circle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -4, // nudge up if you need it flush
  },
});
