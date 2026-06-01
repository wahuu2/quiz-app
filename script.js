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
        { text: "Asia", correct: false },
        { text: "Europe", correct: false },
        { text: "Africa", correct: true },
        { text: "Australia", correct: false },
      ],
    },
    {
      question: "What is the capital city of Japan?",
      answers: [
        { text: "Kyoto", correct: false },
        { text: "Osaka", correct: false },
        { text: "Nagoya", correct: false },
        { text: "Tokyo", correct: true },
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
        { text: "Charles Dickens", correct: false },
        { text: "William Shakespeare", correct: true },
        { text: "Jane Austen", correct: false },
        { text: "Mark Twain", correct: false },
      ],
    },
    {
      question: "Which country is famous for the Eiffel Tower?",
      answers: [
        { text: "Italy", correct: false },
        { text: "Spain", correct: false },
        { text: "France", correct: true },
        { text: "Germany", correct: false },
      ],
    },
    {
      question: "Which gas do humans need to breathe?",
      answers: [
        { text: "Carbon dioxide", correct: false },
        { text: "Nitrogen", correct: false },
        { text: "Hydrogen", correct: false },
        { text: "Oxygen", correct: true },
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
        { text: "Guitar", correct: false },
        { text: "Piano", correct: true },
        { text: "Violin", correct: false },
        { text: "Drums", correct: false },
      ],
    },
    {
      question: "Which country invented pizza?",
      answers: [
        { text: "France", correct: false },
        { text: "USA", correct: false },
        { text: "Spain", correct: false },
        { text: "Italy", correct: true },
      ],
    },
    {
      question: "Which planet is closest to the sun?",
      answers: [
        { text: "Venus", correct: false },
        { text: "Earth", correct: false },
        { text: "Mercury", correct: true },
        { text: "Mars", correct: false },
      ],
    },
    {
      question: "Which animal is known as the 'King of the Jungle'?",
      answers: [
        { text: "Tiger", correct: false },
        { text: "Lion", correct: true },
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
        { text: "China", correct: false },
        { text: "Thailand", correct: false },
         { text: "Japan", correct: true },
        { text: "India", correct: false },
      ],
    },
    {
      question: "Which shape has three sides?",
      answers: [
        { text: "Square", correct: false },
        { text: "Circle", correct: false },
        { text: "Rectangle", correct: false },
        { text: "Triangle", correct: true },
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
        { text: "Football", correct: false },
        { text: "Cricket", correct: true },
        { text: "Basketball", correct: false },
        { text: "Tennis", correct: false },
      ],
    },
    {
      question: "Which month has 28 days in common years?",
      answers: [
        { text: "March", correct: false },
        { text: "February", correct: true },
        { text: "April", correct: false },
        { text: "June", correct: false },
      ],
    },
    {
      question: "Which animal produces milk?",
      answers: [
        { text: "Dog", correct: false },
        { text: "Cat", correct: false },
        { text: "Cow", correct: true },
        { text: "Horse", correct: false },
      ],
    },
    {
      question: "Which country is famous for pyramids?",
      answers: [
        { text: "Mexico", correct: false },
        { text: "Egypt", correct: true },
        { text: "India", correct: false },
        { text: "China", correct: false },
      ],
    },
    {
      question: "Which is the tallest mountain in the world?",
      answers: [
        { text: "Mount Kilimanjaro", correct: false },
        { text: "Mount Kenya", correct: false },
        { text: "Mount Fuji", correct: false },
        { text: "Mount Everest", correct: true },
      ],
    },
    {
      question: "Which animal is the largest mammal?",
      answers: [
        { text: "Elephant", correct: false },
        { text: "Giraffe", correct: false },
        { text: "Blue Whale", correct: true },
        { text: "Hippo", correct: false },
      ],
    },
    {
      question: "Which country is famous for sushi?",
      answers: [
        { text: "China", correct: false },
        { text: "Japan", correct: true },
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
        { text: "India", correct: false },
        { text: "China", correct: true },
        { text: "Japan", correct: false },
        { text: "Korea", correct: false },
      ],
    },
    {
      question: "Which metal is liquid at room temperature?",
      answers: [
        { text: "Iron", correct: false },
        { text: "Mercury", correct: true },
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
        { text: "Lion", correct: false },
        { text: "Horse", correct: false },
        { text: "Tiger", correct: false },
        { text: "Cheetah", correct: true },
      ],
    },
       {
      question: "Which country is famous for maple syrup?",
      answers: [
        { text: "USA", correct: false },
        { text: "Canada", correct: true },
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
        { text: "Pakistan", correct: false },
        { text: "Nepal", correct: false },
        { text: "Bangladesh", correct: false },
        { text: "India", correct: true },
      ],
    },
    {
      question: "Which is the longest river in the world?",
      answers: [
        { text: "Amazon", correct: false },
        { text: "Nile", correct: true },
        { text: "Yangtze", correct: false },
        { text: "Mississippi", correct: false },
      ],
    },
    {
      question: "Which country is famous for samba dance?",
      answers: [
        { text: "Argentina", correct: false },
        { text: "Spain", correct: false },
        { text: "Brazil", correct: true },
        { text: "Mexico", correct: false },
      ],
    },
    {
      question: "Which is the largest island in the world?",
      answers: [
        { text: "Madagascar", correct: false },
        { text: "Greenland", correct: true },
        { text: "Borneo", correct: false },
        { text: "Sumatra", correct: false },
      ],
    },
    {
      question: "Which country is famous for the Statue of Liberty?",
      answers: [
        { text: "France", correct: false },
        { text: "UK", correct: false },
        { text: "USA", correct: true },
        { text: "Germany", correct: false },
      ],
    },
    {
      question: "Which is the largest continent?",
      answers: [
        { text: "Africa", correct: false },
        { text: "Europe", correct: false },
        { text: "Australia", correct: false },
        { text: "Asia", correct: true },
      ],
    },
    {
      question: "Which country is famous for Mount Fuji?",
      answers: [
        { text: "China", correct: false },
        { text: "Korea", correct: false },
        { text: "Japan", correct: true },
        { text: "Thailand", correct: false },
      ],
    },
    {
      question: "Which is the largest ocean?",
      answers: [
        { text: "Atlantic Ocean", correct: false },
        { text: "Indian Ocean", correct: false },
        { text: "Arctic Ocean", correct: false },
        { text: "Pacific Ocean", correct: true },
      ],
    },
    {
      question: "Which country is famous for Big Ben?",
      answers: [
        { text: "France", correct: false },
        { text: "UK", correct: true },
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
        { text: "Spain", correct: false },
        { text: "France", correct: false },
        { text: "Italy", correct: true },
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
        { text: "Russia", correct: true },
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
        { text: "Monaco", correct: false },
        { text: "Vatican City", correct: true },
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
{
  title: "Coding Basics",
  questions: [
    {
      question: "Which language is used for web styling?",
      answers: [
        { text: "HTML", correct: false },
        { text: "CSS", correct: true },
        { text: "JavaScript", correct: false },
        { text: "Python", correct: false },
      ],
    },
    {
      question: "What does 'JS' stand for?",
      answers: [
        { text: "Java Syntax", correct: false },
        { text: "Just Style", correct: false },
        { text: "JavaScript", correct: true },
        { text: "JQuery Script", correct: false },
      ],
    },
    {
      question: "Which language is mainly used to structure web pages?",
      answers: [
        { text: "CSS", correct: false },
        { text: "Python", correct: false },
        { text: "C++", correct: false },
        { text: "HTML", correct: true },
      ],
    },
    {
      question: "Which symbol is used to end a statement in JavaScript?",
      answers: [
        { text: ":", correct: false },
        { text: ".", correct: false },
        { text: ";", correct: true },
        { text: ",", correct: false },
      ],
    },
    {
      question: "Which tag is used to display an image in HTML?",
      answers: [
        { text: "<image>", correct: false },
        { text: "<pic>", correct: false },
        { text: "<src>", correct: false },
        { text: "<img>", correct: true },
      ],
    },
    {
      question: "Which operator is used for addition in most programming languages?",
      answers: [
        { text: "-", correct: false },
        { text: "+", correct: true },
        { text: "*", correct: false },
        { text: "/", correct: false },
      ],
    },
    {
      question: "Which keyword is used to declare a variable in JavaScript?",
      answers: [
        { text: "var", correct: true },
        { text: "int", correct: false },
        { text: "let", correct: true }, // both var and let are valid
        { text: "define", correct: false },
      ],
    },
    {
      question: "Which language is commonly used for backend development?",
      answers: [
        { text: "CSS", correct: false },
        { text: "HTML", correct: false },
        { text: "Python", correct: true },
        { text: "Photoshop", correct: false },
      ],
    },
    {
      question: "Which symbol is used for comments in JavaScript?",
      answers: [
        { text: "##", correct: false },
        { text: "--", correct: false },
        { text: "\\\\", correct: false },
        { text: "//", correct: true },
      ],
    },
    {
      question: "Which of these is a version control system?",
      answers: [
        { text: "Git", correct: true },
        { text: "CSS", correct: false },
        { text: "HTML", correct: false },
        { text: "Excel", correct: false },
      ],
    },
    {
      question: "Which file extension is used for JavaScript files?",
      answers: [
        { text: ".java", correct: false },
        { text: ".js", correct: true },
        { text: ".jsx", correct: false },
        { text: ".py", correct: false },
      ],
    },
    {
      question: "Which HTML tag is used for links?",
      answers: [
        { text: "<link>", correct: false },
        { text: "<href>", correct: false },
        { text: "<a>", correct: true },
        { text: "<url>", correct: false },
      ],
    },
    {
      question: "Which language is used for web styling?",
      answers: [
        { text: "HTML", correct: false },
        { text: "CSS", correct: true },
        { text: "JavaScript", correct: false },
        { text: "Python", correct: false },
      ],
    },
    {
      question: "What does 'JS' stand for?",
      answers: [
        { text: "Java Syntax", correct: false },
        { text: "Just Style", correct: false },
        { text: "JavaScript", correct: true },
        { text: "JQuery Script", correct: false },
      ],
    },
    {
      question: "Which HTML tag is used to create a hyperlink?",
      answers: [
        { text: "<link>", correct: false },
        { text: "<href>", correct: false },
        { text: "<url>", correct: false },
        { text: "<a>", correct: true },
      ],
    },
    {
      question: "Which symbol is used for multiplication in most programming languages?",
      answers: [
        { text: "x", correct: false },
        { text: "#", correct: false },
        { text: "&", correct: false },
        { text: "*", correct: true },
      ],
    },
    {
      question: "Which HTML tag is used to display a heading?",
      answers: [
        { text: "<head>", correct: false },
        { text: "<h1>", correct: true },
        { text: "<title>", correct: false },
        { text: "<p>", correct: false },
      ],
    },
    {
      question: "Which keyword is used to define a constant in JavaScript?",
      answers: [
        { text: "var", correct: false },
        { text: "let", correct: false },
        { text: "const", correct: true },
        { text: "static", correct: false },
      ],
    },
    {
      question: "Which file extension is used for CSS files?",
      answers: [
        { text: ".css", correct: true },
        { text: ".style", correct: false },
        { text: ".html", correct: false },
        { text: ".js", correct: false },
      ],
    },
    {
      question: "Which programming language is known for its snake logo?",
      answers: [
        { text: "Java", correct: false },
        { text: "C#", correct: false },
        { text: "Python", correct: true },
        { text: "Ruby", correct: false },
      ],
    },
    {
      question: "Which HTML tag is used to create a list with bullet points?",
      answers: [
        { text: "<ul>", correct: true },
        { text: "<ol>", correct: false },
        { text: "<li>", correct: false },
        { text: "<list>", correct: false },
      ],
    },
    {
      question: "Which operator is used to compare equality in JavaScript?",
      answers: [
        { text: "=", correct: false },
        { text: "===", correct: true }, // both == and === are valid
        { text: "!=", correct: false },
        { text: "==", correct: true },
      ],
    },
    {
      question: "Which HTML tag is used to insert a line break?",
      answers: [
        { text: "<br>", correct: true },
        { text: "<break>", correct: false },
        { text: "<lb>", correct: false },
        { text: "<newline>", correct: false },
      ],
    },
    {
      question: "Which language is used to make web pages interactive?",
      answers: [
        { text: "CSS", correct: false },
        { text: "HTML", correct: false },
        { text: "JavaScript", correct: true },
        { text: "SQL", correct: false },
      ],
    },
     {
      question: "Which HTML tag is used to create a numbered list?",
      answers: [
        { text: "<ul>", correct: false },
        { text: "<ol>", correct: true },
        { text: "<li>", correct: false },
        { text: "<list>", correct: false },
      ],
    },
    {
      question: "Which symbol is used for division in most programming languages?",
      answers: [
        { text: "\\", correct: false },
        { text: "-", correct: false },
        { text: "/", correct: true },
        { text: "*", correct: false },
      ],
    },
    {
      question: "Which HTML tag is used to display a paragraph?",
      answers: [
        { text: "<p>", correct: true },
        { text: "<para>", correct: false },
        { text: "<text>", correct: false },
        { text: "<div>", correct: false },
      ],
    },
    {
      question: "Which keyword is used to declare a function in JavaScript?",
      answers: [
        { text: "def", correct: false },
        { text: "method", correct: false },
        { text: "function", correct: true },
        { text: "func", correct: false },
      ],
    },
    {
      question: "Which file extension is used for HTML files?",
      answers: [
        { text: ".htm", correct: true }, // both are valid
        { text: ".css", correct: false },
        { text: ".js", correct: false },
        { text: ".html", correct: true },
      ],
    },
    {
      question: "Which programming language is mainly used for database queries?",
      answers: [
        { text: "Python", correct: false },
        { text: "JavaScript", correct: false },
        { text: "SQL", correct: true },
        { text: "HTML", correct: false },
      ],
    },
    {
      question: "Which HTML tag is used to insert a table?",
      answers: [
        { text: "<table>", correct: true },
        { text: "<tab>", correct: false },
        { text: "<tr>", correct: false },
        { text: "<td>", correct: false },
      ],
    },
    {
      question: "Which operator is used to check inequality in JavaScript?",
      answers: [
        { text: "==", correct: false },
        { text: "=", correct: false },
        { text: "!==", correct: true }, // both != and !== are valid
        { text: "!=", correct: true },
      ],
    },
    {
      question: "Which HTML tag is used to embed a video?",
      answers: [
        { text: "<video>", correct: true },
        { text: "<vid>", correct: false },
        { text: "<media>", correct: false },
        { text: "<movie>", correct: false },
      ],
    },
    {
      question: "Which programming language is often used for mobile app development?",
      answers: [
        { text: "CSS", correct: false },
        { text: "Java", correct: true },
        { text: "HTML", correct: false },
        { text: "SQL", correct: false },
      ],
    },
    {
      question: "Which HTML tag is used to display an image?",
      answers: [
        { text: "<image>", correct: false },
        { text: "<pic>", correct: false },
        { text: "<img>", correct: true },
        { text: "<src>", correct: false },
      ],
    },
    {
      question: "Which keyword is used to declare a variable in JavaScript?",
      answers: [
        { text: "let", correct: true }, // both valid
        { text: "int", correct: false },
        { text: "var", correct: true },
        { text: "define", correct: false },
      ],
    },
    {
      question: "Which file extension is used for Python files?",
      answers: [
        { text: ".js", correct: false },
        { text: ".java", correct: false },
        { text: ".py", correct: true },
        { text: ".html", correct: false },
      ],
    },
    {
      question: "Which HTML tag is used to create a form?",
      answers: [
        { text: "<form>", correct: true },
        { text: "<input>", correct: false },
        { text: "<submit>", correct: false },
        { text: "<fieldset>", correct: false },
      ],
    },
    {
      question: "Which operator is used for assignment in most programming languages?",
      answers: [
        { text: "==", correct: false },
        { text: "===", correct: false },
        { text: "=", correct: true },
        { text: "=>", correct: false },
      ],
    },
    {
      question: "Which HTML tag is used to create a table row?",
      answers: [
        { text: "<tr>", correct: true },
        { text: "<td>", correct: false },
        { text: "<th>", correct: false },
        { text: "<row>", correct: false },
      ],
    },
    {
      question: "Which language is used to style web pages?",
      answers: [
        { text: "HTML", correct: false },
        { text: "JavaScript", correct: false },
        { text: "Python", correct: false },
        { text: "CSS", correct: true },
      ],
    },
    {
      question: "Which symbol is used for comments in Python?",
      answers: [
        { text: "//", correct: false },
        { text: "/* */", correct: false },
        { text: "--", correct: false },
        { text: "#", correct: true },
      ],
    },
    {
      question: "Which HTML tag is used to create a hyperlink?",
      answers: [
        { text: "<a>", correct: true },
        { text: "<link>", correct: false },
        { text: "<href>", correct: false },
        { text: "<url>", correct: false },
      ],
    },
    {
      question: "Which keyword is used to define a function in Python?",
      answers: [
        { text: "function", correct: false },
        { text: "method", correct: false },
        { text: "fun", correct: false },
        { text: "def", correct: true },
      ],
    },
    {
      question: "Which HTML tag is used to create a list item?",
      answers: [
        { text: "<ul>", correct: false },
        { text: "<ol>", correct: false },
        { text: "<li>", correct: true },
        { text: "<list>", correct: false },
      ],
    }
  ]
},
// KENYAN HISTORY
{
    title: "Kenyan History",
    questions: [
      {
        question: "Who was Kenya's first President?",
        answers: [
          { text: "Jomo Kenyatta", correct: true },
          { text: "Daniel arap Moi", correct: false },
          { text: "Mwai Kibaki", correct: false },
          { text: "Uhuru Kenyatta", correct: false },
        ],
      },
  {
    question: "In which year did Kenya gain independence?",
    answers: [
      { text: "1950", correct: false },
      { text: "1963", correct: true },
      { text: "1978", correct: false },
      { text: "1980", correct: false },
    ],
  },
  {
    question: "Which city is the capital of Kenya?",
    answers: [
      { text: "Mombasa", correct: false },
      { text: "Kisumu", correct: false },
      { text: "Nakuru", correct: false },
      { text: "Nairobi", correct: true },
    ],
  },
  {
    question: "What was the name of the movement that fought for Kenya's independence?",
    answers: [
      { text: "Zulu", correct: false },
      { text: "Ashanti", correct: false },
      { text: "Mau Mau", correct: true },
      { text: "Shona", correct: false },
    ],
  },
  {
    question: "Who was Kenya's second President?",
    answers: [
      { text: "Mwai Kibaki", correct: false },
      { text: "Daniel arap Moi", correct: true },
      { text: "Uhuru Kenyatta", correct: false },
      { text: "William Ruto", correct: false },
    ],
  },
  {
    question: "Which British colony did Kenya belong to before independence?",
    answers: [
      { text: "British East Africa", correct: true },
      { text: "British West Africa", correct: false },
      { text: "British South Africa", correct: false },
      { text: "British North Africa", correct: false },
    ],
  },
  {
    question: "Who was Kenya's first Vice President?",
    answers: [
      { text: "Daniel arap Moi", correct: false },
      { text: "George Saitoti", correct: false },
      { text: "Jaramogi Oginga Odinga", correct: true },
      { text: "Musalia Mudavadi", correct: false },
    ],
  },
  {
    question: "Which year did Kenya become a republic?",
    answers: [
      { text: "1963", correct: false },
      { text: "1964", correct: true },
      { text: "1970", correct: false },
      { text: "1982", correct: false },
    ],
  },
  {
    question: "What is the name of Kenya's national anthem?",
    answers: [
      { text: "Ee Mungu Nguvu Yetu", correct: true },
      { text: "God Save the Queen", correct: false },
      { text: "Lift Every Voice", correct: false },
      { text: "Nkosi Sikelel' iAfrika", correct: false },
    ],
  },
  {
    question: "Which Kenyan leader is known as the 'Professor of Politics'?",
    answers: [
      { text: "Daniel arap Moi", correct: false },
      { text: "Tom Mboya", correct: false },
      { text: "Mwai Kibaki", correct: true },
      { text: "Jomo Kenyatta", correct: false },
    ],
  },
  {
    question: "Which uprising played a major role in Kenya's independence struggle?",
    answers: [
      { text: "Mau Mau Uprising", correct: true },
      { text: "Zulu Rebellion", correct: false },
      { text: "Boer War", correct: false },
      { text: "Ashanti Revolt", correct: false },
    ],
  },
  {
    question: "Which Kenyan port city was historically important in trade?",
    answers: [
      { text: "Kisumu", correct: false },
      { text: "Nakuru", correct: false },
      { text: "Mombasa", correct: true },
      { text: "Eldoret", correct: false },
    ],
  },
  {
    question: "Who was assassinated in 1969, causing political unrest?",
    answers: [
      { text: "Dedan Kimathi", correct: false },
      { text: "Jaramogi Oginga Odinga", correct: false },
      { text: "Robert Ouko", correct: false },
      { text: "Tom Mboya", correct: true },
    ],
  },
  {
    question: "Which mountain is the highest in Kenya?",
    answers: [
      { text: "Mount Kilimanjaro", correct: false },
      { text: "Mount Elgon", correct: false },
      { text: "Mount Kenya", correct: true },
      { text: "Aberdare", correct: false },
    ],
  },
  {
    question: "Which Kenyan leader was known as the 'Father of the Nation'?",
    answers: [
      { text: "Daniel arap Moi", correct: false },
      { text: "Jomo Kenyatta", correct: true },
      { text: "Mwai Kibaki", correct: false },
      { text: "Uhuru Kenyatta", correct: false },
    ],
  },
  {
    question: "Which year did Daniel arap Moi become President?",
    answers: [
      { text: "1978", correct: true },
      { text: "1982", correct: false },
      { text: "1970", correct: false },
      { text: "1990", correct: false },
    ],
  },
  {
    question: "Which Kenyan leader was assassinated in 1990?",
    answers: [
      { text: "Tom Mboya", correct: false },
      { text: "Dedan Kimathi", correct: false },
      { text: "Robert Ouko", correct: true },
      { text: "Pio Gama Pinto", correct: false },
    ],
  },
  {
    question: "Which Kenyan currency replaced the East African shilling?",
    answers: [
      { text: "Kenyan pound", correct: false },
      { text: "Kenyan dollar", correct: false },
      { text: "Kenyan franc", correct: false },
      { text: "Kenyan shilling", correct: true },
    ],
  },
  {
    question: "Which year did Kenya adopt a new constitution?",
    answers: [
      { text: "2010", correct: true },
      { text: "2005", correct: false },
      { text: "1992", correct: false },
      { text: "2015", correct: false },
    ],
  },
  {
    question: "Which Kenyan leader was executed in 1957 for Mau Mau activities?",
    answers: [
      { text: "Tom Mboya", correct: false },
      { text: "Pio Gama Pinto", correct: false },
      { text: "Dedan Kimathi", correct: true },
      { text: "Jaramogi Oginga Odinga", correct: false },
    ],
  },
  {
    question: "Which Kenyan city lies on Lake Victoria?",
    answers: [
      { text: "Kisumu", correct: true },
      { text: "Nairobi", correct: false },
      { text: "Mombasa", correct: false },
      { text: "Nakuru", correct: false },
    ],
  },
  {
    question: "Which year did multiparty politics return to Kenya?",
    answers: [
      { text: "1982", correct: false },
      { text: "2002", correct: false },
      { text: "1991", correct: true },
      { text: "2010", correct: false },
    ],
  },
  {
    question: "Which Kenyan leader was nicknamed 'Nyayo'?",
    answers: [
      { text: "Jomo Kenyatta", correct: false },
      { text: "Mwai Kibaki", correct: false },
      { text: "Uhuru Kenyatta", correct: false },
      { text: "Daniel arap Moi", correct: true },
    ],
  },
  {
    question: "Which year did Mwai Kibaki become President?",
    answers: [
      { text: "2002", correct: true },
      { text: "1997", correct: false },
      { text: "2010", correct: false },
      { text: "2013", correct: false },
    ],
  },
  {
    question: "Which Kenyan leader was a famous trade unionist?",
    answers: [
      { text: "Daniel arap Moi", correct: false },
      { text: "Jomo Kenyatta", correct: false },
      { text: "Tom Mboya", correct: true },
      { text: "Mwai Kibaki", correct: false },
    ],
  },
  {
    question: "Which year did Uhuru Kenyatta become President?",
    answers: [
      { text: "2010", correct: false },
      { text: "2007", correct: false },
      { text: "2013", correct: true },
      { text: "2017", correct: false },
    ],
  },
  {
    question: "Which Kenyan leader was the first Prime Minister?",
    answers: [
      { text: "Jomo Kenyatta", correct: true },
      { text: "Daniel arap Moi", correct: false },
      { text: "Mwai Kibaki", correct: false },
      { text: "Uhuru Kenyatta", correct: false },
    ],
  },
  {
    question: "Which Kenyan leader was assassinated in 1965?",
    answers: [
      { text: "Tom Mboya", correct: false },
      { text: "Robert Ouko", correct: false },
      { text: "Pio Gama Pinto", correct: true },
      { text: "Dedan Kimathi", correct: false },
    ],
  },
  {
    question: "Which year did Kenya join the United Nations?",
    answers: [
      { text: "1963", correct: false },
      { text: "1964", correct: true },
      { text: "1970", correct: false },
      { text: "1980", correct: false },
    ],
  },
  {
    question: "Which Kenyan leader was known for the slogan 'Harambee'?",
    answers: [
      { text: "Jomo Kenyatta", correct: true },
      { text: "Daniel arap Moi", correct: false },
      { text: "Mwai Kibaki", correct: false },
      { text: "Uhuru Kenyatta", correct: false },
    ],
  },
    {
    question: "Which year did William Ruto become President?",
    answers: [
      { text: "2017", correct: false },
      { text: "2013", correct: false },
      { text: "2022", correct: true },
      { text: "2025", correct: false },
    ],
  },
  {
    question: "Which Kenyan leader was a famous freedom fighter captured in 1956?",
    answers: [
      { text: "Tom Mboya", correct: false },
      { text: "Pio Gama Pinto", correct: false },
      { text: "Robert Ouko", correct: false },
      { text: "Dedan Kimathi", correct: true },
    ],
  },
  {
    question: "Which year did Kenya host the All Africa Games?",
    answers: [
      { text: "1987", correct: true },
      { text: "1992", correct: false },
      { text: "2000", correct: false },
      { text: "2010", correct: false },
    ],
  },
  {
    question: "Which Kenyan leader was known for promoting free primary education?",
    answers: [
      { text: "Daniel arap Moi", correct: false },
      { text: "Jomo Kenyatta", correct: false },
      { text: "Mwai Kibaki", correct: true },
      { text: "Uhuru Kenyatta", correct: false },
    ],
  },
  {
    question: "Which year did Kenya experience the post-election violence?",
    answers: [
      { text: "2007-2008", correct: true },
      { text: "1992", correct: false },
      { text: "2013", correct: false },
      { text: "2017", correct: false },
    ],
  },
  {
    question: "Which Kenyan leader was known for the slogan 'Kazi ni Kazi'?",
    answers: [
      { text: "Uhuru Kenyatta", correct: false },
      { text: "Mwai Kibaki", correct: false },
      { text: "Daniel arap Moi", correct: false },
      { text: "William Ruto", correct: true },
    ],
  },
  {
    question: "Which year did Kenya become a one-party state?",
    answers: [
      { text: "1978", correct: false },
      { text: "1991", correct: false },
      { text: "1982", correct: true },
      { text: "2002", correct: false },
    ],
  },
  {
    question: "Which Kenyan leader was nicknamed 'Kenya's Iron Lady'?",
    answers: [
      { text: "Charity Ngilu", correct: true },
      { text: "Martha Karua", correct: false },
      { text: "Wangari Maathai", correct: false },
      { text: "Phoebe Asiyo", correct: false },
    ],
  },
  {
    question: "Which Kenyan won the Nobel Peace Prize in 2004?",
    answers: [
      { text: "Ngugi wa Thiong'o", correct: false },
      { text: "Tom Mboya", correct: false },
      { text: "Wangari Maathai", correct: true },
      { text: "Jaramogi Oginga Odinga", correct: false },
    ],
  },
  {
    question: "Which year did Kenya introduce devolved government under counties?",
    answers: [
      { text: "2013", correct: true },
      { text: "2010", correct: false },
      { text: "2007", correct: false },
      { text: "2015", correct: false },
    ],
  },
  {
    question: "Which Kenyan leader was known for the slogan 'Tuko Pamoja'?",
    answers: [
      { text: "William Ruto", correct: false },
      { text: "Mwai Kibaki", correct: false },
      { text: "Daniel arap Moi", correct: false },
      { text: "Uhuru Kenyatta", correct: true },
    ],
  },
  {
    question: "Which year did Kenya host Pope John Paul II?",
    answers: [
      { text: "1985", correct: true },
      { text: "1990", correct: false },
      { text: "2000", correct: false },
      { text: "2015", correct: false },
    ],
  },
  {
    question: "Which Kenyan leader was known for the slogan 'Yote Yawezekana Bila Moi'?",
    answers: [
      { text: "Daniel arap Moi", correct: false },
      { text: "Mwai Kibaki", correct: false },
      { text: "Uhuru Kenyatta", correct: false },
      { text: "Opposition leaders in 2002", correct: true },
    ],
  },
  {
    question: "Which year did Kenya join the African Union?",
    answers: [
      { text: "1963", correct: false },
      { text: "2002", correct: true },
      { text: "1970", correct: false },
      { text: "1980", correct: false },
    ],
  },
  {
    question: "Which Kenyan leader was known for the slogan 'Najivunia Kuwa Mwanamke'?",
    answers: [
      { text: "Martha Karua", correct: true },
      { text: "Charity Ngilu", correct: false },
      { text: "Phoebe Asiyo", correct: false },
      { text: "Wangari Maathai", correct: false },
    ],
  },
],
},
];

// QUIZ STATE VARS
let currentSectionIndex = 0;
let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;

const totalQuestions = quizSections.reduce(
  (sum, section) => sum + section.questions.length,
  0
);
totalQuestionsSpan.textContent = quizSections[0].questions.length; // show per section
maxScoreSpan.textContent = totalQuestions; // show overall total

// event listeners
startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);
function startQuiz() {
  // reset vars
  currentQuestionIndex = 0;
  score = 0;
  scoreSpan.textContent = 0;

  startScreen.classList.remove("active");
  quizScreen.classList.add("active");

  showQuestion();
}
function showQuestion() {
  answersDisabled = false;

  
  const currentQuestion = currentSection.questions[currentQuestionIndex];
  const currentSection = quizSections[currentSectionIndex];

  sectionTitle.textContent = currentSection.title;
  currentQuestionSpan.textContent = currentQuestionIndex + 1;
  totalQuestionsSpan.textContent = currentSection.questions.length;

  const progressPercent = (currentQuestionIndex / currentSection.questions.length) * 100;
  progressBar.style.width = progressPercent + "%";

  questionText.textContent = currentQuestion.question;
  answersContainer.innerHTML = "";

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("answer-btn");
    button.dataset.correct = answer.correct;
    button.addEventListener("click", selectAnswer);
    answersContainer.appendChild(button);
  });
}

function selectAnswer(event) {
  // optimization check
  if (answersDisabled) return;

  answersDisabled = true;

  const selectedButton = event.target;
  const isCorrect = selectedButton.dataset.correct === "true";

  // Here Array.from() is used to convert the NodeList returned by answersContainer.children into an array, this is because the NodeList is not an array and we need to use the forEach method
  Array.from(answersContainer.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    } else if (button === selectedButton) {
      button.classList.add("incorrect");
    }
  });

  if (isCorrect) {
    score++;
    scoreSpan.textContent = score;
  }

 setTimeout(() => {
  nextQuestionOrSection();
}, 1000);

}
function nextQuestionOrSection() {
  currentQuestionIndex++;

  const currentSection = quizSections[currentSectionIndex];

  if (currentQuestionIndex < currentSection.questions.length) {
    showQuestion();
  } else {
    // section finished
    currentQuestionIndex = 0;
    currentSectionIndex++;

    if (currentSectionIndex < quizSections.length) {
      alert("Section complete! Next: " + quizSections[currentSectionIndex].title);
      showQuestion();
    } else {
      showResults();
    }
  }
}
function showResults() {
  resultScreen.classList.add("active");
  quizScreen.classList.remove("active");
  

  finalScoreSpan.textContent = score;

  const percentage = (score / totalQuestions) * 100;

  if (percentage === 100) {
    resultMessage.textContent = "Perfect! You're a genius!";
  } else if (percentage >= 80) {
    resultMessage.textContent = "Great job! You know your stuff!";
  } else if (percentage >= 60) {
    resultMessage.textContent = "Good effort! Keep learning!";
  } else if (percentage >= 40) {
    resultMessage.textContent = "Not bad! Try again to improve!";
  } else {
    resultMessage.textContent = "Keep studying! You'll get better!";
  }
}

function restartQuiz() {
  resultScreen.classList.remove("active");

  startQuiz();
}