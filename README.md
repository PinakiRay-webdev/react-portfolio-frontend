# Pinaki Sankar Ray - Portfolio Website

This repository contains the frontend code for my personal portfolio website. It's a fully responsive single-page application built with React and styled with Tailwind CSS, designed to showcase my projects, skills, and professional experience.

## Features

*   **Dynamic & Responsive UI:** A modern interface that looks great on all devices, from mobile phones to desktops.
*   **Interactive Elements:** Engaging user experience with animations and tilt effects on cards using `react-parallax-tilt`.
*   **Project Showcase:** A slider to display my most popular projects with links to live demos and details about the technologies used.
*   **Skills & Experience:** A dedicated section to highlight my technical skills and professional journey.
*   **Achievements:** Metrics-driven display of my accomplishments, including happy clients and years of experience.
*   **Contact Form:** A functional contact form that sends user messages to a backend service.
*   **Subscription Form:** A newsletter subscription form in the footer.
*   **Smooth Scrolling:** Seamless navigation between sections using `react-scroll`.

## Tech Stack

*   **Framework:** React.js
*   **Styling:** Tailwind CSS, Custom CSS
*   **Animations:** React Parallax Tilt
*   **Carousels/Sliders:** React Slick
*   **Navigation:** React Scroll
*   **Notifications:** React Toastify
*   **API Communication:** Axios

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have Node.js and npm installed on your machine.
*   npm
    ```sh
    npm install npm@latest -g
    ```

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/pinakiray-webdev/react-portfolio-frontend.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd react-portfolio-frontend
    ```
3.  **Install NPM packages:**
    ```sh
    npm install
    ```
4.  **Set up environment variables:**

    Create a `.env` file in the root of the project and add the URL for your backend server. The contact and subscription forms will not work without it.
    ```
    REACT_APP_SERVER_URL=http://localhost:5000
    ```
    The `package.json` includes a proxy for the development server to forward API requests to `http://localhost:5000`.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes.

### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm test`

Launches the test runner in the interactive watch mode.

## Contact

Pinaki Sankar Ray

*   **LinkedIn**: [https://www.linkedin.com/in/pinaki-sankar-ray-9b6530222/](https://www.linkedin.com/in/pinaki-sankar-ray-9b6530222/)
*   **Facebook**: [https://www.facebook.com/RohanRay0626/](https://www.facebook.com/RohanRay0626/)
*   **Instagram**: [https://www.instagram.com/_rohan_ray_15/](https://www.instagram.com/_rohan_ray_15/)