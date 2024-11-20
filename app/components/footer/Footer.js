import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import "./style.css"

export default function Footer() {
  return (
    <div id={6}>
        <div className='contacts-container'>
              <div className='contact-text'>
                  <p className='green'>Зв’яжіться з нашим менеджером</p>
                  <p className='info-text'>Вас зацікавили пропозиції або виникли питання? Заповніть форму зворотнього з’язку і наші менеджери як найшвидше зв’яжуться з вами</p>
              </div>
              <div className='form-container'>
                  <form>
                      <div className='form-group'>
                          <label htmlFor='name'>Контактні дані</label>
                          <input type='text' id='name' placeholder='ПІБ'/>
                      </div>
                      <div className='form-group'>
                          <label htmlFor='phone'>Номер телефону</label>
                          <input type='tel' id='phone' placeholder='+380'/>
                      </div>
                      <div className='form-group'>
                          <label htmlFor='comment'>Коментарі</label>
                          <textarea id='comment' placeholder='Причина вернення'></textarea>
                      </div>
                      <button className='contact-btn' type='submit'>Зв’язатись</button>
                  </form>
              </div>
          </div>
          <footer className="footer">
            <div className="styles.footerLeft">
                  <Image
                      src="/images/Logo.png"
                      alt="Logo"
                      width={52}
                      height={63}
                      className="logo" />
            </div>
            <div className="footerCenter">
                <ul className="links">
                <li><Link href="#1">Focuswall</Link></li>
                <li><Link href="#3">Cube</Link></li>
                <li><Link href="#5">Flag</Link></li>
                </ul>
            </div>
            <div className="footerRight">
                  <ul className="contacts">
                    <li>order@toptrend.com.ua</li>
                    <li>+ 380 (67) 314-55-15</li>
                    <li>+ 380 (67) 314-55-00</li>
                </ul>
            </div>
        </footer>
    </div>
  )
}
