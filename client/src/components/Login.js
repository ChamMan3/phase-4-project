import React from "react"
import { useEffect, useState } from "react"
import {useNavigate} from 'react-router-dom'







export default function Login( {updateUser} ){

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
            name,
            email,
            password,
          })
        }).then((r) => {
        setIsLoading(true)
        if (r.ok){
            r.json().then(data => {
                console.log(data)
                updateUser(data)
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
        <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 flex flex-col justify-center">
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
                    <button className="flex flex-col text-white py-2">Sign In</button>
                        {errors ? <h1 className="text-sm text-red-500">{errors}</h1> : null}
                </form >
            </div>
        </div>
    )
}