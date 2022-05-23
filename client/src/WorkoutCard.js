import React, {useState} from 'react';
import './Workout.css';
import { Link } from "react-router-dom";

function WorkoutCard({workout, setFavorites}) {
  const [favorited, setFavorited] = useState(false);
  const {name, difficulty} = workout

  function handleAddToFavorites() {
    if (favorited) {
      setFavorites((prevState) => prevState.filter((favoritedWorkout) => favoritedWorkout !== workout));
      setFavorited(false);
    } else {
      setFavorites((prevState) => [...prevState, workout]);
      setFavorited(true);
    }
  }
    return (
        <div className="workoutcards">
          <div className="workoutcard">
            <p>name: {name}</p>
            <p>difficulty: {difficulty}</p>
            <Link to={`/workouts/${workout.id}`}>View Exercises</Link>
            <p></p>
            <button 
              className={favorited ? "favorited" : "not_favorited"}
              onClick={handleAddToFavorites}>
                {favorited ? "★" : "☆"}
            </button>
          </div>
        </div>
    )
}

export default WorkoutCard;