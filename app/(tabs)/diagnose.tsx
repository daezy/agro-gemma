import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";

export default function DiagnoseScreen() {
  const { width } = useWindowDimensions();
  const boxSize = width - 32; // 16px padding each side

  return (
    <SafeAreaView style={styles.safe}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Diagnose</Text>
        <TouchableOpacity>
          <Ionicons name="settings-outline" size={24} color="#111" />
        </TouchableOpacity>
      </View>

      <View style={styles.secondCon}>
        <View style={[styles.dashedBox, { width: boxSize, height: boxSize }]}>
          <Ionicons name="camera-outline" size={48} color="#00B386" />
        </View>

        {/* Action buttons */}
        <TouchableOpacity style={styles.tOpa} activeOpacity={0.8}>
          <LinearGradient
            colors={["#00B386", "#00B386"]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={styles.takeButton}
          >
            <Text style={styles.takeText}>Take Picture</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity style={styles.uploadButton}>
          <Text style={styles.uploadText}>Upload Picture</Text>
        </TouchableOpacity>
      </View>

      {/* Dashed capture box */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  secondCon: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tOpa: {
    width: "85%",
  },
  safe: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 16,
    alignItems: "center",
    // justifyContent: "center",
  },
  header: {
    width: "85%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: 400,
    color: "#111",
  },
  dashedBox: {
    marginTop: 24,
    borderWidth: 2,
    borderColor: "#00B386",
    borderStyle: "dashed",
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  takeButton: {
    marginTop: 32,
    width: "100%",
    height: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  takeText: {
    color: "#fff",
    fontSize: 16,
  },
  uploadButton: {
    marginTop: 12,
    width: "85%",
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: "#00B386",
    alignItems: "center",
    justifyContent: "center",
  },
  uploadText: {
    color: "#00B386",
    fontSize: 16,
  },
});
