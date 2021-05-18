import React from "react";
import { useParams, Link } from "react-router-dom";

export default function SingleCocktail() {
  const { id } = useParams();

  const [loading, setLoading] = React.useState(false);

  const [cocktail, setCocktail] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await response.json();
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strAlcoholic: info,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getCocktail();
  }, [id]);
  if (loading) {
    return <h2 className="section-title">Loading...</h2>;
  }
  if (!cocktail) {
    return <h2 className="section-title">No cocktail to display</h2>;
  } else {
    const {
      name,
      image,
      category,
      info,
      glass,
      instructions,
      ingredients,
    } = cocktail;
    return (
      <section className="section cocktail-section">
        <Link to="/" className="btn btn-primary">
          Back home
        </Link>
        <h2 className="section-title">Drink Name : {name}</h2>
        <div className="drink">
          <img src={image} alt={name} />
          <div className="drink-info">
            <p>Category : {category}</p>
            <p>Type : {info}</p>
            <p>Glass : {glass}</p>
            <p>
              Ingredients :{" "}
              {ingredients.map((item, index) => {
                return item ? <span key={index}>{item}</span> : null;
              })}
            </p>
            <p>Instructions: {instructions}</p>
           
          </div>
        </div>
      </section>
    );
  }
}
