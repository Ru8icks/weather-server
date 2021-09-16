const axios = require('axios').default;


function getWeather(req, res) {
  const city = req.params.city;
  console.log("weather herer")
  
  axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=07220237e68a0ec06e3eef6a6997d0ff`)
  .then(response=>{
    console.log(response.data)
    res.status(200).json( response.data);
  })
  .catch(err => {
    console.log(err)
  })
  
  
   // .get(`api.openweathermap.org/data/2.5/weather?q=${city}&appid=07220237e68a0ec06e3eef6a6997d0ff`)
}

module.exports = {
  getWeather,
 
};
