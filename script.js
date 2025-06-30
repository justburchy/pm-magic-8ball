function shakeBall() {
  const question = document.getElementById('question').value.trim();

  if (!question) {
    alert('Please ask a question!');
    return;
  }

const answers = [
  // ✅ POSITIVE (10)
  "Approved. For now.",
  "Looks good on paper.",
  "Sure… if Dev agrees.",
  "Roadmap says yes.",
  "Yep. Tell no one.",
  "That's a solid maybe — but yes.",
  "Green-lit. Run with it!",
  "You’ve got the budget (for now).",
  "PM says yes, so it’s law.",
  "Schedule loves this idea.",

  // ❓ NON-COMMITTAL (5)
  "Circle back later.",
  "Pending QA sign-off.",
  "Ask Legal. Good luck.",
  "Let’s take this offline.",
  "Add it to the backlog 🤷‍♂️",

  // ❌ NEGATIVE (5)
  "Scope says no.",
  "Blocked. Again.",
  "Stakeholder veto incoming.",
  "Budget laughs at you.",
  "Hard pass. Try Q5."
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
