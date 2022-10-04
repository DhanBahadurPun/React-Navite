import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "./MealItem";

function MealsList({ displayedMeals }) {
  function renderMealItem(itemData) {
    return <MealItem itemData={itemData.item} />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
