// JavaScript for adding interactivity (e.g., adding dreams dynamically)
const dreamList = document.getElementById('dreamList');

const newDream = prompt('Add a new dream:');

if (newDream) {
    const listItem = document.createElement('li');
    listItem.textContent = newDream;
    dreamList.appendChild(listItem);
}
