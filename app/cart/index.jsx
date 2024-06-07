import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { wp, hp } from "../../helpers/common.js";
import { theme } from "../../constants/theme.js";
import { router } from "expo-router";
import CartItems from "../../components/CartItems.jsx";

const CartScreen = () => {
  const { top } = useSafeAreaInsets();
  const paddingTop = top > 0 ? top + 10 : 30;
  return (
    <View style={[styles.container, { paddingTop }]}>
      <View style={styles.header}>
        <Pressable>
          <Text style={styles.title}>My Cart</Text>
        </Pressable>

        <TouchableOpacity onPress={() => router.push("home")}>
          <Text style={styles.profileText}>Add more</Text>
        </TouchableOpacity>
      </View>

      <CartItems />

      <TouchableOpacity style={styles.orderBtn}>
        <Text style={styles.orderText}>Order</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 15,
  },
  header: {
    marginHorizontal: wp(4),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: hp(4),
    fontWeight: theme.fontWeights.semibold,
    color: theme.colors.neutral(0.9),
  },
  profileText: {
    fontSize: hp(2.5),
    fontWeight: theme.fontWeights.medium,
    color: theme.colors.primary,
  },
  orderBtn: {
    backgroundColor: theme.colors.primary,
    padding: wp(2),
    marginVertical: wp(2),
    marginHorizontal: "auto",
    borderRadius: theme.redius.sm,
    alignItems: "center",
    width: wp(90),
  },
  orderText: {
    fontSize: hp(3),
    fontWeight: theme.fontWeights.medium,
    color: theme.colors.neutral(0.9),
  },
});
