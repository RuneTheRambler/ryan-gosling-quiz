const form = document.querySelector('form');
const ryanGoslingImg = document.querySelector('.ryan-gosling-img');
const submitButton = document.querySelector('.submit-button');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the form from submitting

    const selectedOption = document.querySelector('input[name="answer"]:checked');

    if (selectedOption) {
        ryanGoslingImg.src = 'ryan_gosling_large.jpg'; // Replace with a larger image of Ryan Gosling
        ryanGoslingImg.style.transition = 'width 5s, height 5s'; // Slowly expand the image
        submitButton.style.display = 'none'; // Hide the submit button
        playCelebratoryNoise(); // Implement this function to play a celebratory sound
        congratulateUser(); // Implement this function to show a congratulatory message
    }
});

function playCelebratoryNoise() {
    // Implement this function to play a celebratory sound or animation
}

function congratulateUser() {
    // Implement this function to show a congratulatory message or animation
}
