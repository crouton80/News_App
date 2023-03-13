import React from "react";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import { useContext } from "react";
import { FavouritesContext } from "../store/favourites/context";
import NewsCardList from "../components/NewsCardList";

function Favorites() {
  const { state } = useContext(FavouritesContext);
  console.log(state);
  return (
    <Layout>
      <Container>
        {state.newsList.length === 0 ? (
          <p>Momentan nu ai nicio știre favorită.</p>
        ) : (
          <NewsCardList newsList={state.newsList} />
        )}
      </Container>
    </Layout>
  );
}

export default Favorites;
