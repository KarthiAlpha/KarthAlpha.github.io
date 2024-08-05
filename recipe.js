document.addEventListener('DOMContentLoaded', function() {
    const recipes = [
        { name: 'Spaghetti Carbonara', image: 'https://bellyfull.net/wp-content/uploads/2023/02/Spaghetti-Carbonara-blog-1.jpg', description: 'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.' },
        { name: 'Chicken Curry', image: 'https://th.bing.com/th/id/OIP.nTT5tvHk0Up59zRcC6oEygAAAA?rs=1&pid=ImgDetMain', description: 'A flavorful curry dish with tender chicken pieces and aromatic spices.' },
        { name: 'Beef Stroganoff', image: 'https://th.bing.com/th/id/OIP.5E0f1dFQnVNSKZKBYCm-VQHaLH?rs=1&pid=ImgDetMain.jpg', description: 'A Russian dish of sautéed pieces of beef served in a sauce with smetana (sour cream).' },
        { name: 'Caesar Salad', image: 'https://th.bing.com/th/id/R.4e0f364583653903714683893e811f8f?rik=MltFiYmSNnOoCw&pid=ImgRaw&r=0', description: 'A green salad of romaine lettuce and croutons dressed with lemon juice, olive oil, egg, Worcestershire sauce, anchovies, garlic, Dijon mustard, Parmesan cheese, and black pepper.' },
        { name: 'Margherita Pizza', image: 'https://th.bing.com/th/id/R.0be49bdba1d8295524d4ccb08606bc2a?rik=N19ezG0lhKj4kw&pid=ImgRaw&r=0', description: 'A traditional Italian pizza with tomatoes, mozzarella cheese, fresh basil, salt, and extra-virgin olive oil.' },
        { name: 'Tacos', image: 'https://th.bing.com/th/id/OIP.V60pc6LFIaBn0hO75jm1egHaHZ?rs=1&pid=ImgDetMain', description: 'A traditional Mexican dish consisting of small hand-sized corn or wheat tortillas topped with a filling.' },
        { name: 'Sushi', image: 'https://th.bing.com/th/id/OIP.TdQ3xXZuatpveZzCdh2zagHaLH?rs=1&pid=ImgDetMain', description: 'A Japanese dish consisting of vinegared rice, usually with some sugar and salt, accompanying a variety of ingredients, such as seafood, vegetables, and occasionally tropical fruits.' },
        { name: 'Pad Thai', image: 'https://th.bing.com/th/id/OIP.Hb8l5cAsfnY-kIvOu_TuTgHaLH?rs=1&pid=ImgDetMain', description: 'A stir-fried rice noodle dish commonly served as street food and at most restaurants in Thailand.' },
        { name: 'Pancakes', image: 'https://th.bing.com/th/id/OIP.ryjaHoGsvM6Vc2Az819oYgHaLG?rs=1&pid=ImgDetMain', description: 'A flat cake, often thin and round, prepared from a starch-based batter that may contain eggs, milk, and butter.' },
        { name: 'Hamburger', image: 'https://th.bing.com/th/id/R.0869b26751ec7490ebb4b73eb500fed0?rik=O7mSvBoQXNQbkQ&pid=ImgRaw&r=0', description: 'A sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun.' },
        { name: 'Ratatouille', image: 'https://th.bing.com/th/id/R.3fa5c68b8a1cbce25478aa4bbc8595de?rik=h0DPvlifAXIhjQ&pid=ImgRaw&r=0', description: 'A French Provençal stewed vegetable dish, originating in Nice, and sometimes referred to as ratatouille niçoise.' },
        { name: 'Tom Yum Soup', image: 'https://th.bing.com/th/id/OIP.dG9DXhQfc1ZUbcbicHbAKgHaLH?w=1200&h=1800&rs=1&pid=ImgDetMain', description: 'A type of hot and sour Thai soup, usually cooked with shrimp.' },
        { name: 'Falafel', image: 'https://th.bing.com/th/id/OIP.rruYFk2Ga0bxHnPRoGK88AHaHa?rs=1&pid=ImgDetMain', description: 'A deep-fried ball or patty-shaped fritter made from ground chickpeas, fava beans, or both.' },
        { name: 'Paella', image: 'https://th.bing.com/th/id/OIP.oHhBbV7JYKNMQjaKOIS2AgHaLH?rs=1&pid=ImgDetMain', description: 'A Spanish rice dish originally from Valencia. Paella is one of the best-known dishes in Spanish cuisine.' },
        { name: 'Butter Chicken', image: 'https://th.bing.com/th/id/R.b28ff6049366841606c6365c4fcd2a80?rik=NQvYD9PP6eAZrw&riu=http%3a%2f%2frasamalaysia.com%2fwp-content%2fuploads%2f2015%2f07%2fbutter-chicken2.jpg&ehk=Syu2cJurPsYjPbSR%2bXsMv5c9m6Og1piX0CbxUWTSaHs%3d&risl=&pid=ImgRaw&r=0', description: 'A type of curry made from chicken with a spiced tomato and butter (makhan) sauce.' },
        { name: 'Fish and Chips', image: 'https://th.bing.com/th/id/OIP.4GL4CN1SGfjf83lp88MtPwHaHa?rs=1&pid=ImgDetMain', description: 'A hot dish consisting of fried fish in batter served with chips.' },
        { name: 'Lasagna', image: 'https://th.bing.com/th/id/R.a91395196a0ba64fe60f7433870f0075?rik=4DeNmyY8aZ6I4w&pid=ImgRaw&r=0', description: 'An Italian dish made of stacked layers of thin flat pasta alternating with fillings such as ragù (ground meats and tomato sauce) and other vegetables, cheese (which may include ricotta and parmesan), and seasonings and spices such as garlic, oregano, and basil.' },
        { name: 'Peking Duck', image: 'https://th.bing.com/th/id/OIP.eo-CTnCP1AY8RJx3IZ3EdgHaLH?rs=1&pid=ImgDetMain', description: 'A famous duck dish from Beijing that has been prepared since the imperial era.' },
        { name: 'Pho', image: 'https://th.bing.com/th/id/R.e3c0aab5c4b408a043d224b1f8240e6b?rik=H1oNIK3XWutSAw&pid=ImgRaw&r=0', description: 'A Vietnamese soup consisting of broth, rice noodles, herbs, and meat, usually beef or chicken.' },
        { name: 'Greek Salad', image: 'https://th.bing.com/th/id/R.0220aad136d8071340d0570e077a2025?rik=vHDWfab7IpnDqQ&pid=ImgRaw&r=0', description: 'A salad in Greek cuisine made with pieces of tomatoes, cucumbers, onion, feta cheese, and olives, typically seasoned with salt, pepper, Greek oregano, and olive oil.' }
    ];

    const recipeContainer = document.getElementById('recipes');

    function displayRecipes(recipes) {
        recipeContainer.innerHTML = '';
        recipes.forEach(recipe => {
            const recipeElement = document.createElement('div');
            recipeElement.classList.add('recipe');
            recipeElement.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.name}">
                <h2>${recipe.name}</h2>
                <p>${recipe.description}</p>
            `;
            recipeContainer.appendChild(recipeElement);
        });
    }

    function searchRecipes(event) {
        const query = event.target.value.toLowerCase();
        const filteredRecipes = recipes.filter(recipe => recipe.name.toLowerCase().includes(query));
        displayRecipes(filteredRecipes);
    }

    document.getElementById('search').addEventListener('input', searchRecipes);

    // Initial display
    displayRecipes(recipes);
});