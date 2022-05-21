import React from 'react';
import './Workout.css';
import { Link } from "react-router-dom";

function WorkoutCard({workout}) {
  const {name, difficulty} = workout
    return (
        <div className="workoutcards">
          <div className="workoutcard">
            <p>name: {name}</p>
            <p>difficulty: {difficulty}</p>
            <Link to={`/workouts/${workout.id}`}>View Exercises</Link>
            </div>
        </div>
    )
}

export default WorkoutCard;