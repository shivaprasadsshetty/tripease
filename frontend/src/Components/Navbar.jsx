
import Logo from "./Logo";
import CustomerDropdown from "./CustomerDropdown";
import DriverDropdown from "./DriverDropdown";
import BookButton from "./BookButton";
import "./Navbar.css"

const Navbar=()=> {
  return (
    <nav className="navbar">

      <div className="nav-left">
        <CustomerDropdown />
        <DriverDropdown />
      </div>

      <Logo />

      <div className="nav-right">
        <BookButton />
      </div>

    </nav>
  );
}

export default Navbar;
