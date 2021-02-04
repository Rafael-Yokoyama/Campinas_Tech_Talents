import React from 'react';
import {useDispatch} from 'react-redux'

const Product = () => {
    const  dispatch = useDispatch()
    return(
     <div className="button_Product">
        
         
         <button onClick={()=>dispatch({type:'REMOVE'})}> <span>-</span> </button>
         <button onClick={()=>dispatch({type:'ADD'})}> <span>+</span> </button>

     </div>
    )
      
    
}

export default Product