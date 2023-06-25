# API Server

#### [Website link](https://basic-api-server-tbyg.onrender.com/)
#### [Pull request](https://github.com/saleh2001k/api-server/pull/4)
#### [Github actions](https://github.com/saleh2001k/api-server/actions)
#### [Partner Pull request](https://github.com/saleh2001k/api-server/pull/4)

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
- `GET /foodIngredient/:id`: Get a specific food with the Ingredinets for it .



### Clothes

- `GET /clothes`: Get all clothes items.
- `GET /clothes/:id`: Get a specific clothes item.
- `POST /clothes`: Create a new clothes item.
- `PUT /clothes/:id`: Update a specific clothes item.
- `DELETE /clothes/:id`: Delete a specific clothes item.

### Ingredinets

- `GET /Ingredinet`: Get all Ingredinets items.
- `GET /Ingredinet/:id`: Get a specific Ingredinet item.
- `POST /Ingredinet`: Create a new Ingredinet item.
- `PUT /Ingredinet/:id`: Update a specific Ingredinet item.
- `DELETE /Ingredinet/:id`: Delete a specific Ingredinet item.

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

- **Endpoint**: POST /clothes

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

### Ingredinets

```json
{
  "id": 1,
  "name": "tomato",
  "quantity": 4,
  "foodId": 41,
  "createdAt": "2023-06-21T14:52:39.015Z",
  "updatedAt": "2023-06-21T14:52:39.015Z"
}
```

### Food with Ingredients

```json
{
  "id": 41,
  "name": "borger kkk",
  "description": "Delicious cheesy pizza",
  "price": "44.99",
  "createdAt": "2023-06-20T20:39:43.099Z",
  "updatedAt": "2023-06-20T20:39:43.099Z",
  "Ingredients": [
    {
      "id": 1,
      "name": "tomato",
      "quantity": 4,
      "foodId": 41,
      "createdAt": "2023-06-21T14:52:39.015Z",
      "updatedAt": "2023-06-21T14:52:39.015Z"
    }
  ]
}
```
