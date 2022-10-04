import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

import MealsList from "../components/MealList/MealsList";
import { MEALS } from "../data/dummy-data";
import { FavoriteContext } from "../store/contex/favorite-context";

function FavoriteScreen() {
  // const favContext = useContext(FavoriteContext);
  const favIds = useSelector((state) => state.fav.ids);

  // const favoriteMeals = MEALS.filter((meal) =>
  //   favContext.ids.includes(meal.id)
  // );

  const favoriteMeals = MEALS.filter((meal) => favIds.includes(meal.id));

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealsList displayedMeals={favoriteMeals} />;
}

export default FavoriteScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});
