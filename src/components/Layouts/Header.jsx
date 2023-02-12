import { useCallback, useState } from 'react'
import MobileNavigation from './MobileNavigation'
import logo from '@/assets/images/logo.png'
import FacebookIcon from '@/components/Icons/Facebook'
import InstagramIcon from '@/components/Icons/Instagram'
import YoutubeIcon from '@/components/Icons/Youtube'

const Header = () => {
  const [isShownMobileNavigation, setIsShownMobileNavigation] = useState(false)
  const showMobileNavigation = () => setIsShownMobileNavigation(true)
  const hideMobileNavigation = useCallback(
    () => setIsShownMobileNavigation(false),
    [isShownMobileNavigation]
  )

  return (
    <>
      <header className="header">
        <div className="container header__container">
          <img src={logo} alt="Vitalinea Logo" className="header__logo" />

          <nav className="header-end">
            <ul className="header-end-navbar">
              <li>
                <a
                  href="/nuestros-productos"
                  className="header-end-navbar__item"
                >
                  Nuestros productos
                </a>
              </li>
              <li>
                <a
                  href="/disfruta-cuidarte"
                  className="header-end-navbar__item"
                >
                  Disfruta cuidarte
                </a>
              </li>
              <li>
                <a href="/blog" className="header-end-navbar__item">
                  Blog
                </a>
              </li>
            </ul>

            <ul className="header-end-socials">
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  className="header-end-socials__item"
                >
                  <FacebookIcon />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  className="header-end-socials__item"
                >
                  <InstagramIcon />
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  className="header-end-socials__item"
                >
                  <YoutubeIcon />
                </a>
              </li>
            </ul>
          </nav>

          <button
            type="button"
            className="header__menu-button"
            onClick={showMobileNavigation}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <MobileNavigation
        isShowing={isShownMobileNavigation}
        hide={hideMobileNavigation}
      />
    </>
  )
}

export default Header
