import "./Navbar.css"

export function Navbar() {
    return (
        <>
            <div className="big-bar">
                <div className="logo">logo</div>
                <div className="nav">
                    <div className="options" >
                    <select className="selection">
                        <option>Solutions</option>
                        <option>Opzione2</option>
                        <option>Opzione3</option>
                    </select>
                    <a href="">About</a>
                    <select className="selection">
                        <option >Resources</option>
                        <option>Opzione2</option>
                        <option>Opzione3</option>
                    </select>
                    <a href="">Contacts</a>

                    </div>

                </div>
                <div className="search-bar">
                    <button className="search-button">Search</button>
                </div>

            </div>

        </>
    )
}