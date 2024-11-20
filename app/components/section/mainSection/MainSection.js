import React from 'react';
import Image from 'next/image';
import "./styles.css"

export default function MainSection({id, title, content ,onClick  ,img, alt}) {
  return (
      <section className='container' id={id}>
      <div className="text-container">
        <h1 className='title'>{title}</h1>
        <p className='text'>{content}</p>
        <button onClick={onClick}>Замовити</button>
      </div>
      <div className="image-container">
        <Image src={img} alt={alt} width={642} height={491} />
      </div>
    </section>
  )
}
