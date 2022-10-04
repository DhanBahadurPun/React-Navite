import { useContext, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

import MealDetails from "../components/MealDetails";
import List from "../components/MealDetail/List";
import Subtitle from "../components/MealDetail/Subtitle";
import { MEALS } from "../data/dummy-data";
import IconButton from "../components/IconButton";
// import { FavoriteContext } from "../store/contex/favorite-context";
import { favoriteActoins } from "../store/redux/favorite";

function MealDetailScreen({ route, navigation }) {
  // const favContex = useContext(FavoriteContext);
  const favMealsIds = useSelector((state) => state.fav.ids);
  const dispatch = useDispatch();

  const { mealId } = route.params;

  // const mealIsFavorite = favContex.ids.includes(mealId);
  const mealIsFavorite = favMealsIds.includes(mealId);

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  function changeFavoriteStatusHandler() {
    if (mealIsFavorite) {
      // favContex.removeFavorite(mealId);
      dispatch(favoriteActoins.removeFavorite({ id: mealId }));
    } else {
      // favContex.addFavorite(mealId);
      dispatch(favoriteActoins.addFavorite({ id: mealId }));
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon={mealIsFavorite ? "star" : "star-outline"}
          color="#fff"
          onPress={changeFavoriteStatusHandler}
        />
      ),
    });
  }, [navigation, changeFavoriteStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <View>
        <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealDetails
          duration={selectedMeal.duration}
          complexity={selectedMeal.complexity}
          affordability={selectedMeal.affordability}
          textStyle={styles.detailText}
        />
        <View style={styles.listOuterContainer}>
          <View style={styles.listInnerContainer}>
            <Subtitle>Ingredients</Subtitle>
            <List mealData={selectedMeal.ingredients} />
            <Subtitle>Steps</Subtitle>
            <List mealData={selectedMeal.steps} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "#fff",
  },
  detailText: {
    color: "#fff",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listInnerContainer: {
    maxWidth: "80%",
  },
});
