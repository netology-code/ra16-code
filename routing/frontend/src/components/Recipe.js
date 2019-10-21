import React, {useContext} from 'react'
import RecipesContext from '../contexts/RecipesContext';

function findById(recipes, id) {
  return recipes.find(o => o.id === id);
}

function findByName(recipes, name) {
  return recipes.find(o => o.name.toLowerCase() === name.toLowerCase());
}

export default function Recipe({ match }) {
    const recipes = useContext(RecipesContext);

    const recipe = match.params.id ?
        findById(recipes, Number(match.params.id)) :
        findByName(recipes, match.params.name);
    return (
        <div>
            <h1>Рецепт</h1>
            <p>
                {recipe ? recipe.name : 'Не найден'}
            </p>
        </div>
    );
}
