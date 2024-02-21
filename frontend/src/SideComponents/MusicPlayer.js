import React, { useState, useRef } from 'react';
import song from '../SideComponents/music.mp3';

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [selectedTime, setSelectedTime] = useState(5 * 60); // Default time: 5 minutes
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handlePlay = () => {
    if (!isPlaying) {
      alert("Close your eyes"); // Alert before starting
      setIsPlaying(true);
      audioRef.current.play();
    }
  };

  const handlePause = () => {
    setIsPlaying(false);
    audioRef.current.pause();
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleAudioTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
    if (audioRef.current.currentTime >= selectedTime) {
      handlePause();
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-20 h-20 rounded-full bg-blue-500 mb-4"></div>
      <div className="flex items-center space-x-4 mb-4">
        <button onClick={() => handleTimeSelect(5 * 60)} className="bg-gray-200 px-4 py-2 rounded-md">5 min</button>
        <button onClick={() => handleTimeSelect(10 * 60)} className="bg-gray-200 px-4 py-2 rounded-md">10 min</button>
        <button onClick={() => handleTimeSelect(15 * 60)} className="bg-gray-200 px-4 py-2 rounded-md">15 min</button>
      </div>
      <div>
        <audio
          ref={audioRef}
          src={song}
          onTimeUpdate={handleAudioTimeUpdate}
          onEnded={handlePause}
        />
        <div>{formatTime(currentTime)}</div>
        <div>{formatTime(selectedTime)}</div>
      </div>
      <div className="flex space-x-4 mt-4">
        {isPlaying ? (
          <button onClick={handlePause} className="bg-red-500 text-white px-4 py-2 rounded-md">Pause</button>
        ) : (
          <button onClick={handlePlay} className="bg-green-500 text-white px-4 py-2 rounded-md">Play</button>
        )}
      </div>
    </div>
  );
};

export default MusicPlayer;
