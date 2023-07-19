
// Fetch available fruit options from the JSON data source
fetch('https://brotherblazzard.github.io/canvas-content/fruit.json')
  .then(response => response.json())
  .then(data => {
    const fruitOptions = data.map(fruit => fruit.name);
    const selectElements = document.querySelectorAll('select');
    
    selectElements.forEach(select => {
      fruitOptions.forEach(fruit => {
        const option = document.createElement('option');
        option.value = fruit;
        option.textContent = fruit;
        select.appendChild(option);
      });
    });
  })
  .catch(error => {
    console.log('Error fetching fruit data:', error);
  });

// Handle form submission
const form = document.getElementById('drink-form');
form.addEventListener('submit', function(event) {
  event.preventDefault();

  const firstName = document.getElementById('first-name').value;
  const email = document.getElementById('email').value;
  const phoneNumber = document.getElementById('phone-number').value;
  const fruit1 = document.getElementById('fruit1').value;
  const fruit2 = document.getElementById('fruit2').value;
  const fruit3 = document.getElementById('fruit3').value;
  const specialInstructions = document.getElementById('special-instructions').value;

  // Get the current date and time
  const currentDate = new Date();
  const orderDate = currentDate.toLocaleDateString();
  const orderTime = currentDate.toLocaleTimeString();

  // Create the formatted output
  const output = `
    <h2>Order Summary</h2>
    <p><strong>Order Date:</strong> ${orderDate} ${orderTime}</p>
    <p><strong>Name:</strong> ${firstName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone Number:</strong> ${phoneNumber}</p>
    <p><strong>Selected Fruits:</strong></p>
    <ul>
      <li>Fruit 1: ${fruit1}</li>
      <li>Fruit 2: ${fruit2}</li>
      <li>Fruit 3: ${fruit3}</li>
    </ul>
    <p><strong>Special Instructions:</strong> ${specialInstructions}</p>
  `;

  // Display the formatted output on the page
  const outputContainer = document.getElementById('output-container');
  outputContainer.innerHTML = output;
});
