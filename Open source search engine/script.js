// script.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('search-form');
    const resultsContainer = document.getElementById('results');
    const searchQueryInput = document.getElementById('search-query');

    // Extended data array with the new entries
    const data = [
        // Existing entries
        {
            title: 'Google',
            url: 'https://www.google.com',
            description: 'Search the world\'s information, including webpages, images, videos, and more.'
        },
        // ... other entries ...
        {
            title: 'Gmail',
            url: 'https://mail.google.com',
            description: 'Free email service provided by Google that offers a wide range of features including powerful search, large storage, and integration with Google services.'
        },
        // New entry
        {
            title: 'Minecraft',
            url: 'https://www.minecraft.net',
            description: 'Official site for Minecraft, a popular sandbox video game that allows players to build and explore virtual worlds.'
        }
    ];

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const query = searchQueryInput.value.toLowerCase();
        displayResults(query);
    });

    function displayResults(query) {
        resultsContainer.innerHTML = ''; // Clear previous results
        const results = data.filter(item => item.title.toLowerCase().includes(query));
        
        if (results.length === 0) {
            resultsContainer.innerHTML = '<p>No results found.</p>';
            return;
        }
        
        results.forEach(result => {
            const resultItem = document.createElement('div');
            resultItem.classList.add('result-item');

            resultItem.innerHTML = `
                <a href="${result.url}" target="_blank" class="result-title">${result.title}</a>
                <p class="result-url">${result.url}</p>
                <p class="result-description">${result.description}</p>
            `;
            
            resultsContainer.appendChild(resultItem);
        });
    }
});
