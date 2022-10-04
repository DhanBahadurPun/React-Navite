import { FlatList, StyleSheet } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

import { CATEGORIES } from "../data/dummy-data";

function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    const { title, color, id } = itemData.item;

    function pressedHandler() {
      navigation.navigate("MealsOverview", { categoryId: id });
    }

    return (
      <CategoryGridTile title={title} color={color} onPress={pressedHandler} />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderCategoryItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;

const styles = StyleSheet.create({});
