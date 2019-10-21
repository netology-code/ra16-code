import React, { useState } from 'react'
import RecipesContext from '../contexts/RecipesContext';

export default function RecipesProvider(props) {
    const [recipes, setRecipes] = useState([
        {
            id: 1,
            name: 'Borsch'
        },
        {
            id: 2,
            name: 'PekinDuck'
        },
        {
            id: 3,
            name: 'FugaFish'
        }
    ]);

    return (
        <RecipesContext.Provider value={recipes}>
            {props.children}
        </RecipesContext.Provider>
    )
}
