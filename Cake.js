// Toggle the visibility of the ingredients
const toggleIngredientsBtn = document.getElementById('toggle-ingredients');
const ingredientsSection = document.getElementById('ingredients');

toggleIngredientsBtn.addEventListener('click', () => {
    if (ingredientsSection.style.display === 'none' || !ingredientsSection.style.display) {
        ingredientsSection.style.display = 'block';
        toggleIngredientsBtn.textContent = 'Hide Ingredients';
    } else {
        ingredientsSection.style.display = 'none';
        toggleIngredientsBtn.textContent = 'Show Ingredients';
    }
});
