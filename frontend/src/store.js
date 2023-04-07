import { applyMiddleware, combineReducers, compose, legacy_createStore } from 'redux';
import authReducer from './reducer/userReducer';
import thunk from "redux-thunk"



const rootReducer = combineReducers({ 
    authReducer: authReducer 
})

export  const store = legacy_createStore(rootReducer, compose(applyMiddleware(thunk)))

