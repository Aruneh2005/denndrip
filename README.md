# DEN & DRIP eCommerce Platform

A premium, minimal streetwear eCommerce website built with Next.js (Frontend), Node.js/Express (Backend), and MongoDB (Database).

## Features
- **Responsive Layout**: Mobile-first design inspired by premium streetwear aesthetics.
- **Product Management**: Dynamic shop grid with category filters.
- **Cart System**: Real-time cart state management using React Context.
- **Stripe Integration**: Secure checkout flow ready for integration.
- **Admin Ready**: Structure for user authentication and admin control.
- **SEO Optimized**: Meta tags and semantic HTML for visibility.

## Tech Stack
- **Frontend**: Next.js 14, TypeScript, Vanilla CSS Modules.
- **Backend**: Node.js, Express, Mongoose, JWT, Stripe API.
- **Database**: MongoDB.

## Getting Started

### 1. Prerequisites
- Node.js (v18+)
- MongoDB (Running locally or on Atlas)

### 2. Backend Setup
1.  Navigate to `server/`.
2.  Install dependencies: `npm install`.
3.  Configure `.env` (Use `.env.example` as a template).
4.  Start server: `npm run dev`.

### 3. Frontend Setup
1.  Navigate to `client/`.
2.  Install dependencies: `npm install`.
3.  Configure `.env.local`.
4.  Start dev server: `npm run dev`.

## Folder Structure
- `client/`: Next.js frontend application.
  - `src/app/`: App router pages.
  - `src/components/`: Reusable UI components.
  - `src/context/`: Global state management.
- `server/`: Express backend application.
  - `models/`: Mongoose schemas.
  - `routes/`: API endpoints.
  - `middleware/`: Auth and error handlers.

## Deployment Guide
- **Frontend**: Deploy to Vercel (connect GitHub repo).
- **Backend**: Deploy to Render or Heroku.
- **Database**: Use MongoDB Atlas for cloud storage.
