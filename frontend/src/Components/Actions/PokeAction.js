import { POKE_CONTENT_REQUEST, POKE_CONTENT_SUCCESS, POKE_CONTENT_FAIL} from "../Constants/PokeConstant"


import axios from "axios"


export const pokeData =() => async(dispatch,getState)=>{
    try{
        dispatch({
            type:POKE_CONTENT_REQUEST,
        })
        const {
            userLogin:{userInfo},
        } = getState()
        const config = {
            headers:{
                'Content-type':'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const {data} = await axios.get(
            'https://dummyjson.com/products',
            config)

        dispatch({
            type:POKE_CONTENT_SUCCESS,
            payload:data
            
        })
        

    }catch(error){
        dispatch({
            type: POKE_CONTENT_FAIL,
            payload: error.response  

                 
        })
    }
}
