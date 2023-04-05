# NoSQL Social Network API

This project is a RESTful API for a social network web application, built with Express.js, MongoDB, and Mongoose ODM. The API allows users to perform CRUD operations on users and thoughts, add and remove reactions to thoughts, and manage friends lists.

## Features

- User creation, updating, and deletion
- User friend list management (add/remove friends)
- Thought creation, updating, and deletion
- Reaction management (add/remove reactions to thoughts)
- Flexible schema for handling large amounts of unstructured data
- Pagination and data formatting

## Technologies

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- JavaScript Date object

## User Stories

AS A social media startup 
I WANT an API for my social network that uses a NoSQL database 
SO THAT my website can handle large amounts of unstructured data 

## Acceptance Criteria

GIVEN a social network API 
WHEN I enter the command to invoke the application 
THEN my server is started and the Mongoose models are synced to the MongoDB database 
WHEN I open API GET routes in Insomnia for users and thoughts 
THEN the data for each of these routes is displayed in a formatted JSON 
WHEN I test API POST, PUT, and DELETE routes in Insomnia 
THEN I am able to successfully create, update, and delete users and thoughts in my database 
WHEN I test API POST and DELETE routes in Insomnia 
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user's friend list 

## Installation

1. Clone the repository to your local machine.

2. Navigate to the project's root folder and run `npm install` to install the required dependencies.

3. Create a `.env` file in the root folder and add your MongoDB connection string as `MONGODB_URI`. For example:

MONGODB_URI=mongodb://localhost/social-network-api 

4. Run `node server.js` to start the application.

5. Use an API testing tool like [Insomnia](https://insomnia.rest/) or [Postman](https://www.postman.com/) to test the various API endpoints as per the provided routes.

## Contributing

If you'd like to contribute to this project, please create a fork of the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License.

## Github Repo
https://github.com/JosephReis646/No-SQL-Social-Network-API

## Walkthrough Demo Video

