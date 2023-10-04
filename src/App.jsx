import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import HomePage from "./contents/Homepage/HomePage";
import DetailsPage from "./contents/DetailsPage/DetailsPage";
import SearchPage from "./contents/SearchPage/SearchPage";
import ExplorePage from "./contents/ExplorePage/ExplorePage";
import PageNotFound from "./contents/PageNotFound";
import { useContext, useEffect } from "react";
import { GenreContext } from "./context/GenreContext";
import { fetchDataFromApi } from "./utils/api";
import Footer from "./components/Footer";

function App() {
  const { addGenre } = useContext(GenreContext);

  useEffect(() => {
    genresCall();
  }, []);

  const genresCall = async () => {
    let promises = [];
    let endPoints = ["tv", "movie"];
    let allGenres = {};

    endPoints.forEach((url) => {
      promises.push(fetchDataFromApi(`/genre/${url}/list`));
    });

    const data = await Promise.all(promises);

    data.map(({ genres }) => {
      return genres.map((item) => (allGenres[item.id] = item));
    });

    addGenre(allGenres);
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:mediaType/:id" element={<DetailsPage />} />
        <Route path="/search/:query" element={<SearchPage />} />
        <Route path="/explore/:mediaType" element={<ExplorePage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
