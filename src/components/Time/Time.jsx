import { useEffect, useState } from "react";
import "./Time.css";

const Time = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 1000);
  }, []);

  const formatDate = (number) => {
    return number < 10 ? `0${number}`: number
  }

  const day = formatDate(date.getDate());
  const month = formatDate(date.getMonth() +1);
  const year = date.getFullYear();
  const hours = formatDate(date.getHours());
  const minutes = formatDate(date.getMinutes());
  const seconds = formatDate(date.getSeconds());

  return (
    <div className="time">
      <h3>Time</h3>
      <p>{day} - {month} - {year}</p>
      <p className="clock">{hours}:{minutes}:{seconds}</p>
    </div>
  );
};

export default Time;
