import "./MainSection.css"

export function MainSection() {
    return (
        <>
            <div className="main-container">

                <div className="background-photo-container">
                    <img className="background-photo" src="src\icons\ImgSample1.png" />
                </div>

                <h3 className="h3">Vision</h3>
                <h1 className="h1">Your best partner in everything</h1>
                <div className="article">
                    <p className="p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat.
                    </p>
                </div>

                <p className="p">
                    <button className="search-button">Discover more</button>
                </p>


            </div>

        </>
    )
}