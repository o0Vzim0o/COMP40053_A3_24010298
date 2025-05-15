// Calculator Function
function calculate() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const operator = document.getElementById('operator').value;
  const resultDisplay = document.getElementById('result');

  if (isNaN(num1) || isNaN(num2)) {
    resultDisplay.textContent = 'Please enter valid numbers';
    return;
  }

  let result;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num2 !== 0 ? num1 / num2 : 'Cannot divide by 0';
      break;
    default:
      result = 'Invalid operator';
  }

  resultDisplay.textContent = result;
}

// Random Quote Generator
const quotes = [
  "Success is not the key to happiness. Happiness is the key to success.",
  "Learn from yesterday, live for today, hope for tomorrow.",
  "Your limitation—it's only your imagination.",
  "Push yourself, because no one else is going to do it for you.",
  "Sometimes later becomes never. Do it now."
];

function showQuote() {
  const quoteDisplay = document.getElementById('quote');
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteDisplay.textContent = quotes[randomIndex];
}

// External API Fetch - Random User
function getUser() {
  const userDisplay = document.getElementById('user');
  userDisplay.innerHTML = 'Loading...';

  fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {
      const user = data.results[0];
      userDisplay.innerHTML = `
        <img src="${user.picture.medium}" alt="User profile picture" style="border-radius:50%">
        <p><strong>${user.name.first} ${user.name.last}</strong></p>
        <p>${user.email}</p>
        <p>${user.location.city}, ${user.location.country}</p>
      `;
    })
    .catch(error => {
      userDisplay.textContent = 'Error loading user data.';
      console.error(error);
    });
}
