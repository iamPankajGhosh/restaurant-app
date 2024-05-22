import { TouchableOpacity } from "react-native";
import { Text, FlatList, StyleSheet, Image, View } from "react-native";
import { data } from "../constants/data.js";
import { hp, wp } from "../helpers/common.js";
import { theme } from "../constants/theme.js";
import Animated, { FadeInRight } from "react-native-reanimated";
import { useState } from "react";

const MenuItems = () => {
  return (
    <FlatList
      contentContainerStyle={styles.flatlistContainer}
      showsHorizontalScrollIndicator={false}
      data={data.foodItems}
      keyExtractor={(item) => item.id}
      renderItem={({ item, index }) => <CardItem item={item} index={index} />}
    />
  );
};

const CardItem = ({ item, index }) => {
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
        <Text style={styles.itemPrice}>Rs.{item.price}</Text>

        <TouchableOpacity style={styles.addBtn}>
          <Text>Add</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    padding: wp(4),
    justifyContent: "space-between",
    marginVertical: wp(2),
    marginHorizontal: wp(2),
    backgroundColor: theme.colors.white,
    borderRadius: theme.redius.lg,
  },
  itemImage: {
    width: wp(40),
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
  addBtn: {
    backgroundColor: theme.colors.primary,
    padding: wp(2),
    borderRadius: theme.redius.sm,
    alignItems: "center",
    width: wp(40),
  },
});

export default MenuItems;
