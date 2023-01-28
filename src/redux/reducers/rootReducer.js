import  {combineReducers} from 'redux';
import counterReducer from './counterReducer';
import { productReducer } from './productReducer';


const rootReducer = combineReducers ({
    counter: counterReducer,
    products: productReducer
})

export default rootReducer;