const express = require('express');
const cors = require('cors');


const app = express();

app.use(express.json());
app.use(cors());

// We will create first endpoint and method to handle sending a friends array back to the client (front end)

app.get("/api/users", (req, res) => {
    let friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"];
    res.status(200).send(friends);
  });

// Let’s add another endpoint 

  app.get("/weather/:temperature", (req, res) => {
    const phrase = `<h3>It was ${req.params.temperature} today</h3>`;
    res.status(200).send(phrase);
  });

  // With object destructuring
  
  app.get("/weather/:temperature", (req, res) => {
    const { temperature } = req.params;
    const phrase = `<h3>It was ${temperature} today</h3>`;
    res.status(200).send(phrase);
  });

app.listen(4000, () => console.log("server runnig on port 4000"));

