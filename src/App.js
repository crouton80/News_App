import { Route, Routes } from "react-router-dom";
import Page404 from "./pages/Page404";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import NewsCategory from "./pages/NewsCategory";
import NewsDetails from "./pages/NewsDetails";
import { FavouritesContext } from "./store/favourites/context";
import { initialState, favouritesReducer } from "./store/favourites/reducer";
import { useReducer } from "react";

function App() {
  const [state, dispatch] = useReducer(favouritesReducer, initialState);

  const favouritesContextValue = {
    state,
    dispatch,
  };
  return (
    <FavouritesContext.Provider value={favouritesContextValue}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/category/:categoryId" element={<NewsCategory />} />
          <Route path="/news/:newsId" element={<NewsDetails />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </FavouritesContext.Provider>
  );
}

export default App;
