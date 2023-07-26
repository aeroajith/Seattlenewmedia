import { POKE_CONTENT_REQUEST, POKE_CONTENT_SUCCESS, POKE_CONTENT_FAIL
 } from "../Constants/PokeConstant"


export const pokeReducer = (state= {products:[]}, action)=>{

    switch(action.type){
        case POKE_CONTENT_REQUEST:
            return {loading:true, products:[] }
      
        case POKE_CONTENT_SUCCESS:
            return {loading:false,products:action.payload}


        case POKE_CONTENT_FAIL:
            return {loading:false,error:action.payload}

        default:
            return state
    }

}