import { useState, useEffect } from "react";
import {fetchDataFromApi} from "./utils/api";
import { useSelector, useDispatch } from 'react-redux';
import { getApiConfiguration } from "./store/homeSlice";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Searchresult from "./pages/searchResult/searchresult";
import Explore from "./pages/explore/Explore";
import Details from "./pages/details/Details";
import Footer from "./components/footer/Footer";
import pageNotFound from "./pages/404/pageNotFound";

function App() {
  const dispatch = useDispatch();
  const {url} = useSelector((state) => state.home)

  useEffect(() => {
    fetchApiConfig();
  }, [])

  const fetchApiConfig = () => {
    fetchDataFromApi('/configuration')
      .then((res) => {
        console.log(res);

        const url = {
          backdrop: res.images.secure_base_url + "original",
          poster: res.images.secure_base_url + "original",
          profile: res.images.secure_base_url + "original",
        }

        dispatch(getApiConfiguration(url));
      });
  };

  return (
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:mediaType/:id" element={<Details />} />
          <Route path="/:search/:query" element={<Searchresult />} />
          <Route path="/:explore/:mediaType" element={<Explore />} />
          <Route path="*" element={<pageNotFound />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
  )
}

export default App;

