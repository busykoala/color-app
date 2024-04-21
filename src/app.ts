import express from 'express';
import axios from 'axios';

const app = express();
const port = 3000;

// Retrieve and log available services from environment variables
const otherServices = process.env.OTHER_SVCS?.split(',') || [];
console.log("Available services:", otherServices);

// Function to select a random service from the available list
const getRandomService = () => {
  if (otherServices.length === 0) return '';
  const randomIndex = Math.floor(Math.random() * otherServices.length);
  return otherServices[randomIndex];
};

// Function to make a request to a randomly selected service and schedule the next request
const curlRandomService = () => {
  const randomService = getRandomService();
  if (!randomService) {
    console.log('No other services available.');
    setTimeout(curlRandomService, Math.floor(Math.random() * (20000 - 5000)) + 5000);
    return;
  }
  axios.get(`http://${randomService}`)
    .then(response => {
      console.log(`Curling service ${randomService}: ${response.data}`);
      setTimeout(curlRandomService, Math.floor(Math.random() * (20000 - 5000)) + 5000);
    })
    .catch(error => {
      console.error(`Error curling service ${randomService}: ${error}`);
      setTimeout(curlRandomService, Math.floor(Math.random() * (20000 - 5000)) + 5000);
    });
};

// Initial delay before starting the first curl operation
setTimeout(curlRandomService, 5000);

// Start the express server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
