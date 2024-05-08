import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styles from "./calendar.module.scss";

function CustomCalendar({ setDate }) {
  const defaultDate = new Date(2024, 6, 5);

  const customTileContent = ({ date, view }) =>
    view === "month" && date.getDate() === 5 ? (
      <span className={styles["custom-tile"]}>🎈</span> // Используем эмодзи вместо числа
    ) : null;

  return (
    <div className={styles["calendar-wrapper"]}>
      <Calendar
        className={styles["react-calendar"]}
        onChange={setDate}
        value={defaultDate}
        tileContent={customTileContent}
      />
    </div>
  );
}

export default CustomCalendar;
