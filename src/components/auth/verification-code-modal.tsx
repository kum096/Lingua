import { useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  Animated,
  Easing,
  KeyboardAvoidingView,
  Modal,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type VerificationCodeModalProps = {
  visible: boolean;
  onClose: () => void;
};

const CODE_LENGTH = 6;
const DEEP_PURPLE = "#5B3FE4";

export function VerificationCodeModal({
  visible,
  onClose,
}: VerificationCodeModalProps) {
  const router = useRouter();
  const inputRef = useRef<TextInput>(null);
  const [code, setCode] = useState("");

  const [slideAnim] = useState(() => new Animated.Value(300));
  const [fadeAnim] = useState(() => new Animated.Value(0));

  useEffect(() => {
    if (visible) {
      // Reset
      slideAnim.setValue(300);
      fadeAnim.setValue(0);

      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 220,
          useNativeDriver: true,
        }),
        Animated.spring(slideAnim, {
          toValue: 0,
          damping: 22,
          stiffness: 280,
          mass: 0.9,
          useNativeDriver: true,
        }),
      ]).start();

      const focusTimer = setTimeout(() => inputRef.current?.focus(), 300);
      return () => clearTimeout(focusTimer);
    } else {
      // Slide down on close
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 180,
          easing: Easing.in(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 300,
          duration: 200,
          easing: Easing.in(Easing.ease),
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [fadeAnim, slideAnim, visible]);

  function handleCodeChange(value: string) {
    const nextCode = value.replace(/\D/g, "").slice(0, CODE_LENGTH);
    setCode(nextCode);

    if (nextCode.length === CODE_LENGTH) {
      setTimeout(() => {
        setCode("");
        onClose();
        router.replace("/");
      }, 280);
    }
  }

  function handleClose() {
    setCode("");
    onClose();
  }

  return (
    <Modal
      animationType="none"
      onRequestClose={handleClose}
      transparent
      visible={visible}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardView}
      >
        {/* Backdrop */}
        <Animated.View style={[styles.backdrop, { opacity: fadeAnim }]}>
          <TouchableOpacity
            style={styles.backdropTouchable}
            activeOpacity={1}
            onPress={handleClose}
          />
        </Animated.View>

        {/* Card */}
        <Animated.View
          style={[
            styles.cardWrapper,
            { transform: [{ translateY: slideAnim }] },
          ]}
        >
          <View style={styles.card}>
            {/* Handle bar */}
            <View style={styles.handleBar} />

            {/* Header */}
            <Text style={styles.cardTitle}>Check your email</Text>
            <Text style={styles.cardSubtitle}>
              We sent a 6-digit code to your email address. Enter it below to
              continue.
            </Text>

            {/* Code boxes */}
            <View style={styles.codeRow}>
              {Array.from({ length: CODE_LENGTH }).map((_, index) => {
                const isFilled = !!code[index];
                const isActive = index === code.length;
                return (
                  <View
                    key={index}
                    style={[
                      styles.digitBox,
                      isFilled && styles.digitBoxFilled,
                      isActive && styles.digitBoxActive,
                    ]}
                  >
                    <Text style={styles.digitText}>{code[index] ?? ""}</Text>
                    {/* Cursor blink indicator */}
                    {isActive && !isFilled && <View style={styles.cursor} />}
                  </View>
                );
              })}
              <TextInput
                autoComplete="one-time-code"
                caretHidden
                inputMode="numeric"
                keyboardType="number-pad"
                maxLength={CODE_LENGTH}
                onChangeText={handleCodeChange}
                ref={inputRef}
                style={styles.hiddenInput}
                textContentType="oneTimeCode"
                value={code}
              />
            </View>

            {/* Resend */}
            <TouchableOpacity activeOpacity={0.7} style={styles.resendButton}>
              <Text style={styles.resendText}>
                {"Didn't receive it? "}
                <Text style={styles.resendAction}>Resend code</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  keyboardView: {
    flex: 1,
    justifyContent: "flex-end",
  },
  backdrop: {
    backgroundColor: "rgba(13, 19, 43, 0.35)",
    bottom: 0,
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
  },
  backdropTouchable: {
    flex: 1,
  },
  cardWrapper: {
    paddingHorizontal: 16,
    paddingBottom: Platform.OS === "ios" ? 12 : 24,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 28,
    paddingTop: 12,
    paddingBottom: 28,
    paddingHorizontal: 24,
    shadowColor: "#0D132B",
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.08,
    shadowRadius: 20,
    elevation: 12,
  },

  // Handle bar
  handleBar: {
    alignSelf: "center",
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#E0E3EF",
    marginBottom: 22,
  },

  // Header
  cardTitle: {
    textAlign: "center",
    fontFamily: "Poppins-Bold",
    fontSize: 22,
    lineHeight: 30,
    color: "#0D132B",
  },
  cardSubtitle: {
    marginTop: 10,
    textAlign: "center",
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    lineHeight: 22,
    color: "#6F748E",
    paddingHorizontal: 4,
  },

  // Code row
  codeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
    marginTop: 28,
    position: "relative",
  },
  digitBox: {
    flex: 1,
    height: 58,
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: "#ECEEF6",
    backgroundColor: "#F8F9FC",
    alignItems: "center",
    justifyContent: "center",
  },
  digitBoxFilled: {
    borderColor: DEEP_PURPLE,
    backgroundColor: "#F3F0FF",
  },
  digitBoxActive: {
    borderColor: DEEP_PURPLE,
    backgroundColor: "#FFFFFF",
    shadowColor: DEEP_PURPLE,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.18,
    shadowRadius: 6,
    elevation: 3,
  },
  digitText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 22,
    lineHeight: 30,
    color: "#0D132B",
  },
  cursor: {
    position: "absolute",
    bottom: 12,
    width: 2,
    height: 22,
    borderRadius: 1,
    backgroundColor: DEEP_PURPLE,
  },

  // Resend
  resendButton: {
    marginTop: 20,
    alignItems: "center",
  },
  resendText: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    lineHeight: 22,
    color: "#7B8098",
  },
  resendAction: {
    fontFamily: "Poppins-SemiBold",
    color: DEEP_PURPLE,
  },

  // Hidden input
  hiddenInput: {
    bottom: 0,
    color: "transparent",
    left: 0,
    opacity: 0,
    position: "absolute",
    right: 0,
    top: 0,
  },
});
