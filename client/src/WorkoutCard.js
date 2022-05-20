import React from 'react';
import './Workout.css';

function WorkoutCard({workout}) {
  const {name, difficulty} = workout
    return (
        <div className="workoutcards">
          <div className="workoutcard">
            <p>name: {name}</p>
            <p>difficulty: {difficulty}</p>
            </div>
        </div>
    )
}

export default WorkoutCard;