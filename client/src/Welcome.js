import Login from "./Login"
import Signup from "./Signup"

export default function Welcome({user}){
    return(
    <>
    {!user ? <Login /> : <Signup />}
    </>
    )

}