import headerStyle from '../../styles/home/header.module.scss'


export default function Header(){
    return(
        <div className={headerStyle['header-part']}>
            <div className='container'>
            <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid p-0">
            <a className="navbar-brand" href="#">
                <img src={'images/logo.png'} alt="logo"></img>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className={`${headerStyle.navbarNav} navbar-nav`}>
                    <li className={`${headerStyle.navItem} nav-item`}>
                        <a  className={`${headerStyle.navLink} ${headerStyle.active} nav-link active`} aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className={`${headerStyle.navLink} nav-link`} >About Us</a>
                    </li>
                    <li className="nav-item">
                        <a className={`${headerStyle.navLink} nav-link`} >Services</a>
                    </li>
                    <li className="nav-item">
                        <a className={`${headerStyle.navLink} nav-link`} >Work</a>
                    </li>
                </ul>
                <div className="other-option">
                    <button type="button" className="btn btn-primary">Contact Us <span className='btn-animation'></span></button>
                </div>
                
            </div>
            </div>
            </nav>
            </div>
            
        </div>
        
    )
}