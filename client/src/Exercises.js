import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./WorkoutPlan.css";

function Home() {
    const [{ data: workout, error, status }, setWorkout] = useState({
        data: null,
        error: null,
        status: "pending",
      });
      const { id } = useParams();
    
      useEffect(() => {
        fetch(`/workouts/${id}`).then((r) => {
          if (r.ok) {
            r.json().then((workout) =>
              setWorkout({ data: workout, error: null, status: "resolved" })
            );
          } else {
            r.json().then((err) =>
              setWorkout({ data: null, error: err.error, status: "rejected" })
            );
          }
        });
      }, [id]);

      if (status === "pending") return <h1>Loading...</h1>;
      if (status === "rejected") return <h1>Error: {error.error}</h1>;

    return (
     
        <section className="container">
            <div className="card">
                 <h1 className="workout_heading">Workout: {workout.name}</h1>
            </div>
            <div ClassName="card">
                <h1 className="workout_exercises">Exercises</h1>
                {workout.exercises.map((exercise) => (
                    <div className="exercise_form" key={exercise.id}>
                        <h2 className="exercise_name">Name: {exercise.name} | Category: {exercise.category} | Difficulty: {exercise.difficulty}</h2>
                        <p>
                            <em>Instructions: {exercise.instructions}</em>
                        </p>
                    </div>
                ))}
            </div>

        </section>
    );
}

export default Home;