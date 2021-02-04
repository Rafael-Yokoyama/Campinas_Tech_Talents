import React from 'react';
import {useSelector} from 'react-redux'
import {Store} from '../types/store'

const Contador =() =>{
    const  contadorTotal= useSelector((state:Store)=> state.contador)
    return(
     

    <div> 
         <h1> Redux - 1</h1>
            <button>
           
           < img src="https://www.flaticon.com/svg/vstatic/svg/126/126510.svg?token=exp=1612448871~hmac=15a80530f826e6d169522e0880e51173" width='66px'/> 
          <br/>
        <span>   {contadorTotal}</span>

       </button>
       </div>
   )
   
}
export default Contador