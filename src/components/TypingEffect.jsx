import React, { useState, useEffect } from 'react';

const TypingEffect = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, text, speed]);

  return (
    <div className="font-semibold text-2xl text-gray-800">
      <span>{displayedText}</span><span className="inline-block bg-gray-800 w-1 ml-1 animate-blink">|</span>
    </div>
  );
};

export default TypingEffect;
