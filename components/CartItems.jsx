import {
  Text,
  FlatList,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
} from "react-native";
import { data } from "../constants/data.js";
import { hp, wp } from "../helpers/common.js";
import { theme } from "../constants/theme.js";
import Animated, { FadeInRight } from "react-native-reanimated";
import { useState } from "react";

const MenuItems = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Hyderabadi Biryani",
      category: "Biriyani",
      price: 299,
      image:
        "https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg",
    },
    {
      id: 2,
      name: "Chicken Biryani",
      category: "Biriyani",
      price: 349,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Gvw3ZWiy7-mueQ6BxN1rH4UBEbE2T1anZPqzPE2PzQ&s",
    },
    {
      id: 3,
      name: "Mutton Biryani",
      category: "Biriyani",
      price: 399,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR85pEoXpvCDNE-pTHbXJfmSX02eEG9qd0Q35apF56wUA&s",
    },
    {
      id: 4,
      name: "Vegetable Biryani",
      category: "Biriyani",
      price: 249,
      image:
        "https://www.madhuseverydayindian.com/wp-content/uploads/2022/11/easy-vegetable-biryani.jpg",
    },
    {
      id: 5,
      name: "Egg Biryani",
      category: "Biriyani",
      price: 279,
      image:
        "https://spicecravings.com/wp-content/uploads/2020/10/Egg-Biryani-Featured-1.jpg",
    },

    // Rasgulla
    {
      id: 6,
      name: "Nolen Gur Rasgulla",
      category: "Rasgulla",
      price: 149,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjQQtdH0-7su540R114nHHyh5jrGniwuNUqyWnyOhqNQ&s",
    },
    {
      id: 7,
      name: "Spongy Rasgulla",
      category: "Rasgulla",
      price: 99,
      image:
        "https://i0.wp.com/muditaskitchen.com/wp-content/uploads/2021/01/DSC_9387.jpg?resize=530%2C530&ssl=1",
    },
  ]);

  return cartItems.length > 0 ? (
    <View style={styles.contentContainer}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontSize: hp(3) }}>
          Total: Rs.
          {cartItems.reduce((acc, curr) => acc + curr.price, 0)}
        </Text>
        <Text>Items: {cartItems.length}</Text>
      </View>

      <FlatList
        contentContainerStyle={styles.flatlistContainer}
        showsHorizontalScrollIndicator={false}
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => <CardItem item={item} index={index} />}
      />
    </View>
  ) : (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>No Items in Cart</Text>
    </View>
  );
};

const CardItem = ({ item, index }) => {
  const [qty, setQty] = useState(1);
  const [price, setPrice] = useState(item.price);

  const handleQty = (type) => {
    if (type === "inc") {
      setQty((prev) => prev + 1);
    } else if (type === "dec") {
      if (qty > 1) {
        setQty((prev) => prev - 1);
      }
    }
  };
  return (
    <Animated.View
      entering={FadeInRight.delay(index * 200)
        .duration(1000)
        .springify()
        .damping(14)}
      style={styles.cardContainer}
    >
      <Image
        source={{
          uri: item.image,
        }}
        style={styles.itemImage}
      />

      <View style={{ gap: 2, justifyContent: "space-between" }}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>Qty:{qty}</Text>
        <Text style={styles.itemPrice}>Rs.{price * qty}</Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: wp(5),
          }}
        >
          <TouchableOpacity
            style={styles.actionBtn}
            onPress={() => handleQty("dec")}
          >
            <Text>-</Text>
          </TouchableOpacity>

          <Text>{qty}</Text>

          <TouchableOpacity
            style={styles.actionBtn}
            onPress={() => handleQty("inc")}
          >
            <Text>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    gap: wp(2),
    padding: wp(4),
  },
  cardContainer: {
    flexDirection: "row",
    padding: wp(4),
    marginVertical: wp(2),
    marginHorizontal: wp(2),
    backgroundColor: theme.colors.white,
    borderRadius: theme.redius.lg,
  },
  itemImage: {
    width: wp(30),
    height: wp(30),
    borderRadius: theme.redius.sm,
    marginRight: wp(4),
    backgroundColor: theme.colors.neutral(0.1),
  },
  itemName: {
    fontSize: hp(2.6),
    fontWeight: theme.fontWeights.medium,
    color: theme.colors.primary,
    marginBottom: wp(1),
  },
  itemPrice: {
    fontSize: hp(2),
    fontWeight: theme.fontWeights.medium,
    color: theme.colors.neutral(0.9),
    marginBottom: wp(1),
  },
  actionBtn: {
    backgroundColor: theme.colors.primary,
    padding: wp(2),
    borderRadius: theme.redius.sm,
    alignItems: "center",
    width: wp(10),
  },
});

export default MenuItems;
