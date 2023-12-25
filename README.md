# Battlefield 4 Soldier Page

Welcome to the Battlefield 4 Soldier Page, a web application designed to provide players with a snapshot of their in-game performance.

## Features

- **Soldier-Level:** View your current soldier level.
- **Wins:** Track victories in various game modes.
- **Achievements:** Showcase earned achievements.
- **Most Used Weapons:** Gain insights into preferred weapons.
- **Detailed Statistics:** Access in-depth game performance stats.

## Getting Started Locally

1. Clone this repository:

    ```bash
    git clone https://github.com/parthpatel021/Battlefield.git
    ```

2. Install dependencies for both the `server` and the `client`:

    ```bash
    npm install
    ```

3. Add a `.env` file:

    - In `client` directory:

        ```bash
        REACT_APP_BASE_URL=http://localhost:8080/
        ```

    - In `server` directory:

        ```bash
        MONGO_URL=YOUR_MONGODB_URL
        ```

4. To run it locally, execute the following command in both `client` and `server` directories:

    ```bash
    npm start
    ```

Explore your Battlefield 4 journey with the Soldier Page!
