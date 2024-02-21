import React, { useState, useEffect } from 'react';

const Timer = ({ onClose }) => {
  const [selectedTime, setSelectedTime] = useState(30); // Default time: 30 seconds
  const [currentTime, setCurrentTime] = useState(selectedTime);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setCurrentTime((prevTime) => {
          if (prevTime === 0) {
            clearInterval(timer);
            setIsRunning(false);
            alert("Timer completed!");
            return 0;
          } else {
            return prevTime - 1;
          }
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setCurrentTime(time);
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4">
        
        <button onClick={() => handleTimeSelect(5 * 60)} className="bg-gray-200 px-4 py-2 rounded-md">5 min</button>
        <button onClick={() => handleTimeSelect(10 * 60)} className="bg-gray-200 px-4 py-2 rounded-md">10 min</button>
        <button onClick={() => handleTimeSelect(15 * 60)} className="bg-gray-200 px-4 py-2 rounded-md">15 min</button>
      </div>
      <div>
        <div className="text-4xl font-bold mb-4">{formatTime(currentTime)}</div>
      </div>
      <div className="flex space-x-4">
        {!isRunning ? (
          <button onClick={handleStart} className="bg-green-500 text-white px-4 py-2 rounded-md">Start</button>
        ) : (
          <button onClick={handlePause} className="bg-red-500 text-white px-4 py-2 rounded-md">Pause</button>
        )}
      </div>
      <button onClick={onClose} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Close</button>
    </div>
  );
};

export default Timer;
