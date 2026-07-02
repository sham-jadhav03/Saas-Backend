# SaaS Backend

A clean, modular backend for a SaaS application built with Node.js, Express, TypeScript, and MongoDB.

## Project Structure

```
saas-backend/
├── src/
│   ├── config/
│   │   ├── database.ts          # MongoDB connection setup
│   │   ├── env.ts               # Environment variable validation
│   │   └── constants.ts         # App-wide constants (roles, tenant plans, etc.)
│   │
│   ├── middlewares/
│   │   ├── auth.middleware.ts   # JWT verification
│   │   ├── tenant.middleware.ts # Extracts & attaches tenantId to request
│   │   ├── rbac.middleware.ts   # Role-based permission checks
│   │   ├── errorHandler.middleware.ts
│   │   └── requestLogger.middleware.ts
│   │
│   ├── modules/                 # Feature-based module grouping
│   │   ├── auth/
│   │   │   ├── auth.controller.ts
│   │   │   ├── auth.service.ts
│   │   │   ├── auth.routes.ts
│   │   │   └── auth.validation.ts
│   │   ├── users/
│   │   │   ├── user.controller.ts
│   │   │   ├── user.service.ts
│   │   │   ├── user.repository.ts
│   │   │   ├── user.model.ts
│   │   │   ├── user.routes.ts
│   │   │   └── user.validation.ts
│   │   ├── tenants/
│   │   │   ├── tenant.controller.ts
│   │   │   ├── tenant.service.ts
│   │   │   ├── tenant.repository.ts
│   │   │   ├── tenant.model.ts
│   │   │   └── tenant.routes.ts
│   │   └── ...other domain modules
│   │
│   ├── shared/
│   │   ├── types/               # Shared TS interfaces and types
│   │   ├── utils/               # Helper functions (hashing, token generation, pagination)
│   │   └── errors/              # Custom error classes
│   │
│   ├── routes/
│   │   └── index.ts             # Combines all module routes into one router
│   │
│   ├── app.ts                   # Express app setup
│   └── server.ts                # Server entry point
│
├── tests/
│   ├── unit/
│   └── integration/
│
├── docker/
│   ├── Dockerfile
│   ├── docker-compose.yml
│   └── docker-compose.prod.yml
│
├── .env.development
├── .env.production
├── .env.example
├── .dockerignore
├── .gitignore
├── package.json
└── README.md
```

## Highlights

- Modular feature-based architecture
- Tenant-aware middleware and RBAC support
- TypeScript-first implementation
- MongoDB integration with centralized config
- Ready for tests and Docker deployment

## Recommended Files

- `src/app.ts` — Express app setup
- `src/server.ts` — HTTP server entry point
- `src/config/database.ts` — MongoDB connection
- `src/middlewares/auth.middleware.ts` — JWT verification
- `src/middlewares/tenant.middleware.ts` — Tenant extraction
- `src/modules/` — Domain modules (auth, users, tenants)

## Notes

This repository is structured for a multi-tenant SaaS backend, with clean separation between configuration, middleware, domain features, and shared utilities.
