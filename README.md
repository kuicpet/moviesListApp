# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## MovieList Search App Documentation

### Overview

The MovieList App is a web application that allows users to search for movies using the Movie Database API. It provides a responsive and user-friendly interface for searching movies, adding them to a movielist, rating movies, and marking them as watched.

### Live link : https://movies-list-app-lilac.vercel.app/

### Technologies Used

- React: A JavaScript library for building user interfaces.
- React Router: A library for managing routes in a React application.
- Zustand: A small, fast state management library for React applications.
- Axios: A popular library for making HTTP requests.
- The Movie Database (TMDb) API: A public API for retrieving movie data.
- TaltwindCss : A utility-first CSS framework
- React-icons : An icon library for popular icons.

### Folder Structure

The project's folder structure is as follows:

```
src/
  |- components/
  |    |- Button.jsx
  |    |- MovieCard.jsx
  |    |- Rating.jsx
  |    |- SearchBar.jsx
  |    |- ToggleSwitch.jsx
  |    |- Header.jsx
  |    |- MovieCard.jsx
  |    |- Pagination.jsx
  |    |- Rating.jsx
  |    |- SearchBar.jsx
  |    |- BreadCrumb.jsx
  |    |- Loader.jsx
  |- pages/
  |    |- Home.jsx
  |    |- MovieList.jsx
  |    |- SingleMovie.jsx
  |    |- NotFound;sx
  |- store/
  |    |- movieStore.js
  |- utils/
  |    |- formatTime.js
  |- App.jsx
  |- App.css
  |- config.js
  |- main.jsx
  |- index.css
  |- index.js
```

- `components/`: Contains reusable UI components used throughout the app.
- `pages/`: Contains individual page components for the app.
- `store/`: Contains the Zustand store and its related actions and state.
- `App.js`: The main component that handles routing and rendering of different pages.
- `index.js`: The entry point of the application.

### Usage

1. Clone the repository:

```
git clone <repository-url>
```

2. Install the dependencies:

```
cd movie-search-app
yarn install
```

3. Obtain an API key from The Movie Database (TMDb) API and add it to the `.env.local` file:

```
VITE_API_KEY=your_api_key_here
```

4. Start the development server:

```
yarn dev
```

The app will be accessible at `http://localhost:5173`.

### Features

1. Home Page (`/`)

- The home page allows users to search for movies using the search bar component (`SearchBar.js`).
- As the user types in the search input, the app fetches movie suggestions from the TMDb API and displays them in real-time.
- Users can click on a movie title from the search results to add it to their watchlist. The watchlist is saved in local storage using the Zustand store (`movieStore.js`).

2. Movie List Page (`/movie-list`)

- The movie list page displays the user's watchlist, which includes movie titles, release years, ratings (1 to 5 stars), and checkboxes to mark them as watched.
- Users can rate movies using the star inputs in the watchlist.
- Clicking on the "Watched Movies" toggle switch filters the watchlist to show only watched movies.
- Users can remove movies from their watchlist by clicking the delete button.

3. Single Movie Page (`/movies/:slug`)

- The single movie page displays detailed information about a specific movie.
- It includes movie title, release date, rating, description, and other relevant data fetched from the TMDb API.

### State Management with Zustand

- The Zustand store (`movieStore.js`) manages the state for the app, including the user's watchlist, search query, search results, and movie ratings.
- The store provides actions to add/remove movies to/from the watchlist, toggle movie watched status, and rate movies.
- The watchlist and search results are saved in local storage to persist data across page reloads.

### Error Handling

- The app includes an error handler that reloads the page in case of API request errors to prevent issues with data fetching.

### Conclusion

The Movie Search App with Zustand provides a seamless and efficient way for users to search, rate, and manage movies. Zustand's simple API and performance benefits make it a great choice for managing state in small to medium-sized React applications.
