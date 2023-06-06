import axios from "axios"
import { useState, useEffect } from "react"; 
import { ExercisesIndex } from "./ExercisesIndex";
import { ExercisesShow } from "./ExercisesShow";
import { Routes, Route } from "react-router-dom";
import { Modal } from "./Modal";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { RoutinesIndex } from "./RoutinesIndex";

export function Content() {
  const [exercises, setExercises] = useState([]);
  const [isExercisesShowVisible, setIsExercisesShowVisible] = useState(false);
  const [currentExercise, setCurrentExercise] = useState({});
  const [routines, setRoutines] = useState([]);

  const handleIndexRoutines = () => {
    console.log("handleIndexRoutines");
    axios.get('http://localhost:3000/routines.json').then((response) => {
      console.log(response.data);
      setRoutines(response.data);
    });
  };

  useEffect(handleIndexRoutines, []);
  
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
        <Route path="/" element={<ExercisesIndex exercises={exercises} onShowExercise={handleShowExercise} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<LogoutLink />} />
        <Route path="/routines" element={<RoutinesIndex routines={routines} />} />
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