import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";

// styling constants
const colors = {
  primary: "#00B386",
  lightPrimary: "#A6F0E2",
  cardBg: "#F0F0F0",
  text: "#111111",
  divider: "#E0E0E0",
};
const spacing = { sm: 16, md: 24, lg: 32 };
const borderRad = 24;

// screen data
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

export default function Onboarding() {
  const router = useRouter();
  const { width } = useWindowDimensions();

  const [selected, setSelected] = useState<string | null>(null);

  // two columns: calc card width
  // subtract horizontal padding (md * 2) + inter-card gap (sm)
  const cardSize = (width - spacing.md * 2 - spacing.sm) / 2;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Choose your language</Text>

      <View style={[styles.grid, { width: width - spacing.md * 2 }]}>
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
              {/* dividing line at 50% */}
              <View
                style={[
                  styles.divider,
                  { top: cardSize / 2, width: cardSize - 32 },
                ]}
              />

              <Text style={styles.langText}>{l.label}</Text>
              <Ionicons name="volume-high" size={24} color="#007AFF" />
            </TouchableOpacity>
          );
        })}
      </View>

      {selected ? (
        <TouchableOpacity
          style={styles.tOpa}
          onPress={() => router.replace("/(tabs)/diagnose")}
          activeOpacity={0.8}
        >
          <LinearGradient
            colors={[colors.primary, colors.primary]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacing.md,
    paddingTop: spacing.sm,
    justifyContent: "center",
    alignItems: "center",
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
    borderRadius: borderRad,
    marginBottom: spacing.sm,
    borderWidth: 2,
    borderColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    padding: 16,
  },
  divider: {
    position: "absolute",
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.divider,
  },
  langText: {
    marginBottom: 8,
    color: colors.text,
    fontSize: 16,
  },
  continueButton: {
    height: 48,
    width: "100%",
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: spacing.sm,
  },
  continueText: {
    color: "white",
    fontSize: 16,
  },
  disabledButton: {
    height: 48,
    width: "85%",
    backgroundColor: colors.lightPrimary,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: spacing.sm,
  },
  disabledText: {
    color: "white",
    opacity: 0.6,
    fontSize: 16,
  },
  tOpa: {
    width: "85%",
  },
});
