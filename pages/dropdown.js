import { useState } from "react"
import { FaTimes } from "react-icons/fa"
import { GiHamburgerMenu } from "react-icons/gi"
import { useEffect, useRef, } from "react";

export default function Dropdown() {
    const showNavMenu = useRef();
    const hideNavMenu = useRef()
    const navMenu = useRef();
    const [currentlyShowing, setCurrentlyShowing] = useState(false)

    useEffect(() => {
        if (!currentlyShowing) {
            hideNavMenu.current.style.display = "none"
            showNavMenu.current.style.display = "block"
        } else {
            hideNavMenu.current.style.display = "block"
            showNavMenu.current.style.display = "none"
        }
    }, [currentlyShowing])
    return (

        <>
            <div className="nav-menu" ref={navMenu}>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Services</a></li>
                    <li><a href="">Products/produce</a></li>
                    <li><a href="">Gallery</a></li>
                    <li><a href="">Blog</a></li>
                    <button className="btn"><a href="">Contact Us</a></button>
                </ul>
            </div>
            <div>
                <div ref={showNavMenu} onClick={() => {
                    navMenu.current.style.display = "flex";
                    setCurrentlyShowing(!currentlyShowing)
                }} className="open-menu"><GiHamburgerMenu className="drop" /></div>
                <div ref={hideNavMenu} onClick={() => {
                    navMenu.current.style.display = "none";
                    setCurrentlyShowing(!currentlyShowing)
                }} className="close-menu"><FaTimes className="drop" /></div>

                {/*mobile menu*/}
                {/*mobile menu end*/}
            </div>
        </>
    )
}