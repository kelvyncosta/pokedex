import { useEffect, useState } from 'react';

interface ITimerProps {
  time: number;
}

export function Timer({ time }: ITimerProps) {
  const [seconds, setSeconds] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [hours, setHours] = useState('00');

  useEffect(() => {
    const calculatedHours = (time / (60 * 60)) % 24;
    const calculatedMinutes = (time / 60) % 60;
    const calculatedSeconds = time % 60;

    setHours(Math.floor(calculatedHours).toString().padStart(2, '0'));
    setMinutes(Math.floor(calculatedMinutes).toString().padStart(2, '0'));
    setSeconds(Math.floor(calculatedSeconds).toString().padStart(2, '0'));
  }, [time]);

  return (
    <div className="font-orbitron text-xl">
      {hours !== '00' && <span>{hours}:</span>}
      <span>{minutes}:</span>
      <span>{seconds}</span>
    </div>
  );
}
