import { NavLink } from "react-router-dom";


function AppHeader() {

    const navLinks = [
        {
            path: "/",
            title: "Home"
        }, {
            path: "/movies",
            title: "Movies"
        }


    ]
    return (
        <>
            <header className="HeaderLayout" >
                <div className="container">
                <div className="row">
                    <h2>Logo Pagina</h2>
                    <h1>Titolo Pagina</h1>
                    <div className="col">
                        {navLinks.map((curLink, index) => (
                            <div key={index}>
                                <NavLink
                                    to={curLink.path} 
                                    className="linkButton" >
                                    {curLink.title}
                                </NavLink>
                            </div>
                        ))}
                    </div>
                    </div>
                    </div>

            </header>


        </>
    )
}

export default AppHeader;