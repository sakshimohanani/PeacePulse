import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function VideoCall() {
    const [roomCode, setRoomCode] = useState('');

    const navigate = useNavigate();

    const handleFormSubmit = ()=>{
        navigate(`/videocall/${roomCode}`);
    }

    return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white rounded-lg shadow-md p-8 mx-4 md:mx-0">
        <label className="block text-gray-700 text-lg from-neutral-600 mb-2" htmlFor="roomCode">
          Enter Room Code
        </label>
        <input
          type="text"
          id="roomCode"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Code"
          required
          value={roomCode}
          onChange={(e) => setRoomCode(e.target.value)}
        />
        <button  onClick={handleFormSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mt-4 ">
          Enter Room
        </button>
      </div>
    </div>
  );
  
}

export default VideoCall