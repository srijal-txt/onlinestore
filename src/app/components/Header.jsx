'use client'
import Link from "next/link"
import 'bootstrap/dist/css/bootstrap.css'
import styles from '../style/header.module.scss'
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faTimes
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    const [nav,setNav]=useState(false);
  return (
    <header>
        <div className="container m-auto">
            <div className="row align-items-center p-3">
                <div className="col-lg-6 col-md-6 col-sm-6 col">
                    <div className="logo">
                        <Link href="/" className="text-decoration-none text-dark"><h2>Online <span className="text-main">Store</span></h2></Link>
                    </div>
                </div>
                <div className="col-lg-6 text-end col-md-6 col-sm-6 col">
                    <nav className={styles.nav_bar}>
                        <ul className="list-unstyled m-0">
                            <li className="d-inline p-4"><Link href="/" className="text-decoration-none text-dark">Home</Link></li>
                            <li className="d-inline p-4"><Link href="/search" className="text-decoration-none text-dark">Search</Link></li>
                            <li className="d-inline p-4"><Link href="" className="text-decoration-none text-dark">Blog</Link></li>
                            <li className="d-inline p-4"><Link href="" className="text-decoration-none text-dark">Contact</Link></li>
                        </ul>
                    </nav>
                    <div className={styles.responsive_nav}>
                 <FontAwesomeIcon icon={faBars} onClick={()=> setNav(!nav)}/>
              <ul className={!nav ? `m-0 ${styles.responsive_nav_menu}` :`m-0 ${styles.responsive_nav_menu} ${styles.menu_active}`}>
                  <FontAwesomeIcon icon={faTimes} className="text-white" onClick={()=> setNav(!nav)}/>
                  <li><Link href="/" onClick={()=> setNav(!nav)}>Home</Link></li>
                  <li><Link href='/search' onClick={()=> setNav(!nav)}>Search</Link></li>
                  <li><Link href="" onClick={()=> setNav(!nav)}>Blog</Link></li>
                  <li><Link href="" onClick={()=> setNav(!nav)}>Contact</Link></li>
                </ul>
              </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header