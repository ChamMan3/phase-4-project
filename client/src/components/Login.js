import React from "react"
import { useEffect, useState } from "react"
export default function Login(){

    // state that will update with user input data
    const [loginData, setLoginData] = useState({
        name:'',
        email:'',
        password:''
    })

    // allows these values to be targeted below
    const {name, email, password} = loginData


    // grabs the users input
    function handleChange(e){
        e.preventDefault()
        setLoginData({
            ...loginData, [e.target.name]: e.target.value,
        });
    }




    // takes new info and moves it to backend checking authorization
    function handleSubmit(e) {
        e.preventDefault();
        const loginUser = {
            name: loginData.name,
            email: loginData.email,
            password: loginData.password
        }
        console.log(loginUser)
        fetch("/authorized_user")
        .then(res => res.json())
        .then((data) => setLoginData((data)))
        console.log(setLoginData)

    }








    return(
        <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 flex flex-col justify-center">
                <form  className="max-w-[400px] w-full mx-auto bg-gray-300 p-8 px-8 rounded-lg">
                    <h2 className="text-4xl dark:text-white font-bold text-center">SIGN IN</h2>
                    <div>
                        <label className="flex flx-col dark:text-white py-2">
                            Username
                        </label>
                        <input onChange={handleChange} type="text" name="name" value={name}/>
                    </div>
                    <div>
                        <label className="flex flx-col dark:text-white py-2">
                            Email
                        </label>
                        <input onChange={handleChange} type="text" name="email" value={email}/>
                    </div>
                    <div>
                        <label className="flex flex-col dark:text-white py-2">
                            Password
                        </label>
                        <input onChange={handleChange} type="password" name="password" value={password}/>
                    </div>
                    <button onClick={handleSubmit}>Sign In</button>
                </form>
            </div>
        </div>
    )
}