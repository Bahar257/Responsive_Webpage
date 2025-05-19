// Toggle nav menu for mobile
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
  });
  
  // Form Validation + localStorage
  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const successMsg = document.getElementById('formSuccess');
  
    if (!name || !email || !message) {
      successMsg.style.color = 'red';
      successMsg.textContent = 'All fields are required!';
      return;
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      successMsg.style.color = 'red';
      successMsg.textContent = 'Invalid email format!';
      return;
    }
  
    // Save to localStorage
    const formData = {
      name,
      email,
      message
    };
    localStorage.setItem('formData', JSON.stringify(formData));
  
    // Success Message
    successMsg.style.color = 'green';
    successMsg.textContent = 'Form submitted successfully!';
    
    this.reset();
  });
  