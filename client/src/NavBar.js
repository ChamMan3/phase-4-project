import { NavLink } from "react-router-dom";


export default function NavBar(){

    return (
    <>
        <NavLink exact to="/">
            Login
        </NavLink>
        <NavLink to="/Calendar">
            Calendar
        </NavLink>
        <NavLink to="/Events">
            Events
        </NavLink>
        <NavLink to ="/Settings">
            Settings
        </NavLink>
    </>
)}