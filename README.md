# Riddle Game Server

This is a server-side application built with [NestJS](https://nestjs.com/) and TypeScript.  
It provides a REST API for managing riddles and players, and connects to MongoDB and Supabase.

## Features

- Manage riddles (CRUD operations)
- Manage players (skeleton)
- MongoDB integration (via Mongoose)
- Supabase integration
- Environment variable validation

## Project Structure

```
src/
  app.controller.ts        # Main controller
  app.module.ts            # Root module
  app.service.ts           # Main service
  main.ts                  # Entry point
  player/                  # Player module (skeleton)
  riddle/                  # Riddle module (CRUD, schema, DTOs)
  supabase/                # Supabase integration
test/                      # Test files (unit & e2e)
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set environment variables

Create a `.env` file in the root directory with the following variables:

```
MONGODB_URI=your_mongodb_connection_string
SUPABASE_URI=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
PORT=3000
```

### 3. Run the server

```bash
npm run start
```

The server will start on the port you set (default: 3000).

### 4. Run tests

- Unit tests:
  ```bash
  npm run test
  ```
- End-to-end tests:
  ```bash
  npm run test:e2e
  ```

## API Endpoints

- `GET /` — Health check, returns "Hello World!"
- `POST /riddles` — Create a new riddle
- `GET /riddles` — Get all riddles
- `GET /riddles/:id` — Get riddle by ID
- `GET /riddles/difficulty/:difficulty` — Get riddles by difficulty
- `POST /riddles/update/:id` — Update riddle by ID
- `POST /riddles/delete/:id` — Delete riddle by ID

## Technologies

- [NestJS](https://nestjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Mongoose](https://mongoosejs.com/)
- [Supabase](https://supabase.com/)
- [Jest](https://jestjs.io/) (testing)

## License

This project is for learning and demonstration
