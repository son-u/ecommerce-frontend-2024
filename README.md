# E-commerce Website Using MERN Stack

The project is an E-commerce Web Application built using the MERN (MongoDB, Express.js, React, Node.js) stack. It provides a platform for users to view and purchase various products. The server-side (Node.js with Express) manages the API for product data stored in a MongoDB database. The client-side (React) handles the user interface and interacts with the server to fetch and display product information.

![shadow](https://github.com/son-u/ecommerce-frontend-2024/assets/85066238/090b59b8-3ebf-468e-b5d6-a782d2bac6c0)

## Features

### User Features
- **User Authentication**: Register and log in securely.
- **Product Browsing**: View a list of all available products with detailed information.
- **Search and Filter**: Search for products by name and filter them by categories.
- **Add to Cart**: Add products to a shopping cart.
- **Cart Management**: View, update, or remove items from the cart.
- **Checkout and Payment**: Proceed to checkout and make payments securely.
- **Order History**: View the history of all past orders.
- **Profile Management**: Update personal information and password.

### Admin Features
- **Admin Authentication**: Secure login for admins.
- **Product Management**: Add, update, or delete products from the inventory.
- **Order Management**: View, update, or delete user orders.
- **User Management**: View and manage all registered users.
- **Dashboard**: View overall statistics about sales, users, and products.

## Technologies Used

- **MongoDB**: NoSQL database used for storing user data, product information, orders, and more.
- **Express.js**: Web application framework for Node.js, used for building the backend APIs.
- **React.js**: JavaScript library for building user interfaces, used for developing the frontend.
- **Node.js**: JavaScript runtime environment used for executing JavaScript code on the server-side.
- **Firebase**: Platform used for user authentication, providing easy-to-use and secure authentication methods.
- **CSS & SCSS**: Styling language used for designing and enhancing the visual presentation of the web pages.
- **Redux**: State management library for managing application state in React.
- **Stripe**: Payment gateway used for processing secure online payments.


## Run Locally

1.  Clone the project

`For Frontend`
```bash 
  git clone https://github.com/son-u/ecommerce-frontend-2024.git
```
`For Backend`
```bash
  git clone https://github.com/son-u/ecommerce-server-2024.git
```

2. Navigate to the project directory

```bash
   cd your-directory-name
```
3. Install dependencies for the backend

```bash
   cd ecommerce-server
   npm i && npm run dev
   npm run watch
```
4. Install dependencies for the frontend

```bash
   cd ecommerce-frontend
   npm i && npm run dev
```
5. Set up essential `.env` variables

###  Env Variables for FRONTEND
`Make sure to add this .env file in your frontend root directory before running this project`

- VITE_FIREBASE_KEY= `from firebase`
- VITE_AUTH_DOMAIN= `from firebase`
- VITE_PROJECT_ID= `from firebase`
- VITE_STORAGE_BUCKET= `from firebase`
- VITE_MESSAGING_SENDER_ID= `from firebase`
- VITE_APP_ID= `from firebase`
- VITE_SERVER= `Your Backend Server URl`
- VITE_STRIPE_KEY= `Stripe Publishable Key`

###  Env Variables for BACKEND
`Make sure to add this .env file in your backend root directory before running this project`

- PORT=4000
- MONGO_URI=mongodb://localhost:27017 or `connection string from mongoDB atlas`
- STRIPE_KEY=your_stripe_secret_key `from stripe`
- PRODUCT_PER_PAGE=8

6. Access the project in your browser at the specified local server address.

## Deployement

This project is currently deployed. Frontend is deployed on Vercel and backend of the project is deployed on render. If you want to access the deployed version of the project then you can navigate to the following links.

`Frontend`

```bash
   https://ecommerce-frontend-2024-rouge.vercel.app
```

`Backend`

```bash
   https://ecommerce-server-2024-89dy.onrender.com
```


 If you find this repo helpful then don't forget to give a `start ❇️ `to this repository. :)

 
### Contact me on telegram for any issues :
`https://t.me/iamserious77`

### My LinkedIn handel
`www.linkedin.com/in/sonu-sharma007`

