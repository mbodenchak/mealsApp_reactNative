import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {}, //placeholder to help IDE autocomplete for now
  removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  function addFavorite(id) {
    setFavoriteMealIds((currentFavorites) => [...currentFavorites, id]);
  }

  function removeFavorite(id) {
    setFavoriteMealIds((currentFavorites) =>
      currentFavorites.filter((mealId) => mealId !== id)
    );
  }

  //create constant to pass managed array of "MealIds" and add/remove functions into context Provider
  const value = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
