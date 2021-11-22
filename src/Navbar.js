import { useState} from "react";
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
    const [navLinks, setNavLinks] = useState([
        {name: 'Home', isActive: true, id:1}, 
        {name: 'About', isActive: false, id:2}, 
        {name: 'Skills', isActive: false, id:3}, 
        {name: 'Projects', isActive: false, id:4}, 
        {name: 'Contact', isActive: false, id:5},
        {name: 'Follow', isActive: false, id:6}
    ]);

    return ( 
        <nav className="navbar">
            {navLinks.map((link) => {
                    return <HashLink 
                        to={`#${link.name.toLowerCase()}`} 
                        smooth 
                        key={link.id}
                        className={`navLinks ${link.isActive ? 'active' : ''}`}>
                            {link.name}
                    </HashLink>
                })
            }
        </nav>
     );
}
 
export default Navbar;