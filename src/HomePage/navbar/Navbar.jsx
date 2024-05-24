
import DropdownMenu from "./DropdownMenu"
import "./Navbar.css"

export function Navbar() {
    return (
        <>
            <div className="big-bar">
                <div className="logo">logo</div>
                <div className="nav">
                    <DropdownMenu dropdownName={"Solutions"} />
                    <a href="">About</a>
                    <DropdownMenu dropdownName={"Resources"} />
                    <a href="">Contacts</a>
                </div>
                <div className="search-bar">
                    <button className="search-button">Search
                        <img className="search-png" src="src\icons\Vector.png"/>                    
                    </button>
                    
                </div>

            </div>

        </>
    )
}