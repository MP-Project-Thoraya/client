import {createStore,combineReducers} from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import signIn from './login'


//all components what i will use should define here 
const reducers =combineReducers ({signIn,});

const store=()=>{

return createStore(reducers,composeWithDevTools());

}

export default store();