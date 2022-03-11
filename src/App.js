import React from 'react';
import './App.css';
import Content from './Content/content';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';


const App = () => {
  return (
    <div className="App">
      <header className='header'> <Header /> </header>
      <nav className='nav'> <Sidebar /> </nav>
      <div className='content'><Content /></div>
      <div className='footer'><Footer /></div>
   
    </div>
  );
}

export default App;
