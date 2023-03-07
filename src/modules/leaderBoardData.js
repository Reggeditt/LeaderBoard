import {
  leaderboardEl,
  userNameEl,
  userScoreEl,
} from './DOMelements';

class LeaderBoardData {
  constructor() {
    this.usersData = [];
  }

  addUserData = (user, score) => {
    this.usersData.push({ user, score });
  }

  sortUsersData = () => {
    this.usersData = this.usersData.sort((a, b) => b.score - a.score);
  }

  renderUsersData = () => {
    leaderboardEl.innerHTML = '';
    this.usersData.forEach((userData, index) => {
      const userInfo = document.createElement('li');
      userInfo.classList.add('user-info');
      index % 2 === 0
        ? userInfo.classList.add('even')
        : userInfo.classList.add('odd');
      userInfo.innerHTML = `${userData.user}: ${userData.score}`;
      leaderboardEl.appendChild(userInfo);
    });
  }
}

const leaderboardData = new LeaderBoardData();
export default leaderboardData;
