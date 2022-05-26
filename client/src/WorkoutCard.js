import React, {useState} from 'react';
import './Workout.css';
import { Link } from "react-router-dom";

function WorkoutCard({workout, setFavorites, workouts, setWorkouts}) {
  const [favorited, setFavorited] = useState(false);
  const {name, difficulty, image} = workout

  function handleAddToFavorites() {
    if (favorited) {
      setFavorites((prevState) => prevState.filter((favoritedWorkout) => favoritedWorkout !== workout));
      setFavorited(false);
    } else {
      setFavorites((prevState) => [...prevState, workout]);
      setFavorited(true);
    }
  }

  function handleDelete(id) {
    fetch(`/workouts/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setWorkouts((workouts) =>
          workouts.filter((workout) => workout.id !== id)
        );
      }
    });
  }
    return (
        <div className="workoutcards">
          <div className="workoutcard">
           <img
           className="img"
           src={image}
           alt="image"

           />
            <p>muscle group: {name}</p>

            <Link to={`/workouts/${workout.id}`}>View Exercises</Link>
            <p></p>
            <button 
              className={favorited ? "favorited" : "not_favorited"}
              onClick={handleAddToFavorites}>
                {favorited ? "★" : "☆"}
            </button>
            <p className="space"></p>
            <button className="delete" onClick={() => handleDelete(workout.id)}>Delete</button>
          </div>
        </div>
    )
}

export default WorkoutCard;