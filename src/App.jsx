import React from 'react';
import Todo from './components/Todo';
import backgroundImage from './assets/background.jpg';

const App = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center py-6 px-4 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        backdropFilter: 'blur(2px)',
      }}
    >
      <Todo />
    </div>
  );
};

export default App;