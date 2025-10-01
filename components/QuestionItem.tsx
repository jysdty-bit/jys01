import React from 'react';
import type { Question, ScoreOption } from '../types';

interface QuestionItemProps {
  question: Question;
  selectedValue: number | undefined;
  onAnswer: (questionId: number, value: number) => void;
  scoreOptions: ScoreOption[];
  pointsSuffix: string;
}

const QuestionItem: React.FC<QuestionItemProps> = ({ question, selectedValue, onAnswer, scoreOptions, pointsSuffix }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-4 transition-all duration-300 hover:shadow-lg">
      <p className="text-lg font-medium text-gray-800 mb-4">
        <span className="font-bold text-blue-600 mr-2">{question.id}.</span>
        {question.text}
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4">
        {scoreOptions.map((option) => (
          <label
            key={option.value}
            className={`cursor-pointer block text-center p-3 rounded-md border-2 w-full sm:w-28 transition-all duration-200 ${
              selectedValue === option.value
                ? 'bg-blue-500 border-blue-500 text-white shadow-lg scale-105'
                : 'bg-gray-100 border-gray-200 hover:bg-blue-100 hover:border-blue-300'
            }`}
          >
            <input
              type="radio"
              name={`question-${question.id}`}
              value={option.value}
              checked={selectedValue === option.value}
              onChange={() => onAnswer(question.id, option.value)}
              className="sr-only"
              aria-label={`${option.label} (${option.value} points)`}
            />
            <span className="text-md font-semibold">{option.label}</span>
            <span className="text-xs block opacity-80">{option.value}{pointsSuffix}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default QuestionItem;
