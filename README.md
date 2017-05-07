# FrontEnd developer Test
# Ready project by Volodymyr Dudas

## Required Technologies
 - [AngularJS](https://angularjs.org/)
 - [Twitter Bootstrap](http://getbootstrap.com/)
 - [Karma](https://karma-runner.github.io/)
 - [Jasmine](https://jasmine.github.io/)
 - [Protractor](http://www.protractortest.org)

## Description

You are required to create a music library web application, which is a Single Page Application. 

Your task is creating a simple music library that create, retrieve, edit and delete music albums. There are some albums already registered in the database of your services. You are not required to make a fancy page but your music library project must be shown in a reasonable way in terms of User Experience.

The design isn't going to be evaluated but the User Experience is, so do your best and try to do the best UI you can.

**How to start?**

Fork the project [Angular JS Exam project](https://github.com/thiagoh/angular-js-exam-project). This project must be the basis of yours

## Requirements

- Your project must be a for of [Angular JS Exam project](https://github.com/thiagoh/angular-js-exam-project)
- You will notice that none of the albums has a logo set. Your CRUD must allow the user to set a logo URL for each album, and this logo should be visible along with the album information (on the screen). Our services are ready to receive a parameter `logoUrl` so all you have to do is using the current REST services to update the albums.
- The page must be responsive
- You cannot create or edit the existing REST Services
- You must create tests with Jasmine + Karma
- Your code must be pushed to a repository in your Github account and the url must be provided to us so we can clone and test your project
- A basic `Gruntfile.js` is already provided and we are going to test your project by running `grunt start`. You can (and have to) edit this file but be careful to not break it and avoid us to test your project with that command.
- Configure your `Gruntfile.js` so we can run the tests of your project by running `grunt test`

## How to run

```
sudo npm install
sudo bower install --allow-root
grunt start

go to [http://localhost:8000](http://localhost:8000)
```

## Got an error with busy port?

```
sudo lsof -i -P or lsor -i :8000
sudo kill -9 PID

run again
```

## REST Services

There are a few services that you're supposed to use in order to create your application.

### Add a new album

- Url: `/albums/add`
- HTTP Method: `POST`
- Request data type: `application/json`
- Params: 
```json
{
  "title": "Empire Burlesque",
  "artist": "Bob Dylan",
  "country": "USA",
  "company": "Columbia",
  "price": 10.9,
  "year": 1985,
}
```

### Update an existing album

- Url: `/albums/update/:id`
- HTTP Method: `POST`
- Request data type: `application/json`
- Params: 
```json
{
  "title": "Empire Burlesque",
  "artist": "Bob Dylan",
  "country": "USA",
  "company": "Columbia",
  "price": 10.9,
  "year": 1985,
}
```

### Delete an existing album

- Url: `/albums/delete/:id`
- HTTP Method: `DELETE`

### Count how many albums are registered

- Url: `/albums/count`
- HTTP Method: `GET`

### Returns all albums

- Url: `/albums/all`
- HTTP Method: `GET`

### Result

<img width="1440" alt="screen shot 2017-05-07 at 4 11 03 pm" src="https://cloud.githubusercontent.com/assets/11577478/25781243/db36458e-333f-11e7-8491-ebd73d1ae179.png">
<img width="1440" alt="screen shot 2017-05-07 at 4 11 18 pm" src="https://cloud.githubusercontent.com/assets/11577478/25781244/db363e86-333f-11e7-9a3d-857e909e5a0b.png">

