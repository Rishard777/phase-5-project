import WorkoutCard from './WorkoutCard';
import React, {useState, useEffect} from "react";
import './Workout.css';
import './Home.css'
import video from './video/gymVid.mp4'
import picture from './photos/torso.JPG'

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
          <div className="about_with_pic">
          <div className="about_paragraph">
            <h1 className="aboutUs">About Us</h1>
            <p className="about_description">RTZ Athletics is here to make going to the gym easier for you. We understand how difficult it can be to stay consistent with anything you do in life without a plan so we created a planner to help you with that.</p>
          </div>

          <div>
          <img className="home_pic"
          src={picture}
          />
          </div>
          
          </div>

        </div>
    )
}

export default Home;