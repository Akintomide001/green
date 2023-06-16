import Head from "next/head";
import Image from "next/image";
import image from "../pictures/Logo Place Holder.png"
import mobile from "../pictures/Vector.png"
import { BsSearch } from "react-icons/bs"

export default function Header() {
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
                        <Image src={image} alt='/' />
                    </div>
                    <div className="nav-menu">
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
                    {/*mobile menu*/}
                    <div className="mobile-menu">
                        <ul className="mobile-list">
                            <li><a href="">Home</a></li>
                            <li><a href="">About Us</a></li>
                            <li><a href="">Services</a></li>
                            <li><a href="">Products/produce</a></li>
                            <li><a href="">Gallery</a></li>
                            <li><a href="">Blog</a></li>
                            <button className="btn"><a href="">Contact Us</a></button>
                        </ul>
                    </div>
                    {/*mobile menu end*/}
                </div>
            </div>
        </>
    )
}