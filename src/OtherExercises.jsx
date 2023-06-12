import React, { useEffect, useState } from 'react';
import axios from 'axios';

export function OtherExercises() {
  const [exerciseData, setExerciseData] = useState([]);
  const [muscle, setMuscle] = useState('');

  useEffect(() => {
    fetchExercises();
  }, []);

  const handleMuscleChange = (event) => {
    setMuscle(event.target.value);
  };

  const fetchExercises = async () => {
    try {
      const response = await axios.get('http://localhost:3000/other.json');
      setExerciseData(response.data);
    } catch (error) {
      console.error('Error fetching exercises:', error);
    }
  };

  const filteredExercises = exerciseData.filter((exercise) => {
    if (muscle === '') {
      return true;
    }
    return exercise.muscle.toLowerCase() === muscle.toLowerCase();
  });

  return (
    <div>
      <br />
      <br />
      <h1>Additional Exercises</h1>
      <div>
        <label htmlFor="muscle">Select Muscle Type:</label>
        <select id="muscle" value={muscle} onChange={handleMuscleChange} className="select-muscle">
          <option value=""></option>
          <option value="forearms">Forearms</option>
          <option value="quadriceps">Quadriceps</option>
          <option value="abdominals">Abdominals</option>
          <option value="lats">Lats</option>
          <option value="middle_back">Middle Back</option>
          <option value="forearms">Forearms</option>
          <option value="shoulders">Shoulders</option>
          <option value="biceps">Biceps</option>
        </select>
      </div>
      {filteredExercises.map((exercise) => (
        <div key={exercise.id}>
          <br />
          <h3>{exercise.name}</h3>
          <h4><p>Type: {exercise.type}</p></h4>
          <h4><p>Muscle: {exercise.muscle}</p></h4>
          <h4><p>Equipment: {exercise.equipment}</p></h4>
          <h4><p>Difficulty: {exercise.difficulty}</p></h4>
          <h5><p>Instructions: {exercise.instructions}</p></h5>
        </div>
      ))}
    </div>
  );
}
