import React, { useState } from 'react';

const QuestionComponent = () => {
  const questionPrompts = [
    'What is your favorite form of social media?',
    'What is your favorite food?',
    'What is your favorite movie?',
    'What is your favorite hobby?',
    'What has been you favorite vacation?',
    'Do you listen to any podcasts?',
    'What are your career goals',
    ''
  ];

  const [currentQuestion, setCurrentQuestion] = useState('');

  const getRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * questionPrompts.length);
    const randomQuestion = questionPrompts[randomIndex];
    setCurrentQuestion(randomQuestion);
  };

  return (
    <div>
      <h3>Random Question:</h3>
      <p>{currentQuestion}</p>
      <button onClick={getRandomQuestion}>Get Random Question</button>
    </div>
  );
};

export default QuestionComponent;