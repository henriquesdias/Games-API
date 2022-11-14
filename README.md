
# Games-API

This project is a typescript proof of concept (POC). The idea is to practice typing functions and variables and get comfortable with the language. It's a game ecommerce API, where you can list all or just some games, delete, update the price and create a new data.

## API Documentation

#### Return all games

```http
  GET localhost:4000/game
```
Result is a array of objects with the following format:
    

| id   | title       | genre | price| description|
| :---------- | :--------- | :---- | :------| :---|
| `1` | `Hollow Knight` | `metroidvania` | `120`  | `the best metroidvania in history`

#### Insert a new game

```http
  post localhost:4000/game
```
The properties title, genre, price and description are required

#### Delete a game

```http
  delete localhost:4000/game/id
```

The id refers to a game key, from the database

#### Update game'price

```http
  put localhost:4000/game/id
```
The id refers to a game key, from the database

## Environment variables

To run this project, you will need to add the following environment variables to your .env

`DATABASE_URL`

With the value : 

`postgresql://${POSTGRES_USERNAME}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DATABASE}`




## How to run

- Clone this repository 
- Install dependencies

```bash
  npm i
```

- Start application with

```bash
  npm start
```
The application run on PORT 4000


## Technologies

**Back-end:** Node, Express, Typescript, Postgres

