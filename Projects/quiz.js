// Define the Question object
class Question {
    constructor(question, options, correctAnswer) {
        this.question = question;
        this.options = options;
        this.correctAnswer = correctAnswer;
    }
}

// Define the Quiz object
class Quiz {
    constructor() {
        this.questions = [];
        this.score = 0;
        this.currentIndex = 0;
    }

    // Function to add questions to the quiz
    addQuestion(question, options, correctAnswer) {
        const newQuestion = new Question(question, options, correctAnswer);
        this.questions.push(newQuestion);
    }

    // Function to display a random quiz question
    displayQuestion() {
        const currentQuestion = this.questions[this.currentIndex];
        console.log(currentQuestion.question);
        currentQuestion.options.forEach((option, index) => {
            console.log(`${index + 1}. ${option}`);
        });
    }

    // Function to check the user's answer
    checkAnswer(answer) {
        const currentQuestion = this.questions[this.currentIndex];
        if (answer === currentQuestion.correctAnswer) {
            console.log("Correct answer!");
            this.score++;
        } else {
            console.log("Incorrect answer!");
        }
        this.currentIndex++;
    }

    // Function to display the final score
    displayScore() {
        console.log(`Quiz ended! Your final score is: ${this.score}/${this.questions.length}`);
    }

    // Function to start the quiz
    startQuiz() {
        this.questions = this.shuffleArray(this.questions);
        this.displayQuestion();
    }

    // Helper function to shuffle the array of questions
    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
}

// Example usage:
const quiz = new Quiz();

// Adding questions to the quiz
quiz.addQuestion(
    "What is the capital of France?",
    ["Paris", "London", "Berlin", "Madrid"],
    1
);
quiz.addQuestion(
    "Who wrote 'To Kill a Mockingbird'?",
    ["Harper Lee", "F. Scott Fitzgerald", "Ernest Hemingway", "Jane Austen"],
    0
);
quiz.addQuestion(
    "What is the chemical symbol for water?",
    ["H2O", "CO2", "O2", "CH4"],
    0
);

// Starting the quiz
quiz.startQuiz();

// Simulating user input and checking answers
quiz.checkAnswer(1); // User selects option 1
quiz.checkAnswer(0); // User selects option 0
quiz.checkAnswer(0); // User selects option 0

// Displaying the final score
quiz.displayScore();
