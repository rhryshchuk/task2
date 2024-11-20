import React from 'react'
import Image from 'next/image'
import "./styles.css"

export default function InfoSection({ id, img, alt, title, one, two, three, onClick, greenText,whiteText }) {
  return (
      <section id={id}>
      <div className="info-container">
        <div className="image-container">
          <Image src={img} alt={alt} width={1139} height={757} />
        </div>
        <h1 className='title-text'>{title}</h1>
        <div className="text-info-container">
           <p>
              <span className='green-text'>{greenText.first}</span>
              <span className='white-text'>{whiteText.first}</span>
              <br/>
              {one}
            </p>
            <p>
              <span className='green-text'>{greenText.second}</span>
              <span className='white-text'>{whiteText.second}</span>
              <br/>
              {two}
            </p>
            <p>
              <span className='green-text'>{greenText.third}</span>
              <span className='white-text'>{whiteText.third}</span>
              <br/>
              {three}
            </p>
        </div>
        <button className='info-button' onClick={onClick}>Детальніше</button>
      </div>
    </section>
  )
}
