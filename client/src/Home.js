import WorkoutCard from './WorkoutCard';
import React, {useState, useEffect} from "react";

function Home() {
    const [workouts, setWorkouts] = useState([])

    useEffect(() => {
        fetch("/workouts")
        .then(res => res.json())
        .then(setWorkouts)
      },[])

      const renderWorkouts = workouts.map((workout) => {
        return <WorkoutCard key={workout.id} workout={workout} />;
      });
      
    return (
    
        <div>
            <h1>Workouts</h1>
          {renderWorkouts}
          </div>
    )
}

export default Home;