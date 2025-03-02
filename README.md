# RandoStore - ProductBox Frontend Code Challenge

Welcome to RandoStore! This project is an online store where users can add items for sale, browse items, and manage their cart. Below are the instructions for setting up and running the backend and frontend servers, as well as connecting them.

---

## Project Overview
- **Backend**: A Node.js application server serving REST APIs for CRUD operations on items stored in memory.
- **Frontend**: A React-based web application for the user interface.

---

## Prerequisites
- **Node.js** (version 14 or above)
- **npm** (Node package manager)
- **Git** (for cloning the repository)

---

## Setting Up the Project
### Clone the Repository
```bash
git clone https://github.com/FazalSultan/productbox-task.git
cd productbox-task
```

---

## Backend Setup
### Install Dependencies
```bash
cd backend
npm install
```

### Start the Backend Server
```bash
npm start
```
This will start the backend server at `http://localhost:3000`.

### API Endpoints
1. **GET /items**: Retrieve all items.
2. **POST /items**: Add a new item.
3. **GET /items/:id**: Retrieve an item by ID.
4. **DELETE /items/:id**: Delete an item by ID.

---

## Frontend Setup
### Install Dependencies
```bash
cd ../frontend
npm install
```

### Start the Frontend Server
```bash
npm start
```
This will start the frontend server at `http://localhost:3001`.

---

## Connecting Frontend with Backend
### Update the API URL in the Frontend
In the frontend project, ensure that the API calls are pointing to the backend server:

1. Open the file where the API URLs are defined (e.g., `src/api.js` or similar).
2. Set the base URL to:
   ```javascript
   const BASE_URL = "http://localhost:3000/items";
   ```
3. Use this `BASE_URL` for all API requests.

---

## Project Features
### Homepage
- **Navigation**: Links to Add Item, Item Listing, and Checkout pages.
- **Cards**: Each card links to a specific page (e.g., Add Item, View Items, Checkout).

### Add Item
- Add a new item with a name, price, and image.

### Item Listing
- View all items available for sale.

### Checkout
- View all items added to the cart.

### Cart
- Displayed on all pages, showing the number of items in the cart. Clicking it redirects to the Checkout page.

---

## Deployment Notes
To deploy the application, ensure both the backend and frontend are hosted and connected appropriately. Adjust the API base URL in the frontend to match the deployed backend's URL.

---

## License
This project is licensed under the MIT License. Feel free to use and modify it as needed.

---

## Troubleshooting
- **Backend not starting**: Ensure Node.js is installed and dependencies are installed correctly.
- **Frontend not connecting to backend**: Double-check the API base URL configuration.
- **CORS issues**: Ensure `cors` middleware is enabled in the backend.
  ```javascript
  const cors = require("cors");
  app.use(cors());
  ```

