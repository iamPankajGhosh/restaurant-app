import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Image,
  Alert,
} from "react-native";
import { hp, wp } from "../../helpers/common";
import { theme } from "../../constants/theme";
import { useRouter } from "expo-router";
import bgImage from "../../assets/images/food.png";
import { useState } from "react";
import axios from "axios";

const SignInScreen = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const resetData = () => {
    setEmail("");
    setPassword("");
  };

  const handleLogin = async () => {
    if (password.length < 6) {
      Alert.alert("Password must be at least 6 characters");
      return;
    }

    if (email.length < 6) {
      Alert.alert("Email must be at least 6 characters");
      return;
    }

    await axios
      .post("https://sipl-restaurant.vercel.app/api/v1/users/login", {
        email,
        password,
      })
      .then((res) => {
        if (res.data.message === "Success") {
          resetData();
          router.push("home");
        }
      })
      .catch((error) => {
        console.log("Error:: register user failed", error);
        Alert.alert("Invalid email or password");
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign in</Text>

      <TextInput
        key="email"
        placeholder="Enter Email"
        value={email}
        onChangeText={(value) => setEmail(value)}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        style={styles.userInput}
        cursorColor={theme.colors.primary}
      />

      <TextInput
        key="password"
        placeholder="Enter Password"
        value={password}
        onChangeText={(value) => setPassword(value)}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
        style={styles.userInput}
        cursorColor={theme.colors.primary}
      />

      <Pressable style={styles.signInButton} onPress={handleLogin}>
        <Text style={styles.signInText}>Sign in</Text>
      </Pressable>

      <View style={styles.linkContainer}>
        <Pressable onPress={() => router.push("signup")}>
          <Text style={styles.linkText}>Sign Up</Text>
        </Pressable>

        <Pressable>
          <Text style={styles.linkText}>Forget Password?</Text>
        </Pressable>
      </View>

      <Image source={bgImage} style={styles.bgImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: hp(4),
    fontWeight: theme.fontWeights.semibold,
    color: theme.colors.neutral(0.9),
    letterSpacing: 1,
  },
  userInput: {
    fontSize: hp(1.8),
    backgroundColor: theme.colors.white,
    color: theme.colors.black,
    fontWeight: theme.fontWeights.medium,
    padding: 10,
    borderRadius: theme.redius.lg,
    width: wp(80),
    paddingHorizontal: 15,
    marginVertical: 10,
    borderCurve: "continuous",
    borderWidth: 1,
    borderColor: theme.colors.grayBg,
  },
  signInButton: {
    width: wp(80),
    alignItems: "center",
    backgroundColor: theme.colors.primary,
    borderRadius: theme.redius.xl,
    paddingVertical: 10,
    marginVertical: 10,
    borderCurve: "continuous",
  },
  signInText: {
    color: theme.colors.white,
    fontSize: hp(3),
    letterSpacing: 1,
  },
  linkContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: wp(80),
    marginVertical: 10,
  },
  linkText: {
    color: theme.colors.primary,
    fontSize: hp(2),
    fontWeight: theme.fontWeights.semibold,
    letterSpacing: 1,
  },
  bgImage: {
    width: wp(100),
    height: hp(80),
    position: "absolute",
    bottom: -hp(30),
    left: -wp(30),
    zIndex: -1,
  },
});

export default SignInScreen;
