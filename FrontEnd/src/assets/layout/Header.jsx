import { NavLink } from "react-router-dom";


function Header (){

    return(
        <>
            <header>
                <nav>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/login'>Login</NavLink>
                    <NavLink to='/register'>Register</NavLink>
                </nav>
            </header>
        </>
    );
}
export default Header