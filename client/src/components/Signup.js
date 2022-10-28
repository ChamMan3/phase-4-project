import React from "react"
import {useState, useEffect} from "react"
import { useNavigate } from "react-router-dom";




export default function Signup( {setCurrentUser, name, setEmail, setName, setPassword, password, email} ) {


    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate()






    function handleSubmit(e){
        
        e.preventDefault()

        fetch(`/users`,{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify({
            name,
            email,
            password,
            password_confirmation: passwordConfirmation
          })
        })
        .then((r) => {
        setIsLoading(false);
        if (r.ok) {
            r.json().then((user) => {
                console.log(user)
                setEmail('');
                setName('');
                setPassword('');
                setPasswordConfirmation('');
                navigate('/calendar')
            }
            )
            
        }})
    }
       
    
function handleClick(){
    navigate('/login')
}

      
    
        

    
        

       



    return(
    <body className="bg-gradient-to-r from-purple-500 to-cyan-500">
        <div className="bg-gradient-to-r from-purple-500 to-cyan-500">
            <div className="bg-gradient-to-r from-purple-500 to-cyan-500 flex flex-col justify-center">
                <form onSubmit={handleSubmit} className="max-w-[400px] w-full mx-auto bg-gray-600 p-8 px-8 rounded-lg">
                    <h2 className="text-4xl dark:text-white font-bold text-center">SIGN UP</h2>
                    <div>
                        <label className="flex flx-col dark:text-white py-2">
                            Username
                        </label>
                        <input onChange={(e) => setName(e.target.value)} type="text" name="name" value={name}/>
                    </div>
                    <div>
                        <label className="flex flx-col dark:text-white py-2">
                            Email
                        </label>
                        <input  onChange={(e) => setEmail(e.target.value)} type="text" name="email" value={email} />
                    </div>
                    <div>
                        <label className="flex flex-col dark:text-white py-2">
                            Password
                        </label>
                        <input  onChange={(e) => setPassword(e.target.value)}type="password" name="password" value={password}/>
                    </div>
                    <div>
                        <label className="flex flex-col dark:text-white py-2">
                            Confirm Password
                        </label>
                        <input  onChange={(e) => setPasswordConfirmation(e.target.value)} type="password" name="password" value={passwordConfirmation}/>
                    </div>
                    <br/>
                    <button class="bg-cyan-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign Up</button>
                    <br/>
                    <br/>
                    <label className="flex flex-col dark:text-white py-2">Already have an account?</label>
                    <button onClick={handleClick} class="bg-cyan-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button>
                </form>
            </div>
        </div>
    </body>
    )

}

