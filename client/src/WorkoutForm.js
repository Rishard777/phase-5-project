import { useEffect, useState } from "react";
import "./WorkoutPlan.css";

function WorkoutForm({userId, onAddWorkout} ) {
    const [workouts, setWorkouts] = useState([]);
    const [workoutId, setWorkoutId] = useState("");
    const [date, setDate] = useState("");
    const [formErrors, setFormErrors] = useState([]);

    useEffect(() => {
        fetch("/workouts")
          .then((r) => r.json())
          .then(setWorkouts);
      }, []);

      function handleSubmit(e) {
        e.preventDefault();
        const formData = {
          workout_id: workoutId,
          user_id: userId,
          date: date
        };

        fetch("/workout_plans", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }).then((r) => {
          if (r.ok) {
            r.json().then((newWorkout) => {
              onAddWorkout(newWorkout);
              setFormErrors([]);
            });
          } else {
            r.json().then((err) => setFormErrors(err.errors));
          }
        });
      }
      
    return (
        <form onSubmit={handleSubmit} className="addWorkout">
            <label className="workoutForm">Workout:</label>
            <select
            id="workout_id"
            name="workout_id"
            value={workoutId}
            onChange={(e) => setWorkoutId(e.target.value)}
            >
                <option>Select a workout</option>
                {workouts.map((workout) => (
                    <option key={workout.id} value={workout.id}>
                          Name: {workout.name}
                    </option>
                ))}
                  </select>
                  <p className="workoutForm"></p>
                  <label>Date:</label>
                  <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  />
                {formErrors ? <div>{formErrors}</div> : null}
                <p className="workoutForm"></p>
      <button type="submit">Add To Workout Plan</button>
                
          
        </form>
    )
}

export default WorkoutForm;