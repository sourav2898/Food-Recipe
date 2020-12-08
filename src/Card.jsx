import React from "react";

const Card = props => {
  const { name, image, ingredientLines } = props;
  return (
      <div class="card">
        <img src={image} alt="dish image" />
        <div class="title">
          <h2>{name}</h2>
        </div>

        <h3> Ingredients Required: </h3>
        <ul class="list">
          {ingredientLines.map(ingredient => (
            <li >{ingredient}</li>
          ))}
        </ul>
      </div>
  );
};

export default Card;