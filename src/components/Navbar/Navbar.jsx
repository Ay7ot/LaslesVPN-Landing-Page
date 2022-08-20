import Brand from "./Brand";
import NavList from "./NavList";
import NavSign from "./NavSign";

function Navbar() {
    return (  
        <nav className="nav">
            <Brand />
            <NavList />
            <NavSign />
        </nav>
    );
}

export default Navbar;