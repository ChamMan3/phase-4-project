import { NavLink } from "react-router-dom";


export default function NavBar(){

    return (
    <>
        <NavLink to="/">
            Login
        </NavLink>
        <NavLink to="/calendar">
            Calendar
        </NavLink>
        <NavLink to="/events">
            Events
        </NavLink>
        <NavLink to ="/settings">
            Settings
        </NavLink>
    </>
)}