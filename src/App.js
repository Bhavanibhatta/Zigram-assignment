import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import SingleCocktail from "./views/SingleCocktail";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/cocktail/:id">
          <SingleCocktail />
        </Route>
      
      </Switch>
    </Router>
  );
}
