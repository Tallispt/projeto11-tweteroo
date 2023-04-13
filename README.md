# Tweteroo API OOP-TS

This is a REST API project inspired by the backend of Twitter and was created as a proof of concept (POC). A version using layered architecture and objects oriented programming in *TypeScript*.  

The project is implemented using JavaScript and utilizes the following technologies: dotenv for managing environment variables, Express for creating the web server and handling API endpoints, CORS for enabling cross-origin resource sharing, and Node.js as the runtime environment.

Here you can find the respective repository for the front end application [Tweteroo](https://github.com/Tallispt/tweteroo-front).

## Branches Versions

- ### [Tweetero API](https://github.com/Tallispt/tweteroo-api/tree/main)

The main branch. A *simple* version of tweteroo rest-api.

- ### [Tweteroo API OOP-JS](https://github.com/Tallispt/tweteroo-api/tree/oop-js)

 version using layered architecture and *objects oriented programming*.

#### Other versions:
- ### [Tweteroo API in Java](https://github.com/Tallispt/tweetero-api-java)

A version using objects oriented programming in *Java* and *Spring-boot* framework.

## Technologies Used

- [NodeJS](https://nodejs.org/pt-br/docs)
- [Express](https://expressjs.com/)
- [Docker](https://docs.docker.com/)

## Usage

1. Fork or clone repository

2. Configure the **.env** file as the **.env.exemple**:
  > *PORT*: port number (default is 5000)

- ### Via Docker

Create the application image  
```
docker build -t <image-name> .
```

Run image  
```
docker run -d -p 5000:5000 <image-name>
```

- ### Via npm

Install libraries  
```
npm i
```

To start the application, on development mode:  
```
npm run dev
```

Or if you want to run the application on production mode:  
```
npm run build
npm start
```

The api will be available at http://localhost:5000.

## Routers

- ### /sign-up

#### POST

```json
# Request body
{
  "username": "String",
  "avatar": "Image-URL"
}
```

- ### /tweets

#### POST

```json
# Request body
{
  "username": "String",
  "tweet": "String"
}
```

#### GET

```json
# Response body
[
  {
    "username": "String",
    "tweet": "String",
    "avatar": "Image-URL"
  }
]
```

*Request Params*

- **/:username**  
  - GET tweets by *username*  

*Query string*  
- **?page=***{number}*
  - GET tweets with *pagination*  
