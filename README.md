# Tripease – Cab Booking Application

Tripease is a full-stack cab booking application developed using **Java Spring Boot and React**. It allows customers to register and book rides, while drivers can register themselves and add their vehicles to the platform.

The project follows a REST API-based architecture, with a React frontend communicating with a Spring Boot backend and MySQL database.

## Tech Stack

### Backend
- Java
- Spring Boot
- Spring MVC
- Spring Data JPA
- Hibernate
- REST APIs
- MySQL
- Maven

### Frontend
- React.js
- JavaScript
- HTML5
- CSS3
- React Router DOM
- Axios
- Vite

### Tools
- Git and GitHub
- IntelliJ IDEA
- VS Code
- Postman

## Features

### Customer Management
- Customer registration.
- Customer information retrieval.
- Retrieve customers using customer ID.
- Retrieve customers based on gender and age.

### Driver Management
- Driver registration.
- Retrieve driver details using driver ID.

### Cab Management
- Register a cab associated with a driver.
- Store cab registration number, model and per-kilometre rate.
- Maintain cab status.

### Booking Management
- Book a cab using customer ID.
- Enter pickup and destination locations.
- Specify trip distance.
- Calculate and retrieve booking details.
- Maintain trip status and booking timestamps.

### Frontend
- Responsive user interface.
- Customer and driver registration pages.
- Customer and driver login pages.
- Cab registration page.
- Booking forms.
- Navigation using React Router.
- Backend integration using Axios.

## Project Structure

```text
tripease/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   ├── Components/
│   │   ├── Pages/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   └── vite.config.js
│
├── src/
│   └── main/
│       ├── java/
│       │   └── com/example/tripease/
│       │       ├── controller/
│       │       ├── service/
│       │       ├── repository/
│       │       ├── entity/
│       │       ├── dto/
│       │       └── config/
│       └── resources/
│
├── pom.xml
├── mvnw
└── README.md
```

## Prerequisites

Make sure you have installed:

- Java JDK
- Node.js and npm
- MySQL Server
- Git

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/shivaprasadsshetty/tripease.git
```

Navigate into the project:

```bash
cd tripease
```

### 2. Configure MySQL

Create the database:

```sql
CREATE DATABASE `tripease-db`;
```

Configure your MySQL username, password and database connection in:

`src/main/resources/application.properties`

Make sure the database credentials match your local MySQL configuration.

### 3. Run the Spring Boot Backend

From the project root directory:

```bash
./mvnw spring-boot:run
```

The backend runs at:

```text
http://localhost:8080
```

### 4. Run the React Frontend

Open another terminal:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend runs at:

```text
http://localhost:5173
```

## API Endpoints

Base URL:

```text
http://localhost:8080
```

### Customer APIs

| Method | Endpoint | Description |
|---|---|---|
| POST | `/customer/add` | Register customer |
| GET | `/customer/get/customer-id/{id}` | Get customer by ID |
| GET | `/customer/get/customer-gender/{gender}` | Get customers by gender |
| GET | `/customer/get/customer-gender-age` | Get customers by gender and age |
| GET | `/customer/get/customer-gender-age-greater-than` | Get customers by gender and minimum age |

### Driver APIs

| Method | Endpoint | Description |
|---|---|---|
| POST | `/driver/add` | Register driver |
| GET | `/driver/get/driver-id/{id}` | Get driver by ID |

### Cab APIs

| Method | Endpoint | Description |
|---|---|---|
| POST | `/cab/add/driver-id/{driverId}` | Register cab for a driver |

### Booking APIs

| Method | Endpoint | Description |
|---|---|---|
| POST | `/booking/book/customer-id/{customerId}` | Book a cab for a customer |

## Frontend and Backend Integration

The React application communicates with the Spring Boot backend using Axios.

Axios configuration:

```javascript
import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        "Content-Type": "application/json"
    }
});

export default api;
```

CORS configuration is implemented in Spring Boot to allow communication from the React development server.

## Future Enhancements

- Customer and driver authentication.
- Secure authorization using Spring Security and JWT.
- Automatic distance calculation using map services.
- Real-time cab availability.
- Cab assignment and driver selection.
- Booking history.
- Payment gateway integration.
- Deployment to a cloud platform.

## Author

**Shivaprasad S Shetty**

- GitHub: https://github.com/itsme-SP
- LinkedIn: https://www.linkedin.com/in/shivaprasad-s-shetty-79981a384/

---

*Tripease – Making every journey easier.*
