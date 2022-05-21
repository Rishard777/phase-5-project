import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
                 <h1>{workout.name}</h1>
               <p>Difficulty: {workout.difficulty}</p>
            </div>
            <div ClassName="card">
                <h2>Exercises</h2>
                {workout.exercises.map((exercise) => (
                    <div key={exercise.id}>
                        <h3>{exercise.name} | Category: {exercise.category}</h3>
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