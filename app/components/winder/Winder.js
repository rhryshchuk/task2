import React from 'react'
import Image from 'next/image'
import "./style.css"

export default function Winder() {
  return (
    <div className='winder-container'>
          <div className='winder-top'>
              <Image
                  src="/images/winderComp.png"
                  alt='winder'
                  width={712}
                  height={638}
                  className='winder-img'
              />
              <div className='size-info'>
                  <p className='green-p'>Розмірна сітка віндера:</p>
                  <p className='size'><span className='green-size'>XS</span>400x2000 мм</p>
                  <p className='size'><span className='green-size'>S</span>650x2200 мм</p>
                  <p className='size'><span className='green-size'>M</span>470x3400 мм</p>
                  <p className='size'><span className='green-size'>L</span>820x4700 мм</p>
              </div>

          </div>

          <div className='winder-bottom'>
              <div className='bottom-green-text'>
                 <p>Основа для конструкції</p>
              </div>
              
              <div className='images-container'>
                <div className='image-item'>
                    <Image
                        src="/images/winder1.png"
                        alt='winder type 1'
                        width={126}
                        height={442}
                    />
                    <p className='image-caption'>Хрестоподібна з підшипником</p>
                </div>

                <div className='image-item'>
                    <Image
                        src="/images/winder2.png"
                        alt='winder type 2'
                        width={175}
                        height={611}
                      />
                    <div className='arrow-container'>
                      <button className='arrow left'></button>
                      <p className='image-caption-center'>Плоска квадратна</p>
                          <button className='arrow right'></button>
                    </div>
                </div>

                <div className='image-item'>
                    <Image
                        src="/images/winder3.png"
                        alt='winder type 3'
                        width={126}
                        height={442}
                    />
                    <p className='image-caption'>Хрестоподібна</p>
                </div>
              </div>
          </div>
    </div>
  )
}
