import WorkoutCard from './WorkoutCard';
import React, {useState, useEffect} from "react";
import './Workout.css';
import './Home.css'
import video from './video/gymVid.mp4'

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

          

          <div className="mainVideo">
            <div className="overlay">
             <video
              type="video/mp4"
              src={video}
              loop
              muted
              autoPlay />
                <div className="content">
                  <h1> RTZ Athletics</h1>
                  <p> Fitness planner</p>
                </div>
             </div>
          </div>
          <h1 className="workouts">Workouts</h1>
          {renderWorkouts} 
          <div>
            <h1 className="aboutUs">About Us</h1>
          </div>

        </div>
    )
}

export default Home;