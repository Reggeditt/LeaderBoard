const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

const createNewGame = async (gameName) => {
  const options = {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({ name: gameName }),
  };
  const response = await fetch(`${baseURL}games/`, options);
  const data = await response.json();
  const gameID = data.result.split(' ')[3];
  return gameID;
};

export default createNewGame;
