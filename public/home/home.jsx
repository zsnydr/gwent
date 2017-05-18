import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import updateNumPlayers from '../actions/updateNumPlayers';

const Home = ({ setNumPlayers }) => {
  const clickHandler = (e) => {
    setNumPlayers(e.target.value);
  }

  return (
    <div className="home">
      How Many Players?
      <button value="1" onClick={clickHandler}>1</button>
      <button value="2" onClick={clickHandler}>2</button>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setNumPlayers: updateNumPlayers }, dispatch);
}

export default connect(null, mapDispatchToProps)(Home);
