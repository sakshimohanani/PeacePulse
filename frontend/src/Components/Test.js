import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Test() {
  const [scores, setScores] = useState(Array(20).fill(null));
  const [showModal, setShowModal] = useState(false);
  const [shouldConsult, setShouldConsult] = useState(false);

  const handleRadioChange = (questionIndex, value) => {
    const newScores = [...scores];
    newScores[questionIndex] = parseInt(value);
    setScores(newScores);
  };

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/videocall');
  };


  const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            const date = new Date();
            const hours = date.getHours().toString().padStart(2, '0');
            const minutes = date.getMinutes().toString().padStart(2, '0');
            setCurrentTime(`${hours}:${minutes}`);
        }, 1000); // Update every second
        return () => clearInterval(interval);
    }, []);

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
              
<div class="flex items-start gap-2.5">
   <img class="w-8 h-8 rounded-full" src="data:image/png;base64,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" alt="Jese image"/>
   <div class="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
      <div class="flex items-center space-x-2 rtl:space-x-reverse">
         <span class="text-sm font-semibold text-gray-900 dark:text-white">Bot</span>
         <span class="text-sm font-normal text-gray-500 dark:text-gray-400">{currentTime}</span>
      </div>
      <h2 className="text-xl font-semibold mb-2 text-center text-red-600">Result</h2>
                <p className="mb-4">

                Routine: {calculatePercentage(0, 3)}%<br />
                Focus: {calculatePercentage(4, 7)}%<br />
                Health: {calculatePercentage(8, 11)}%<br />
                Sleep: {calculatePercentage(12, 15)}%<br />
                Work-Life Balance: {calculatePercentage(16, 19)}%
                </p>
     
      <span class="text-sm font-normal text-gray-500 dark:text-gray-400">Delivered</span>
   </div>
  
   
</div>

              
               
                {shouldConsult && (
                  <div>
                  
<div class="flex items-start gap-2.5">
   <img class="w-8 h-8 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8pMxU6Y_ITKBY8oBmeGVHFiyuL3zeoA8GNiuOTvS2fQ_2DirJwM209-ut67T9aUQ12XY&usqp=CAU" alt="Jese image"/>
   <div class="flex flex-col gap-1 w-full max-w-[320px]">
      <div class="flex items-center space-x-2 rtl:space-x-reverse">
         <span class="text-sm font-semibold text-gray-900 dark:text-white">Doctor</span>
        
      </div>
      <div class="flex flex-col leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
         <p class="text-sm font-normal text-gray-900 dark:text-white"> Use 123456 Id and get free Consultation</p>
         <div style={{ display: "flex", justifyContent: "center" }}>
  <button className="btn bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 text-sm" style={{ width: "100px" }} onClick={handleButtonClick}>
    Get Doctor
  </button>
</div>
 <span class="text-sm font-normal text-gray-500 dark:text-gray-400">Delivered</span>



      </div>
      
     
   </div>
   
   
       
</div>

                   
                   
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
