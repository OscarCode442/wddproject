 // Handle form submission
 const form = document.getElementById('contact-form');
 form.addEventListener('submit', function(event) {
   event.preventDefault();

   const name = document.getElementById('name').value;
   const email = document.getElementById('email').value;
   const message = document.getElementById('message').value;

   // You can perform form validation or submit the form data to a server using AJAX

   // Example: Display a success message
   const successMessage = document.createElement('p');
   successMessage.textContent = 'Thank you for your message!';
   form.appendChild(successMessage);
   
   // Clear form fields after submission
   form.reset();
 });