import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";

// ---- inlined styling constants ----
const colors = {
  primary: "#00B386",
  text: "#111111",
};
const spacing = {
  xs: 8,
  sm: 16,
  md: 24,
  lg: 32,
};
const borderRadius = 12;

export default function Diagnose() {
  const { width } = useWindowDimensions();
  const boxW = width - spacing.sm * 2;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Diagnose</Text>
        <TouchableOpacity>
          <Ionicons name="settings-outline" size={24} color={colors.text} />
        </TouchableOpacity>
      </View>

      <View style={[styles.imageBox, { width: boxW, height: boxW * 0.6 }]}>
        <Ionicons name="camera" size={48} color={colors.primary} />
      </View>

      <TouchableOpacity style={styles.actionButton}>
        <Text style={styles.actionText}>Take Picture</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.uploadButton}>
        <Text style={styles.uploadText}>Upload Picture</Text>
      </TouchableOpacity>

      <View style={styles.tabBar}>
        {/* Diagnose tab */}
        <View style={[styles.tab, { backgroundColor: colors.primary }]}>
          <Text style={[styles.tabIcon, { color: "white" }]}>📷</Text>
          <Text style={styles.tabLabel}>Diagnose</Text>
        </View>
        {/* Mic tab */}
        <TouchableOpacity style={styles.tab}>
          <Text style={[styles.tabIcon, { color: colors.primary }]}>🎤</Text>
        </TouchableOpacity>
        {/* Refresh tab */}
        <TouchableOpacity style={styles.tab}>
          <Text style={[styles.tabIcon, { color: colors.primary }]}>↻</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.sm,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    color: colors.text,
  },
  imageBox: {
    marginVertical: spacing.md,
    borderWidth: 2,
    borderColor: colors.primary,
    borderStyle: "dashed",
    borderRadius,
    alignItems: "center",
    justifyContent: "center",
  },
  actionButton: {
    backgroundColor: colors.primary,
    padding: spacing.sm,
    borderRadius: 32,
    alignItems: "center",
    marginBottom: spacing.sm,
  },
  actionText: {
    color: "white",
    fontSize: 16,
  },
  uploadButton: {
    borderWidth: 2,
    borderColor: colors.primary,
    padding: spacing.sm,
    borderRadius: 32,
    alignItems: "center",
    marginBottom: spacing.lg,
  },
  uploadText: {
    color: colors.primary,
    fontSize: 16,
  },
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: spacing.sm,
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 32,
  },
  tab: {
    flexDirection: "row",
    alignItems: "center",
    padding: spacing.xs,
    borderRadius: 32,
  },
  tabIcon: {
    fontSize: 18,
  },
  tabLabel: {
    color: "white",
    fontSize: 16,
    marginLeft: 4,
  },
});
