// Preloader.js
import React from 'react';

const Preloader = () => {
  const greetings = ['Hello', 'Hola', 'Bonjour', 'Hallo', 'Ciao', 'こんにちは', '안녕하세요', '你好'];

  return (
    <div className="preloader">
      <div className="text-container">
        {greetings.map((greeting, index) => (
          <div key={index} className="text" style={{ animationDelay: `${index * 0.5}s` }}>
            {greeting}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Preloader;
