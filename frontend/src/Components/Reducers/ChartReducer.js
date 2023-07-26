import { REVENUE_LIST_REQUEST,
     REVENUE_LIST_SUCCESS, 
     REVENUE_LIST_FAIL } from "../Constants/ChartConstants"


export const chartReducer = (state= {revenue:[]}, action)=>{

    switch(action.type){
        case REVENUE_LIST_REQUEST:
            return {loading:true,revenue:[]}
      
        case REVENUE_LIST_SUCCESS:
            return {loading:false,revenue:action.payload}


        case REVENUE_LIST_FAIL:
            return {loading:false,error:action.payload}

        default:
            return state
    }

}