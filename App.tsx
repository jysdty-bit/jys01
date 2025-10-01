import React, { useState, useMemo } from 'react';
import type { Answers } from './types';
import { translations, getResultForScore } from './lib/translations';
import QuestionItem from './components/QuestionItem';
import ResultDisplay from './components/ResultDisplay';
import { EarthIcon } from './components/GrowthIcons';

const App: React.FC = () => {
  const [language, setLanguage] = useState<'ko' | 'en'>('ko');
  const [answers, setAnswers] = useState<Answers>({});
  const [totalScore, setTotalScore] = useState<number | null>(null);

  const t = translations[language];

  const handleAnswerChange = (questionId: number, value: number) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: value,
    }));
  };

  const calculateResults = () => {
    const score = Object.values(answers).reduce((sum, value) => sum + (value as number), 0);
    setTotalScore(score);
    setTimeout(() => {
        const resultElement = document.getElementById('result-display');
        if (resultElement) {
            resultElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, 100);
  };
  
  const resetTest = () => {
    setAnswers({});
    setTotalScore(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const allQuestionsAnswered = useMemo(() => {
    return Object.keys(answers).length === t.questions.length;
  }, [answers, t.questions.length]);

  const resultData = useMemo(() => {
    if (totalScore === null) return null;
    return getResultForScore(totalScore, language);
  }, [totalScore, language]);

  return (
    <div className="bg-sky-50 min-h-screen p-4 sm:p-8">
      <div className="max-w-3xl mx-auto">
        <header className="relative text-center mb-8 p-6 bg-white rounded-2xl shadow-lg">
          <div className="absolute top-4 right-4 flex space-x-2">
            <button 
              onClick={() => setLanguage('ko')}
              className={`px-3 py-1 text-sm font-semibold rounded-full transition ${language === 'ko' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              aria-label="Switch to Korean"
            >
              🇰🇷 KO
            </button>
            <button 
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 text-sm font-semibold rounded-full transition ${language === 'en' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              aria-label="Switch to English"
            >
              🇺🇸 EN
            </button>
          </div>
          <EarthIcon className="w-16 h-16 text-blue-500 mx-auto mb-4" />
          <h1 className="text-4xl font-extrabold text-blue-800">{t.title}</h1>
          <p className="mt-2 text-lg text-gray-600">
            {t.description}
          </p>
        </header>
        
        <main>
          {totalScore === null || resultData === null ? (
            <div>
              <div className="space-y-4">
                {t.questions.map((question) => (
                  <QuestionItem
                    key={question.id}
                    question={question}
                    selectedValue={answers[question.id]}
                    onAnswer={handleAnswerChange}
                    scoreOptions={t.scoreOptions}
                    pointsSuffix={t.ui.pointsSuffix}
                  />
                ))}
              </div>
              <div className="mt-8 text-center">
                <button
                  onClick={calculateResults}
                  disabled={!allQuestionsAnswered}
                  className="bg-green-500 text-white font-bold py-4 px-10 rounded-full text-xl hover:bg-green-600 transition-all transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300 disabled:bg-gray-300 disabled:cursor-not-allowed disabled:scale-100"
                >
                  {allQuestionsAnswered ? t.ui.submitButton : t.ui.allAnswered}
                </button>
              </div>
            </div>
          ) : (
            <ResultDisplay 
              score={totalScore} 
              onReset={resetTest}
              result={resultData}
              uiText={{
                resultTitle: t.ui.resultTitle,
                retryButton: t.ui.retryButton,
                pointsSuffix: t.ui.pointsSuffix,
              }}
            />
          )}
        </main>

        <footer className="text-center mt-12 text-sm text-gray-500">
            <p>{t.ui.footer}</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
