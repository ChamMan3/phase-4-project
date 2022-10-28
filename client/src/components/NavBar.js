import { NavLink } from "react-router-dom";


export default function NavBar(){

//     <NavLink to="/login" className='"text-blue-500 hover:text-blue-800"'>
//     Login
// </NavLink>

    return (
    <div class="flex bg-gradient-to-r from-purple-500 to-cyan-500 md:flex md:items-center md:justify-center">
        <span class="mr-6 font-sans">
            <div class='text-xl hover:text-white duration-500'>
                <NavLink to="/Calendar">
                    Calendar
                </NavLink>
            </div>
        </span>
        <span class="mr-6 font-sans">
            <div class='text-xl hover:text-white duration-50'>
                <NavLink to="/Events">
                    Events
                </NavLink>
            </div>
        </span>
        <span class="mr-6 font-sans ">
            <div class='text-xl hover:text-white duration-500'>
                <NavLink to ="/Settings">
                    Settings
                </NavLink>
            </div>
        </span>
    </div>
)}
