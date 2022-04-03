import React from 'react';
import './Home.css';

const Home = () => {
    return (
      <div className='food_container'>
          <div class="half-width">
              <h1>OH! YEA Burger</h1>
              <h1>I am the KING of BURGER</h1>
              <p>They actually get their name from Hamburg, Germany, home of a cut of beef called the Hamburg steak that eventually evolved into what we now consider hamburgers</p>
          </div>

          <div class="half-width">
              <img class="img-half" src="https://media.istockphoto.com/photos/homemade-cheese-smash-burger-picture-id618630648?k=20&m=618630648&s=612x612&w=0&h=g04p1-NSXvwS52y74cDgF483LkRpzyoOSwCaduo0mgA=" alt="" />
          </div>
      </div>
    );
};

export default Home;