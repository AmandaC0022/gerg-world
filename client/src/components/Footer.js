import logo from "../images/GWLogoSm.png"; 
import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
    <footer>
        <div className="nav-content">
                <div className="navHeader">
                    <img src={logo} height="70" width="70" style={{ marginRight:'10px'}} alt="Gerg's World Logo"/>  
                </div>
                <div className="links">
                    <Link className="hover-underline-animation" to="/">HOME</Link>
                    <Link className="hover-underline-animation" to="/chronicles">"GERG"CHRONICLES</Link>
                    <Link className="hover-underline-animation" to="/gergals">"GERG"ALS</Link>
                    <Link className="hover-underline-animation" to="/">"GERG"ATIZERS</Link>
                    <Link className="hover-underline-animation" to="/gergisms">"GERG"ISMS</Link>
                    <Link className="hover-underline-animation" to="/">FACES OF "GERG"</Link>
                    <Link className="hover-underline-animation" to="/">SHOP A "GERG"</Link>
                </div>
                <p>Copyright @2023 Gerg's World</p>
            </div>
    </footer>
     );
}
 
export default Footer;