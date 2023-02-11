import logo from '@/assets/images/logo.png'
import { useCallback, useState } from 'react'
import MobileNavigation from './MobileNavigation'

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

          <button
            type="button"
            className="header__menu"
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
