import React, { useEffect, useState } from 'react';
import Header from './Header';
import Recipes from './Recipe';
import Axios from 'axios';

const App = () => {
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);

  const APP_ID = "a9e97685";
  const APP_KEY = "9709c0401aa79a15eb622257a4358c0b";

  useEffect(() => {
    getRecipes();
    alert("Search your favourite dish recipe");
  },[])

  const getRecipes = async () => {
    const res = await Axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    setRecipes(res.data.hits);
  };

  const inputChange = (e) => {
    setSearch(e.target.value);
  }

  const onSearch = () => {
    getRecipes();
  };

  return (
    <>
      <Header search={search} onChange={inputChange} onSearch={onSearch} />
      <Recipes recipes={recipes} />
    </>
  );
}

export default App;
