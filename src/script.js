const feedbackModal = document.getElementById('feedbackModal');
let selectedRating = 0;

// Open the feedback modal
function openfeedbackModal() {
    feedbackModal.style.display = 'flex';
}

// Cancel button
function closeFeedbackModal() {
    feedbackModal.style.display = 'none';
}

// Submittion successful
function submitFeedbackModal() {
    alert('Feedback has been submitted! Thank you.')
}

// Select the rating
function selectRating(rating) {
    selectedRating = rating;
    alert('Rating Selected: ' + rating);
}
