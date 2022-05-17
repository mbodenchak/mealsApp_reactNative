import { Text, View, ScrollView, Image, StyleSheet } from "react-native";
import Subtitle from "../components.js/MealDetail/Subtitle";
import List from "../components.js/MealDetail/List";
import MealDetails from "../components.js/MealDetails";

import { MEALS } from "../data/dummy-data";

//automatically receives route and navigation prop as a registered Screen
//Route prop gives us the params, which gives us the mealId from the params set in the navigate method in mealItem.js.
function MealDetailScreen({ route }) {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId); //searches through MEALS and compares meal.id to the id found form params contained in the mealId constant.

  // image source note: use uri if it is a networked source. Also must style an image if it is networked in order for it to appear.
  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <View>
        <MealDetails
          duration={selectedMeal.duration}
          complexity={selectedMeal.complexity}
          affordability={selectedMeal.affordability}
          textStyle={styles.detailText}
        />
      </View>
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
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
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listContainer: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
});
