import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from './header'
import tomato from '../pictures/tomato.jpg'
import first from '../pictures/first.jpg'
import second from '../pictures/second.jpg'
import third from '../pictures/third.jpg'
import Rectangle from '../pictures/Rectangle.svg'
import Footer from './footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Green development and agro allied services</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/vector.png" />
      </Head>
      <Header />
      <div className='body'>
        <div className='section1'>
          <div className='section1a'>
            <h1 className='t1'>The Green Solution</h1>
            <div className='section1ai'>
            <p className='p2'>Healthy and fresh vegetables, grown locally with an uncommon infusion of open field and green house under best agricultural practices.</p>
            <button className="btn1"><a href="">Learn More</a></button>
            </div>
          </div>
          <div>
            <Image src={tomato} alt='/' id="img" />
            <div className='mobile1'>
            <p className='p2'>Healthy and fresh vegetables, grown locally with an uncommon infusion of open field and green house under best agricultural practices.</p>
            <button className="btn1"><a href="">Learn More</a></button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='section2'>
          <div className='section2a'>
            <h2 className='heading2'>Who Are We?</h2>
            <p className='p3'>At Green Development and Agro-Allied Services, we are dedicated to combating hunger through the large-scale cultivation of locally grown exotic vegetables. Our focus on producing healthy and safe produce allows us to offer affordable vegetable options to local communities. Additionally, we support aspiring farmers in establishing profitable farming operations.</p>
            <button className="btn2"><a href="">Learn More</a></button>
          </div>
          <div className='section2b'>
            <h2 className='heading2'>Why Choose Us?</h2>
            <p className='p3'>We are a team of Agric professionals with extensive experience, a vast network, and global exposure to offer high services and products to our customers.</p>
            <button className="btn3">Learn More</button>
          </div>
        </div>
      </div>
      <div className='container3'>
        <h2 className='services'>Our services</h2>
        <div className='section3'>
          <div className='section3a'>
            <Image src={first} alt='/' className='pix' />
            <p className='p4'>Input Recommendations and Sales</p>
          </div>
          <div className='section3a'>
            <Image src={second} alt='/' className='pix' />
            <p className='p4'>Farm Setup and Management</p>
          </div>
          <div className='section3a'>
            <Image src={third} alt='/' className='pix' />
            <p className='p4'>On-Field and Off-Field Consultancy</p>
          </div>
        </div>
      </div>
      <div className='section4'>
        <div className='section4a'>
          <h2>Partners</h2>
        </div>
        <div className='section4b'>
          <Image src={Rectangle} alt='/' className='' />
        </div>
      </div>
      <Footer />
    </>
  )
}