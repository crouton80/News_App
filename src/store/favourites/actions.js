export function addToFavourites(news) {
  return {
    type: "ADD_TO_FAVOURITES",
    payload: news,
  };
}

export function removeFromFavourites(news) {
  return {
    type: "REMOVE_FROM_FAVOURITES",
    payload: news,
  };
}
