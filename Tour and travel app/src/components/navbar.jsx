import react from 'react';
import { Link } from "react-scroll"

const Navbar = () => {

    const backgroundcolor = 'bg-white';
    return (
        <div>
            <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-black text-white">
                <div className="flex items-center">
                    <Link><h1>SBT trips</h1></Link>
                </div>
                <nav className ="flex flex-row gap-6 items-center">
                    <Link to="/" spy={true} smooth={true} duration={500} className="cursor-pointer"><h1>Home</h1></Link>
                    <Link to="/" spy={true} smooth={true} duration={500} className="cursor-pointer"><h1>Features</h1></Link>
                    <Link to="/" spy={true} smooth={true} duration={500} className="cursor-pointer"><h1>Destinations</h1></Link>
                    <Link to="/" spy={true} smooth={true} duration={500} className="cursor-pointer"><h1>About</h1></Link>
                    <Link to="/" spy={true} smooth={true} duration={500} className="cursor-pointer"><h1>Contact</h1></Link>
                </nav>
                <div className="flex flex-col items-center">
                    <h1>Register</h1>
                    <button title="Login" backgroundcolor={backgroundcolor} />
                </div> 
            </div>
        </div>
    )
};

export default Navbar;