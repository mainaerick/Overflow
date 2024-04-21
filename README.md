# Overflow

Overflow is a web application built using React (TypeScript) for the frontend and Spring Boot for the backend. It provides a platform similar to StackOverflow where users can create rooms for discussions and within these rooms, they can create topics to engage in forum-like discussions.

## Features

- **Authentication:** Utilizes OAuth2 for authentication and JWT (JSON Web Tokens) for secure communication between the frontend and backend.
- **Rooms:** Users can create rooms to categorize discussions based on different topics or themes.
- **Topics:** Within each room, users can create topics to initiate discussions. Topics serve as forums for users to post questions, share ideas, or seek help from the community.
- **Comments:** Users can comment on topics to provide answers, share opinions, or engage in discussions.
- **Search:** Provides a search feature to allow users to easily find topics or rooms based on keywords or tags.

## Technologies Used

- **Frontend:** React.js with TypeScript for building dynamic and interactive user interfaces.
- **Backend:** Spring Boot, a Java-based framework, for creating robust and scalable RESTful APIs.
- **Authentication:** OAuth2 for user authentication and JWT for secure token-based communication.
- **Database:** Utilizes a PostgreSQL database for storing user data, room details, topics, and comments.
- **Database Management:** PgAdmin is used for managing the PostgreSQL database.

## Docker Configuration

Overflow can be deployed using Docker Compose. The provided `docker-compose.yml` file sets up the following services:

- **PostgreSQL Database:** Provides data persistence for the application.
- **PgAdmin:** Offers a web-based interface for managing the PostgreSQL database.
- **Overflow Application:** Deploys the Overflow application.

To deploy Overflow using Docker Compose, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/mainaerick/Overflow.git
2. **Navigate to the Project Directory:**
   ```bash
   cd Overflow
3. **Update Configuration (Optional):**
   If needed, you can modify the docker-compose.yml file to adjust settings such as environment variables, ports, or volumes.
   
4. **Run Docker Compose:**
   ```bash
   docker-compose up -d
5. **Access the Application:**
   Once all services are running, you can access the Overflow application at http://localhost:8080. PgAdmin is accessible at http://localhost:5050 for database management.


## Swagger Configuration

This application utilizes Swagger for API documentation and testing. The Swagger configuration is defined in the `SwaggerConfig` class.

### Configuration Details

The `SwaggerConfig` class is annotated with `@Configuration` and `@EnableSwagger2`, enabling Swagger support for the application.

### API Documentation

Swagger is configured to generate API documentation based on the controllers and endpoints in the application. The `api()` method in the `SwaggerConfig` class creates a `Docket` bean that configures Swagger settings such as API selectors, API information, security schemes, and context.

### Security Configuration

Security is integrated with Swagger to handle authorization. The configuration includes defining a security context, security schemes, and setting up security references for API endpoints.

### Additional Features

- The `metadata()` method configures metadata for the API documentation, including title, description, version, license information, and contact details.
- The `apiKey()` method sets up an API key for authorization.
- The `discoverers()` method configures link discoverers for the API.

### Usage

Once the application is running, you can access the Swagger UI to explore and test the APIs. Typically, the Swagger UI is available at `http://localhost:8080/swagger-ui.html`.
