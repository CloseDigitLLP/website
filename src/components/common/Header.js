import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import headerStyle from '../../styles/common/header.module.scss';
import Image from 'next/image';

export default function Header() {
  const router = useRouter();
  const [stickyClass, setStickyClass] = useState('');

  useEffect(() => {
    if (window) {
      const nonStickyPages = ['/Vaid','/FBN','/JVConstruction','/ProperSky','/Directory','/WordWell','/Law'];
      if (!nonStickyPages.includes(router.pathname)) {
        window.addEventListener('scroll', stickNavbar);
      }
      return () => window.removeEventListener('scroll', stickNavbar);
    }
  }, [router.pathname]);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 80 ? setStickyClass('sticky-nav') : setStickyClass('');
    }
  };

  return (
    <div className={`${headerStyle.headerPart} ${stickyClass}`}>
      <div className='container'>
        <nav className={`navbar navbar-expand-lg navbar-light`}>
          <div className="container-fluid p-0">
            <Link href="/" className="navbar-brand">
                <Image
                  src={require('../../assets/images/CloseDigit-lg.svg')}
                  alt="logo"
                  width={220}
                  height={30}
                  className={`${headerStyle.logoPart}`}
                />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <Image
                src={require('../../assets/images/menu.svg')}
                alt="logo"
                width={30}
                height={28}
                className="menu"
              />
            </button>
            <div className="navbar-collapse collapse" id="navbarNav">
              <div
                className='body-overlay'
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              ></div>
              <ul className={`${headerStyle.navbarNav} navbar-nav`}>
                <li className={`${headerStyle.mobileLogo}`}>
                  <Link href="/" className="navbar-brand">
                      <Image
                        src={require('../../assets/images/CloseDigit-lg.svg')}
                        alt="logo"
                        width={220}
                        height={30}
                        className={`${headerStyle.logoPart}`}
                      />
                  </Link>
                </li>
                <li
                  className={`${headerStyle.navItem} nav-item`}
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <Link href="/">
                    <span
                      className={`${headerStyle.navLink} ${
                        router.pathname === '/' ? headerStyle.active : ''
                      } nav-link`}
                      aria-current="page"
                    >
                      Home
                    </span>
                  </Link>
                </li>
                <li
                  className={`${headerStyle.navItem} nav-item`}
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <Link href="/AboutUs">
                    <span
                      className={`${headerStyle.navLink} ${
                        router.pathname === '/AboutUs' ? headerStyle.active : ''
                      } nav-link`}
                    >
                      About Us
                    </span>
                  </Link>
                </li>
                <li
                  className={`${headerStyle.navItem} nav-item`}
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <Link href="/Services">
                    <span
                      className={`${headerStyle.navLink} ${
                        router.pathname === '/Services' ? headerStyle.active : ''
                      } nav-link`}
                    >
                      Services
                    </span>
                  </Link>
                </li>
                <li
                  className={`${headerStyle.navItem} nav-item`}
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <Link href="/Portfolio">
                    <span
                      className={`${headerStyle.navLink} ${
                        router.pathname === '/Portfolio' ? headerStyle.active : ''
                      } nav-link`}
                    >
                      Our Work
                    </span>
                  </Link>
                </li>
                <li
                  className={`${headerStyle.navItem} nav-item`}
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <Link href="/Technology">
                    <span
                      className={`${headerStyle.navLink} ${
                        router.pathname === '/Technology' ? headerStyle.active : ''
                      } nav-link`}
                    >
                      Technology
                    </span>
                  </Link>
                </li>
              </ul>
              <div className="other-option">
                <Link href="/Contact">
                  <button
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    type="button"
                    className="btn btn-primary"
                  >
                    Contact Us <span className='btn-animation'></span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}