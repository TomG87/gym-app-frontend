export function ExercisesIndex(props) {
  return (
    <div>
      <h1>Exercises</h1>
      {props.exercises.map((exercise) => (
        <div key={exercise.id}>
          <p>Exercise: {exercise.name}</p>
          <p>Description: {exercise.description}</p>
          <img src={exercise.image_url} />
          <video src={exercise.video_url} />
          </div>
          ))}
    </div>
  );
}