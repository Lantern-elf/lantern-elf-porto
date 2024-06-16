import './NavBar.css'

function Navbar(){
    return(
        <div className="nav">
            <div className="navSess navSess1">
                <div className="navWrap iconLogo">
                    <img className="iconLogoWrap icon" src="/icon.png" alt="" />
                    <div className="iconLogoWrap Logo"><b>Lantern Elf</b></div>
                </div>
                <ul className="navWrap navList">
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Skills</a></li>
                    <li><a href="">Commissions</a></li>
                    <li><a href="">Projects</a></li>
                </ul>
            </div>
            <div className="navSess navSess2">
                <details className="navWrap socialMedia">
                    <summary>Social Medias</summary>
                    <li>
                        <a href="">
                            <label htmlFor="">Twitter</label>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <label htmlFor=""></label>
                        </a>
                    </li>
                </details>
            </div>
        </div>
    )
}

export default Navbar