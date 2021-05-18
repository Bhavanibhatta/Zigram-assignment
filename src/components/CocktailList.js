import React from "react";
import Cocktail from "./Cocktail";

export default function CocktailList({ cocktails, loading }) {
  if (loading) {
    return <h2 className="section-title">Loading...</h2>;
  }
  if (cocktails.length < 1) {
    return (
      <h2 className="section-title">
        No cocktails found!
      </h2>
    );
  }
  return (
    <section className="section">
      <div className="cocktails-center">
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
}
