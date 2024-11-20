import React from 'react'
import Link from 'next/link'
import "./style.css"

export default function Navigation() {
  return (
    <div>
      <nav className='nav'>
      <ul className='ul'>
        <li className='li'><Link href="#1">01.Фокусволи</Link></li>
        <li className='li'><Link href="#3">02.Куби</Link></li>
        <li className='li'><Link href="#5">03.Віндери</Link></li>
        <li className='li'><Link href="#section4">04.Підтримка</Link></li>
      </ul>
    </nav>
    </div>
  )
}
