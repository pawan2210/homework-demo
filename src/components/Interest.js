import React from 'react'
import Jason from './Jason.jpg';

const Interest = () => {
  return (
    <div>
      <p>My interests are:-</p>
      <ul>
        <li>Big Fan of Football and Cristiano Ronaldo</li>
        <li>Like playing Cricket</li>
        <li>Watching thriller and robbery movies</li>
        <li>My favorite movie is Jason Bourne and below is the poster of that</li>
        <img src ={Jason} alt = "not available"/>
        
      </ul>

    </div>
  )
}

export default Interest;
