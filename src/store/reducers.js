import ddgraph from '../components/DataDictionary/reducers';
import { combineReducers } from 'redux';
import submission from './submission';
import versionInfo from './versionInfo';

const reducers = combineReducers({ddgraph, submission, versionInfo});

export default reducers;