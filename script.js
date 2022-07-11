const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const resultForm = document.getElementById('form-result')

let countRightAnswers = 0
let shuffledQuestions, currentQuestionIndex
let currentQuestion = 1

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => { 
  document.getElementById('answer-buttons').classList.remove('no-click')
  
  currentQuestionIndex++
  setNextQuestion()

  currentQuestion++
  document.getElementById('current-question').innerHTML = currentQuestion
})

function startGame() {
  console.log('started')
  document.getElementById('answer-buttons').classList.remove('no-click') 
  startButton.classList.add('hide')
  resultForm.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()

  currentQuestion = 1
  document.getElementById('current-question').innerHTML = currentQuestion
 
  countRightAnswers = 0

  document.getElementById('all-questions2').innerHTML = questions.length
  document.getElementById('all-questions').innerHTML = questions.length
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    resultForm.classList.remove('hide')
    questionContainerElement.classList.add('hide')

    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
  if (selectedButton.dataset = correct) {
    countRightAnswers++
}
  document.getElementById('right-answers').innerHTML = countRightAnswers 
  document.getElementById('answers-percent').innerHTML = ((100 * countRightAnswers)/questions.length).toFixed(0) 
  document.getElementById('answer-buttons').classList.add('no-click') 
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'What is always coming but never arrives?',
    answers: [
      { text: 'Tomorrow', correct: true },
      { text: 'Your paycheck', correct: false },
      { text: 'A train', correct: false },
      { text: 'The mail', correct: false }
    ]
  },
  {
    question: 'The person who made it doesn’t want it, the person who paid for it doesn’t need it, and the person who needs it doesn’t know it. What is it?',
    answers: [
      { text: 'A cake', correct: false },
      { text: 'A meal', correct: false },
      { text: 'A coffin', correct: true },
      { text: 'A car', correct: false }
    ]
  },
  {
    question: 'What has 13 hearts, but no other organ?',
    answers: [
      { text: 'A soccer team', correct: false },
      { text: 'A deck of cards', correct: true },
      { text: 'A science lab', correct: false },
      { text: 'An operating theatre', correct: false }
    ]
  },
  {
    question: 'Everybody has me but I’m impossible to lose. What am I?',
    answers: [
      { text: 'Hair', correct: false },
      { text: 'Money', correct: false },
      { text: 'Skin', correct: false },
      { text: 'Shadow', correct: true }
    ]
  },
  {
    question: 'What has 42 eyes and 12 faces?',
    answers: [
      { text: 'An alien', correct: false },
      { text: 'A hockey team', correct: false },
      { text: 'A pair of dice', correct: true },
      { text: 'A soccer team', correct: false }
    ]
  },
  {
    question: 'What gets thrown out when it’s needed, but stored away when it’s not?',
    answers: [
      { text: 'A message in a bottle', correct: false },
      { text: 'Anchor', correct: true },
      { text: 'Garbage', correct: false },
      { text: 'Card', correct: false }
    ]
  },
  {
    question: 'I will crack if you drop me. If you smile at me, I’ll smile back. What am I?',
    answers: [
      { text: 'A vase', correct: false },
      { text: 'An egg', correct: false },
      { text: 'A mirror', correct: true },
      { text: 'Your friends', correct: false }
    ]
  },
  {
    question: 'Which month has 28 days?',
    answers: [
      { text: 'January', correct: false },
      { text: 'February', correct: false },
      { text: 'March', correct: false },
      { text: 'All of them', correct: true }
    ]
  },
  {
    question: 'What is at the end of every rainbow?',
    answers: [
      { text: 'A sky', correct: false },
      { text: 'The letter "w"', correct: true },
      { text: 'A storm', correct: false },
      { text: 'A pot of gold', correct: false }
    ]
  },
  {
    question: 'Jessy’s father had triplets daughter. Two were named Rose and Rosy. What was the third daughter’s name?',
    answers: [
      { text: 'Rosa', correct: false },
      { text: 'Gwen', correct: false },
      { text: 'Jessy', correct: true },
      { text: 'Clara', correct: false }
    ]
  },
]