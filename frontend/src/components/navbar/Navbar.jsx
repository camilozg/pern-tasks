import { Link, useLocation } from "react-router-dom"
import { publicRoutes, privateRoutes } from "./navigation"
import { Container } from '../ui/Container'
import { useAuth } from "../../context/AuthContext"

function Navbar() {

    const location = useLocation();

    const {isAuth, signout} = useAuth();

    return (
        <nav className="bg-zinc-950">
            <Container className="flex justify-between px-20 py-7">
                <Link to='/'>
                    <h1 className="font-bold text-2xl ">
                        PERN Tasks
                    </h1>
                </Link>
                <ul className="flex gap-x-2">
                    {
                        isAuth ? 
                        <>
                            {
                                privateRoutes.map(({ href, name }) => (
                                    <li key={href} className={
                                        `${location.pathname === href ? 'bg-sky-500 px-3 py-1' : 'text-gray-300'}`
                                    }>
                                        <Link to={href}>{name}</Link>
                                    </li>
                                ))
                            }

                            <li
                            onClick={()=>{
                                signout();
                            }}>
                                Logout
                            </li>
                        </>
 
                        :publicRoutes.map(({ href, name }) => (
                            <li key={href} className={
                                `${location.pathname === href ? 'bg-sky-500 px-3 py-1' : 'text-gray-300'}`
                            }>
                                <Link to={href}>{name}</Link>
                            </li>
                        ))
                    }

                </ul>
            </Container>
        </nav>
    )
}

export default Navbar