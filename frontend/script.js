function login() {
  const username = document.getElementById('username').value.trim();
  if (!username) {
    alert('Please enter a username');
    return;
  }

  document.getElementById('login-section').style.display = 'none';
  document.getElementById('menu-section').style.display = 'block';
  document.getElementById('welcome-message').innerText = `Welcome, ${username}! Here's the menu:`;
}

function fetchItem(item) {
  fetch(`http://localhost:5000/api/${item}`)
    .then(response => response.json())
    .then(data => {
      document.getElementById('result').innerText = `${data.item}: $${data.price}`;
    });
}
