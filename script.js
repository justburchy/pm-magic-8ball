function shakeBall() {
  const question = document.getElementById('question').value.trim();

  if (!question) {
    alert('Please ask a question!');
    return;
  }

const answers = [
  "Approved. For now.",
  "Looks good on paper",
  "Sure… if Dev agrees",
  "Roadmap says yes",
  "Yep. Tell no one.",
  "Circle back later",
  "Pending QA sign-off",
  "Ask Legal. Good luck.",
  "Scope says no",
  "Blocked. Again."
];

  const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
  
  const answerElement = document.getElementById('answer');
  answerElement.textContent = randomAnswer;

  const innerCircle = document.getElementById('innerCircle');

  // Optional shake effect
  const ball = document.getElementById('eightBall');
  ball.style.animation = 'shake 0.5s';
  setTimeout(() => {
    ball.style.animation = '';
  }, 500);
}

// Dynamically add shake animation
const style = document.createElement('style');
style.innerHTML = `
@keyframes shake {
  0% { transform: rotate(0deg); }
  25% { transform: rotate(-10deg); }
  50% { transform: rotate(10deg); }
  75% { transform: rotate(-10deg); }
  100% { transform: rotate(0deg); }
}`;
document.head.appendChild(style);
