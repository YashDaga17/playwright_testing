import React, { useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import Home from './Home';
import About from './About';

function App() {
  const [currentSection, setCurrentSection] = useState('home');

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return <Home />;
      case 'todo':
        return <TodoList />;
      case 'about':
        return <About />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-brand">
          <h1>My Todo App</h1>
        </div>
        <div className="nav-links">
          <button
            className={currentSection === 'home' ? 'nav-btn active' : 'nav-btn'}
            onClick={() => setCurrentSection('home')}
          >
            Home
          </button>
          <button
            className={currentSection === 'todo' ? 'nav-btn active' : 'nav-btn'}
            onClick={() => setCurrentSection('todo')}
          >
            Todo List
          </button>
          <button
            className={currentSection === 'about' ? 'nav-btn active' : 'nav-btn'}
            onClick={() => setCurrentSection('about')}
          >
            About
          </button>
        </div>
      </nav>
      <main className="main-content">
        {renderSection()}
      </main>
    </div>
  );
}

export default App;
