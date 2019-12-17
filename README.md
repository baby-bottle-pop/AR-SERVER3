# AR World Backend

AR World Backend is where users are able to create new reviews and post them onto our Postgres database so other users can see the new reviews.

## Getting Started

<h3>Basic setup</h3>
Fork the project then clone it:

```
git clone https://github.com/yourgithubname/AR-SERVER3.git
```

Install modules:

```
npm install
```

Create database in terminal:

```
createdb ar-server
```

Start Express Server

```
npm start
```

Visit the website at:

```
https://localhost:8080
```

<h3>Seeding</h3>
You can seed the file by running <code>npm run seed</code>

## Deployment

This app is deployed on heroku at the following link: https://ar-server-v2.herokuapp.com/

## Built With

* [Express](https://www.npmjs.com/package/express) - Used to build our backend server
* [PostgreSQL](https://www.postgresql.org/) - Used to build our database
* [Axios](https://www.npmjs.com/package/axios) - Used to make convienent AJAX requests to our server
