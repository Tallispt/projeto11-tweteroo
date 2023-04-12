# Tweteroo API OOP-TS

Description

## Branches Versions

- ### [Tweetero API](https://github.com/Tallispt/tweteroo/tree/main)

The main branch. A simple version of tweteroo rest-api.

- ### [Tweteroo API OOP-JS](https://github.com/Tallispt/tweteroo/tree/oop-js)

Descrition

#### Other versions:
- ### [Tweteroo API in Java](https://github.com/Tallispt/tweetero-api-java)

Descrition

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
