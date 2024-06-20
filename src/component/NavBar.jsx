import './NavBar.css'

function Navbar(){
    return(
        <div className="nav">
            <div className="navSess navSess1">
                <div className="navWrap iconLogo">
                    <img className="iconLogoWrap icon" src="/icon.png" alt="" />
                    <div className="iconLogoWrap logo"><b>Lantern Elf</b></div>
                </div>
                <ul className="navWrap navList">
                    <li><button href="">Home</button></li>
                    <li><button href="">About</button></li>
                    <li><button href="">Skills</button></li>
                    <li><button href="">Commissions</button></li>
                    <li><button href="">Projects</button></li>
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