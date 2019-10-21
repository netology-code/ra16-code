import React, { useContext } from 'react'
import RecipesContext from '../contexts/RecipesContext';
import { Link } from 'react-router-dom';

export default function RecipesList() {
    const recipes = useContext(RecipesContext);
    return (
        <React.Fragment>
            <h2>Рецепты</h2>
            <ul>
                {recipes.map(o => <li><Link to={`/recipes/${o.id}`}>{o.name}</Link></li>)}
            </ul>
        </React.Fragment>
    )
}
