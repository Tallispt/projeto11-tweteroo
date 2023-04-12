# Tweteroo API

Description

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
npm start
```

The api will be available at http://localhost:5000.

## Routers

