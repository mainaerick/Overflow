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
