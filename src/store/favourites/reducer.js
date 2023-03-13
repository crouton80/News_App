export const initialState = {
  newsList: [
   
  ],
};

export function favouritesReducer(state, action) {
  console.log(action);
  // Evaluam tipurile actiunii:
  switch (action.type) {
    case "ADD_TO_FAVOURITES": {
      let addedNews = action.payload;
      let previousNewsList = state.newsList;
      //   if (!previousNewsList.includes(addedNews)) {
      //     previousNewsList.push(addedNews);
      //   }
      const found = previousNewsList.find(
        element => element.id === addedNews.id
      );
      if (found === undefined) {
        let newNewsList = [addedNews, ...previousNewsList];
        return {
          newsList: newNewsList,
        };
      } else {
        return state;
      }
    }
    case "REMOVE_FROM_FAVOURITES": {
      // Pentru a șterge produsele, filtram produsele din state, excuzandu-l pe cel care are id-ul venit din payload.
      const filteredProducts = state.products.filter(product => {
        return product.id !== action.payload;
      });
      // State-ul nou va contine produsele filtrate.
      const newState = {
        products: filteredProducts,
      };
      return newState;
    }
    // Nu uitam ca in cazul default sa returnam state-ul anterior, nemodificat!
    default:
      return state;
  }
}
