import Image from "next/image";
import logo from "../pictures/Logo.png"
import { Icon } from '@iconify/react';
import whatsappIcon from '@iconify/icons-logos/whatsapp-icon';
import facebookIcon from '@iconify/icons-devicon/facebook';
import instagramIcon from '@iconify/icons-skill-icons/instagram';
import youtubeIcon from '@iconify/icons-logos/youtube-icon';


export default function Footer() {
    return (
        <>
            <footer>
                <div className="footer">
                    <div className="line1">
                        <hr className="l1"></hr>
                    </div>
                    <div className="footer-dev">
                        <div className="footer1">
                            <Image src={logo} alt='/' className="foot-pix" />
                            <p className="p5">Green Development and Agro-Allied Services Limited is on a mission to inspire productive and sustainable farming in Nigeria by setting up and operating environmentally safe farms that enable local production at scale and nourish local communities with safe, healthy, and quality foods.</p>
                        </div>
                        <div className="footer2">
                            <h3>Newsletter</h3>
                            <p className="p6">
                                Get the latest updates on our products, exclusive offers, and more right in your inbox. Never miss important opportunities
                            </p>
                            <input placeholder="Enter your e-mail here" className="f-input"></input>
                            <br></br>
                            <button className="btn-foot">Subscribe</button>
                        </div>
                        <div className="footer3">
                            <hr className="line3"></hr>
                            <Icon icon={whatsappIcon} className="icon"/>
                            <Icon icon={facebookIcon} className="icon"/>
                            <Icon icon={instagramIcon}className="icon"/>
                            <Icon icon={youtubeIcon} className="icon"/>
                            <p className="foot-p">Quick link</p>
                            <ul className="foot-link">
                            <li className="foot-list"><a href="">Home</a></li>
                            <li className="foot-list"><a href="">About Us</a></li>
                            <li className="foot-list"><a href="">Services</a></li>
                            <li className="foot-list"><a href="">Gallery</a></li>
                            </ul>
                            <hr className="line3"></hr>
                        </div>
                    </div>
                    <div className="line1">
                        <hr className="l2"></hr>
                    </div>
                    
                </div>
            </footer>
        </>
    )
}
