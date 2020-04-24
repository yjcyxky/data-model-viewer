import ddgraph from './DataDictionary/reducers';
import submission from './submission';
import { combineReducers } from 'redux';

const versionInfo = (state = {}, action) => {
  switch (action.type) {
  case 'RECEIVE_VERSION_INFO':
    return { ...state,
      dictionaryVersion: action.data.dictionary.version || 'unknown',
      apiVersion: action.data.version || 'unknown',
    };
  default:
    return state;
  }
};

const reducers = combineReducers({ddgraph, submission, versionInfo});

export default reducers;