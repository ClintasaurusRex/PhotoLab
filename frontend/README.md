react-photolabs

The PhotoLabs project for the Web Development React course programming.
Photolabs
Setup

Install dependencies with npm install in each respective /frontend and /backend.
[Frontend] Running Webpack Development Server

cd frontend
npm start

[Backend] Running Backend Servier

Read backend/readme for further setup details.

cd backend
npm start

# Requirements
Goal

You have one goal:

    Build a client-side application using the React view-layer library.

Functional Requirements

Let’s go over what is technically required to make this a valuable application for our users:

    The client-side consists of the development of a React single page application (SPA) called PhotoLabs
    The server and persistence layer given as follows:
        The data layer consists of PostgreSQL database
        The API server consists of a Node Express.js server application
        The server/persistence layer may require modifications for stretch goals
    The client will communicate with the API over HTTP using the JSON format

Behavioural Requirements

    A user can view photos from the homepage loaded from the API.
    The user can navigate to different photo categories, also called topics.
    The user can click on a photo to view a larger version of the photo and relevant / similar photos.
    The user can like a photo from anywhere within the application where the photo is displayed.
    The user can view a heart icon with a notification in the navigation if there are liked photos.
    The navigation will consist of different topics and heart icon.
    The client-side application will make API requests to load data.

