import { ORDERS_LIST_REQUEST,
    ORDERS_LIST_SUCCESS,
    ORDERS_LIST_FAIL
} from "../Constants/OrderConstants"

import axios from "axios"


export const orderList = () => async (dispatch) =>{
        try{
            dispatch({type: ORDERS_LIST_REQUEST})

            const {data} = await axios.get('https://dummyjson.com/carts/1/')
            dispatch({
                type: ORDERS_LIST_SUCCESS,
                payload: data
            })

        }catch(error){

            dispatch({
                type:ORDERS_LIST_FAIL,
                payload:error.response 
            })

        }
         
    }