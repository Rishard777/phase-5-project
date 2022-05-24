import WorkoutCard from './WorkoutCard';
import React, {useState, useEffect} from "react";
import './Workout.css';

function Home({setFavorites}) {
    const [workouts, setWorkouts] = useState([])

    useEffect(() => {
        fetch("/workouts")
        .then(res => res.json())
        .then(setWorkouts)
      },[])

      const renderWorkouts = workouts.map((workout) => {
        return <WorkoutCard key={workout.id} workout={workout} workouts={workouts} setWorkouts={setWorkouts} setFavorites={setFavorites} />;
      });
      
    return (
    
        <div className="home">
          <h1>About Us</h1>
          <p></p>
            <h1>Workouts</h1>
          {renderWorkouts}
          </div>
    )
}

export default Home;