document.getElementById('searchButton').addEventListener('click', function() {
    const ingredientInput = document.getElementById('ingredientInput').value;
    const ingredients = ingredientInput.split(',').map(ingredient => ingredient.trim());
    
    fetchRecipes(ingredients);
});

function fetchRecipes(ingredients) {
    // Mocking a recipe API response with additional recipes
    const recipes = [
        {
            title: 'Pasta Carbonara',
            ingredients: ['pasta', 'egg', 'parmesan', 'bacon']
        },
        {
            title: 'Tomato Basil Soup',
            ingredients: ['tomato', 'basil', 'garlic', 'onion']
        },
        {
            title: 'Avocado Toast',
            ingredients: ['avocado', 'bread', 'salt', 'pepper']
        },
        {
            title: 'Sambar',
            ingredients: ['toor dal', 'tamarind', 'vegetables', 'sambar powder', 'mustard seeds', 'curry leaves', 'oil']
        },
        {
            title: 'Potato Fry',
            ingredients: ['potato', 'oil', 'mustard seeds', 'curry leaves', 'turmeric', 'salt']
        },
        {
            title: 'Corn Soup',
            ingredients: ['corn', 'milk', 'butter', 'salt', 'pepper']
        }
    ];

    const matchingRecipes = recipes.filter(recipe => 
        ingredients.every(ingredient => recipe.ingredients.includes(ingredient))
    );

    displayRecipes(matchingRecipes);
}

function displayRecipes(recipes) {
    const recipesContainer = document.getElementById('recipes');
    recipesContainer.innerHTML = '';

    if (recipes.length === 0) {
        recipesContainer.innerHTML = '<p>No recipes found.</p>';
        return;
    }

    recipes.forEach(recipe => {
        const recipeElement = document.createElement('div');
        recipeElement.classList.add('recipe');
        recipeElement.innerHTML = `<h3>${recipe.title}</h3><p>Ingredients: ${recipe.ingredients.join(', ')}</p>`;
        recipesContainer.appendChild(recipeElement);
    });
}
