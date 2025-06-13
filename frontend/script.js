function login() {
  const username = document.getElementById('username').value.trim();
  if (!username) {
    alert('Please enter a username');
    return;
  }

  // Set welcome message
  document.getElementById('welcome-message').innerText = `Welcome, ${username}! Here's your menu:`;

  // Show menu and hide login
  document.getElementById('login-section').style.display = 'none';
  document.getElementById('menu-section').style.display = 'block';
}

function fetchItem(item) {
  fetch(`http://localhost:5000/api/${item}`)
    .then(response => {
      if (!response.ok) throw new Error(`API error: ${response.status}`);
      return response.json();
    })
    .then(data => {
      document.getElementById('result').innerText = `${data.item}: $${data.price}`;
    })
    .catch(err => {
      document.getElementById('result').innerText = 'Failed to fetch item.';
      console.error(err);
    });
}

function goBack() {
  // Show login, hide menu, reset fields
  document.getElementById('login-section').style.display = 'block';
  document.getElementById('menu-section').style.display = 'none';
  document.getElementById('username').value = '';
  document.getElementById('result').innerText = '';
}
