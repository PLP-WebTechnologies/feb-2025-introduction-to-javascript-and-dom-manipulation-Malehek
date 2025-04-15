// Change text content dynamically
document.getElementById('change-text-btn').addEventListener('click', () => {
    const description = document.getElementById('description');
    description.textContent = 'The text has been changed dynamically!';
});

// Add a new element dynamically
document.getElementById('add-element-btn').addEventListener('click', () => {
    const dynamicContent = document.getElementById('dynamic-content');
    const newElement = document.createElement('p');
    newElement.textContent = 'This is a new paragraph added dynamically!';
    dynamicContent.appendChild(newElement);
    newElement.style.color = 'red';
    newElement.style.fontSize = '26px';
})

// Modify CSS styles dynamically
document.getElementById('change-text-btn').addEventListener('click', () => {
    const description = document.getElementById('description');
    description.style.color = 'blue';
    description.style.fontSize = '34px';
    description.style.fontWeight = 'bold';
});