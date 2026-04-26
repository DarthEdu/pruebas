# AGENTS.md

## Structure

Monorepo with `frontend/` (React + Vite) and `backend/` (Express).

## Commands

- `npm run dev` - Start frontend + backend in parallel
- `npm run dev:frontend` - Frontend only (port 5173)
- `npm run dev:backend` - Backend only (port 3000)

## Architecture

- `backend/index.js` - Express entry point
- `backend/handler.js` - Route handlers
- `backend/models/todoModel.js` - In-memory Todo model

## Notes

- Backend stores todos in memory (no persistence)
- API runs at `http://localhost:3000/api`

## API Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/api/todos` | List all todos |
| GET | `/api/todos/:id` | Get todo by ID |
| POST | `/api/todos` | Create todo |
| PUT | `/api/todos/:id` | Update todo |
| DELETE | `/api/todos/:id` | Delete todo |