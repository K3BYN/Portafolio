import Link from "next/link"; 

const Navbar = (props) =>{
    return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand">Simple Portfolio</a>
        </Link>
      </div> 
    </nav>
    );
}

export default Navbar;