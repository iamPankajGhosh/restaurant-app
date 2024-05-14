import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import { data } from "../constants/data.js";
import foodImage from "../assets/images/food.png";
import { hp, wp } from "../helpers/common.js";
import { theme } from "../constants/theme.js";

const FoodList = () => {
  return (
    <FlatList
      contentContainerStyle={styles.flatlistContainer}
      data={data.foods}
      keyExtractor={(item) => item}
      renderItem={({ item, index }) => (
        <FoodItem index={index} title={item.title} price={item.price} />
      )}
    />
  );
};

const FoodItem = ({ index, title, price }) => {
  return (
    <View key={index} style={styles.foodItem}>
      <Image source={foodImage} style={styles.foodImage} />
      <Text>{title}</Text>
      <Text>Price: {price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  flatlistContainer: {
    padding: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  foodImage: {
    width: "100%",
    height: wp(30),
    marginBottom: 10,
    borderWidth: 1,
    borderColor: theme.colors.grayBg,
    borderRadius: theme.redius.lg,
  },
  foodItem: {
    width: wp(42),
    marginBottom: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: theme.colors.grayBg,
    backgroundColor: theme.colors.white,
    borderRadius: theme.redius.lg,
    padding: 10,
  },
});

export default FoodList;
