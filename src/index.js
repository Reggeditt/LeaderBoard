import './index.css';
import {
  submitFormEl,
  userNameEl,
  userScoreEl,
  refreshButtonEl,
  resetButtonEl,
} from './modules/DOMelements.js';
import leaderboardData from './modules/leaderBoardData.js';

leaderboardData.renderPage();
submitFormEl.addEventListener('submit', (e) => {
  e.preventDefault();
  const user = userNameEl.value;
  const score = userScoreEl.value;
  leaderboardData.addNewUser(user, score);
  leaderboardData.renderPage();
  leaderboardData.renderPage();
  userNameEl.value = '';
  userScoreEl.value = '';
});

refreshButtonEl.addEventListener('click', () => {
  leaderboardData.renderPage();
});

resetButtonEl.addEventListener('click', () => {
  leaderboardData.resetLeaderBoard();
});
