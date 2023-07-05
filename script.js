const questions = [
    {
      question: "Question 1: What is 2 + 2?",
      answers: [
        { text: "2", correct: false },
        { text: "4", correct: true },
        { text: "6", correct: false },
        { text: "8", correct: false }
      ]
    },
    {
      question: "Question 2: What is the capital of Your Country?",
      answers: [
        { text: "New Delhi", correct: true },
        { text: "Mumbai", correct: false },
        { text: "London", correct: false },
        { text: "Tokyo", correct: false }
      ]
    },
    {
      question: "Question 3: What is the opposite of 'happy'?",
      answers: [
        { text: "Angry", correct: false },
        { text: "Excited", correct: false },
        { text: "Sad", correct: true },
        { text: "Confused", correct: false }
      ]
    },
    {
      question: "Question 4: Count backward from 100 by subtracting 7 each time. What number do you reach?",
      answers: [
        { text: "83", correct: false },
        { text: "92", correct: false },
        { text: "97", correct: false },
        { text: "93", correct: true }
      ]
    },
    {
      question: "Question 5: Arrange the word 'WORLD' backward?",
      answers: [
        { text: " D-L-R-O-W", correct: true },
        { text: " D-L-O-R-W", correct: false },
        { text: " D-O-R-L-W", correct: false },
        { text: " D-R-L-O-W", correct: false }
      ]
    },
    {
      question: "Question 6: Which of the following is a fruit?",
      answers: [
        { text: "Onion", correct: false },
        { text: "Ginger", correct: false },
        { text: "Mango", correct: true },
        { text: "Broccoli", correct: false }
      ]
    },
    {
      question: "Question 7: Repeat the following phrase: 'No ifs, ands, or buts.'",
      answers: [
        { text: "No ifs, no buts.", correct: false },
        { text: "No ifs, ands, or buts.", correct: true },
        { text: "No ands or buts.", correct: false },
        { text: "No ifs, no ands, no buts.", correct: false }
      ]
    },
    {
      question: "Question 8: What is the name of the current month?",
      answers: [
        { text: "May", correct: true },
        { text: "June", correct: false },
        { text: "July", correct: false },
        { text: "March", correct: false }
      ]
    },
    {
      question: "Question 9: Which season comes after summer?",
      answers: [
        { text: "Summer", correct: false },
        { text: "Winter", correct: false },
        { text: "Spring", correct: false },
        { text: "Autumn/Fall", correct: true }
      ]
    },
    {
      question: "Question 10: Which of the following animals is not a mammal?",
      answers: [
        { text: "Dog", correct: false },
        { text: "Cat", correct: false },
        { text: "Bird", correct: true },
        { text: "Cow", correct: false }
      ]
    },
    {
      question: "Question 11: What is your current age?",
      answers: [
        { text: "Under 40", correct: false },
        { text: "40-59", correct: false },
        { text: "60-79", correct: true },
        { text: "80 or above", correct: false }
      ]
    },
    {
      question: "Question 12: Where are you right now?",
      answers: [
        { text: "Home", correct: true },
        { text: "Hospital", correct: false },
        { text: "Train", correct: false },
        { text: "Hotel", correct: false }
      ]
    },
    {
      question: "Question 13: What is your full name?",
      answers: [
        { text: "Radha krishnan", correct: true },
        { text: "Radha", correct: false },
        { text: "Krishnan", correct: false },
        { text: "Radhe Shyam", correct: false }
      ]
    },
    {
      question: "Question 14: If you had a Rs.100 and you bought an apple for Rs.50, how much money would you have left?",
      answers: [
        { text: "Rs.20", correct: false },
        { text: "Rs.50", correct: true },
        { text: "Rs.150", correct: false },
        { text: "Rs.100", correct: false }
      ]
    },
    {
      question: "Question 15: What city do you currently live in?",
      answers: [
        { text: "Gaya", correct: false },
        { text: "Pune", correct: false },
        { text: "Varanasi", correct: false },
        { text: "Bengaluru", correct: true }
      ]
    }
    // Add more questions here
  ];
  
  const maxQuestions = 15;
  let currentQuestionIndex = 0;
  let score = 0;
  
  const startButton = document.getElementById("start-btn");
  const questionContainer = document.getElementById("question-container");
  const answerButtons = document.getElementById("answer-buttons");
  const resultElement = document.getElementById("result");
  
  startButton.addEventListener("click", startQuiz);
  
  function startQuiz() {
    startButton.classList.add("hide");
    questionContainer.classList.remove("hide");
    answerButtons.classList.remove("hide");
    resultElement.classList.add("hide");
    score = 0;
    currentQuestionIndex = 0;
    showNextQuestion();
  }
  
  function showNextQuestion() {
    resetState();
    if (currentQuestionIndex < maxQuestions) {
      displayQuestion(questions[currentQuestionIndex]);
    } else {
      showResult();
    }
  }
  
  function displayQuestion(question) {
    const questionElement = document.createElement("div");
    questionElement.innerText = question.question;
    questionContainer.appendChild(questionElement);
  
    question.answers.forEach(answer => {
      const button = document.createElement("button");
      button.innerText = answer.text;
      button.classList.add("answer-btn");
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      button.addEventListener("click", selectAnswer);
      answerButtons.appendChild(button);
    });
  }
  
  function resetState() {
    clearQuestionContainer();
    hideResult();
    while (answerButtons.firstChild) {
      answerButtons.removeChild(answerButtons.firstChild);
    }
  }
  
  function clearQuestionContainer() {
    while (questionContainer.firstChild) {
      questionContainer.removeChild(questionContainer.firstChild);
    }
  }
  
  function hideResult() {
    resultElement.innerText = "";
    resultElement.classList.add("hide");
  }
  
  function selectAnswer(event) {
    const selectedButton = event.target;
    const correct = selectedButton.dataset.correct;
    if (correct) {
      score++;
    }
    currentQuestionIndex++;
    showNextQuestion();
  }
  
  function showResult() {
    clearQuestionContainer();
    answerButtons.classList.add("hide");
    resultElement.classList.remove("hide");
    const percentage = 100-((score / maxQuestions) * 100);
    resultElement.innerText = `Quiz completed. Your dementia level is ${percentage.toFixed(2)}%`;
  }
  