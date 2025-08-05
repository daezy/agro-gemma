import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";

// ---- styling constants ----
const colors = {
  primary: "#00B386",
  lightPrimary: "#A6F0E2",
  cardBg: "#F0F0F0",
  text: "#111111",
};
const spacing = {
  sm: 16,
  md: 24,
  lg: 32,
};
const borderRadius = 12;

// ---- screen data ----
const langs = [
  { id: "en", label: "English" },
  { id: "yo", label: "Yorùbá" },
  { id: "ig", label: "Ìgbò" },
  { id: "ha", label: "Hausa" },
];

export type RootStackParamList = {
  Onboarding: undefined;
  Diagnose: undefined;
};

// ---- component ----
export default function Onboarding() {
  const { width } = useWindowDimensions();
  const nav =
    useNavigation<StackNavigationProp<RootStackParamList, "Onboarding">>();
  const [selected, setSelected] = useState<string | null>(null);

  // calc two-column card size
  const cardSize = (width - spacing.sm * 2 - spacing.sm) / 2;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Choose your language</Text>

      <View style={styles.grid}>
        {langs.map((l) => {
          const isActive = l.id === selected;
          return (
            <TouchableOpacity
              key={l.id}
              onPress={() => setSelected(l.id)}
              style={[
                styles.card,
                { width: cardSize, height: cardSize },
                isActive && { borderColor: colors.primary },
              ]}
            >
              <Text style={styles.langText}>{l.label}</Text>
              <Ionicons
                name="volume-high"
                size={24}
                color={isActive ? colors.primary : "#007AFF"}
              />
            </TouchableOpacity>
          );
        })}
      </View>

      {selected ? (
        <TouchableOpacity
          onPress={() => nav.navigate("Diagnose")}
          activeOpacity={0.8}
        >
          <LinearGradient
            colors={["rgba(0,179,134,0.9)", colors.primary]}
            style={styles.continueButton}
          >
            <Text style={styles.continueText}>Continue</Text>
          </LinearGradient>
        </TouchableOpacity>
      ) : (
        <View style={styles.disabledButton}>
          <Text style={styles.disabledText}>Continue</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

// ---- styles ----
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.sm,
    backgroundColor: "white",
  },
  title: {
    textAlign: "center",
    marginBottom: spacing.md,
    fontSize: 16,
    color: colors.text,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: spacing.lg,
  },
  card: {
    backgroundColor: colors.cardBg,
    borderRadius,
    marginBottom: spacing.sm,
    borderWidth: 2,
    borderColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
  langText: {
    marginBottom: 8,
    color: colors.text,
  },
  continueButton: {
    padding: spacing.sm,
    borderRadius: 32,
    alignItems: "center",
  },
  continueText: {
    color: "white",
    fontSize: 16,
  },
  disabledButton: {
    backgroundColor: colors.lightPrimary,
    padding: spacing.sm,
    borderRadius: 32,
    alignItems: "center",
  },
  disabledText: {
    color: "white",
    opacity: 0.6,
    fontSize: 16,
  },
});
