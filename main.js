
//main.js

import { fetchCocktail } from './api.js';
import { renderCocktail, displayError, createCocktail, updateCocktail, deleteCocktail } from './dom.js';

document.addEventListener('DOMContentLoaded', () => {
    const cocktailContainer = document.getElementById('cocktail-container');
    const createButton = document.getElementById('create-cocktail');
    const updateButton = document.getElementById('update-cocktail');
    const deleteButton = document.getElementById('delete-cocktail');

    let cocktails = [];
    let currentCocktail = null;

    const loadCocktail = async () => {
        try {
            const cocktail = await fetchCocktail();
            currentCocktail = cocktail;
            const cocktailImage = renderCocktail(cocktailContainer, cocktail);
            cocktailImage.addEventListener('click', loadCocktail);
        } catch (error) {
            displayError(cocktailContainer, 'Sorry, we couldn\'t load a cocktail at this time.');
        }
    };

    // Initial fetch
    loadCocktail();

    // Event listeners for buttons
    createButton.addEventListener('click', () => createCocktail(cocktails));
    updateButton.addEventListener('click', () => updateCocktail(currentCocktail));
    deleteButton.addEventListener('click', () => {
        cocktails = deleteCocktail(cocktails, currentCocktail, cocktailContainer);
    });
});

