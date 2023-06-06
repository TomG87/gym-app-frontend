import YouTube from 'react-youtube';

export function ExercisesShow(props) {
  return (
    <div>
      <h1>Exercise Details</h1>
      <h2>{props.exercise.name}</h2>
      <h4>{props.exercise.description}</h4>
      <br />
      <h5>Below is a video demonstration of the exercise:</h5>
      <br />
      <YouTube videoId={props.exercise.video_url} />
      <form>
        <div>
        Exercise ID: {props.exercise.id}
        </div>
        <div>
          Repetitions: <input name="repetitions" type="text" />
        </div>
        <button type="submit">Create routine</button>
      </form>
    </div>
  );
}


