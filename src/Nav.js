import { NavLink } from 'react-router-dom'

const Nav = (props) => {
    return(
        <nav>
            <ul>
                <li>
                    <NavLink exact activeClassName='active' to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink activeClassName='active' to="/html">Html</NavLink>
                </li>
                <li>
                    <NavLink activeClassName='active' to="/css">Css</NavLink>
                </li>
                <li>
                    <NavLink activeClassName='active' to="/js">Javascript</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;