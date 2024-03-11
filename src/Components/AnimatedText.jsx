import React, { useState, useEffect } from 'react';

const AnimatedText = ({ lang }) => {
  const [text, setText] = useState(lang === 'es' ? 'CURRÍCULUM VITAE' : 'RESUMÉ');
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    setText(lang === 'es' ? 'CURRÍCULUM VITAE' : 'RESUMÉ');
    setClicked(false); // Reset clicked state when lang changes

    const interval = setInterval(() => {
      handleTextClick();
    }, 7000); // Trigger animation every 2 seconds

    return () => clearInterval(interval);
  }, [lang]);

  const handleTextClick = () => {
    if (!clicked) {
      const innerInterval = setInterval(() => {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        setText(prevText =>
          prevText
            .split('')
            .map(() => letters[Math.floor(Math.random() * 26)])
            .join('')
        );
      }, 30);

      setTimeout(() => {
        clearInterval(innerInterval);
        setText(lang === 'es' ? 'CURRÍCULUM VITAE' : 'RESUMÉ');
      }, 1000);
    }
    setClicked(prevClicked => !prevClicked);
  };

  return (
    <h1
      data-value="CURRÍCULUM VITAE"
      className="rounded-sm cursor-pointer text-orange-500 border-l font-poppins"
      onClick={handleTextClick}
    >
      {text}
    </h1>
  );
};

export default AnimatedText;


