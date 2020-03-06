import { combineReducers } from 'redux';
import { sessionReducer as session } from 'redux-react-native-session';
import dataReducer from './dataReducer';
import scannerReducer from './scannerReducer';

export default combineReducers({
    dataReducer,
    scannerReducer,
    session
});
