import LogoDanoneImg from '@/assets/images/logo-danone-footer.png'
import LogoFooterImg from '@/assets/images/logo-footer.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer-logos">
          <img
            src={LogoDanoneImg}
            alt="Danone logo"
            className="footer-logos__danone"
          />
          <img
            src={LogoFooterImg}
            alt="Vitalínea logo alternative gray"
            className="footer-logos__vitalinea"
          />
        </div>

        <div className="footer-content">
          <ul className="footer-content__legals">
            <li>
              <a href="/terminos">Términos y condiciones</a>
            </li>
            <li>
              <a href="/politicas-privacidad">Políticas de privacidad</a>
            </li>
            <li>
              <a href="/aviso-privacidad">Aviso de privacidad</a>
            </li>
          </ul>

          <p className="footer-content__copyright">
            Danone de México 2017 ©. Todos los derechos reservados 2017
          </p>
        </div>

        <img
          src={LogoFooterImg}
          alt="Vitalínea logo alternative gray"
          className="footer__vitalinea"
        />
      </div>
    </footer>
  )
}

export default Footer
