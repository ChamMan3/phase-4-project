import React from "react"
import { useEffect, useState } from "react"
import {useNavigate} from 'react-router-dom'



export default function Login( {updateUser, setEvents, setLists} ){

   const navigate = useNavigate()
  
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [errors, setErrors] = useState('');
    const [isLoading, setIsLoading] = useState(false);


    // takes new info and moves it to backend checking authorization

    function handleSubmit(e){
        //
        //
        e.preventDefault()
        fetch(`/login`,{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify({
            name: name,
            password: password,
          })
        }).then((r) => {
        setIsLoading(true)
        if (r.ok){
            r.json().then(data => {
                console.log(data)
                updateUser(data)
                setEvents(data.events)
                setLists(data.lists)
                navigate(`/calendar`)
            })
            }else {
                r.json().then(json => setErrors(json.error))
            
            }
        })
    }
    console.log(errors)
    // console.log(errorAlert)

    // errors ? <Alert type="error" message="Invalid Password or Username"



    // {errors.map((err) => (<Error key={err}>{err}</Error>))}


    return(
        <div>
            <div className="bg-gradient-to-r from-purple-500 to-cyan-500 flex flex-col content-center">
                <form onSubmit={(e) => handleSubmit(e)} className="max-w-[400px] w-full mx-auto bg-gray-600 p-8 px-8 rounded-lg">
                    <h2 className="text-4xl text-white font-bold text-center">LOG IN</h2>
                    <div>
                        <label className="flex flex-col text-white py-2">
                            Username
                        </label>
                        <input onChange={(e) => setName(e.target.value)} type="text" name="name" value={name}/>
                    </div>
                    <div>
                        <label className="flex flex-col text-white py-2">
                            Email
                        </label>
                        <input onChange={(e) => setEmail(e.target.value)} type="text" name="email" value={email}/>
                    </div>
                    <div>
                        <label className="flex flex-col text-white py-2">
                            Password
                        </label>
                        <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" value={password}/>
                    </div>
                    <button class="bg-cyan-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign In</button>
                    <br/>
                    <br/>

                        {errors ? <h1 className="text-sm text-red-500">{errors}</h1> : null}
                </form >
            </div>
        </div>
    )
}