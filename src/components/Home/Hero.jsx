import { useState } from 'react'
import clsx from 'clsx'
import FresaImg from '@/assets/images/home/fresa-bebible.png'
import FMDRibbonImg from '@/assets/images/home/fmd-ribbon.png'
import NoSugarRibbonImg from '@/assets/images/home/no-sugar-ribbon.png'
import ArrowIcon from '@/components/Icons/Arrow'

const Hero = () => {
  const selectItems = [
    { id: 1, name: 'Fresa' },
    { id: 2, name: 'Guayaba' },
    { id: 3, name: 'Toronja' },
  ]

  const [activeItem, setActiveItem] = useState(selectItems[0].id)

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
      </div>

      <button
        type="button"
        className="button button--icon home-hero__skip-button"
      >
        <ArrowIcon />
      </button>
    </section>
  )
}

export default Hero
