import React, { useState, useEffect } from 'react';
import './Countdown.css';

const Countdown = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2024-03-31') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="interactive-box innerWidth f-container"> {/* Wrap entire content with interactive box */}
    <div className="countdown-container">
      <div className="textAlignCenter r-head">
        <span className="orangeText">Limited Offer</span>
        <span className="WhiteText">Get 20% Discount</span>
      </div>
      <div className="countdown paddings">
        <span>{timeLeft.days}</span> Days{' '}
        <span>{timeLeft.hours}</span> Hours{' '}
        <span>{timeLeft.minutes}</span> Minutes{' '}
        <span>{timeLeft.seconds}</span> Seconds
      </div>
    </div>
  </div>
);
};

export default Countdown;
