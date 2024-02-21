import React, { useState, useRef } from 'react';
import song from '../SideComponents/gmusic.mp3';
import robo from '../assets/robo.png';

const GMusicPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleAudioTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-20 h-20 rounded-full bg-blue-500 mb-4"></div>
      <img src={robo} className="w-[70px] ml-5 animate-bounce" alt=''/>
      <div>
        <audio
          ref={audioRef}
          src={song}
          onTimeUpdate={handleAudioTimeUpdate}
        />
        <div>{formatTime(currentTime)}</div>
      </div>
      <div className="flex space-x-4 mt-4">
        <button onClick={handlePlayPause} className="bg-red-500 text-white px-4 py-2 rounded-md">
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
    </div>
  );
};

export default GMusicPlayer;
