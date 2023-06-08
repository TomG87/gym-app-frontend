import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function RoutinesIndex(props) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleAddToRoutine = (event) => {
    event.preventDefault();

    // Show the popup window
    setPopupOpen(true);

    // Reset the form fields
    setSelectedDate(null);
    setSelectedTime(null);
  };

  return (
    <div id="routines-index">
      <br />
      <br />
      <br />
      <h1>Routines</h1>
      <div id="routine-scheduler">
        <form onSubmit={handleAddToRoutine}>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="yyyy-MM-dd"
            placeholderText="Select a date"
          />
          <input
            type="time"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
          />
          <br />
          <button type="submit">Schedule Routine</button>
        </form>
      </div>
      <div className="card-container">
        {props.routines.map((routine) => (
          <div key={routine.id} className="card">
            <div className="card-body">
              <h3 className="card-title">Name: {routine.user.name}</h3>
              <p className="card-text">Exercise: {routine.exercise.name}</p>
              <img src={routine.exercise.image_url} className="card-img-top" alt="Exercise" />
              <p className="card-text">Repetitions: {routine.repetitions} for sets of 3</p>
            </div>
          </div>
        ))}
      </div>
      {isPopupOpen && (
        <div className="popup">
          <p>Routine successfully added!</p>
        </div>
      )}
    </div>
  );
}
