import { useEffect, useState } from "react";

const Navbar = () => {
    const [name, setName] = useState("Saanvi");
    const logout = () => {
        setName("Guest")
    }
    useEffect(()=>{

    },[])
    return ( 
    <div className="navbar">
        <div className="navbar--name">
            Hello {name}  👋
        </div>
        <div className="navbar--logout" onClick={logout}>
            <button className="navbar--logout--btn">Log Out</button>
        </div>
    </div> );
}
 
export default Navbar;