#### NEXT JS FULL STACK E-commerce WEB APP #####

## NOTICES:
- When running NEXT js app, it might takes so long to fetch data due to incremental build,
if it takes more than 30 seconds just refresh page.

- While changing routes, it might takes so long due to Next js uses SSR, that's mean it builds
 the page content just when invoke it

- API documentation can be opened in just "localhost:3000"

- I used "Postegresql" for Database, it's hosted on Neon

## Getting Started

```bash

1/-
npm install

2/-
npm run dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## API DOCUMENTATION:
http://localhost:3000/api/docs


## FRONTEND:

Authentication:
---------------

- Signup / Login
- Verify User's Email Before Signing Up
- Store User's crypted data in cookies
- State management to change the status of user using: REDUX-TOOLKIT
- Using Loader Component to wait the API Request Response
- "Forgot Password" Feature to Change User's Password in Login Page

Products:
---------

- Create a Parent Component ("Products"), then Show The Data Using the child "Product" Component
- Show Product Data After Clicking on "More Details"
- Create an Algorithme to show products depending on the orders numbers
- Allow the "Signed" User to do the operation "Add To Cart"
- For Security: If the route ("productId") is not a number, the Algorithme will return the user back to Home Page,To avoid SQL injection

Cart:
-----

- For Security: The User must me "Signed" To see his cart, otherwise, The Algorithm will return the user back to Home Page
- Show The Cart Products
- Delete Cart Item
- Show Cart Length on the Header
- For SEO Using (REDUX): Inceament / Decreament In the Cart Will Update The Server, But it won't re-count again

Order:
------

- Payment Gateway
- Give the User the choice between paying online or paying hand by hand
- send invoice in User's email after finishing order
- give the user possibility to see all his orders including there dates (/orders)
- the User must me "Signed", unless, he will be redirected to home page


## BACKEND:

Authentication:
---------------

- High Livel of Security: (SQL injections,hashing,encryption...)
- Signup / Login
- Send a Verification Email to user using: NODEMAILER
- Encrypt User's Data to Store it in Cookie Using: CRYPTO-JS
- Trigger The Inputs Where You Add Special Caracters exept password: (SQL injection security) Using: VALIDATOR
- Send a Reset Password Link to User containing: Encapsulated User Data (Double Security Check) With JWT
- Update User's Password

Products:
---------

- Get Products Data From Database
- Get Product Data with his Id ("ProductId")


Cart:
-----

- CRUD operations on the "Cart"
- Each operation needs the Authorization Using "user cookie"(encrypted Data)
- Decryption of the cookie to get user's data needed in the operations


Order:
------

- Handle Payment Gateway
- Update User's Cart after finishing payment
- send an Invoice to user in his email using NodeMailer
- checking user's data before doing actions

## ADVANCED FEATURES:

- High Security Level (Double Front/back end Check, authorizations,SQL injection...)
- Email verification in authentification
- Reset Password opearion
- Send Notifications with Email (NodeMailer)
- State management (REDUX)
- Payment Gateway using (Stripe)
- Send invoices to users after finishing orders (in Email)
- Save clients Orders
- use encryption to save users' data safely in cookies


