import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";


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

      function handleAddWorkoutPlan(newWorkoutPlan) {
        setUser({
          error,
          status,
          data: {
            ...user,
            workout_plans: [...user.workout_plans, newWorkoutPlan],
          },
        });
      }

      if (status === "pending") return <h2>Loading...</h2>;
      if (status === "rejected") return <h2>Error: {error}</h2>;

    return (
        <div>
            <h2>{user.username}'s Workout Plan</h2>
            <ul>
        {user.workout_plans.map((workout_plan) => (
          <li key={workout_plan.id}>
            {workout_plan.date} {workout_plan.workout}
          </li>
        ))}
      </ul>
        </div>
    )
}

export default WorkoutPlan;