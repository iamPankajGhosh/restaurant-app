import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import { useEffect, useState } from "react";
import googleLogo from "../../assets/images/google-logo.png";
import { theme } from "../../constants/theme.js";
import { hp, wp } from "../../helpers/common.js";
import Animated, { FadeIn, FadeInDown } from "react-native-reanimated";
import footerBanner from "../../assets/images/footer-banner.png";

const SignInScreen = () => {
  const router = useRouter();
  const [error, setError] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  const configGoogleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      GoogleSignin.configure({
        androidClientId:
          "868890835695-c32e9n5llu5dq5glb0heh52s55pf4jj0.apps.googleusercontent.com",
      });
    } catch (err) {
      console.error("Error configuring Google Sign-In:", err);
    }
  };

  useEffect(() => {
    configGoogleSignIn();
  }, []);

  //sign in with email
  const signInWithEmail = async () => {};

  // sign in with google
  const signInWithGoogle = async () => {
    console.log("pressed sign in");
    try {
      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });
      const userInfo = await GoogleSignin.signIn();
      setUserInfo(userInfo);
      setError(null);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log("User canceled the sign-in flow");
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log("Operation already in progress");
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log("Play services not available or outdated");
      } else {
        console.error("Error signing in:", error);
        setError(error);
      }
    }
  };

  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      setUserInfo(null);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Animated.Text
        style={[styles.title, { fontSize: hp(2) }]}
        entering={FadeInDown.springify()}
      >
        Welcome to Swaad
      </Animated.Text>

      <Animated.Text style={styles.title} entering={FadeInDown.springify()}>
        Sign in
      </Animated.Text>

      <View style={styles.formContainer}>
        <Animated.View entering={FadeInDown.delay(200).springify()}>
          <TextInput
            placeholder="Email"
            cursorColor={theme.colors.primary}
            style={[styles.userInput]}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            textContentType="emailAddress"
            autoComplete="email"
          />
        </Animated.View>
        <Animated.View entering={FadeInDown.delay(200).springify()}>
          <TextInput
            placeholder="Password"
            cursorColor={theme.colors.primary}
            style={[styles.userInput]}
            secureTextEntry={true}
            textContentType="password"
          />
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(300).springify()}>
          <TouchableOpacity
            style={[
              styles.btn,
              { backgroundColor: theme.colors.primary, marginTop: hp(2) },
            ]}
            onPress={signInWithEmail}
          >
            <Text
              style={[
                styles.text,
                { fontSize: hp(2.8), color: theme.colors.white },
              ]}
            >
              Sign in
            </Text>
          </TouchableOpacity>
        </Animated.View>

        <Animated.View
          style={styles.orContainer}
          entering={FadeIn.delay(300).springify()}
        >
          <View style={styles.separator}></View>
          <Text style={[styles.text, { fontSize: hp(2) }]}>Or</Text>
          <View style={styles.separator}></View>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(300).springify()}>
          <TouchableOpacity style={styles.btn} onPress={signInWithGoogle}>
            <View style={styles.imageContainer}>
              <Image source={googleLogo} style={styles.googleLogo} />
            </View>
            <Text style={[styles.text, { fontSize: hp(2.6) }]}>
              Continue with Google
            </Text>
          </TouchableOpacity>
        </Animated.View>

        <Animated.View
          style={styles.linkContainer}
          entering={FadeInDown.delay(400).springify()}
        >
          <TouchableOpacity onPress={() => router.push("register")}>
            <Text style={[styles.text, styles.linkText]}>Register</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={[styles.text, styles.linkText]}>
              Forgot Password ?
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </View>

      <Image source={footerBanner} style={styles.footerBanner} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: hp(4),
    fontWeight: theme.fontWeights.semibold,
    color: theme.colors.neutral(0.9),
    marginBottom: hp(2),
    letterSpacing: 1,
  },
  formContainer: {
    alignItems: "center",
    backgroundColor: theme.colors.neutral(0.1),
    padding: wp(5),
    borderRadius: theme.redius.lg,
    marginBottom: hp(10),
  },
  userInput: {
    borderRadius: theme.redius.sm,
    paddingVertical: 10,
    fontSize: hp(1.8),
    width: wp(80),
    marginBottom: hp(2),
    backgroundColor: theme.colors.white,
    paddingHorizontal: wp(5),
    borderCurve: "continuous",
    borderWidth: 1,
    borderColor: theme.colors.neutral(0.9),
  },
  btn: {
    backgroundColor: theme.colors.white,
    paddingVertical: 10,
    borderRadius: theme.redius.sm,
    borderCurve: "continuous",
    width: wp(80),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: wp(2),
    marginBottom: hp(2),
  },
  imageContainer: {
    backgroundColor: theme.colors.white,
    borderRadius: 30,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    width: wp(8),
    height: wp(8),
  },
  googleLogo: {
    width: wp(8),
    height: wp(8),
  },
  text: {
    color: theme.colors.neutral(0.9),
    fontSize: hp(1.8),
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: wp(2),
    marginBottom: hp(2),
  },
  separator: {
    width: wp(30),
    height: 1,
    backgroundColor: theme.colors.neutral(0.5),
  },
  footerBanner: {
    position: "absolute",
    bottom: -30,
    width: wp(100),
    height: hp(30),
    zIndex: -1,
  },
  linkContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: wp(80),
    marginTop: hp(2),
  },
  linkText: {
    fontSize: hp(2.6),
    color: theme.colors.primary,
    fontWeight: theme.fontWeights.mediumd,
    letterSpacing: 0.5,
  },
});

export default SignInScreen;
