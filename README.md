# Mathematical Operations API

A Node.js application that provides RESTful APIs for various mathematical operations, using Express.js and Prisma with SQLite database.

## Features

- Addition of two numbers
- Factorial calculation
- Fibonacci sequence generation

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



## **👨‍💻 Author**  
🚀 Developed by [Narendra Patil ](https://github.com/nareshpatil031886)  
