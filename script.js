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

function showProfile() {
    const profilePhotos = ["photos/profile1.jpg", "photos/profile2.jpg", "photos/profile3.jpg"];
    const profilePhoto = document.getElementById('profilePhoto');

    // Shuffle the array to display photos in a random order
    shuffleArray(profilePhotos);

    if (currentIndex < profilePhotos.length) {
        profilePhoto.src = profilePhotos[currentIndex];
    } else {
        alert("No more profiles available!");
    }
}

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
