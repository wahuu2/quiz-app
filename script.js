// DOM Elements
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");
const sectionTitle = document.getElementById("section-title");

const quizSections = [
// GENERAL KNOWLEDGE
{
  title: "General Knowledge",
  questions: [
    {
      question: "What is the largest planet in our solar system?",
      answers: [
        { text: "Earth", correct: false },
        { text: "Jupiter", correct: true },
        { text: "Saturn", correct: false },
        { text: "Mars", correct: false },
      ],
    },
    {
      question: "Which continent is known as the 'Dark Continent'?",
      answers: [
        { text: "Africa", correct: true },
        { text: "Asia", correct: false },
        { text: "Europe", correct: false },
        { text: "Australia", correct: false },
      ],
    },
    {
      question: "What is the capital city of Japan?",
      answers: [
        { text: "Tokyo", correct: true },
        { text: "Kyoto", correct: false },
        { text: "Osaka", correct: false },
        { text: "Nagoya", correct: false },
      ],
    },
    {
      question: "Which ocean is the smallest?",
      answers: [
        { text: "Arctic Ocean", correct: true },
        { text: "Indian Ocean", correct: false },
        { text: "Atlantic Ocean", correct: false },
        { text: "Pacific Ocean", correct: false },
      ],
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      answers: [
        { text: "William Shakespeare", correct: true },
        { text: "Charles Dickens", correct: false },
        { text: "Jane Austen", correct: false },
        { text: "Mark Twain", correct: false },
      ],
    },
    {
      question: "Which country is famous for the Eiffel Tower?",
      answers: [
        { text: "France", correct: true },
        { text: "Italy", correct: false },
        { text: "Spain", correct: false },
        { text: "Germany", correct: false },
      ],
    },
    {
      question: "Which gas do humans need to breathe?",
      answers: [
        { text: "Oxygen", correct: true },
        { text: "Carbon dioxide", correct: false },
        { text: "Nitrogen", correct: false },
        { text: "Hydrogen", correct: false },
      ],
    },
    {
      question: "Which bird is the national bird of the USA?",
      answers: [
        { text: "Bald Eagle", correct: true },
        { text: "Peacock", correct: false },
        { text: "Sparrow", correct: false },
        { text: "Falcon", correct: false },
      ],
    },
    {
      question: "Which instrument has black and white keys?",
      answers: [
        { text: "Piano", correct: true },
        { text: "Guitar", correct: false },
        { text: "Violin", correct: false },
        { text: "Drums", correct: false },
      ],
    },
    {
      question: "Which country invented pizza?",
      answers: [
        { text: "Italy", correct: true },
        { text: "France", correct: false },
        { text: "USA", correct: false },
        { text: "Spain", correct: false },
      ],
    },
    {
      question: "Which planet is closest to the sun?",
      answers: [
        { text: "Mercury", correct: true },
        { text: "Venus", correct: false },
        { text: "Earth", correct: false },
        { text: "Mars", correct: false },
      ],
    },
    {
      question: "Which animal is known as the 'King of the Jungle'?",
      answers: [
        { text: "Lion", correct: true },
        { text: "Tiger", correct: false },
        { text: "Elephant", correct: false },
        { text: "Bear", correct: false },
      ],
    },
    {
      question: "Which fruit is yellow and curved?",
      answers: [
        { text: "Banana", correct: true },
        { text: "Apple", correct: false },
        { text: "Mango", correct: false },
        { text: "Orange", correct: false },
      ],
    },
    {
      question: "Which country is known as the Land of the Rising Sun?",
      answers: [
        { text: "Japan", correct: true },
        { text: "China", correct: false },
        { text: "Thailand", correct: false },
        { text: "India", correct: false },
      ],
    },
    {
      question: "Which shape has three sides?",
      answers: [
        { text: "Triangle", correct: true },
        { text: "Square", correct: false },
        { text: "Circle", correct: false },
        { text: "Rectangle", correct: false },
      ],
    },
    {
      question: "Which country is famous for kangaroos?",
      answers: [
        { text: "Australia", correct: true },
        { text: "New Zealand", correct: false },
        { text: "South Africa", correct: false },
        { text: "Brazil", correct: false },
      ],
    },
    {
      question: "Which sport uses a bat and ball?",
      answers: [
        { text: "Cricket", correct: true },
        { text: "Football", correct: false },
        { text: "Basketball", correct: false },
        { text: "Tennis", correct: false },
      ],
    },
    {
      question: "Which month has 28 days in common years?",
      answers: [
        { text: "February", correct: true },
        { text: "March", correct: false },
        { text: "April", correct: false },
        { text: "June", correct: false },
      ],
    },
    {
      question: "Which animal produces milk?",
      answers: [
        { text: "Cow", correct: true },
        { text: "Dog", correct: false },
        { text: "Cat", correct: false },
        { text: "Horse", correct: false },
      ],
    },
    {
      question: "Which country is famous for pyramids?",
      answers: [
        { text: "Egypt", correct: true },
        { text: "Mexico", correct: false },
        { text: "India", correct: false },
        { text: "China", correct: false },
      ],
    },
    {
      question: "Which is the tallest mountain in the world?",
      answers: [
        { text: "Mount Everest", correct: true },
        { text: "Mount Kilimanjaro", correct: false },
        { text: "Mount Kenya", correct: false },
        { text: "Mount Fuji", correct: false },
      ],
    },
    {
      question: "Which animal is the largest mammal?",
      answers: [
        { text: "Blue Whale", correct: true },
        { text: "Elephant", correct: false },
        { text: "Giraffe", correct: false },
        { text: "Hippo", correct: false },
      ],
    },
    {
      question: "Which country is famous for sushi?",
      answers: [
        { text: "Japan", correct: true },
        { text: "China", correct: false },
        { text: "Thailand", correct: false },
        { text: "Korea", correct: false },
      ],
    },
    {
      question: "Which planet is known as the Red Planet?",
      answers: [
        { text: "Mars", correct: true },
        { text: "Venus", correct: false },
        { text: "Jupiter", correct: false },
        { text: "Saturn", correct: false },
      ],
    },
    {
      question: "Which country is famous for the Great Wall?",
      answers: [
        { text: "China", correct: true },
        { text: "India", correct: false },
        { text: "Japan", correct: false },
        { text: "Korea", correct: false },
      ],
    },
    {
      question: "Which metal is liquid at room temperature?",
      answers: [
        { text: "Mercury", correct: true },
        { text: "Iron", correct: false },
        { text: "Gold", correct: false },
        { text: "Silver", correct: false },
      ],
    },
    {
      question: "Which country is famous for tulips?",
      answers: [
        { text: "Netherlands", correct: true },
        { text: "France", correct: false },
        { text: "Italy", correct: false },
        { text: "Belgium", correct: false },
      ],
    },
    {
      question: "Which is the fastest land animal?",
      answers: [
        { text: "Cheetah", correct: true },
        { text: "Lion", correct: false },
        { text: "Horse", correct: false },
        { text: "Tiger", correct: false },
      ],
    },
       {
      question: "Which country is famous for maple syrup?",
      answers: [
        { text: "Canada", correct: true },
        { text: "USA", correct: false },
        { text: "UK", correct: false },
        { text: "France", correct: false },
      ],
    },
    {
      question: "Which is the largest desert in the world?",
      answers: [
        { text: "Sahara", correct: false },
        { text: "Antarctica", correct: true },
        { text: "Gobi", correct: false },
        { text: "Kalahari", correct: false },
      ],
    },
    {
      question: "Which country is famous for the Taj Mahal?",
      answers: [
        { text: "India", correct: true },
        { text: "Pakistan", correct: false },
        { text: "Nepal", correct: false },
        { text: "Bangladesh", correct: false },
      ],
    },
    {
      question: "Which is the longest river in the world?",
      answers: [
        { text: "Nile", correct: true },
        { text: "Amazon", correct: false },
        { text: "Yangtze", correct: false },
        { text: "Mississippi", correct: false },
      ],
    },
    {
      question: "Which country is famous for samba dance?",
      answers: [
        { text: "Brazil", correct: true },
        { text: "Argentina", correct: false },
        { text: "Spain", correct: false },
        { text: "Mexico", correct: false },
      ],
    },
    {
      question: "Which is the largest island in the world?",
      answers: [
        { text: "Greenland", correct: true },
        { text: "Madagascar", correct: false },
        { text: "Borneo", correct: false },
        { text: "Sumatra", correct: false },
      ],
    },
    {
      question: "Which country is famous for the Statue of Liberty?",
      answers: [
        { text: "USA", correct: true },
        { text: "France", correct: false },
        { text: "UK", correct: false },
        { text: "Germany", correct: false },
      ],
    },
    {
      question: "Which is the largest continent?",
      answers: [
        { text: "Asia", correct: true },
        { text: "Africa", correct: false },
        { text: "Europe", correct: false },
        { text: "Australia", correct: false },
      ],
    },
    {
      question: "Which country is famous for Mount Fuji?",
      answers: [
        { text: "Japan", correct: true },
        { text: "China", correct: false },
        { text: "Korea", correct: false },
        { text: "Thailand", correct: false },
      ],
    },
    {
      question: "Which is the largest ocean?",
      answers: [
        { text: "Pacific Ocean", correct: true },
        { text: "Atlantic Ocean", correct: false },
        { text: "Indian Ocean", correct: false },
        { text: "Arctic Ocean", correct: false },
      ],
    },
    {
      question: "Which country is famous for Big Ben?",
      answers: [
        { text: "UK", correct: true },
        { text: "France", correct: false },
        { text: "Germany", correct: false },
        { text: "Italy", correct: false },
      ],
    },
    {
      question: "Which is the largest animal on land?",
      answers: [
        { text: "Elephant", correct: true },
        { text: "Giraffe", correct: false },
        { text: "Hippo", correct: false },
        { text: "Rhino", correct: false },
      ],
    },
    {
      question: "Which country is famous for the Colosseum?",
      answers: [
        { text: "Italy", correct: true },
        { text: "Spain", correct: false },
        { text: "France", correct: false },
        { text: "Greece", correct: false },
      ],
    },
    {
      question: "Which is the largest country by area?",
      answers: [
        { text: "Russia", correct: true },
        { text: "Canada", correct: false },
        { text: "China", correct: false },
        { text: "USA", correct: false },
      ],
    },
    {
      question: "Which country is famous for the Great Barrier Reef?",
      answers: [
        { text: "Australia", correct: true },
        { text: "New Zealand", correct: false },
        { text: "South Africa", correct: false },
        { text: "Brazil", correct: false },
      ],
    },
    {
      question: "Which is the smallest country in the world?",
      answers: [
        { text: "Vatican City", correct: true },
        { text: "Monaco", correct: false },
        { text: "San Marino", correct: false },
        { text: "Liechtenstein", correct: false },
      ],
    },
    {
      question: "Which is the largest bay in the world?",
      answers: [
        { text: "Bay of Bengal", correct: true },
        { text: "Hudson Bay", correct: false },
        { text: "San Francisco Bay", correct: false },
        { text: "Chesapeake Bay", correct: false },
      ],
    }
  ]
},
// CODING BASICS