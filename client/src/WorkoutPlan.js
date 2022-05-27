import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";
import WorkoutForm from "./WorkoutForm";
import "./WorkoutPlan.css";
import { Link } from "react-router-dom";

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
           
            workout_plans: [...user.workout_plans, newWorkout],
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
            <div className="name_date">
              {user.workouts.map((workout) => (
                <div key={workout.id} className="workout_name">
                   <Link to={`/workouts/${workout.id}`}>name: {workout.name}</Link>
                  
                </div>
              ))}
            </div>

            <div className="name_date">
              {user.workout_plans.map((workout_plan) => (
                <div key={workout_plan.id} className="workoutDetails">
                  date: {workout_plan.date}
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