import React from "react"
import { useEffect, useState } from "react"
import {useNavigate} from 'react-router-dom'







export default function Settings({updateUser}){

    const navigate = useNavigate()



    const handleLogOut = () => {
        fetch(`/logout`, {
          method:"DELETE"
        })
        .then(res =>{
          if(res.ok){
            console.log(res)
            updateUser(false)
            navigate('/')

          }
        })
      }



    return(
        <div class=" flex-col justify-center">
          
            <p>Change your name</p>
            <br></br>
            <p>Change your password</p>
            <br></br>
            <button onClick={handleLogOut} class="bg-cyan-600 hover:bg-blue-700 text-white font-bold py-2 px-2  rounded">LOGOUT</button>
        </div>
    )
}