# BattleField4 - Soldier PageThe 
Battlefield 4 Soldier Page is a comprehensive web application designed to provide players with a detailed overview of their in-game performance. This centralized hub offers the following key features:

* **Soldier-Level:** Quickly view your current soldier level to gauge your overall progress in the game.
* **Wins:** Track your victories and assess your success in various game modes.
* **Achievements:** Explore and showcase your earned achievements, highlighting your accomplishments in Battlefield 4.
* **Most Used Weapons:** Gain insights into your preferred weapons, helping you optimize your loadout for future battles.
* **Detailed Statistics:** Access in-depth statistics to analyze your performance across different aspects of the game, allowing for strategic improvement.

## Setting up Locally
1. Clone this repository to your local environment

```bash
git clone https://github.com/parthpatel021/Battlefield.git
```

2. Install dependencies for the `server` as well as the `client`
```bash
npm install
```

4. add a `.env` file<br />
  - in `client` directory
```bash
REACT_APP_BASE_URL=http://localhost:8080/
```
  - in the `server` directory
```bash
MONGO_URL=YOUR_MONGODB_URL
```

5. To run it locally execute the following command in the `client` as well as `server` directory
```bash
npm start
```
