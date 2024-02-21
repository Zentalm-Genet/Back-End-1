# Back End 1 Project

This project sets up a basic Express server with endpoints to handle requests for user data and weather information.

* Setup

    - Inside the server folder, create an index.js file.
    - Create a folder called server.
    - Use npm to install Express: npm install express.
    - Require Express at the top of your index.js file.
    - Set up Express to accept JSON object responses.
    - Set your Express server to listen to requests on port 4000.
    - Create a GET request for the endpoint /api/users.
    - Create another GET request to retrieve weather information.
    - Test your server using Nodemon.

# Usage

    Start the server by running nodemon index.js or node index.js in the terminal.
    Access the endpoints using HTTP requests.
        - To retrieve user data, make a GET request to /api/users.
        - To get weather information, make another appropriate GET request.

# File Structure
     * index.js
    * server/
        index.js: Main file where the Express server is set up.

# Dependencies

    Express: A web application framework for Node.js, used to build our server.

# Testing

You can test the functionality of the server using the provided HTML file or tools like Postman.
Notes

    Ensure that the necessary packages are installed using npm before running the server.
    Make sure the port 4000 is not occupied by another service.
