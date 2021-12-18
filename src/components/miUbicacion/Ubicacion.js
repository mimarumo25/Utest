import { useEffect, useState } from 'react';

const Ubicacion = () => {
  let url = '';

   const [ubicacion, setUbicacion] = useState('')

  useEffect(() => {
    getCoordenadas();
  },[])

  const getCoordenadas = () => {
     //watchPosition
     navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
      url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + latitude + ',' + longitude + '&key=AIzaSyDvS3_rBwM7RJYjDOnPzquTpJVlskDs7nI';
      getUbicacion(url);
    });
    
  }

  const getUbicacion = async(endpoint) => {
    const resp = await fetch(endpoint);
    const {results} = await resp.json();
    //console.log(results[3].formatted_address)
    setUbicacion(results[4].formatted_address)
  }
  let dp = ubicacion.split(", ") 
  return dp[1];
       
    
}

export default Ubicacion;
