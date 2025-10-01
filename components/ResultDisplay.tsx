import React from 'react';
import type { ResultLevel } from '../types';

interface ResultDisplayProps {
  score: number;
  onReset: () => void;
  result: ResultLevel;
  uiText: {
    resultTitle: string;
    retryButton: string;
    pointsSuffix: string;
  };
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ score, onReset, result, uiText }) => {
  const Icon = result.icon;

  return (
    <div id="result-display" className={`mt-8 p-6 sm:p-8 rounded-2xl shadow-xl animate-fade-in-up ${result.bgColor}`}>
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-700">{uiText.resultTitle}</h2>
        <p className={`text-6xl font-black my-4 ${result.color}`}>{score}{uiText.pointsSuffix}</p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-6 bg-white/50 p-6 rounded-lg">
        <div className={`w-24 h-24 flex-shrink-0 ${result.color}`}>
          <Icon className="w-full h-full" />
        </div>
        <div className="text-center md:text-left">
          <h3 className={`text-3xl font-bold ${result.color}`}>{result.title}</h3>
          <p className="mt-2 text-lg text-gray-600">{result.description}</p>
        </div>
      </div>
      <div className="text-center mt-8">
        <button
          onClick={onReset}
          className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          {uiText.retryButton}
        </button>
      </div>
    </div>
  );
};

export default ResultDisplay;
