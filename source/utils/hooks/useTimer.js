import { useEffect, useState } from 'react';

const useTimer = () => {
  const [timeRemaining, setTimeRemaining] = useState(['00', '00']);
  const [timerRunning, setTimerRunning] = useState(false);
  const [finished, setFinished] = useState(false);

  const formatTime = inputTime => {
    if (typeof inputTime === 'number') {
      const minutes = String(inputTime).padStart(2, '0');
      return [minutes, '00'];
    } else if (typeof inputTime === 'string') {
      const [minutes = '00', seconds = '00'] = inputTime.split(':');
      return [minutes.padStart(2, '0'), seconds.padStart(2, '0')];
    }
    return ['00', '00'];
  };

  useEffect(() => {
    let intervalId;

    if (timerRunning && !finished) {
      intervalId = setInterval(() => {
        setTimeRemaining(prevTime => {
          const [minutes, seconds] = prevTime;

          if (minutes === '00' && seconds === '00') {
            clearInterval(intervalId);
            setFinished(true);
            return ['00', '00'];
          }

          let newMinutes = parseInt(minutes);
          let newSeconds = parseInt(seconds);

          if (newSeconds === 0) {
            newMinutes -= 1;
            newSeconds = 59;
          } else {
            newSeconds -= 1;
          }

          return [
            String(newMinutes).padStart(2, '0'),
            String(newSeconds).padStart(2, '0')
          ];
        });
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [timerRunning]);

  const startTimer = initialTime => {
    if (!timerRunning || finished) {
      setTimeRemaining(formatTime(initialTime));
      setTimerRunning(true);
    }
    if (timerRunning) {
      setTimerRunning(false);
      setFinished(false);
      setTimeRemaining(formatTime(initialTime));
    }
  };

  return {
    minutes: timeRemaining[0],
    seconds: timeRemaining[1],
    startTimer,
    timerRunning
  };
};

export default useTimer;
