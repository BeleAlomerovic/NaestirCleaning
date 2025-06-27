# Næstir Cleaning Services - Full Stack Application

## Overview

Næstir is a modern cleaning services business website built with a full-stack architecture using React frontend with TypeScript, Express.js backend, and PostgreSQL database. The application provides booking management, quote requests, customer reviews, and contact functionality for a professional cleaning service company.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom Næstir branding (purple theme)
- **State Management**: TanStack Query (React Query) for server state
- **Form Management**: React Hook Form with Zod validation
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API endpoints
- **Middleware**: Express JSON parsing, CORS handling, request logging
- **Error Handling**: Centralized error handling with status codes

### Database Architecture
- **Database**: PostgreSQL (configured for Neon serverless)
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle Kit for migrations
- **Validation**: Drizzle-Zod integration for runtime type checking

## Key Components

### Database Schema
The application uses four main database tables:
- **bookings**: Service bookings with customer details, preferred dates/times
- **contact_messages**: Customer inquiries and messages
- **quotes**: Quote requests with service specifications
- **reviews**: Customer reviews and ratings for services

### API Endpoints
- `POST/GET /api/bookings` - Create and retrieve service bookings
- `POST/GET /api/contact` - Handle contact form submissions
- `POST/GET /api/quotes` - Manage quote requests
- `POST/GET /api/reviews` - Customer review management

### Frontend Pages
- **Home**: Hero section with service showcase and testimonials
- **Services**: Detailed service pages (apartment cleaning, corporate, etc.)
- **Booking**: Multi-step booking form with service selection
- **Quote**: Quote request form with property details
- **Reviews**: Customer testimonials and review submission
- **About**: Company information and values

### Storage Layer
- **Production**: PostgreSQL with Drizzle ORM
- **Development**: In-memory storage fallback for development
- **Interface**: IStorage abstraction for easy switching between storage backends

## Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **API Layer**: Express routes validate input using Zod schemas
3. **Database Operations**: Drizzle ORM handles type-safe database queries
4. **Response**: JSON responses sent back to client with error handling
5. **UI Updates**: React Query manages cache invalidation and UI updates

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React, React DOM
- **Routing**: Wouter
- **State Management**: TanStack React Query
- **UI Components**: Radix UI primitives, Shadcn/ui
- **Forms**: React Hook Form, Hookform resolvers
- **Validation**: Zod
- **Styling**: Tailwind CSS, Class Variance Authority
- **Animations**: Framer Motion, Embla Carousel
- **Utilities**: Date-fns, clsx

### Backend Dependencies
- **Server**: Express.js
- **Database**: Drizzle ORM, Neon serverless PostgreSQL
- **Validation**: Zod, Drizzle-Zod
- **Build**: ESBuild, TSX for development
- **Development**: Vite, TypeScript

### Development Tools
- **TypeScript**: Type checking and compilation
- **Vite**: Development server and build tool
- **PostCSS**: CSS processing with Tailwind
- **Drizzle Kit**: Database migration management

## Deployment Strategy

### Production Deployment
- **Platform**: Replit Autoscale deployment
- **Build Process**: 
  1. Frontend build with Vite (outputs to `dist/public`)
  2. Backend build with ESBuild (outputs to `dist/index.js`)
- **Environment**: Node.js production environment
- **Database**: PostgreSQL with connection via DATABASE_URL environment variable

### Development Environment
- **Runtime**: Node.js 20 with hot reload
- **Development Server**: Vite dev server with Express API proxy
- **Database**: PostgreSQL 16 module in Replit
- **Port Configuration**: Local port 5000, external port 80

### Environment Configuration
- **Development**: `NODE_ENV=development` with file watching
- **Production**: `NODE_ENV=production` with optimized builds
- **Database**: Requires `DATABASE_URL` environment variable

## Changelog
- June 26, 2025: Created corporate cleaning page matching apartment cleaning design exactly
- June 25, 2025: Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.