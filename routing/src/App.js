import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import RecipesProvider from './components/RecipesProvider';
import RecipesList from './components/RecipesList';
import NewRecipe from './components/NewRecipe';
import Recipe from './components/Recipe';
import Page404 from './components/Page404';

function App() {
  return (
    <div className="container">
      <RecipesProvider>
        <Router>
          <nav>
            <NavLink to="/recipes/new">Новый рецепт</NavLink>
          </nav>
          <RecipesList />
          <Switch>
            <Route path="/recipes/new" component={NewRecipe} />
            <Route path="/recipes/:id([0-9]+)?:name([a-zA-Z]+)?" component={Recipe} />
            <Route component={Page404} />
          </Switch>
        </Router>
      </RecipesProvider>
    </div>
  );
}

export default App;