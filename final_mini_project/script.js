document.getElementById('add-feature').addEventListener('click', () => {
 const features = ["Animations", "API Integration", "Dark Mode", "Responsive Grid", "Local Storage"];
 const rand = features[Math.floor(Math.random() * features.length)];
 const li = document.createElement('li');
 li.textContent = rand;
 document.getElementById('feature-list').appendChild(li);
});

document.getElementById('contact-form').addEventListener('submit', (e) => {
 e.preventDefault();
 document.getElementById('form-message').textContent = "Thanks for contacting us!";
});
