import React from "react";
import { useState } from "react";

export function RoutinesIndex(props) {
  return (
    <div id="routines-index">
      <h1>Routines</h1>
      {props.routines.map((routine) => (
        <div key={routine.id}>
          <h3>Name: {routine.user_id}</h3>
          <h3>Exercise ID: {routine.exercise_id}</h3>
          <h3>Repetitions: {routine.repetitions}</h3>
        </div>
      ))}
    </div>
  );
}
