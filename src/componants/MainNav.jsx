import { Link } from "react-router-dom"

const MainNav = ()=>{
    return(
        <nav className="main_menu">
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/posts'>Posts</Link></li>
                <li><Link to='/todos'>Todos</Link></li>
            </ul>
        </nav>
    );
}
export default MainNav;