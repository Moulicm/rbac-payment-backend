# RBAC & Payment Workflow Backend

##  Project Overview

This project is a robust Node.js backend designed to demonstrate **Role-Based Access Control (RBAC)** and a structured **Payment Workflow**. It provides a secure environment where users are authenticated via JWT, and access to specific resources (like administrative payment overviews) is strictly enforced based on user roles (`USER` vs `ADMIN`).


## Tech Stack

* **Runtime:** Node.js (v20+)
* **Framework:** Express.js
* **Database ORM:** Prisma
* **Database:** PostgreSQL (or SQLite, as per `.env`)
* **Security:** JSON Web Tokens (JWT), Bcrypt (Password Hashing)
* **Environment Management:** Dotenv


##  Setup Instructions

1. **Clone the repository:**
```bash
git clone <your-repo-url>
cd rbac-project

```


2. **Install dependencies:**
```bash
npm install

```


3. **Sync Database Schema:**
Ensure your database is running, then execute:
```bash
npx prisma db push

```


4. **Start the Server:**
```bash
node src/server.js

```




##  Environment Configuration

Create a `.env` file in the root directory with the following variables:

```env
PORT=5000
DATABASE_URL="postgresql://user:password@localhost:5432/rbac_db"
JWT_SECRET="your_super_secret_key"
JWT_EXPIRES_IN="1d"

```


##  Database Schema

The system uses a relational schema managed via Prisma.

* **User Table:** Stores credentials, profile info, and the `Role` enum.
* **Payment Table:** Stores transaction details, amounts, and a relation to the `User` who initiated it.


##  RBAC Logic & Security

Access control is implemented via a modular middleware chain:

1. **Authentication (`auth.middleware.js`)**: Verifies the `Authorization: Bearer <token>` header and attaches the user payload to the request object.
2. **Authorization (`role.middleware.js`)**: Compares the user's role against the required roles for the specific endpoint.

| Role | Permissions |
| --- | --- |
| **USER** | Can register, login, create payments, and view their own history. |
| **ADMIN** | Full access, including viewing all payments across the system. |


##  Payment Workflow

1. **Initiation**: User sends a `POST /payments` request.
2. **Validation**: System verifies the user's token and account status.
3. **Creation**: A payment record is created with a `PENDING` status.
4. **Processing**: (Simulated) The service interacts with a gateway and updates the status to `COMPLETED` or `FAILED`.


##  API Documentation

### 1. Authentication

* **POST** `/auth/register`
* **Body:** `{ "email": "user@test.com", "password": "password123" }`
* **Response:** `201 Created`


* **POST** `/auth/login`
* **Body:** Same as register.
* **Response:** `200 OK` + `{ "token": "JWT_STRING" }`



### 2. Payments

* **GET** `/payments/my` (Protected - USER/ADMIN)
* **Returns:** List of payments owned by the authenticated user.


* **GET** `/payments` (Protected - ADMIN ONLY)
* **Returns:** All payments in the system.


* **POST** `/payments` (Protected - USER)
* **Body:** `{ "amount": 100, "currency": "USD" }`




##  Security Considerations

* **Password Hashing:** Using `bcrypt` with a salt factor of 10.
* **JWT Protection:** Tokens are signed and required for all non-public routes.
* **Role Enforcement:** Prevents IDOR (Insecure Direct Object Reference) by ensuring users only see their own data.
* **Input Sanitization:** Express middleware ensures incoming JSON is well-formed.


##  Assumptions

* Tokens are passed in the `Authorization` header as `Bearer <token>`.
* The default role for any new registered user is `USER`.


**Would you like me to help you format the "API Documentation" section with more specific JSON examples based on your exact controller code?**
