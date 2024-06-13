# PDF Viewer Web Application

Welcome to the PDF Viewer web application! This project consists of both the frontend and backend components. The frontend is built with React.js, while the backend is built with Node.js and Express.js. This README focuses on the backend setup and usage.

## Backend Overview

The backend handles file upload, storage, retrieval, and user authentication. It provides RESTful API endpoints for interacting with PDF files and user authentication.

## Technologies Used

- Node.js: JavaScript runtime environment.
- Express.js: Web application framework for Node.js.
- Multer: Middleware for handling file uploads.
- Mongoose: MongoDB object modeling tool.
- MongoDB: NoSQL database used for storing PDF details and user authentication data.
- CORS: Middleware for enabling cross-origin requests.

## Project Structure


- **`pdfserver.js`**: Contains routes for handling PDF file upload, storage, and retrieval.
- **`authserver.js`**: Contains routes for user authentication.
- **`models/`**: Directory containing Mongoose models for defining database schemas.
- **`server.js`**: Main entry point of the backend application, where Express server is configured and started.

## Installation

1. Clone this repository to your local machine.
2. Navigate to the backend directory.
3. Install dependencies by running the command:

## API Endpoints

- **POST /pdf/upload-files**: Uploads a PDF file to the server.
- **GET /pdf/get-files**: Retrieves a list of uploaded PDF files.
- **DELETE /pdf/delete-file/:id**: Deletes a specific PDF file by ID.
- **POST /auth/register**: Registers a new user account.
- **POST /auth/login**: Logs in an existing user.

## Database

The backend uses MongoDB as its database. Make sure you have MongoDB installed and running on your system. You can configure the MongoDB connection URI in `server.js`.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your fork.
5. Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
