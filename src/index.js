import './index.css';
import leaderboardData from './modules/leaderBoardData.js';
import { submitFormEl, userNameEl, userScoreEl } from './modules/DOMelements.js';

submitFormEl.addEventListener('submit', (e) => {
  e.preventDefault();
  const user = userNameEl.value;
  const score = userScoreEl.value;
  leaderboardData.addUserData(user, score);
  leaderboardData.sortUsersData();
  leaderboardData.renderUsersData();
});