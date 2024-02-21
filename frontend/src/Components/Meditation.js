import React, { useState } from 'react';
import medimg from '../assets/Meditation.jpg';
import MusicPlayer from '../SideComponents/MusicPlayer';
import Timer from '../SideComponents/Timer';
import GMusicPlayer from '../SideComponents/Gmusicplayer';

const Meditation = () => {
  const [showSilenceModal, setShowSilenceModal] = useState(false);
  const [showMusicModal, setShowMusicModal] = useState(false);
  const [showGuidedModal, setShowGuidedModal] = useState(false);

  const toggleSilenceModal = () => {
    setShowSilenceModal(!showSilenceModal);
  };

  const toggleMusicModal = () => {
    setShowMusicModal(!showMusicModal);
  };

  const toggleGuidedModal = () => {
    setShowGuidedModal(!showGuidedModal);
  };

  return (
    <div className="overflow-hidden bg-pink-30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl">Meditation</p>
              <p className="mt-1 text-1xl text-center tracking-tight text-gray-400 sm:text-1xl">Sit in a comfortable position, focus on your breathing.</p>

              <p className="mt-6 text-2xl text-center font-bold tracking-tight text-gray-900 sm:text-2xl">Choose a Meditation</p>
              <div className="mt-10 text-lg leading-8 text-gray-600">
                <div className="flex flex-col items-center justify-center space-y-4">
                  <button onClick={toggleSilenceModal} className="w-full bg-transparent border border-gray-300 hover:bg-gray-100 text-gray-900 font-medium py-2 px-4 rounded-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                    Silence
                  </button>

                  <button onClick={toggleMusicModal} className="w-full bg-transparent border border-gray-300 hover:bg-gray-100 text-gray-900 font-medium py-2 px-4 rounded-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                    Only Music
                  </button>
                  <button onClick={toggleGuidedModal} className="w-full bg-transparent border border-gray-300 hover:bg-gray-100 text-gray-900 font-medium py-2 px-4 rounded-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                    Guided Meditation
                  </button>
                </div>
              </div>
            </div>
          </div>
          <img
            src={medimg}
            alt="Meditation"
            className="w-[35rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[35rem] md:-ml-4 ml-30"
            width={2432}
            height={1442}
          />
        </div>
      </div>

      {/* Silence Modal */}
      {showSilenceModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-md">
            <h2 className="text-2xl font-bold mb-4">Silence Meditation</h2>
            <p className="text-gray-800">Content for the Silence Meditation modal.</p>
            <Timer />
            <button onClick={toggleSilenceModal} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Close</button>
          </div>
        </div>
      )}

      {/* Music Modal */}
      {showMusicModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-md">
            <h2 className="text-2xl font-bold mb-4">Music Meditation</h2>
            <p className="text-gray-800">Content for the Only Music Meditation modal.</p>
            <MusicPlayer />
           
            <button onClick={toggleMusicModal} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Close</button>
          </div>
        </div>
      )}

      {/* Guided Meditation Modal */}
      {showGuidedModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-md">
            <h2 className="text-2xl font-bold mb-4">Guided Meditation</h2>
            <p className="text-gray-800">Content for the Guided Meditation modal.</p>
            <GMusicPlayer />
            <button onClick={toggleGuidedModal} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Meditation;
