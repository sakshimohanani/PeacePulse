import React, { useState } from 'react';

function Test() {
  const [scores, setScores] = useState(Array(20).fill(null));
  const [showModal, setShowModal] = useState(false);
  const [shouldConsult, setShouldConsult] = useState(false);

  const handleRadioChange = (questionIndex, value) => {
    const newScores = [...scores];
    newScores[questionIndex] = parseInt(value);
    setScores(newScores);
  };

  const calculatePercentage = (startIndex, endIndex) => {
    const sectionScore = scores.slice(startIndex, endIndex + 1).reduce((acc, score) => acc + (score || 0), 0);
    const percentage = (sectionScore / 12) * 100; // Assuming 12 is the maximum score for each section
    return percentage.toFixed(2);
  };

  const handleSubmit = () => {
    const healthPercentage = calculatePercentage(0, 3);
    const physicalPercentage = calculatePercentage(4, 7);
    const sleepPercentage = calculatePercentage(8, 11);
    const anxietyPercentage = calculatePercentage(12, 15);
    const workLifeBalancePercentage = calculatePercentage(16, 19);

    if (parseFloat(healthPercentage) < 50 || parseFloat(physicalPercentage) <50 || parseFloat(sleepPercentage) <50 || parseFloat(anxietyPercentage) < 50 || parseFloat(workLifeBalancePercentage) < 50) {
      setShouldConsult(true);
    }
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setShouldConsult(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-200 to-green-200">
      <div className="max-w-xl w-full bg-white bg-opacity-75 p-8 rounded-lg shadow-md">
        <h2 className="text-center text-3xl font-bold mb-8">Self Exploration Test</h2>
        <form>
          {['Routine ', 'Focus', 'Health', 'Sleep', 'Work-Life Balance'].map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-4">
              <h3 className="text-lg font-semibold mb-2">{section}</h3>
              {[...Array(4).keys()].map((index) => (
                <div key={index} className="mt-2">
                  <p className="text-base font-medium">{index + 1}. {questions[sectionIndex * 4 + index]}</p>
                  {[0, 1, 2, 3].map((value) => (
                    <div key={value} className="mt-2">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name={`question-${sectionIndex * 4 + index + 1}`}
                          value={value}
                          onChange={() => handleRadioChange(sectionIndex * 4 + index, value)}
                          className="form-radio h-4 w-4 text-blue-600"
                        />
                        <span className="ml-2">{labels[value]}</span>
                      </label>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
          <button type="button" onClick={handleSubmit} className="btn bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600 w-full">
            Calculate
          </button>
          {showModal && (
            <div className="fixed inset-0 flex items-center justify-center">
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="bg-white rounded-lg p-8 z-10 max-w-md">
                <h2 className="text-xl font-semibold mb-2">Self - Exploration Test</h2>
                <p className="mb-4">
                Routine: {calculatePercentage(0, 3)}%<br />
                Focus: {calculatePercentage(4, 7)}%<br />
                Health: {calculatePercentage(8, 11)}%<br />
                Sleep: {calculatePercentage(12, 15)}%<br />
                Work-Life Balance: {calculatePercentage(16, 19)}%
                </p>
                {shouldConsult && (
                  <div>
                    <p className="text-red-600 mb-4">You should consult a doctor for further evaluation.</p>
                    <button className="btn bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 w-full">
                      <a href="/videocall">Get Doctor</a>
                    </button>
                  </div>
                )}
                <button onClick={handleModalClose} className="btn bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 w-full mt-4">
                  Close
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

const questions = [
  // ... (unchanged)
  //Routine
  "How often do you feel overwhelmed by daily tasks ?",
  "Have you experienced persistent feelings of sadness or hopelessness?",
  "How often do you experience anxiety or panic attacks?",
  "How often do you experience irritability or mood swings in a week",
  //Focus
  "On a typical day, how often do you find your mind wandering during activities that require focus?",
  "How often do you use electronic devices within one hour before bedtime?",
  "How frequently do you experience difficulty concentrating or focusing on tasks?",
  "How often do you engage in activities purely for enjoyment and relaxation?",
  //Health
  "How often do you consume fruits and vegetables in a week?",
  "How frequently do you eat meals at regular intervals throughout the day?",
  "How often do you engage in physical exercise or physical activity each week?",
  "How often do you snacks(junk food) in a week?",
  //Sleep 
  "How often do you find it difficult to fall asleep at night?",
  "How often do you manage to get a full night's sleep of 7 hours?",
  "How often do you find yourself tossing and turning in bed before falling asleep?",
  "How often do you wake up feeling fatigued or unrefreshed, despite a full night's sleep?",
  //Work - Life Balance
  "How often do you feel that work demands interfere with your personal life?",
  "Do you regularly take breaks during work hours to relax and recharge?",
  "How often do you find yourself thinking about work-related tasks during non-work hours?",
  "Do you feel that you have enough time outside of work to pursue personal interests and hobbies?",
];

const labels = ["Not at all", "Rarely", "Occasionally", "Always"];

export default Test;