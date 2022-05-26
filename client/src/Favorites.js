import React from 'react';
import WorkoutCard from './WorkoutCard'
import  './Favorites.css'

function Favorites( {favorites, setFavorites} ) {
    const renderFavorites = favorites.map((workout) => { return <WorkoutCard workout={workout} key={workout.id} setFavorites={setFavorites} />})

    return (
        <div>
            <h1 className="favoriteWorkouts"> Favorited Workouts</h1>
            <div>{renderFavorites}</div>
        </div>
    )
}

export default Favorites;