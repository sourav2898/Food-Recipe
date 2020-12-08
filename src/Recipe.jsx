import React from "react";
import Card from "./Card";

const Recipes = props => {
  const { recipes } = props;
  return (
    <div className="cont">
      {recipes.map(recipe => (
        <Card
          key={Math.random() * 100}
          name={recipe.recipe.label}
          image={recipe.recipe.image}
          ingredientLines={recipe.recipe.ingredientLines}
        />
      ))}
    </div>
  );
};

export default Recipes;