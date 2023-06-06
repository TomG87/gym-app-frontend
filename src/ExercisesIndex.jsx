import YouTube from 'react-youtube';
import React from "react";
import { useState } from "react";

export function ExercisesIndex(props) {
  return (
    <div id="exercises-index">
      <h1>Exercises</h1>
      {props.exercises.map((exercise) => (
        <div key={exercise.id}>
          <h3>{exercise.name}</h3>
          <img src={exercise.image_url} />
          <button onClick={() => props.onShowExercise(exercise)}>More Details</button>
        </div>
        ))}
    </div>
  );
}