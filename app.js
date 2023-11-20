function getNearbyParks(apiKey, address, radius = 1000, keyword = 'park') {
    return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const location = data.results[0].geometry.location;
            return `https://www.google.com/maps/search/?api=1&query=${location.lat},${location.lng}`;
        });
}

function findParks() {
    // Replace 'YOUR_API_KEY' with your actual API key
    const apiKey = 'AIzaSyCVbnGKr45xGpFbLu7pDFvbFrGNl5e8VZo';

    // Replace 'Eagles Park, 3.2, University Endowment Lands, BC' with the desired address
    const address = 'Eagles Park, 3.2, University Endowment Lands, BC';

    // Get the Google Maps URL for the specified location
    getNearbyParks(apiKey, address)
        .then(mapUrl => {
            // Open the Google Maps URL in a new tab or window
            window.open(mapUrl, '_blank');
        })
        .catch(error => console.error('Error:', error));
}
