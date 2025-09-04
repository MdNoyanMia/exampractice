
import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);
const Countdown = ({ targetDate }) => {


     const calculateTimeLeft = () => {
    const now = dayjs();
    const target = dayjs(targetDate);
    
    if (target.isBefore(now)) {
      return null;
    }

    const months = target.diff(now, 'month');
    const days = target.diff(now.add(months, 'month'), 'day');
    const hours = target.diff(now.add(months, 'month').add(days, 'day'), 'hour');
    const minutes = target.diff(now.add(months, 'month').add(days, 'day').add(hours, 'hour'), 'minute');
    const seconds = target.diff(now.add(months, 'month').add(days, 'day').add(hours, 'hour').add(minutes, 'minute'), 'second');

    return {
      months,
      days,
      hours,
      minutes,
      seconds
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) {
    return <h2>Time's up!</h2>;
  }

  return (
     <p>
        {timeLeft.months} months, {timeLeft.days} days, {timeLeft.hours} hours, {timeLeft.minutes} minutes, {timeLeft.seconds} seconds
      </p>
  )
}

export default Countdown