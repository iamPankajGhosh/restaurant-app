import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Image,
} from "react-native";
import { hp, wp } from "../../helpers/common";
import { theme } from "../../constants/theme";
import { useRouter } from "expo-router";
import bgImage from "../../assets/images/food.png";

const SignInScreen = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign in</Text>

      {["Username", "Password"].map((item) => (
        <TextInput
          key={item}
          placeholder={item}
          style={styles.userInput}
          cursorColor={theme.colors.primary}
        />
      ))}

      <Pressable
        style={styles.signInButton}
        onPress={() => router.push("home")}
      >
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
