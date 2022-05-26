import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";
import WorkoutForm from "./WorkoutForm";
import "./WorkoutPlan.css";

function WorkoutPlan() {
    
    const [{ data: user, error, status }, setUser] = useState({
        data: null,
        error: null,
        status: "pending",
      });
      const { id } = useParams();
    
      useEffect(() => {
        fetch(`/users/${id}`).then((r) => {
          if (r.ok) {
            r.json().then((user) =>
              setUser({ data: user, error: null, status: "resolved" })
            );
          } else {
            r.json().then((err) =>
              setUser({ data: null, error: err.error, status: "rejected" })
            );
          }
        });
      }, [id]);

      function handleAddWorkout(newWorkout) {
        setUser({
          error,
          status,
          data: {
            ...user,
            workouts: [...user.workouts, newWorkout],
          },
          error: null,
          status: "resolved",
        });
      }

     
      if (status === "pending") return <h2>Loading...</h2>;
      if (status === "rejected") return <h2>Error: {error}</h2>;

    return (
        <div>
            <h1 className="workoutPlan">{user.username}'s Workout Plan</h1>
            <div>
        {user.workouts.map((workout) => (
          <div key={workout.id} className="workoutDetails">
            name: {workout.name} difficulty: {workout.difficulty}

          </div>
        ))}
      
      </div>
      <div className="Card">
          <h1 className="workoutPlan">Schedule Workouts</h1>
          <WorkoutForm userId={user.id} onAddWorkout={handleAddWorkout} />
      </div>
        </div>
    )
}

export default WorkoutPlan;