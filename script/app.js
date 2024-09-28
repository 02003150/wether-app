function api(){

    let userInput=document.getElementById(`textInput`).value;
    
    let c=document.getElementById("c");
    let city=document.getElementById("city");
    let region=document.getElementById("region");
    let country=document.getElementById("country");
    let SearchTime=document.getElementById("time")

    fetch(`http://api.weatherapi.com/v1/current.json?key=d3093041333f485296f111508242609&q=${userInput}`)
    .then(res=>res.json())
    .then(data=>{
            
        
        c.innerHTML=data.current.temp_c
        city.innerHTML=data.location.name
        region.innerHTML=data.location.region
        country.innerHTML=data.location.country
        SearchTime.innerHTML=data.location.localtime

 } )

 .catch(err=>{
    console.error("Error fetching weather data:",err);
 });
  }
