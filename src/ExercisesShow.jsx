import React, { useState } from 'react';
import YouTube from 'react-youtube';
import axios from 'axios';

export function ExercisesShow(props) {
  const [showAlert, setShowAlert] = useState(false);
  
  const handleAddToRoutine = (event) => {
    event.preventDefault();
  
    const params = new FormData(event.target);

    axios
      .post('http://localhost:3000/routines.json', params)
      .then((response) => {
        console.log(response.data);
        // Handle successful response, e.g., show a success message
      })
      .catch((error) => {
        console.error('User needs to be logged in:', error);
        setShowAlert(true);

      });
  };

  return (
    <div>
      <h1>Exercise Details</h1>
      <h2>{props.exercise.name}</h2>
      <h4>{props.exercise.description}</h4>
      <br />
      <h5>Below is a video demonstration of the exercise:</h5>
      <br />
      <YouTube videoId={props.exercise.video_url} />
      <h5>We recommend 5 to 8 reps if doing heavier weight and 8-12 reps for lighter weight.</h5>
      
      <form onSubmit={handleAddToRoutine}>
        <div key="routines">
          <input name="exercise_id" type="hidden" defaultValue={props.exercise.id} />
        </div>
        <div>
          Repetitions: <input name="repetitions" type="text" />
        </div>
        <button type="submit">Add to routine</button>
      </form>
        {showAlert && (
        <div className="alert">
        You must be logged in to add an exercise to your routine.
        </div>
       )}
    </div>
  );
}
