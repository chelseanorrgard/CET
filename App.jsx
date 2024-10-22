import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  return (
    <>
      <section>
        <header className='flex p-7 justify-around'>
          <div className='flex'>
            <div className='text-2xl'>CET</div>
          </div>
          <div className='flex gap-10'>
            <p>Resources</p>
            <p>Hotline</p>
            <p>Booking</p>
            <p>Blogs</p>
          </div>
          <div>
            <button>Login</button>
          </div>
        </header>
        <img src="https://marketplace.canva.com/EAE0d_FW6ZA/1/0/800w/canva-retro-vector-gold-frames-luxury-decorative-logo-template-WBEkc3CZ-Xo.jpg" alt="Retro vector gold frames luxury decorative logo template" className='w-full h-[750px]'/>
      </section>
      <div className="bg-white flex items-center rounded-lg border-2 border-yellow-500 mt-5 mx-auto w-3/4">
        <div className="flex items-center p-4 border-r-2 border-yellow-500">
          <i className="fas fa-bed text-gray-500 mr-2"></i>
          <span className="text-gray-500">Minne olet menossa?</span>
        </div>
        <div className="flex items-center p-4 border-r-2 border-yellow-500">
          <i className="fas fa-calendar-alt text-gray-500 mr-2"></i>  
          <span className="text-gray-500">Tulopäivä — Lähtöpäivä</span>
        </div>
        <div className="flex items-center p-4 border-r-2 border-yellow-500">
          <i className="fas fa-user text-gray-500 mr-2"></i>
          <span className="text-gray-500">2 aikuista · 0 lasta · 1 huone</span>
          <i className="fas fa-chevron-down text-gray-500 ml-2"></i>
        </div>
        <button className="bg-blue-600 text-white px-6 py-4 rounded-r-lg">Etsi</button>
      </div>
    </>
  );
}

export default App;