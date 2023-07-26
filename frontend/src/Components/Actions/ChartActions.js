import { REVENUE_LIST_REQUEST,
    REVENUE_LIST_SUCCESS, 
    REVENUE_LIST_FAIL } from "../Constants/ChartConstants"

import axios from "axios"


export const revenueList = () => async (dispatch) =>{
        try{
            dispatch({type: REVENUE_LIST_REQUEST})

            const {data} = await axios.get('https://dummyjson.com/carts/')
            dispatch({
                type: REVENUE_LIST_SUCCESS,
                payload: data
            })

        }catch(error){

            dispatch({
                type:REVENUE_LIST_FAIL,
                payload:error.response 
            })

        }
         
    }