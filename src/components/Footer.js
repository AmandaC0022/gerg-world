import logo from "../images/GWLogoSm.png"; 

const Footer = () => {
    return ( 
    <footer>
        <div className="nav-content">
                <div className="navHeader">
                    <img src={logo} height="70" width="70" style={{ marginRight:'10px'}} alt="Gerg's World Logo"/>  
                </div>
                <div className="links">
                    <a className="hover-underline-animation"href="/">"GERG"CHRONICLES</a>
                    <a className="hover-underline-animation"href="/">"GERG"ATIZERS</a>
                    <a className="hover-underline-animation"href="/">"GERG"ISMS</a>
                    <a className="hover-underline-animation"href="/">FACES OF "GERG"</a>
                    <a className="hover-underline-animation"href="/">SHOP A "GERG"</a>
                </div>
                <p>Copyright @2023 Gerg's World</p>
            </div>
    </footer>
     );
}
 
export default Footer;