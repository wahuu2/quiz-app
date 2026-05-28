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
        { text: "JavaScript", correct: true },
        { text: "Just Style", correct: false },
        { text: "JQuery Script", correct: false },
      ],
    },
    {
      question: "Which language is mainly used to structure web pages?",
      answers: [
        { text: "HTML", correct: true },
        { text: "CSS", correct: false },
        { text: "Python", correct: false },
        { text: "C++", correct: false },
      ],
    },
    {
      question: "Which symbol is used to end a statement in JavaScript?",
      answers: [
        { text: ";", correct: true },
        { text: ":", correct: false },
        { text: ".", correct: false },
        { text: ",", correct: false },
      ],
    },
    {
      question: "Which tag is used to display an image in HTML?",
      answers: [
        { text: "<img>", correct: true },
        { text: "<image>", correct: false },
        { text: "<pic>", correct: false },
        { text: "<src>", correct: false },
      ],
    },
    {
      question: "Which operator is used for addition in most programming languages?",
      answers: [
        { text: "+", correct: true },
        { text: "-", correct: false },
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
        { text: "Python", correct: true },
        { text: "CSS", correct: false },
        { text: "HTML", correct: false },
        { text: "Photoshop", correct: false },
      ],
    },
    {
      question: "Which symbol is used for comments in JavaScript?",
      answers: [
        { text: "//", correct: true },
        { text: "##", correct: false },
        { text: "--", correct: false },
        { text: "\\\\", correct: false },
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
        { text: ".js", correct: true },
        { text: ".java", correct: false },
        { text: ".jsx", correct: false },
        { text: ".py", correct: false },
      ],
    },
    {
      question: "Which HTML tag is used for links?",
      answers: [
        { text: "<a>", correct: true },
        { text: "<link>", correct: false },
        { text: "<href>", correct: false },
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
        { text: "JavaScript", correct: true },
        { text: "Just Style", correct: false },
        { text: "JQuery Script", correct: false },
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
      question: "Which symbol is used for multiplication in most programming languages?",
      answers: [
        { text: "*", correct: true },
        { text: "x", correct: false },
        { text: "#", correct: false },
        { text: "&", correct: false },
      ],
    },
    {
      question: "Which HTML tag is used to display a heading?",
      answers: [
        { text: "<h1>", correct: true },
        { text: "<head>", correct: false },
        { text: "<title>", correct: false },
        { text: "<p>", correct: false },
      ],
    },
    {
      question: "Which keyword is used to define a constant in JavaScript?",
      answers: [
        { text: "const", correct: true },
        { text: "var", correct: false },
        { text: "let", correct: false },
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
        { text: "Python", correct: true },
        { text: "Java", correct: false },
        { text: "C#", correct: false },
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
        { text: "==", correct: true },
        { text: "=", correct: false },
        { text: "===", correct: true }, // both == and === are valid
        { text: "!=", correct: false },
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
        { text: "JavaScript", correct: true },
        { text: "CSS", correct: false },
        { text: "HTML", correct: false },
        { text: "SQL", correct: false },
      ],
    },
     {
      question: "Which HTML tag is used to create a numbered list?",
      answers: [
        { text: "<ol>", correct: true },
        { text: "<ul>", correct: false },
        { text: "<li>", correct: false },
        { text: "<list>", correct: false },
      ],
    },
    {
      question: "Which symbol is used for division in most programming languages?",
      answers: [
        { text: "/", correct: true },
        { text: "\\", correct: false },
        { text: "-", correct: false },
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
        { text: "function", correct: true },
        { text: "def", correct: false },
        { text: "method", correct: false },
        { text: "func", correct: false },
      ],
    },
    {
      question: "Which file extension is used for HTML files?",
      answers: [
        { text: ".html", correct: true },
        { text: ".htm", correct: true }, // both are valid
        { text: ".css", correct: false },
        { text: ".js", correct: false },
      ],
    },
    {
      question: "Which programming language is mainly used for database queries?",
      answers: [
        { text: "SQL", correct: true },
        { text: "Python", correct: false },
        { text: "JavaScript", correct: false },
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
        { text: "!=", correct: true },
        { text: "==", correct: false },
        { text: "=", correct: false },
        { text: "!==", correct: true }, // both != and !== are valid
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
        { text: "Java", correct: true },
        { text: "CSS", correct: false },
        { text: "HTML", correct: false },
        { text: "SQL", correct: false },
      ],
    },
    {
      question: "Which HTML tag is used to display an image?",
      answers: [
        { text: "<img>", correct: true },
        { text: "<image>", correct: false },
        { text: "<pic>", correct: false },
        { text: "<src>", correct: false },
      ],
    },
    {
      question: "Which keyword is used to declare a variable in JavaScript?",
      answers: [
        { text: "var", correct: true },
        { text: "let", correct: true }, // both valid
        { text: "int", correct: false },
        { text: "define", correct: false },
      ],
    },
    {
      question: "Which file extension is used for Python files?",
      answers: [
        { text: ".py", correct: true },
        { text: ".js", correct: false },
        { text: ".java", correct: false },
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
        { text: "=", correct: true },
        { text: "==", correct: false },
        { text: "===", correct: false },
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
        { text: "CSS", correct: true },
        { text: "HTML", correct: false },
        { text: "JavaScript", correct: false },
        { text: "Python", correct: false },
      ],
    },
    {
      question: "Which symbol is used for comments in Python?",
      answers: [
        { text: "#", correct: true },
        { text: "//", correct: false },
        { text: "/* */", correct: false },
        { text: "--", correct: false },
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
        { text: "def", correct: true },
        { text: "function", correct: false },
        { text: "method", correct: false },
        { text: "fun", correct: false },
      ],
    },
    {
      question: "Which HTML tag is used to create a list item?",
      answers: [
        { text: "<li>", correct: true },
        { text: "<ul>", correct: false },
        { text: "<ol>", correct: false },
        { text: "<list>", correct: false },
      ],
    }
  ]
},
// KENYAN HISTORY