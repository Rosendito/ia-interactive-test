import { useState } from 'react'
import clsx from 'clsx'
import FresaImg from '@/assets/images/home/fresa-bebible.png'
import FMDRibbonImg from '@/assets/images/home/fmd-ribbon.png'
import NoSugarRibbonImg from '@/assets/images/home/no-sugar-ribbon.png'
import Fresa01Img from '@/assets/images/fresa-01.png'
import Fresa02Img from '@/assets/images/fresa-02.png'
import Fresa03Img from '@/assets/images/fresa-03.png'
import ArrowIcon from '@/components/Icons/Arrow'

const Hero = () => {
  const selectItems = [
    { id: 1, name: 'Fresa' },
    { id: 2, name: 'Guayaba' },
    { id: 3, name: 'Toronja' },
  ]

  const [activeItem, setActiveItem] = useState(selectItems[0].id)

  const goToNutrition = () => {
    const nutrition = document.getElementById('informacion-nutrimental')

    nutrition.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    })
  }

  return (
    <section className="home-hero">
      <div className="container container--sm home-hero__inner">
        <div className="home-hero__image">
          <img src={FresaImg} alt="Vitalínea Bebible Fresa" />
        </div>
        <div className="home-hero__content">
          <nav className="home-hero-select">
            <span className="home-hero-select__label">Sabor:</span>
            <ul className="home-hero-select__list">
              {selectItems.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    className={clsx('home-hero-select__item', {
                      'home-hero-select__item--active': item.id === activeItem,
                    })}
                    onClick={() => setActiveItem(item.id)}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="home-hero-detail">
            <h1 className="home-hero-detail__title">
              Vitalínea® Bebible Fresa 217 gr.
            </h1>
            <p className="home-hero-detail__description">
              ¡La presentación ideal para llevar contigo! Vitalínea bebible es
              la opción si eres de las personas que siempre están activas y
              quieren probar algo sano, rico y práctico.
            </p>
            <div className="home-hero-detail__button">
              <a href="https://walmart.com" className="button">
                Comprar en Walmart
              </a>
            </div>
          </div>
          <div className="home-hero-detail-ribbons">
            <img
              src={FMDRibbonImg}
              alt="FMD Ribbon"
              className="home-hero-detail-ribbons__item"
            />
            <img
              src={NoSugarRibbonImg}
              alt="No Sugar Ribbon"
              className="home-hero-detail-ribbons__item"
            />
          </div>
        </div>

        <img
          src={Fresa02Img}
          alt="Fresa decoración 02"
          className="berry-decoration berry-decoration--hero-1"
        />
        <img
          src={Fresa01Img}
          alt="Fresa decoración 01"
          className="berry-decoration berry-decoration--hero-2"
        />
        <img
          src={Fresa03Img}
          alt="Fresa decoración 03"
          className="berry-decoration berry-decoration--hero-3"
        />
      </div>

      <button
        type="button"
        className="button button--icon home-hero__skip-button"
        title="Ir a Información Nutrimental"
        onClick={goToNutrition}
      >
        <ArrowIcon />
      </button>

      <img
        src={Fresa01Img}
        alt="Fresa decoración 01"
        className="berry-decoration berry-decoration--hero-4"
      />
    </section>
  )
}

export default Hero
