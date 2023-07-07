# Athletes Project

## [See the App!](https://rennect.cyclic.app/)

## Description

- "Runnect" is a combination of the words "run" and "connect." It suggests the idea of connecting or networking with other runners or running enthusiasts through the platform. It conveys the concept of bringing together individuals who share a passion for running, creating a sense of community and connection within the running world.

**NOTE -** My project is a marathon event finder that allows users to locate nearby races and explore profiles of participating athletes.

## User Stories

**NOTE -** This is the list of action that you can do in the app. Example:

- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault
- **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault
- **homepage** - As a user, i am able to access the homepage so that you can see what the app is about and login and signup.
- **sign up** - As a user, i can sign up on the webpage so that you can see all the events that you could attend.
- **login** - As a user, i can able to log in on the webpage so that I can get back to my account.
- **logout** - As a user, you are able to log out from the webpage so that I can make sure no one will access my account.
- **events list** - As a user, i can see all the events available so that I can choose which ones I want to attend.

## Backlog Functionalities

- User registration and login system to personalize the experience.
- Integration with maps and geolocation to provide accurate race locations.
- Filtering and sorting options for users to search for specific marathon events based on distance, date, or other criteria.
- Detailed event information, including race distances, entry fees, and registration deadlines.
- Ability for users to save and bookmark favorite events for future reference.
- Social sharing functionality to allow users to share event details with friends or on social media platforms.
- Notification system to alert users about upcoming marathons or changes in event status.
- Integration with athlete profiles, allowing users to view past race results and performance statistics.

**NOTE -** List here all functionalities you wish to add to your proyect later.

## Technologies used

**NOTE -** List here all technologies used in the project like HTML, CSS, Javascript, Node, Express, Handlebars, MongoDB, Sessions & Cookies, etc.

## (Optional) Routes

**NOTE -** List here all the routes of your server. Example:

- GET /
  - renders the homepage
- GET /auth/signup
  - redirects to / if user logged in
  - renders the signup form
- POST /auth/signup
  - redirects to / if user logged in
  - body:
    - username
    - email
    - password
- GET /auth/login
  - redirects to / if user logged in
  - renders the login form
- POST /auth/login

  - redirects to / if user logged in
  - body:
    - username
    - email
    - password

- GET /events
  - renders the event list + go to the details of Marathon

## Models

**NOTE -** List here all the models & Schemas of your Database Structure. Example:

## User model

username: String
email: String
password: String

---

## Athlete model

name: String,
nationality: String
achievement: String
dateofbirth: Date
gender: String
imageUrl: String
userId:Schema.Types.ObjectId

---

## Developer

[Hesam Dehghan](https://github.com/hesamde)

### Project

[Repository Link](https://github.com/hesamde/Athletes)

[Deploy Link](https://runnect.cyclic.app)

### Trello

[Link to your Asana board](https://app.asana.com/0/1204865945945602/1204896092311017)

### Slides

[Slides Link](https://docs.google.com/presentation/d/1Is6A3sVtr-_oliP3Rri5zOH0hyOlTNnCtoWvHWR9HFo/edit#slide=id.g25810688e14_0_3)
