// script.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('search-form');
    const resultsContainer = document.getElementById('results');
    const searchQueryInput = document.getElementById('search-query');

    // Extended data array with the new entries
    const data = [
        {
            title: 'Google',
            url: 'https://www.google.com',
            description: 'Search the world\'s information, including webpages, images, videos, and more.'
        },
        {
            title: 'Bing',
            url: 'https://www.bing.com',
            description: 'The search engine from Microsoft that helps you find the information you\'re looking for.'
        },
        {
            title: 'ChatGPT',
            url: 'https://chatgpt.com',
            description: 'Conversational AI that understands and generates human-like responses.'
        },
        {
            title: 'Speedtest',
            url: 'https://www.speedtest.net',
            description: 'Measure your internet speed with a quick and easy test.'
        },
        {
            title: 'YouTube',
            url: 'https://www.youtube.com',
            description: 'A platform for watching and sharing videos across the globe.'
        },
        {
            title: 'YouTube Studio',
            url: 'https://studio.youtube.com',
            description: 'YouTube\'s interface for managing and analyzing your channel\'s content.'
        },
        {
            title: 'Wikipedia',
            url: 'https://www.wikipedia.org',
            description: 'Free online encyclopedia with millions of articles in multiple languages.'
        },
        {
            title: 'Twitter',
            url: 'https://twitter.com',
            description: 'Social media platform for short, real-time updates and interactions.'
        },
        {
            title: 'Amazon',
            url: 'https://www.amazon.com',
            description: 'Online retailer for a wide variety of products, including books, electronics, and more.'
        },
        {
            title: 'Reddit',
            url: 'https://www.reddit.com',
            description: 'Social news aggregation, web content rating, and discussion website.'
        },
        {
            title: 'Instagram',
            url: 'https://www.instagram.com',
            description: 'Photo and video-sharing social networking service.'
        },
        {
            title: 'LinkedIn',
            url: 'https://www.linkedin.com',
            description: 'Professional networking platform for job seekers and recruiters.'
        },
        {
            title: 'GitHub',
            url: 'https://github.com',
            description: 'Platform for version control and collaboration on software development projects.'
        },
        {
            title: 'The Fedora Lounge',
            url: 'https://www.thefedoralounge.com',
            description: 'A forum for enthusiasts of vintage and modern hats, including fedoras, panamas, and more.'
        },
        {
            title: 'Microsoft',
            url: 'https://www.microsoft.com',
            description: 'Official website for Microsoft, a global leader in software, hardware, and technology services.'
        },
        {
            title: 'HP',
            url: 'https://www.hp.com',
            description: 'Official website for HP (Hewlett-Packard), a leading company in computers, printers, and technology solutions.'
        },
        {
            title: 'Fortnite',
            url: 'https://www.fortnite.com',
            description: 'Official site for Fortnite, a popular battle royale game developed by Epic Games.'
        },
        {
            title: 'Skype',
            url: 'https://www.skype.com',
            description: 'Communication tool for video calls, voice calls, and instant messaging.'
        },
        {
            title: 'Fedora Project',
            url: 'https://fedoraproject.org',
            description: 'The official website for the Fedora Project, which produces the Fedora Linux operating system.'
        },
        {
            title: 'Google Chrome',
            url: 'https://www.google.com/chrome',
            description: 'Official site for Google Chrome, a fast, secure, and free web browser developed by Google.'
        },
        {
            title: 'Microsoft Teams',
            url: 'https://www.microsoft.com/en-au/microsoft-teams',
            description: 'Official site for Microsoft Teams, a collaboration platform that integrates with Microsoft 365 for chat, meetings, and file sharing.'
        },
        {
            title: 'Zoom',
            url: 'https://zoom.us',
            description: 'Official site for Zoom, a video conferencing platform that offers online meetings, webinars, and collaboration tools.'
        },
        {
            title: 'Windows',
            url: 'https://www.microsoft.com/windows',
            description: 'Official site for Windows, the operating system developed by Microsoft.'
        },
        {
            title: 'Firefox',
            url: 'https://www.mozilla.org/firefox',
            description: 'Official site for Mozilla Firefox, a free and open-source web browser known for its speed and privacy features.'
        },
        // Added new search result
        {
            title: 'PortForward',
            url: 'https://www.portforward.com',
            description: 'Website providing guides and tools for setting up port forwarding on various routers and networks.'
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
