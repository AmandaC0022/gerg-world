import logo from "../images/GWLogoSm.png"; 
import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav>
            <div className="nav-content">
                <div className="navHeader">
                    <img src={logo} height="70" width="70" style={{ marginRight:'10px'}} alt="Gerg's World Logo"/> 
                    <a style={{textDecoration:'none'}}href="/"> <h1 className='navbarHeader'>Gerg's World</h1> </a> 
                </div>
                <div className="links">
                    <Link className="hover-underline-animation"href="/">"GERG"CHRONICLES</Link>
                    <a className="hover-underline-animation"href="/">"GERG"ATIZERS</a>
                    <a className="hover-underline-animation"href="/">"GERG"ISMS</a>
                    <a className="hover-underline-animation"href="/">FACES OF "GERG"</a>
                    <a className="hover-underline-animation"href="/">SHOP A "GERG"</a>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;