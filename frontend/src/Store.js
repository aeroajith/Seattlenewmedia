import {createStore, combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import { chartReducer } from "./Components/Reducers/ChartReducer"
import { orderReducer } from "./Components/Reducers/OrderReducer"
import { userLoginReducer } from "./Components/Reducers/UserReducer"
import {  pokeReducer } from "./Components/Reducers/PokeReducer"

const reducer = combineReducers({
    revenueLists: chartReducer,
    ordersList : orderReducer,
    userLogin: userLoginReducer,
    pokesData : pokeReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null


const initialState = {
    userLogin:{userInfo : userInfoFromStorage}
}
const middleware = [thunk]
const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)))


export default store