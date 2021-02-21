import { useState, useEffect } from "react";
import './App.css';
import Weather from "./Weather"

function App() {
  const [lat, setLat] = useState(0)
  const [lng, setLng] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setLat(position.coords.latitude)
        setLng(position.coords.longitude)
        setIsLoading(false)
      }, (error) => {
        alert(error)
        setIsLoading(false)
      })
    }
    else {
      alert("Your browser doesn't support geolocation")
    }
  })
  if(isLoading){
    return <p>Loading...</p>
  }else{
    return (
      <div>
        <h3>Your position is</h3>
        <p>
          Position: {lat.toFixed(3)}, {lng.toFixed(3)}
        </p>
        <Weather lat={lat} lng={lng}/>
      </div>
      
    );
  }
  
}

export default App;
