# API Server

[Website link](https://basic-api-server-tbyg.onrender.com/)

This is an API server built with Node.js and Sequelize, which provides endpoints to manage food and clothes data.

## Features

- Create, Read, Update, and Delete food items.
- Create, Read, Update, and Delete clothes items.


## Endpoints

### Food

- `GET /food`: Get all food items.
- `GET /food/:id`: Get a specific food item.
- `POST /food`: Create a new food item.
- `PUT /food/:id`: Update a specific food item.
- `DELETE /food/:id`: Delete a specific food item.

### Clothes

- `GET /clothes`: Get all clothes items.
- `GET /clothes/:id`: Get a specific clothes item.
- `POST /clothes`: Create a new clothes item.
- `PUT /clothes/:id`: Update a specific clothes item.
- `DELETE /clothes/:id`: Delete a specific clothes item.

## Examples

### Creating a Food Item

- **Endpoint**: `POST /food`
- **Request Body**:

```json
{
 "name": "Pizza",
 "description": "Delicious cheesy pizza",
 "price": 10.99
}
```

Response:

```json
{
  "id": 1,
  "name": "Pizza",
  "description": "Delicious cheesy pizza",
  "price": 10.99,
  "createdAt": "2023-06-18T12:34:56.789Z",
  "updatedAt": "2023-06-18T12:34:56.789Z"
}
```

### Creating a Clothes Item
- **Endpoint**: POST /api/clothes

- **Request** Body:
```json
{
  "name": "T-Shirt",
  "color": "Blue",
  "size": "L"
}

```

Response:

```json
{
  "id": 1,
  "name": "T-Shirt",
  "color": "Blue",
  "size": "L",
  "createdAt": "2023-06-18T12:34:56.789Z",
  "updatedAt": "2023-06-18T12:34:56.789Z"
}

```