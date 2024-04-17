import express from 'express';
import axios from 'axios';

const app = express();
const port = 3000;

const otherServices = process.env.OTHER_SVCS.split(',');

const getRandomService = () => {
  const randomIndex = Math.floor(Math.random() * otherServices.length);
  return otherServices[randomIndex];
};

const curlRandomService = () => {
  const randomService = getRandomService();
  axios.get(`http://${randomService}`)
    .then(response => {
      console.log(`Curling service ${randomService}: ${response.data}`);
    })
    .catch(error => {
      console.error(`Error curling service ${randomService}: ${error.message}`);
    });
};

// Curl a random service initially
curlRandomService();

// Curl a random service every 5-20 seconds
setInterval(curlRandomService, Math.floor(Math.random() * (20000 - 5000)) + 5000);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
