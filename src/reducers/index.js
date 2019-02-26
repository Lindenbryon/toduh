import {combineReducers} from 'redux';
import data from './data';
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore';
//combining all the reducers together

export default combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    data
})
