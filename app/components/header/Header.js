import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import "./style.css"

export default function Header() {
  return (
      <div className='header-container'>
          <div className='top'>
            <div className='logo'>
                <Image
                    src="/images/Logo.png"
                    alt='Logo'
                    width={75}
                    height={90}
                    />
              </div>
              <nav className='header-nav'>
                <ul className='header-ul'>
                    <li className='header-li'><Link href="#1">Focuswall</Link></li>
                    <li className='header-li'><Link href="#3">Cube</Link></li>
                    <li className='header-li'><Link href="#5">Flag</Link></li>
                    <li className='header-li'><Link href="#6">Contact</Link></li>
                </ul>
              </nav>
          </div>
          <div className='header-title'>Текстильні лайтбокси <br />Рекламні куби <br />Віндери, прапори</div>
          <button className='header-button'>Замовляй прямо зараз!</button>
    </div>
  )
}
