const ratingButton = document.querySelectorAll('.rating-button');
const submitButton = document.querySelector('.submit');
const thankYouState = document.getElementById('thank-you-state');
const ratingState = document.getElementById('rating-state');
const selectedRating = document.getElementById('selected-rating');
const goBackButton = document.getElementById('go-back')

let selectedRatingValue = null;

ratingButton.forEach(button=>{
    button.addEventListener('click',()=>{
        ratingButton.forEach(btn=>btn.classList.remove('rating-selected'));

        button.classList.add('rating-selected');
        selectedRatingValue = button.getAttribute('data-value');
    });

    
});


submitButton.addEventListener('click', (e) => {
    if (selectedRatingValue) {
      // Show the thank you state and hide the rating state
      ratingState.classList.add('hidden');
      thankYouState.classList.remove('hidden');
  
      // Display the selected rating
      selectedRating.textContent = selectedRatingValue;
    } else {
      alert('Please select a rating before submitting.');
    }
  });


  goBackButton.addEventListener('click', (e) => {
    // Hide the thank you state and show the rating state
    thankYouState.classList.add('hidden');
    ratingState.classList.remove('hidden');
    // Reset the selected rating value and UI
    selectedRatingValue = null;
    ratingButtons.forEach(btn => btn.classList.remove('rating-selected'));
});