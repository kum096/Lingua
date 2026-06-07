import { images } from "@/constants/images";
import { Image } from "expo-image";
import { Href, Link, useRouter } from "expo-router";
import { useRef, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { VerificationCodeModal } from "./verification-code-modal";

type AuthMode = "sign-up" | "sign-in";

type AuthScreenProps = {
  mode: AuthMode;
};

const screenCopy = {
  "sign-up": {
    title: "Create your account",
    subtitle: "Start your language journey today ✨",
    buttonLabel: "Sign Up",
    footerText: "Already have an account?",
    footerAction: "Log in",
    footerHref: "/sign-in" as Href,
  },
  "sign-in": {
    title: "Welcome back",
    subtitle: "Continue your language journey today ✨",
    buttonLabel: "Sign In",
    footerText: "Don't have an account?",
    footerAction: "Sign up",
    footerHref: "/sign-up" as Href,
  },
} as const;

// Real Google G SVG rendered via a small inline SVG-like approach using Views
function GoogleIcon() {
  return (
    <View style={styles.googleIconWrapper}>
      {/* We replicate the Google G with styled text — Poppins Bold renders it cleanly */}
      <Text style={styles.googleIconText}>G</Text>
    </View>
  );
}

function FacebookIcon() {
  return (
    <View style={styles.facebookIconWrapper}>
      <Text style={styles.facebookIconText}>f</Text>
    </View>
  );
}

function AppleIcon() {
  return (
    <View style={styles.appleIconWrapper}>
      <View style={styles.appleLeaf} />
      <View style={styles.appleLeftLobe} />
      <View style={styles.appleRightLobe} />
      <View style={styles.appleLowerLobe} />
      <View style={styles.appleBite} />
    </View>
  );
}

const socialProviders = [
  { label: "Google", Icon: GoogleIcon },
  { label: "Facebook", Icon: FacebookIcon },
  { label: "Apple", Icon: AppleIcon },
] as const;

// Eye icon — proper SVG-like eye drawn with Views
function EyeIcon({ visible }: { visible: boolean }) {
  return (
    <View style={styles.eyeOuter}>
      <View style={styles.eyeInner}>
        {!visible && <View style={styles.eyeSlash} />}
      </View>
    </View>
  );
}

export function AuthScreen({ mode }: AuthScreenProps) {
  const router = useRouter();
  const copy = screenCopy[mode];
  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isVerificationVisible, setIsVerificationVisible] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const isSignUp = mode === "sign-up";

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        contentInsetAdjustmentBehavior="automatic"
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          {/* Back button */}
          <TouchableOpacity
            activeOpacity={0.75}
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Text style={styles.backChevron}>‹</Text>
          </TouchableOpacity>

          {/* Heading */}
          <Text style={styles.title}>{copy.title}</Text>
          <Text style={styles.subtitle}>{copy.subtitle}</Text>

          {/* Mascot + sparkles */}
          <View style={styles.mascotContainer}>
            <Text style={styles.sparkleOrange}>✦</Text>
            <Text style={styles.sparkleBlue}>✦</Text>
            <Text style={styles.sparkleYellow}>✦</Text>
            <Image
              contentFit="contain"
              source={images.mascotAuth}
              style={styles.mascot}
            />
          </View>

          {/* Form */}
          <View style={styles.formContainer}>
            {/* Email input */}
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => emailInputRef.current?.focus()}
              style={[
                styles.inputCard,
                emailFocused && styles.inputCardFocused,
              ]}
            >
              <Text style={styles.inputLabel}>Email</Text>
              <TextInput
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect={false}
                keyboardType="email-address"
                onChangeText={setEmail}
                onFocus={() => setEmailFocused(true)}
                onBlur={() => setEmailFocused(false)}
                placeholder="alex@gmail.com"
                placeholderTextColor="#C5C8D8"
                ref={emailInputRef}
                style={styles.textInput}
                textContentType="emailAddress"
                value={email}
              />
            </TouchableOpacity>

            {/* Password input — sign-up only */}
            {isSignUp && (
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => passwordInputRef.current?.focus()}
                style={[
                  styles.inputCard,
                  passwordFocused && styles.inputCardFocused,
                ]}
              >
                <View style={styles.passwordRow}>
                  <View style={styles.passwordTextContainer}>
                    <Text style={styles.inputLabel}>Password</Text>
                    <TextInput
                      autoCapitalize="none"
                      autoComplete="password-new"
                      onChangeText={setPassword}
                      onFocus={() => setPasswordFocused(true)}
                      onBlur={() => setPasswordFocused(false)}
                      ref={passwordInputRef}
                      secureTextEntry={!passwordVisible}
                      style={styles.textInput}
                      textContentType="newPassword"
                      value={password}
                    />
                  </View>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => setPasswordVisible((v) => !v)}
                    style={styles.eyeButton}
                    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                  >
                    <EyeIcon visible={passwordVisible} />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            )}
          </View>

          {/* Primary CTA button */}
          <TouchableOpacity
            activeOpacity={0.88}
            style={styles.ctaButton}
            onPress={() => setIsVerificationVisible(true)}
          >
            {/* Right-side highlight sheen */}
            <View style={styles.ctaSheen} />
            <Text style={styles.ctaLabel}>{copy.buttonLabel}</Text>
          </TouchableOpacity>

          {/* Divider */}
          <View style={styles.dividerRow}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>or continue with</Text>
            <View style={styles.dividerLine} />
          </View>

          {/* Social providers */}
          <View style={styles.socialList}>
            {socialProviders.map(({ label, Icon }) => (
              <TouchableOpacity
                activeOpacity={0.82}
                style={styles.socialButton}
                key={label}
              >
                <View style={styles.socialIconWrapper}>
                  <Icon />
                </View>
                <Text style={styles.socialLabel}>Continue with {label}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.spacer} />

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>{copy.footerText} </Text>
            <Link href={copy.footerHref} replace>
              <Text style={styles.footerAction}>{copy.footerAction}</Text>
            </Link>
          </View>
        </View>
      </ScrollView>

      <VerificationCodeModal
        onClose={() => setIsVerificationVisible(false)}
        visible={isVerificationVisible}
      />
    </SafeAreaView>
  );
}

const DEEP_PURPLE = "#5B3FE4";
const DEEP_PURPLE_DARK = "#4A2FE0";

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#FFFFFF",
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingBottom: 36,
    paddingTop: 6,
  },

  // ─── Back ────────────────────────────────────────────────
  backButton: {
    height: 44,
    width: 44,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  backChevron: {
    fontFamily: "Poppins-Regular",
    fontSize: 44,
    lineHeight: 50,
    color: "#0D132B",
    marginTop: -4,
  },

  // ─── Heading ─────────────────────────────────────────────
  title: {
    fontFamily: "Poppins-Bold",
    fontSize: 30,
    lineHeight: 39,
    color: "#0D132B",
    marginTop: 24,
  },
  subtitle: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    lineHeight: 26,
    color: "#6F748E",
    marginTop: 6,
  },

  // ─── Mascot ──────────────────────────────────────────────
  mascotContainer: {
    height: 174,
    alignItems: "center",
    marginTop: 16,
    position: "relative",
  },
  mascot: {
    width: 220,
    height: 200,
  },
  sparkleOrange: {
    position: "absolute",
    left: 54,
    top: 44,
    fontFamily: "Poppins-Bold",
    fontSize: 22,
    color: "#FF9500",
  },
  sparkleBlue: {
    position: "absolute",
    right: 76,
    top: 54,
    fontFamily: "Poppins-Bold",
    fontSize: 18,
    color: "#63A6FF",
  },
  sparkleYellow: {
    position: "absolute",
    right: 38,
    top: 92,
    fontFamily: "Poppins-Bold",
    fontSize: 22,
    color: "#FFD65C",
  },

  // ─── Form ────────────────────────────────────────────────
  formContainer: {
    gap: 14,
    marginTop: 6,
  },
  inputCard: {
    backgroundColor: "#FFFFFF",
    borderColor: "#ECEEF6",
    borderRadius: 18,
    borderWidth: 1.5,
    minHeight: 82,
    paddingHorizontal: 18,
    paddingTop: 13,
    paddingBottom: 13,
  },
  inputCardFocused: {
    borderColor: DEEP_PURPLE,
    shadowColor: DEEP_PURPLE,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 3,
  },
  inputLabel: {
    fontFamily: "Poppins-Medium",
    fontSize: 13,
    lineHeight: 18,
    color: "#9298B0",
  },
  textInput: {
    color: "#0D132B",
    fontFamily: "Poppins-Regular",
    fontSize: 17,
    lineHeight: 25,
    marginTop: 4,
    padding: 0,
  },

  // Password row
  passwordRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  passwordTextContainer: {
    flex: 1,
  },
  eyeButton: {
    marginLeft: 12,
    padding: 4,
  },
  eyeOuter: {
    width: 28,
    height: 19,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#9298B0",
    alignItems: "center",
    justifyContent: "center",
    // Slightly wider than tall for eye shape
    transform: [{ scaleX: 1.1 }],
  },
  eyeInner: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#9298B0",
    alignItems: "center",
    justifyContent: "center",
  },
  eyeSlash: {
    position: "absolute",
    width: 2,
    height: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 1,
    transform: [{ rotate: "45deg" }],
  },

  // ─── CTA Button ──────────────────────────────────────────
  ctaButton: {
    height: 60,
    borderRadius: 17,
    backgroundColor: DEEP_PURPLE,
    borderBottomWidth: 3,
    borderBottomColor: DEEP_PURPLE_DARK,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 26,
    position: "relative",
  },
  ctaSheen: {
    position: "absolute",
    right: 0,
    top: 0,
    width: "48%",
    height: "100%",
    backgroundColor: "rgba(130, 100, 255, 0.45)",
    borderTopRightRadius: 17,
    borderBottomRightRadius: 17,
  },
  ctaLabel: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 18,
    lineHeight: 26,
    color: "#FFFFFF",
    zIndex: 1,
  },

  // ─── Divider ─────────────────────────────────────────────
  dividerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    marginVertical: 26,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#E8EAF2",
  },
  dividerText: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    lineHeight: 22,
    color: "#7B8098",
  },

  // ─── Social ──────────────────────────────────────────────
  socialList: {
    gap: 12,
  },
  socialButton: {
    height: 58,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 17,
    borderWidth: 1.2,
    borderColor: "#EEF0F6",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    shadowColor: "#0D132B",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
  },
  socialIconWrapper: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  socialLabel: {
    flex: 1,
    textAlign: "center",
    fontFamily: "Poppins-Medium",
    fontSize: 16,
    lineHeight: 24,
    color: "#0D132B",
    marginRight: 36, // compensate for icon on left so text is visually centered
  },

  // Google G — multicolor approximation with bold colored text
  googleIconWrapper: {
    width: 34,
    height: 34,
    alignItems: "center",
    justifyContent: "center",
  },
  googleIconText: {
    fontFamily: "Poppins-Bold",
    fontSize: 22,
    lineHeight: 28,
    color: "#4285F4",
  },

  // Facebook
  facebookIconWrapper: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#1877F2",
    alignItems: "center",
    justifyContent: "center",
  },
  facebookIconText: {
    fontFamily: "Poppins-Bold",
    fontSize: 22,
    lineHeight: 26,
    color: "#FFFFFF",
    marginTop: -2,
  },

  // Apple
  appleIconWrapper: {
    width: 34,
    height: 34,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  appleLeaf: {
    position: "absolute",
    top: 4,
    left: 18,
    width: 9,
    height: 6,
    borderRadius: 6,
    backgroundColor: "#0D132B",
    transform: [{ rotate: "-34deg" }],
  },
  appleLeftLobe: {
    position: "absolute",
    top: 13,
    left: 7,
    width: 14,
    height: 18,
    borderRadius: 9,
    backgroundColor: "#0D132B",
    transform: [{ rotate: "-12deg" }],
  },
  appleRightLobe: {
    position: "absolute",
    top: 12,
    right: 7,
    width: 14,
    height: 18,
    borderRadius: 9,
    backgroundColor: "#0D132B",
    transform: [{ rotate: "12deg" }],
  },
  appleLowerLobe: {
    position: "absolute",
    bottom: 3,
    left: 10,
    width: 14,
    height: 16,
    borderRadius: 8,
    backgroundColor: "#0D132B",
  },
  appleBite: {
    position: "absolute",
    top: 13,
    right: 4,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#FFFFFF",
  },

  // ─── Footer ──────────────────────────────────────────────
  spacer: {
    flex: 1,
    minHeight: 20,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
  footerText: {
    fontFamily: "Poppins-Regular",
    fontSize: 15,
    lineHeight: 24,
    color: "#7B8098",
  },
  footerAction: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 15,
    lineHeight: 24,
    color: DEEP_PURPLE,
  },
});
