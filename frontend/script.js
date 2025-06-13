function login() {
  document.getElementById('menu').style.display = 'block';
}

function fetchItem(item) {
  fetch(`http://localhost:5000/api/${item}`)
    .then(response => response.json())
    .then(data => {
      document.getElementById('result').innerText = `${data.item}: $${data.price}`;
    });
}
