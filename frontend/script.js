function login() {
  const username = document.getElementById('username').value.trim();
  if (!username) {
    alert('Please enter a username');
    return;
  }

  document.getElementById('login-section').style.display = 'none';
  document.getElementById('menu-section').style.display = 'block';
  document.getElementById('welcome-message').innerText = `Welcome, ${username}! Here's the menu:`;
  document.getElementById('menu').style.display = 'block';
}

function fetchItem(item) {
  fetch(`http://localhost:5000/api/${item}`)
    .then(response => response.json())
    .then(data => {
      document.getElementById('result').innerText = `${data.item}: $${data.price}`;
    });
}

function backToLogin() {
  // Hide menu
  document.getElementById('menu').style.display = 'none';
  // Hide welcome message
  document.getElementById('welcome').style.display = 'none';
  // Show login form again
  document.getElementById('login-form').style.display = 'block';
  // Clear username input (optional)
  document.getElementById('username').value = '';
  // Clear result text
  document.getElementById('result').innerText = '';
}

