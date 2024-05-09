import React, { useState, useEffect } from "react";
import styles from "./date.module.scss";

function DateComponent() {
  const [remainingTime, setRemainingTime] = useState(calculateRemainingTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime(calculateRemainingTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateRemainingTime() {
    const date = new Date(2024, 7, 5);
    const difference = date.getTime() - new Date().getTime();

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  return (
    <p className={styles.remainingTime}>
      {remainingTime.days} күн, {remainingTime.hours} сағат,{" "}
      {remainingTime.minutes} минут, {remainingTime.seconds} секунд
    </p>
  );
}

export default DateComponent;
