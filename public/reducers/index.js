import { routerReducer } from 'react-router-redux';
import numPlayers from './numPlayers';

const reducers = {
  numPlayers,
  router: routerReducer
};

export default reducers;
