import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import { data } from "../constants/data.js";
import { hp, wp } from "../helpers/common.js";
import { theme } from "../constants/theme.js";
import Animated, { FadeInRight } from "react-native-reanimated";

const Catagories = ({ activeCatagory, handleChangeCatagory }) => {
  return (
    <FlatList
      horizontal
      contentContainerStyle={styles.flatlistContainer}
      showsHorizontalScrollIndicator={false}
      data={data.catagories}
      keyExtractor={(item) => item}
      renderItem={({ item, index }) => (
        <CatagoryItem
          isActive={activeCatagory === item}
          handleChangeCatagory={handleChangeCatagory}
          title={item}
          index={index}
        />
      )}
    />
  );
};

const CatagoryItem = ({ title, index, isActive, handleChangeCatagory }) => {
  let color = isActive ? theme.colors.white : theme.colors.neutral(0.8);
  let backgroundColor = isActive ? theme.colors.primary : theme.colors.white;

  return (
    <Animated.View
      entering={FadeInRight.delay(index * 200)
        .duration(1000)
        .springify()
        .damping(14)}
    >
      <Pressable
        onPress={() => handleChangeCatagory(isActive ? null : title)}
        style={[styles.catagory, { backgroundColor }]}
      >
        <Text style={[styles.title, { color }]}>{title}</Text>
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  flatlistContainer: {
    paddingHorizontal: wp(4),
    gap: 8,
  },
  catagory: {
    padding: 12,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: theme.colors.grayBg,
    borderRadius: theme.redius.lg,
    borderCurve: "continuous",
  },
  title: {
    fontSize: hp(1.8),
    fontWeight: theme.fontWeights.medium,
  },
});

export default Catagories;
