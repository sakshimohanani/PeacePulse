import React,{useEffect} from 'react';
import './card.css';
import audio1 from '../assets/mp4.mp3';




const Card = () => {


  useEffect(() => {
    const audio = new Audio(audio1);
    const playPromise = audio.play();
    
    // Handle play promise to catch errors
    if (playPromise !== undefined) {
      playPromise.then(_ => {
        // Playback started
      })
      .catch(error => {
        console.error('Audio playback error:', error);
      });
    }
  
    // Clean up function to stop the audio when the component unmounts
    return () => {
      audio.pause();
      audio.currentTime = 0; // Reset audio to start position
    };
  }, []);
  
  
  return (
    <div>
      <article className='mt-10 p-9'>
        <section className="card" style={{ backgroundColor: '#E7F3FF' }}>
          <div className="text-content">
            <h3>Mental Health Test🧠</h3>
            <p>"Gain clarity and empowerment with our Mental Health Test. Discover personalized pathways to resilience and well-being."</p>
            <a href="/test">Start Test</a>
          </div>
          <div className="visual">
            <img src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2VsZiUyMGFzc2Vzc21lbnR8ZW58MHx8MHx8fDA%3D" alt="Mental Health" />
          </div>
        </section> 

        <section className="card" style={{ backgroundColor: '#FFE7E7' }}>
          <div className="text-content">
            <h3>Personalized Support, Anytime, Anywhere 🧑🏻‍⚕️</h3>
            <p>"Find personalized support and guidance with our Consultation services. Connect with experienced professionals to navigate life's challenges and foster growth."</p>
            <a href="/videocall">Get Support</a>
          </div>
          <div className="visual">
            <img src="https://images.unsplash.com/photo-1485217988980-11786ced9454?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b25saW5lJTIwZG9jdG9yJTIwY29uc3VsdGF0aW9ufGVufDB8fDB8fHww" alt="" />
          </div>
        </section> 

        <section className="card" style={{ backgroundColor: '#E3DFFD' }}>
          <div className="text-content">
            <h3>Meditation:"Journey to Inner Peace" 🧘🏻‍♂️</h3>
            <p>Embark on a journey of self-discovery and tranquility with our Meditation platform. Cultivate mindfulness, reduce stress, and enhance well-being."</p> 
            <a href='/meditation' >Get Started</a>
          </div>
          <div className="visual">
            <img src="https://images.unsplash.com/photo-1474418397713-7ede21d49118?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVkaXRhdGlvbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
          </div>
        </section> 

        <section className="card" style={{ backgroundColor: '#FFEEF4' }}>
          <div className="text-content">
            <h3>Resources for Growth 📘</h3>
            <p>"Explore curated content and engage with like-minded individuals for personal growth."</p> 
            <a href="/">Read now</a>
          </div>
          <div className="visual">
            <img src="https://images.unsplash.com/photo-1535905557558-afc4877a26fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Qm9va3N8ZW58MHx8MHx8fDA%3D" alt="" />
          </div>
        </section> 
      </article>   
         
    </div>
  );
};

export default Card;
