import { leaderboardEl } from './DOMelements.js';
import createNewGame from './createGame.js';

class LeaderBoardData {
  constructor() {
    this.usersData = [];
    this.baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
    this.gameID = '9PGxA4ptdB7NQ03rDMcS';
  }

  addNewUser = async (user, score) => {
    const options = {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify({
        user,
        score,
      }),
    };

    const response = await fetch(`${this.baseURL}games/${this.gameID}/scores/`, options);
    const data = await response.json();
    return data.result;
  };

  getApiScoresData = async () => {
    const response = await fetch(`${this.baseURL}games/${this.gameID}/scores/`);
    const data = await response.json();
    return data.result;
  };

  sortUsersData = () => {
    this.usersData = this.usersData.sort((a, b) => b.score - a.score);
  };

  renderUsersData = () => {
    leaderboardEl.innerHTML = '';
    this.usersData.forEach((userData, index) => {
      const userInfo = document.createElement('li');
      userInfo.classList.add('user-info');
      if (index % 2 === 0) userInfo.classList.add('even');
      userInfo.innerHTML = `${userData.user}: ${userData.score}`;
      leaderboardEl.appendChild(userInfo);
    });
  };

  renderPage = async () => {
    await this.getApiScoresData().then((data) => {
      this.usersData = data;
    });
    this.sortUsersData();
    this.renderUsersData();
  };

  resetLeaderBoard = async () => {
    this.gameID = await createNewGame('Leaderboard');
    this.usersData = [];
    this.renderPage();
  }
}

const leaderboardData = new LeaderBoardData();
export default leaderboardData;
