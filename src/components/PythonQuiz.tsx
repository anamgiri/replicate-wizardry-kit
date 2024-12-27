import React from 'react';
import { Card } from './ui/card';

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer?: number;
}

const quizQuestions: QuizQuestion[] = [
  {
    question: "What is the main purpose of object oriented programming in Python?",
    options: [
      "Improve code readability",
      "Promote reusability of code",
      "Enhance code speed"
    ],
    correctAnswer: 1
  },
  {
    question: "Which data structure is used to store elements in a FIFO (First In, First Out) manner?",
    options: [
      "Stack",
      "Queue",
      "Linked List"
    ],
    correctAnswer: 1
  },
  {
    question: "What is the output of the following code snippet: print(3 + 4 * 5)?",
    options: [
      "23",
      "35",
      "24"
    ],
    correctAnswer: 0
  },
  {
    question: "In Python, how do you create a class named 'Animal' with a method named 'sound'?",
    options: [
      "class Animal: def sound():",
      "class Animal: def sound(self):",
      "class Animal: sound(self)"
    ],
    correctAnswer: 1
  },
  {
    question: "Which sorting algorithm has the best time complexity in the average case?",
    options: [
      "Bubble Sort",
      "Quick Sort",
      "Selection Sort"
    ],
    correctAnswer: 1
  },
  {
    question: "What is the purpose of a 'docstring' in Python?",
    options: [
      "To comment out code",
      "To provide documentation for a function or module",
      "To define global variables"
    ],
    correctAnswer: 1
  },
  {
    question: "What is the difference between a list and a tuple in Python?",
    options: [
      "Lists are ordered, tuples are unordered",
      "Lists are mutable, tuples are immutable",
      "Lists can only store numbers, tuples can store any data type"
    ],
    correctAnswer: 1
  },
  {
    question: "Which of the following is NOT a valid way to create an empty list in Python?",
    options: [
      "list()",
      "[]",
      "list[]"
    ],
    correctAnswer: 2
  },
  {
    question: "What is the time complexity of binary search?",
    options: [
      "O(n)",
      "O(log n)",
      "O(n²)"
    ],
    correctAnswer: 1
  },
  {
    question: "What does the 'self' keyword represent in a Python class?",
    options: [
      "The class itself",
      "The current instance of the class",
      "A required Python keyword"
    ],
    correctAnswer: 1
  }
];

const PythonQuiz = () => {
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-6">Python Programming Quiz</h2>
      <div className="space-y-8">
        {quizQuestions.map((q, qIndex) => (
          <div key={qIndex} className="border rounded-lg p-4">
            <h3 className="font-semibold mb-4">Question {qIndex + 1}/{quizQuestions.length}</h3>
            <p className="mb-4">{q.question}</p>
            <div className="space-y-2">
              {q.options.map((option, oIndex) => (
                <div key={oIndex} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name={`question-${qIndex}`}
                    id={`q${qIndex}-o${oIndex}`}
                    className="form-radio"
                  />
                  <label htmlFor={`q${qIndex}-o${oIndex}`}>{option}</label>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default PythonQuiz;