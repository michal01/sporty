# TASK DESCRIPTION

## Overview
The goal of this assignment is to evaluate your skills in frontend development, especially your profi ciency with
components based, state management and API integration. The project simulates a simplifi ed component from an online
bookmaker platform.

You are free to use any AI tools to assist you with this task - including for UI/UX design, layout generation,
or even code scaffolding. If you do use any tools, please include a short .md fi le describing which ones you used
and how they helped. The focus of this assignment is on your understanding of product 
logic and implementation - not whether everything is handcrafted from scratch.

The task is expected to take approximately 90 minutes. If you're unable to complete all requirements within that time,
please provide additional context or explanations in the .md fi le.

## Requirements 
Build a single-page application (SPA) that consumes the All Leagues API and displays the sports leagues with 
filtering options.

● Fetch and display a list of sports leagues.
● Display Fields:
o strLeague
o strSport
o strLeagueAlternate
● Add a search bar to fi lter leagues by name.
● Add a dropdown to fi lter by sport type (e.g., Soccer, Basketball, Motorsport).
● Use component-based architecture.
● The UI should be responsive and functional as a priority, visual enhancements can be added if time allows

The league entities respond to clicks and call the Season Badge API with the league ID to display a season badge image
(can be for any season you like or the fi rst entity in the response).

## Tech Stack
The solution is expected to be based on:
● Vue, React or Angular
● Other tools/libraries can be used at your discretion.

## API
All Leagues:
https://www.thesportsdb.com/api/v1/json/3/all_leagues.php
Badge Lookup:
https://www.thesportsdb.com/api/v1/json/3/search_all_seasons.php?badge=1&id=<id>
Documentation: https://www.thesportsdb.com/free_sports_api

## Design
Design decisions are entirely at your discretion.

## Delivery
● Submit a link to a public GitHub repo.
● The project must be 100% runnable.
● Include concise .md notes on AI tools and design decisions.



# TASK SOLUTION

## Introduction

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
