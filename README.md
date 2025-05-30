# Introduction

I created the application with the Vuetify CLI. I used Copilot AI with Chat GPT-4o
as an agent to create a project as a starting point for further changes.

Then:
- I added Axios configuration,
- I moved API support from components to composable,
- I moved data handling logic to Pinia store,
- I added a component and store Snackbar for error handling,
- I added composable handleApiRequest for uniform API request handling.

I would have to add a presentation of data loading, but I ran out of time.

The whole thing took over 2 hours.

## Tech stack
- Vue.js 3
- Vite
- TypeScript
- Pinia
- Vuetify
- Axios

## Installation

Install packages using command:
```bash
npm install
```

## Starting the Development Server

To start the development server with hot-reload, run the following command. The server will be accessible at [http://localhost:3000](http://localhost:3000):

```bash
npm run dev
```

## Building for Production

To build your project for production, use:

```bash
npm run build
```
