<h1 align="center">Open Space 🚀 📝 </h1>

<div align="center">
  A full stack <code>React.js</code> and <code>Ruby on Rails</code> web app aimed to provide a safe space for sharing kind words to folks who need them.
</div>

<div align="center">
  <sub>Built with ❤️ and ✨ by
  <a href="https://github.com/janetmndz">Janet Mendez</a>
  </sub>
</div>

<br />

## See it Live: [https://open-space-fe.herokuapp.com/](https://open-space-fe.herokuapp.com/)

## Features
This web app aims to provide users a safe and open space where they can make posts on things that are bothering them. Users can only see posts with topics that they are subscribed to ensure that users have full control of what they want to see. Users can send notes to other user's posts as encouragement. These notes are private and can only be seen by the recipient as well as validated with IBM Watson Tone Analyzer to ensure they are kind words. 

## Tech Stack
This web app makes use of the following:

**Backend**
- Ruby [2.6.1]
- Rails [~> 5.2.3] - MVC web framework used as an API
- PostgreSQL [>= 0.18, < 2.0] - Database
- bcrypt [~> 3.1.7] - Gem for encryption and securing user passwords
- Figaro - Rails gem for securing API Keys
- Active Model Serializers - Serializing API routes to JSON
- JWT - securing tokens
- IBM Watson - Ruby SDK for IBM Watson
- Heroku - App deployment 

**Front End**
- React.js
- React Router - Declarative Routing
- SCSS - CSS pre-processor

## Prerequisites
Before you begin, ensure you have installed the latest version of:

- [**Ruby**](https://www.ruby-lang.org/en/)
- [**Rails**](https://rubyonrails.org/)
- [**PostgreSQL**](https://www.postgresql.org/)
- [**Node.js and npm**](https://nodejs.org/en/)

This web app uses the following API keys from:
- [**IBM Watson - Tone Analyzer**](https://www.ibm.com/watson)

## Installing
*For information on Backend Installation please click here: [Open Space Backend](https://github.com/janetmndz/open-space-backend)*

**Frontend Installation:**

- Clone this repo to your local machine `git clone <this-repo-url>`
- `cd` to frontend directory
- Ensure your Backend API is running at `http://localhost:3000/`
- run `npm install` to install all dependencies
- run `npm start` to start server
- When prompted, ensure Frontend is running at `http://localhost:3001`