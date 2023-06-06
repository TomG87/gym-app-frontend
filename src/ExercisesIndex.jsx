import React from "react";
import { useState } from "react";

export function ExercisesIndex(props) {
  return (
    <div id="exercises-index">
      <h1>Exercises</h1>
      <div className="card-container">
        {props.exercises.map((exercise) => (
          <div className="card" style={{ width: '50%', maxWidth: '18rem' }} key={exercise.id}>
            <div>
              <h3>{exercise.name}</h3>
              <img src={exercise.image_url} className="card-img-top" alt="Exercise" />
              <button className="btn btn-primary" onClick={() => props.onShowExercise(exercise)}>More Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
