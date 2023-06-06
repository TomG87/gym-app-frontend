import YouTube from 'react-youtube';

export function ExercisesShow (props) {
  return (
   <div>
     <h1>Exercise Details</h1>
      <h2>{props.exercise.name}</h2>
      <h3>{props.exercise.description}</h3>
      <br />
      <h4>Below is a video demonstration of the exercise:</h4>
      <br />
      <YouTube videoId={props.exercise.video_url} />
  </div>
  );
}