# My React Learning Journey

This repository documents my progress learning the fundamentals of React, primarily through projects and exercises from Scrimba. Each folder in this repository represents a different project, showcasing the concepts I've learned and applied.

## Projects

Here is a breakdown of the projects included in this repository, from the simplest to the most complex.

### 1. React Facts

A very simple static page that introduces the absolute basics of React.

*   **Concepts Learned:**
    *   Setting up a basic React project with Vite.
    *   Creating and rendering simple components.
    *   Using JSX to write UI.
    *   Structuring a project with `main.jsx`, `App.jsx`, and `index.css`.

### 2. Travel Journal

This project focuses on rendering components from a local data file.

*   **Concepts Learned:**
    *   Creating reusable components (`Entry.jsx`, `Header.jsx`).
    *   Passing data to components using `props`.
    *   Using the `.map()` method to render a list of components from a data array.
    *   Using the spread syntax (`{...entry}`) to pass all of an object's properties as props.

### 3. Meme Generator

An interactive application that fetches meme data from an API and allows the user to place text on an image.

*   **Concepts Learned:**
    *   Managing component state with the `useState` hook.
    *   Handling user events (button clicks, form inputs).
    *   Making API calls with `fetch` inside a `useEffect` hook to get data from an external source.
    *   Working with forms in React.
    *   Conditional rendering based on state.

### 4. Tenzies

A fun, interactive dice game where the goal is to get all ten dice to show the same number.

*   **Concepts Learned:**
    *   Advanced state management with `useState`, including arrays of objects.
    *   Passing state and event handlers down to child components.
    *   Deriving state from other state variables (`gameWon`).
    *   Using the `useEffect` hook to synchronize state and trigger actions when state changes (e.g., checking for a win condition).
    *   Using the `useRef` hook to interact with DOM elements directly (focusing the button).
    *   Integrating third-party libraries like `react-confetti` for a better user experience.

### 5. Expense Tracker

A practical application for tracking income and expenses.

*   **Concepts Learned:**
    *   Lifting state up to a parent component (`MainSection.jsx`) to be shared among siblings.
    *   Passing functions as props to allow child components to modify the parent's state.
    *   Calculating derived state (e.g., total balance, income, expenses).
    *   Rendering lists of components and handling their deletion.

### 6. React Task Buddy

A simple to-do list application.

*   **Concepts Learned:**
    *   CRUD (Create, Read, Update, Delete) operations on a list of tasks.
    *   Managing state for a list of items.
    *   Using local storage to persist data between browser sessions.
    *   Implementing a dark mode theme toggle.

### 7. Chef Claude

An AI-powered recipe generator that uses an external API to generate recipes based on user-provided ingredients.

*   **Concepts Learned:**
    *   Interacting with an AI API.
    *   Handling asynchronous operations and loading states.
    *   Displaying formatted data received from an API.

### 8. Assembly Endgame

A "hangman" style word guessing game with a programming theme. This is the most complex project in the collection.

*   **Concepts Learned:**
    *   Complex state management with multiple, interdependent state variables (`currentWord`, `guessedAlphabet`, `isGameOver`, etc.).
    *   Advanced conditional rendering and styling using the `clsx` library to dynamically apply classes based on game state.
    *   Complex game logic implemented within React components.
    *   Use of third-party hooks (`useWindowSize`) and libraries (`react-confetti`).

## How to Run These Projects

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    ```
2.  **Navigate to a project directory:**
    ```bash
    cd <project-folder-name>
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Start the development server:**
    ```bash
    npm run dev
    ```