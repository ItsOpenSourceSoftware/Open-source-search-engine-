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
            title: 'WikiHow',
            url: 'https://www.wikihow.com',
            description: 'A collaborative platform providing how-to guides on a wide range of topics.'
        },
        {
            title: 'X',
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
            title: 'Chrome Web Store',
            url: 'https://chrome.google.com/webstore',
            description: 'Official store for Chrome extensions, themes, and apps for the Google Chrome browser.'
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
        {
            title: 'PortForward',
            url: 'https://www.portforward.com',
            description: 'Website providing guides and tools for setting up port forwarding on various routers and networks.'
        },
        {
            title: 'VLC Media Player',
            url: 'https://www.videolan.org/vlc',
            description: 'Free and open-source multimedia player and framework that plays most multimedia files, as well as DVDs, audio CDs, VCDs, and various streaming protocols.'
        },
        {
            title: 'Snapdrop',
            url: 'https://snapdrop.net',
            description: 'Web-based file sharing service that allows you to transfer files between devices on the same network using your browser.'
        },
        {
            title: 'No-IP',
            url: 'https://www.noip.com',
            description: 'Dynamic DNS service provider that offers solutions for managing dynamic IP addresses and creating easy-to-remember domain names.'
        },
        {
            title: 'Roblox',
            url: 'https://www.roblox.com',
            description: 'Online platform and game creation system that allows users to design and play games created by other users.'
        },
        {
            title: 'Microsoft Rewards',
            url: 'https://rewards.bing.com',
            description: 'Program by Microsoft that allows users to earn points by searching with Bing, which can be redeemed for various rewards.'
        },
        {
            title: 'OpenAI',
            url: 'https://www.openai.com',
            description: 'Research organization focused on developing and promoting friendly AI for the benefit of humanity.'
        },
        {
            title: 'Epic Games',
            url: 'https://www.epicgames.com',
            description: 'Video game and software developer known for popular games like Fortnite and the Unreal Engine.'
        },
        {
            title: 'Google Maps',
            url: 'https://www.google.com/maps',
            description: 'Web mapping service developed by Google that provides users with various types of maps, satellite imagery, and directions.'
        },
        {
            title: 'Bing Maps',
            url: 'https://www.bing.com/maps',
            description: 'Web mapping service from Microsoft that provides users with maps, satellite imagery, and directions.'
        },
        {
            title: 'Blender',
            url: 'https://www.blender.org',
            description: 'Open-source 3D creation suite for modeling, animation, rendering, compositing, and more.'
        },
        {
            title: 'Outlook',
            url: 'https://outlook.com',
            description: 'Web-based email service from Microsoft with integrated calendar, task management, and contacts.'
        },
        {
            title: 'Gmail',
            url: 'https://mail.google.com',
            description: 'Free email service provided by Google that offers a wide range of features including powerful search, large storage, and integration with Google services.'
        },
        {
            title: 'Minecraft',
            url: 'https://www.minecraft.net',
            description: 'Official site for Minecraft, a popular sandbox video game that allows players to build and explore virtual worlds.'
        },
        {
            title: 'Strandhatters',
            url: 'https://strandhatters.com.au',
            description: 'A premier destination for high-quality hats and headwear in Australia.'
        },
        {
            title: 'BitView',
            url: 'https://bitview.net',
            description: 'A free and open-source video hosting platform where users can upload and share videos.'
        },
        {
            title: 'eBay',
            url: 'https://www.ebay.com',
            description: 'Online auction and shopping website where people buy and sell a wide variety of goods and services worldwide.'
        },
        {
            title: 'WikiHow',
            url: 'https://www.wikihow.com',
            description: 'A collaborative platform providing how-to guides on a wide range of topics.'
        },
        {
            title: 'Cobalt.tools',
            url: 'https://cobalt.tools',
            description: 'A video downloader tool that allows users to download videos from various online platforms.'
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
        
        results.forEach(item => {
            const resultItem = document.createElement('div');
            resultItem.classList.add('result-item');
            resultItem.innerHTML = `
                <a class="result-title" href="${item.url}" target="_blank">${item.title}</a>
                <div class="result-url">${item.url}</div>
                <div class="result-description">${item.description}</div>
            `;
            resultsContainer.appendChild(resultItem);
        });
    }
});
