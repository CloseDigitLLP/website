
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import headerStyle from '../../styles/common/header.module.scss'


export default function Header(){

    const router = useRouter()


    
    const [stickyClass, setStickyClass] = useState('')
    useEffect(() => {
        if(window) {
            window.addEventListener('scroll', stickNavbar);
            return () => window.removeEventListener('scroll', stickNavbar);
        }
      }, []);
    
      const stickNavbar = () => {
        if (window !== undefined) {
          let windowHeight = window.scrollY;
          // window height changed for the demo
          windowHeight > 80 ? setStickyClass('sticky-nav') : setStickyClass('');
        }
      };
    return(
        <div className={`${headerStyle.headerPart} ${stickyClass}`}>
            <div className='container'>
            <nav className={`navbar navbar-expand-lg navbar-light`}>
            <div className="container-fluid p-0">
                <Link href="/">
                    <a className="navbar-brand" href="#">
                        <img src={'images/CloseDigit-lg.svg'} alt="logo" className={`${headerStyle.logoPart}`}></img>
                    </a>
                </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className={`${headerStyle.navbarNav} navbar-nav`}>
                    <li className={`${headerStyle.navItem} nav-item`}>
                        <Link href="/">
                            <a className={`${headerStyle.navLink} ${router.pathname === '/' ? headerStyle.active : ''} nav-link`} aria-current="page" href="#">Home</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/AboutUs">
                            <a className={`${headerStyle.navLink} ${router.pathname === '/AboutUs' ? headerStyle.active : ''} nav-link`} >About Us</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/Services">
                            <a className={`${headerStyle.navLink} ${router.pathname === '/Services' ? headerStyle.active : ''} nav-link`} >Services</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        {/* <a className={`${headerStyle.navLink} nav-link`} >Work</a> */}
                    </li>
                </ul>
                <div className="other-option">
                    {/* <button type="button" className="btn btn-primary">Contact Us <span className='btn-animation'></span></button> */}
                    <Link href="/Contact">
                    <button type="button" className="btn btn-primary">Contact Us <span className='btn-animation'></span></button>
                    </Link>
                </div>
                
            </div>
            </div>
            </nav>
            </div>
            
        </div>
        
    )
}