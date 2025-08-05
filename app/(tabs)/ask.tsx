import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";

type AskState = "idle" | "listening" | "conversation";

export default function AskScreen() {
  const { width } = useWindowDimensions();
  const [state, setState] = useState<AskState>("idle");

  // auto-advance from listening → conversation after 3s
  useEffect(() => {
    if (state === "listening") {
      const t = setTimeout(() => setState("conversation"), 3000);
      return () => clearTimeout(t);
    }
  }, [state]);

  // bubble above tab bar: center horizontally
  const bubbleBottom = 64 + 30 + 8; // tabBarHeight + tabBarBottom + gap

  if (state === "conversation") {
    return (
      <SafeAreaView style={styles.safe}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>AgroGemma</Text>
          <TouchableOpacity>
            <Ionicons name="pencil-outline" size={24} color="#111" />
          </TouchableOpacity>
        </View>

        {/* Chat */}
        <ScrollView style={styles.chat}>
          {/* You */}
          <View style={styles.msgRow}>
            <Ionicons name="person-outline" size={24} color="#00B386" />
            <Text style={styles.youMsg}>You</Text>
          </View>
          <Text style={styles.youText}>Millet is dying, possible causes.</Text>

          <View style={styles.separator} />

          {/* Bot */}
          <View style={styles.msgRow}>
            <Ionicons
              name="chatbubble-ellipses-outline"
              size={24}
              color="#00B386"
            />
            <Text style={styles.botMsg}>AgroGemma</Text>
          </View>
          <Text style={styles.botText}>
            I am analysing and searching for probable causes…
          </Text>
        </ScrollView>

        {/* Input */}
        <View style={[styles.inputContainer, { width: width - 32 }]}>
          <TextInput
            style={styles.input}
            placeholder="Message"
            placeholderTextColor="#999"
          />
          <TouchableOpacity style={styles.inputIcon}>
            <Ionicons name="mic-outline" size={24} color="#00B386" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safe}>
      {/* Idle & Listening share the same background */}
      <View style={styles.center}>
        <Ionicons name="sparkles" size={64} color="#007AFF" />
        <Text style={styles.logoText}>AgroGemma</Text>
        <Text style={styles.tagline}>What can I help you grow today?</Text>
      </View>

      {state === "idle" ? null : (
        // Listening bubble
        <View style={[styles.bubble, { bottom: bubbleBottom }]}>
          <Ionicons name="mic" size={20} color="white" />
          <Text style={styles.bubbleText}>
            AgroGemma is listening and transcribing…
          </Text>
        </View>
      )}

      {/* Trigger listening when user taps the mic */}
      <TouchableOpacity
        style={[styles.listenButton, { bottom: bubbleBottom }]}
        onPress={() => setState(state === "idle" ? "listening" : "idle")}
      >
        <Ionicons
          name={state === "listening" ? "close" : "mic"}
          size={24}
          color="white"
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 16,
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    color: "#111",
  },

  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logoText: {
    fontSize: 24,
    marginTop: 12,
    color: "#111",
  },
  tagline: {
    fontStyle: "italic",
    color: "#666",
    marginTop: 4,
  },

  bubble: {
    position: "absolute",
    left: 16,
    right: 16,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#00B386",
    borderRadius: 24,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  bubbleText: {
    color: "white",
    marginLeft: 8,
    flex: 1,
  },

  listenButton: {
    position: "absolute",
    alignSelf: "center",
    backgroundColor: "#00B386",
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
  },

  chat: {
    flex: 1,
    paddingHorizontal: 16,
    marginTop: 16,
  },
  msgRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
  },
  youMsg: {
    marginLeft: 8,
    fontWeight: "bold",
    color: "#00B386",
  },
  youText: {
    marginLeft: 32,
    color: "#111",
  },
  separator: {
    height: 1,
    backgroundColor: "#EEE",
    marginVertical: 16,
  },
  botMsg: {
    marginLeft: 8,
    fontWeight: "bold",
    color: "#00B386",
  },
  botText: {
    marginLeft: 32,
    color: "#555",
  },

  inputContainer: {
    position: "absolute",
    bottom: 90, // bottom bar sits around 64 + 16px gap
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#00B386",
    borderRadius: 24,
    paddingHorizontal: 12,
    height: 48,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#111",
  },
  inputIcon: {
    marginLeft: 8,
  },
});
