import React from 'react'
import Image from 'next/image'
import "./styles.css"

export default function InfoSection({id,img, alt, title, one, two, three, onClick}) {
  return (
      <section id={id}>
      <div className="info-container">
        <div className="image-container">
          <Image src={img} alt={alt} width={1139} height={757} />
        </div>
        <h1>{title}</h1>
        <div className="text-container">
          <p>{one}</p>
          <p>{two}</p>
          <p>{three}</p>
        </div>
        <button onClick={onClick}>Детальніше</button>
      </div>
    </section>
  )
}
