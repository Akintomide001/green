import Head from "next/head";
import Image from "next/image";
import image from "../pictures/Logo Place Holder.png"
import mobile from "../pictures/Vector.png"
import { BsSearch } from "react-icons/bs"
import { FaTimes } from "react-icons/fa"
import { GiHamburgerMenu } from "react-icons/gi"
import Script from "next/script";
import { useEffect, useRef, useState} from "react";
import Dropdown from "./dropdown";
export default function Header() {
    // const showNavMenu = useRef();
    // const hideNavMenu = useRef()
    // const navMenu = useRef();
    // const [currentlyShowing, setCurrentlyShowing] = useState(false)

    // useEffect(()=>{
    //     if (!currentlyShowing){
    //         hideNavMenu.current.style.display = "none"
    //         showNavMenu.current.style.display = "block"
    //     }else{
    //         hideNavMenu.current.style.display = "block"
    //         showNavMenu.current.style.display = "none"
    //     }
    // },[currentlyShowing])
    return (
        <>
            <div className="main">
                <div className="container">
                    <div className="container2">
                        <p className="p1">Welcome</p>
                        <div className="cput">
                            <input className="iput" placeholder="Search"></input>
                            <BsSearch className="search" />
                        </div>
                    </div>
                </div>
                <div className="containerx">
                    {/*mobile logo*/}
                    <Image src={mobile} alt='/' className="mobile-logo" />
                    {/*mobile logo end*/}

                    <div className="logo">
                        <Image src={image} alt='/' className="desktop-logo"/>
                    </div>
                    {/* <div className="nav-menu" ref={navMenu}>
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">About Us</a></li>
                            <li><a href="">Services</a></li>
                            <li><a href="">Products/produce</a></li>
                            <li><a href="">Gallery</a></li>
                            <li><a href="">Blog</a></li>
                            <button className="btn"><a href="">Contact Us</a></button>
                        </ul>
                    </div> */}
                    <div className="desktop-menu">
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
                    <div className="dropdown">
                        <Dropdown />
                    </div>
                    
                    {/* <div ref={hideNavMenu} onClick={()=>{
                        navMenu.current.style.display = "none";
                        setCurrentlyShowing(!currentlyShowing)}} className="close-menu"><FaTimes className="drop"/></div>
                    <div ref={showNavMenu} onClick={()=>{
                        navMenu.current.style.display = "none";
                        setCurrentlyShowing(!currentlyShowing)}} className="open-menu"><GiHamburgerMenu className="drop"/></div>

                    {/*mobile menu*/}
                    {/*mobile menu end*/}
                </div>
            </div>

        </>
    )
}