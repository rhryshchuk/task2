import React from 'react'
import MainSection from '../section/mainSection/MainSection'
import InfoSection from '../section/infoSection/InfoSection'

export default function Sections() {

    const focusWall = {
        id: 1,
        title: "Focus Wall",
        content: " (текстильний лайтбокс) - це втілення передових технологій та комплекс рішень для ефективної візуальної комунікації та оформлення простору. Вироби ідеально поєднують функціональність із сучасним дизайном,що робить їх придатними для широкого спектру застосувань, від рекламних до декоративних цілей",
        imgSrc: "/images/focusWall.png",
        imgAlt: "focus wall image",
        white: "Focus Wall"
    }
        const focusWallInfo = {
        id: 2,
        title: "Конструкція Focus Wall",
        one: "виготовлені з високоякісного легкого алюмінію, є довговічними,а також й естетично привабливі. Легкість рами сприяє простоті монтажу та транспортування, а також дозволяє легко оновлювати текстильні постери, що ідеально підходить для частих маркетингових кампаній.",
        two: "Виготовлені з екологічно чистих матеріалів, тканинні постери характеризуються високою якістю зображення та відсутністю неприємних запахів, що робить їх ідеальними для внутрішнього використання. Зображення на текстилі виглядає яскраво, природно та реалістично.",
        three: "Новітні технології світлодіодного освітлення забезпечують рівномірне світло, що підкреслює якість зображення і зменшує енергоспоживання.",
        imgSrc: "/images/focusWallInfo.png",
        imgAlt: "Focus wall info image",
        greenText: {
                first: "1",
                second: "2",
                third: "3"
                
            },
        whiteText: {
                first: "Алюмініва рама Рами",
                second: "Текстильний постер",
                third: "LED освітлення "
        }
        
    }
        const cubes = {
        id: 3,
        title: "02.Куби",
        content: " - це є стильний і функціональний акцент для будь-якого заходу, який привертає увагу та запам’ятовується. Сидіння-куби легко адаптується до будь-якого простору і миттєво привертає увагу. Запорукою універсальності та зручності рекламного пуфа - є легкість та мобільність. Максимальна універсальність і зручність завдяки легкості та мобільності рекламного пуфа. Пуфи Cube створені для довготривалого використання з можливістю легкої заміни чохла. Використовуйте всю поверхню сидінь та втілюйте в життя свої креативні ідеї.",
        imgSrc: "/images/cubes.png",
        imgAlt: "cubes image",
        white: "Куби"
    }

        const cubesInfo = {
        id: 4,
        title: "Конструкція Куба",
        one: "Брендовані м’які куби виготовленні з щільного поролоному. Що є безпечним для дітей та дозволяє створювати велике рекламне поле за допомогу виставлення кубів один на одного.",
        two: "Виготовленні з тканини Оксфорд, котра відштовхує воду та не вимагає особливого догляду.",
        three: "На рекламному кубі можна розміщувати будь-яке повноколірне зображення на усіх 6-ти гранях, що надає максимальної видимості та ефективності реклами для вашої компанії чи продукту.",
        imgSrc: "/images/cubesInfo.png",
        imgAlt: "cubes image info",
        greenText: {
                first: "1",
                second: "2",
                third: "3" 
        },
        whiteText: {
                first: "Наповнення",
                second: "Зовнішні чохли",
                third: "Брендування"
        }
    }

        const winder = {
        id: 5,
        title: "03.Віндер",
        content: " - зручний спосіб реклами для привернення уваги ваших клієнтів до бренду та подій.Це мобільні рекламні конструкції у вигляді прапорів на стійкому флагштоку. Вони відрізняються легкістю та зручністю у використанні.",
        imgSrc: "/images/winder.png",
        imgAlt: "winder image",
        white: "Віндери"
    }

    //     const winderInfo = {
    //     id: 6,
    //     imgSrc: "/images/winderInfo.png",
    //     imgAlt: "winder info image"
    // }
    

  return (
      <div>
          <MainSection
              id={focusWall.id}
              title={focusWall.title}
              content={focusWall.content}
              img={focusWall.imgSrc}
              alt={focusWall.imgAlt}
              white={focusWall.white}
          />
          <InfoSection
              id={focusWallInfo.id}
              title={focusWallInfo.title}
              one={focusWallInfo.one}
              two={focusWallInfo.two}
              three={focusWallInfo.three}
              img={focusWallInfo.imgSrc}
              alt={focusWallInfo.imgAlt}
              greenText={focusWallInfo.greenText}
              whiteText={focusWallInfo.whiteText}
          />
          <MainSection
              id={cubes.id}
              title={cubes.title}
              content={cubes.content}
              img={cubes.imgSrc}
              alt={cubes.imgAlt}
              white={cubes.white}
          />
          <InfoSection
              id={cubesInfo.id}
              title={cubesInfo.title}
              one={cubesInfo.one}
              two={cubesInfo.two}
              three={cubesInfo.three}
              img={cubesInfo.imgSrc}
              alt={cubesInfo.imgAlt}
              greenText={cubesInfo.greenText}
              whiteText={cubesInfo.whiteText}
          />
          <MainSection
              id={winder.id}
              title={winder.title}
              content={winder.content}
              img={winder.imgSrc}
              alt={winder.imgAlt}
              white={winder.white}
          />
          {/* <InfoSection
              id={winderInfo.id}
              title={winderInfo.title}
              content={winderInfo.content}
              img={winder.imgSrc}
              alt={winder.imgAlt}
              greenText={{ first: "", second: "", third: "" }}
              whiteText={{ first: "", second: "", third: "" }}
          /> */}
    </div>
  )
}
