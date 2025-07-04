// Trigger login and show menu
function login() { 
  const username = document.getElementById('username').value.trim();
  if (!username) {
    alert('Please enter a username');
    return;
  }
  document.getElementById('welcome-message').innerText = `Welcome, ${username}! Here's your menu:`;
  document.getElementById('login-section').style.display = 'none';
  document.getElementById('menu-section').style.display = 'block';
}

// Fetch burger or hotdog from backend via relative path /api/
function fetchItem(item) {
  fetch(`/api/${item}`)
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

// Logout and reset UI
function goBack() {
  document.getElementById('login-section').style.display = 'block';
  document.getElementById('menu-section').style.display = 'none';
  document.getElementById('username').value = '';
  document.getElementById('result').innerText = '';
}

// Enter key triggers login
document.addEventListener('DOMContentLoaded', () => {
  const usernameInput = document.getElementById('username');
  usernameInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') login();
  });
});
