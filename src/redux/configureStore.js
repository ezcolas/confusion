import {createStore, combineReducers, applyMiddleware} from "redux";
import {createForms} from "react-redux-form";
import {Dishes } from './dishes';
import {Comments } from './comments';
import {Leaders } from './leaders';
import {Promotions } from './promotions';
import thunk from "redux-thunk";
import logger from 'redux-logger';
import {InitialFeedBack} from "./form";

export const ConfigureStore = () =>{
    const store = createStore(
     combineReducers({
         dishes: Dishes,
         comments: Comments,
         promotions: Promotions,
         leaders: Leaders,
         ...createForms({
             feedback: InitialFeedBack
         })
     }),
        applyMiddleware(thunk, logger)
    );

    return store;
}
