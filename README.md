# Mathematical Operations API

A Node.js application that provides RESTful APIs for various mathematical operations, using Express.js and Prisma with SQLite database.

## Features

- Addition of two numbers
- Factorial calculation
- Fibonacci sequence generation
- Request logging
- Error handling
- Data persistence using SQLite
- Unit tests

## API Endpoints

1. `POST /api/addition`
   - Request body: `{ "a": number, "b": number }`
   - Returns the sum of two numbers

2. `GET /api/factorial/:number`
   - Parameter: number (positive integer)
   - Returns the factorial of the given number

3. `GET /api/fibonacci/:count`
   - Parameter: count (positive integer)
   - Returns Fibonacci sequence up to the specified count

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Generate Prisma client:
   ```bash
   npm run prisma:generate
   ```

4. Create database and run migrations:
   ```bash
   npm run prisma:migrate
   ```

5. Build the project:
   ```bash
   npm run build
   ```

## Running the Application

Development mode:
```bash
npm run dev
```

Production mode:
```bash
npm start
```

## Running Tests

```bash
npm test
```

## Project Structure

```
src/
├── __tests__/        # Test files
├── controllers/      # Request handlers
├── middleware/       # Custom middleware
├── routes/          # API routes
├── services/        # Business logic
├── app.ts           # Express app setup
└── server.ts        # Server entry point
```

## Error Handling

The API uses custom error handling middleware that returns appropriate HTTP status codes and error messages.

## Database

Uses SQLite with Prisma ORM. The database stores operation history with:
- Operation type
- Input values
- Result
- Timestamps 


## **👨‍💻 Author**  
🚀 Developed by [Narendra Patil ](https://github.com/nareshpatil031886)  
