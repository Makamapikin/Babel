// Toggle light/dark theme
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}

// Quote of the Day API
fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
        document.getElementById('quoteText').innerText = `"${data.content}" - ${data.author}`;
    });

// Hover effect on options
const optionItems = document.querySelectorAll('.option-item');
optionItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.classList.add('hovered');
    });
    item.addEventListener('mouseout', () => {
        item.classList.remove('hovered');
    });
});

// Form Validation
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    if (name && email) {
        return true;
    } else {
        alert('Please fill out all fields.');
        return false;
    }
}
