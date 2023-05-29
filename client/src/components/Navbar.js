import logo from "../images/GWLogoSm.png"; 
import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav>
            <div className="nav-content">
                <div className="navHeader">
                    <img src={logo} height="70" width="70" style={{ marginRight:'10px'}} alt="Gerg's World Logo"/> 
                    <Link style={{textDecoration:'none'}} to="/"> <h1 className='navbarHeader'>Gerg's World</h1> </Link> 
                </div>
                <div className="links">
                    <Link className="hover-underline-animation" to="/chronicles">"GERG"CHRONICLES</Link>
                    <a className="hover-underline-animation"href="/gergals">"GERG"ALS</a>
                    <a className="hover-underline-animation"href="/">"GERG"ATIZERS</a>
                    <a className="hover-underline-animation"href="/gergisms">"GERG"ISMS</a>
                    <a className="hover-underline-animation"href="/">FACES OF "GERG"</a>
                    <a className="hover-underline-animation"href="/">SHOP A "GERG"</a>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;