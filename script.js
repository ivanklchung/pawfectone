let currentIndex = 0;

function dislikeProfile() {
    currentIndex++;
    showProfile();
}

function likeProfile() {
    document.getElementById('formModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('formModal').style.display = 'none';
}

const profiles = [
    {name: "Jack", description: "WOOF WOOF WOOF WOOF WOOF WOOF WOOF WOOF WOOF WOOF WOOF WOOF WOOF WOOF WOOF WOOF WOOF WOOF WOOF WOOF WOOF WOOF WOOF WOOF WOOF WOOF WOOF WOOF WOOF WOOF", photo: "photos/profile1.jpg"},
    {name: "Brad", description: "i like dogs, they're very cool", photo: "photos/profile2.jpg"},
    {name: "Tony", description: "Adventurer, Entrepreneur, and Fellow Dog-Lover", photo: "photos/profile3.jpg"}
];

function showProfile() {
    const profilePhoto = document.getElementById('profilePhoto');
    const profileName = document.getElementById('profileName');
    const profileDescription = document.getElementById('profileDescription');

    // Shuffle the array to display photos in a random order
    restOfProfiles = profiles.slice(1);
    shuffleArray(restOfProfiles);

    if (currentIndex < profiles.length) {

        let currentProfile = profiles[currentIndex];

        profilePhoto.src = currentProfile.photo;
        profileName.textContent = currentProfile.name;
        profileDescription.textContent = currentProfile.description;
    } else {
        alert("No more profiles available!");
    }
}

showProfile();

// Function to shuffle an array (Fisher-Yates algorithm)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function submitForm(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;

    // Handle the form data (you can send it to a server, store in local storage, etc.)

    closeModal();
    currentIndex++;
    showProfile();
}
