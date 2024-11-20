import React from 'react'
import MainSection from '../section/mainSection/MainSection'
import InfoSection from '../section/infoSection/InfoSection'

export default function Sections() {

    const focusWall = {
        id: 1,
        title: "Focus Wall",
        content: "Focus Wall (текстильний лайтбокс) - це втілення передових технологій та комплекс рішень для ефективної візуальної комунікації та оформлення простору. Вироби ідеально поєднують функціональність із сучасним дизайном,що робить їх придатними для широкого спектру застосувань, від рекламних до декоративних цілей",
        imgSrc: "/images/focusWall.png",
        imgAlt: "focus wall image"
    }
        const focusWallInfo = {
        id: 2,
        title: "Конструкція Focus Wall",
        one: "1 Алюмініва рама Рами виготовлені з високоякісного легкого алюмінію, є довговічними,а також й естетично привабливі. Легкість рами сприяє простоті монтажу та транспортування, а також дозволяє легко оновлювати текстильні постери, що ідеально підходить для частих маркетингових кампаній.",
        two: "2 Текстильний постер Виготовлені з екологічно чистих матеріалів, тканинні постери характеризуються високою якістю зображення та відсутністю неприємних запахів, що робить їх ідеальними для внутрішнього використання. Зображення на текстилі виглядає яскраво, природно та реалістично.",
        three: "3 LED освітлення Новітні технології світлодіодного освітлення забезпечують рівномірне світло, що підкреслює якість зображення і зменшує енергоспоживання.",
        imgSrc: "/images/focusWallInfo.png",
        imgAlt: "Focus wall info image"
    }
        const cubes = {
        id: 3,
        title: "02.Куби",
        content: "Куби - це є стильний і функціональний акцент для будь-якого заходу, який привертає увагу та запам’ятовується. Сидіння-куби легко адаптується до будь-якого простору і миттєво привертає увагу. Запорукою універсальності та зручності рекламного пуфа - є легкість та мобільність. Максимальна універсальність і зручність завдяки легкості та мобільності рекламного пуфа. Пуфи Cube створені для довготривалого використання з можливістю легкої заміни чохла. Використовуйте всю поверхню сидінь та втілюйте в життя свої креативні ідеї.",
        imgSrc: "/images/cubes.png",
        imgAlt: "cubes image"
    }

        const cubesInfo = {
        id: 2,
        title: "Конструкція Куба",
        one: "1 Наповнення Брендовані м’які куби виготовленні з щільного поролоному. Що є безпечним для дітей та дозволяє створювати велике рекламне поле за допомогу виставлення кубів один на одного.",
        two: "2 Зовнішні чохли Виготовленні з тканини Оксфорд, котра відштовхує воду та не вимагає особливого догляду.",
        three: "3 Брендування",
        imgSrc: "/images/cubesInfo.png",
        imgAlt: "cubes image info"
    }

        const winder = {
        id: 5,
        title: "03.Віндер",
        content: "Віндери - зручний спосіб реклами для привернення уваги ваших клієнтів до бренду та подій.Це мобільні рекламні конструкції у вигляді прапорів на стійкому флагштоку. Вони відрізняються легкістю та зручністю у використанні.",
        imgSrc: "/images/winder.png",
        imgAlt: "winder image"
    }

        const winderInfo = {
        id: 6,
        imgSrc: "/images/winderInfo.png",
        imgAlt: "winder info image"
    }
    

  return (
      <div>
          <MainSection
              id={focusWall.id}
              title={focusWall.title}
              content={focusWall.content}
              img={focusWall.imgSrc}
              alt={focusWall.imgAlt}
          />
          <InfoSection
              id={focusWallInfo.id}
              title={focusWallInfo.title}
              one={focusWallInfo.one}
              two={focusWallInfo.two}
              three={focusWallInfo.three}
              img={focusWallInfo.imgSrc}
              alt={focusWallInfo.imgAlt}
          />
          <MainSection
              id={cubes.id}
              title={cubes.title}
              content={cubes.content}
              img={cubes.imgSrc}
              alt={cubes.imgAlt}
          />
          <InfoSection
              id={cubesInfo.id}
              title={cubesInfo.title}
              one={cubesInfo.one}
              two={cubesInfo.two}
              three={cubesInfo.three}
              img={cubesInfo.imgSrc}
              alt={cubesInfo.imgAlt}
          />
          <MainSection
              id={winder.id}
              title={winder.title}
              content={winder.content}
              img={winder.imgSrc}
              alt={winder.imgAlt}
          />
          <InfoSection
              id={winderInfo.id}
              title={winderInfo.title}
              content={winderInfo.content}
              img={winder.imgSrc}
              alt={winder.imgAlt}
          />
    </div>
  )
}
