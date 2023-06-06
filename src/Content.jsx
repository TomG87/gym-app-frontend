import axios from "axios"
import { useState, useEffect } from "react"; 
import { ExercisesIndex } from "./ExercisesIndex";
import { ExercisesShow } from "./ExercisesShow";
import { Routes, Route } from "react-router-dom";
import { Modal } from "./Modal";

export function Content() {
  const [exercises, setExercises] = useState([]);
  const [isExercisesShowVisible, setIsExercisesShowVisible] = useState(false);
  const [currentExercise, setCurrentExercise] = useState({});
  
  const handleIndexExercises = () => {
    console.log("handleIndexExercises");
    axios.get('http://localhost:3000/exercises.json').then((response) => {
      console.log(response.data);
      setExercises(response.data);
    });
  };

  useEffect(handleIndexExercises, []);

  const handleShowExercise = (myExercise) => {
    console.log(myExercise);
    setIsExercisesShowVisible(true);
    setCurrentExercise(myExercise)
  }

  const handleClose = () => {
    console.log('close modal')
    setIsExercisesShowVisible(false);
  }

  return (
    <div className="container">

      <Routes>
        <Route path="/" element={<ExercisesIndex exercises={exercises} onShowExercise={handleShowExercise}/>} />

      </Routes>
      <br />
      <br />
      <br />
      
      <Modal show={isExercisesShowVisible} onClose={handleClose}>
        <ExercisesShow exercise={currentExercise} />
      </Modal>
     
    </div>

  );
}