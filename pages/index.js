import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from './header'
import tomato from '../pictures/tomato.jpg'

export default function Home() {
  return (
    <>
      <Head>
        <title>Green development and agro allied services</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/vector.png" />
      </Head>
      <Header />
      <div>
        <div className='section1'>
          <div className='section1a'>
            <h1 className='t1'>The Green Solution</h1>
            <p className='p2'>Healthy and fresh vegetables, grown locally with an uncommon infusion of open field and green house under best agricultural practices.</p>
            <button className="btn1"><a href="">Learn More</a></button>
          </div>
          <div>
          <Image src={tomato} alt='/' id="img" />
          </div>
        </div>
      </div>
    </>
  )
}