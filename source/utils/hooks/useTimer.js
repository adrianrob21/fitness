import { useEffect, useState } from 'react';

const useTimer = ({ startTimer = false, time, setStartTimer }) => {
  if (!time) return { minutes: 0, seconds: 0 };
  const timeArray = time?.split(':');

  let minutes = parseInt(time[0]);
  let seconds;

  if (timeArray.length > 1) {
    seconds = parseInt(timeArray[1]);
  } else {
    minutes = parseInt(time[0]) - 1;
    seconds = 59;
  }
  const [newMinutes, setNewMinutes] = useState(minutes);
  const [newSeconds, setNewSeconds] = useState(seconds);

  useEffect(() => {
    let intervalId;

    if (startTimer && (newMinutes > 0 || newSeconds > 0)) {
      intervalId = setInterval(() => {
        if (newSeconds === 0) {
          if (newMinutes === 0) {
            clearInterval(intervalId);
          } else {
            setNewMinutes(prevMinutes => prevMinutes - 1);
            setNewSeconds(59);
          }
        } else {
          setNewSeconds(prevSeconds => prevSeconds - 1);
        }
      }, 1000);
    } else {
      setStartTimer(false);
    }

    return () => clearInterval(intervalId);
  }, [startTimer, newMinutes, newSeconds]);

  return { minutes: newMinutes, seconds: newSeconds };
};

export default useTimer;
