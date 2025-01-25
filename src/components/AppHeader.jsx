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
                <div>
                <div className="rowHeader">
                    <div ><img className="logo" src="https://cdn.pixabay.com/photo/2022/09/08/13/59/youtube-7441044_1280.png" alt="" />
                    </div>
                    
                    
                    <div className="colHeader">
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