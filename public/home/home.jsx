import React from 'react';

const Home = () => {
  const setNumPlayers = (e) => {
    console.log('Num players: ', e.target.value);
  }

  return (
    <div className="home">
      How Many Players?
      <button value="1" onClick={setNumPlayers}>1</button>
      <button value="2" onClick={setNumPlayers}>2</button>
    </div>
  );
}

export default Home;
