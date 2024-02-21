import React, { useState } from 'react';
import Contact from "../Components/Contact"
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"
import img4 from "../assets/img4.jpg"
import{typewrite} from './typing'



const Practise = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">PeacePulse</span>
          </a>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
          <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:w-auto md:block`} id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</a>
              </li>
              <li>
                <a href="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
              </li>
              <li>
                <a href="/login" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Login</a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>

      <div className="overflow-hidden bg-white py-24 pt-10 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              
              <p className="mt-2 text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl">Welcome</p>
              <div class="mt-6 text-lg leading-8 text-gray-600 align-center">
    <h2 class="mt-2 text-4xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl text-teal-600">Online Therapy can</h2>
    <h2 class="mt-2 text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl text-teal-600">Help You</h2>
    <h1 class="mt-2 text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl text-blue-500">Heal & Thrive</h1>
    <br />
    <p className='justify-content'>Our integrated approach to healthcare combines evidence-based medicine with holistic therapies and lifestyle interventions to address the root causes of illness and promote long-term well-being.
</p>
    <div class="text-center mt-6">
    <a href="/" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Get started
                <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
       
    </div>
</div>

            
             
            </div>
          </div>
          
         
    {/* <div class="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] transform translate-x-8">
        <div class="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
        <div class="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
        <div class="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
        <div class="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
        <div class="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
        <h3 className='text-center'>PeacePulse</h3>
        
           
            <img src="https://cdn.dribbble.com/users/1896165/screenshots/7799845/media/ab74709a5b585082ef0ff5bb4fb42de6.gif" class="dark:hidden w-[272px] h-[572px]" alt=""/>
        </div>
    </div> */}


    <div class="relative mx-auto border-gray-800 dark:border-gray-800 bg-white dark:bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] transform translate-x-8">
    <div class="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
    <div class="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
    <div class="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
    <div class="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
    <div class="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white">
        <h3 class="text-center text-blue-500 dark:text-blue-300 text-3xl py-4">PeacePulse</h3>
        <img src="https://img.freepik.com/free-vector/mental-health-wellness-composition-with-isometric-icons-human-organ-gear-tools-emotional-reactions-people-vector-illustration_1284-80419.jpg?t=st=1708461505~exp=1708465105~hmac=ba581e9468b6928b85b0bf7120bea021e004043b37d42aaede90a9474661b4b2&w=740" alt="" />
        <p id="typing-text" class="text-center text-md text-gray-600 dark:text-gray-400 text-lg mt-4"></p>
       
    </div>
</div>

typeWriter();








    

    






        </div>
      </div>
    </div>

    

<section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Everything to make your mind stronger</h1>

<div class="grid gap-4">
   
    <div class="grid grid-cols-4 gap-4">
        <div className='shadow-lg'>
            <img class="h-auto max-w-full rounded-lg" src={img1} alt=""/>
            <p>Test</p>
           
        </div>
        <div className='shadow-lg'>
            <img class="h-auto max-w-full rounded-lg" src={img2} alt=""/>
            <p>Online Consultation</p>
        </div>
        <div className='shadow-lg'>
            <img class="h-auto max-w-full rounded-lg" src={img3} alt=""/>
            <p>Meditation</p>
        </div>
        <div className='shadow-lg'>
            <img class="h-auto max-w-full rounded-lg" src={img4} alt=""/>
            <p>Books</p>
        </div>
        
        
    </div>
</div>

    </div>
</section>

<Contact/>

<br />


<footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" class="hover:underline">PeacePulse™</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">About</a>
        </li>
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
        </li>
        <li>
            <a href="#" class="hover:underline">Contact</a>
        </li>
    </ul>
    </div>
</footer>



      
    </div>
  );
};

export default Practise;
