import React from "react"
import { useEffect, useState } from "react"
import {useNavigate} from 'react-router-dom'







export default function Settings({setCurrentUser}){

    const navigate = useNavigate()



    const handleLogOut = () => {
        fetch(`/logout`, {
          method:"DELETE"
        })
        .then(res =>{
          if(res.ok){
            console.log(res)
            setCurrentUser(false)
            navigate('/')

          }
        })
      }



    return(
        <div class=" flex-col justify-center">
          
        
            <br></br>
           
            <br></br>
            <button onClick={handleLogOut} class="bg-cyan-600 hover:bg-blue-700 text-white font-bold py-2 px-2  rounded">LOGOUT</button>
        </div>
    )
}