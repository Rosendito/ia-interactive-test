import { createPortal } from 'react-dom'
import { Transition } from '@headlessui/react'
import BaseTransitionChild from '@/components/BaseTransitionChild'
import FacebookIcon from '@/components/Icons/Facebook'
import InstagramIcon from '@/components/Icons/Instagram'
import YoutubeIcon from '@/components/Icons/Youtube'

const MobileNavigation = ({ isShowing, hide }) => {
  return createPortal(
    <Transition show={isShowing} className="mobile-navigation">
      <BaseTransitionChild
        transitionName="sidebar-transition"
        className="mobile-navigation__wrapper"
      >
        <div className="mobile-navigation__inner">
          <div className="mobile-navigation__close">
            <button
              type="button"
              aria-label="Close mobile navigation"
              onClick={hide}
            >
              &#x2715;
            </button>
          </div>
          <h2 className="mobile-navigation__title">Menú</h2>

          <ul className="mobile-navigation-list">
            <li>
              <a
                href="/nuestros-productos"
                className="mobile-navigation-list__item"
              >
                Nuestros productos
              </a>
            </li>
            <li>
              <a
                href="/disfruta-cuidarte"
                className="mobile-navigation-list__item"
              >
                Disfruta cuidarte
              </a>
            </li>
            <li>
              <a href="/blog" className="mobile-navigation-list__item">
                Blog
              </a>
            </li>
          </ul>

          <ul className="mobile-navigation-socials">
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                className="mobile-navigation-socials__item"
              >
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                className="mobile-navigation-socials__item"
              >
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a
                href="https://youtube.com"
                target="_blank"
                className="mobile-navigation-socials__item"
              >
                <YoutubeIcon />
              </a>
            </li>
          </ul>
        </div>
      </BaseTransitionChild>
      <BaseTransitionChild
        transitionName="fade-transition"
        className="mobile-navigation__overlay"
      >
        <div className="mobile-navigation__overlay-inner" onClick={hide}></div>
      </BaseTransitionChild>
    </Transition>,
    document.body
  )
}

export default MobileNavigation
