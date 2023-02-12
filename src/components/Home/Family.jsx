import VitalineaBebibleImg from '@/assets/images/home/vitalinea-bebible.png'
import VitalineaSinAzucarImg from '@/assets/images/home/vitalinea-sin-azucar.png'
import VitalineaGriegoImg from '@/assets/images/home/vitalinea-griego.png'
import Fresa01Img from '@/assets/images/fresa-01.png'

const products = [
  { name: 'Vitalínea Griego', img: VitalineaGriegoImg },
  { name: 'Vitalínea Sin Azúcar', img: VitalineaSinAzucarImg },
  { name: 'Vitalínea Bebible', img: VitalineaBebibleImg },
]

const Family = () => {
  return (
    <section className="home-family">
      <div className="container container--sm home-family__inner">
        <h2 className="home-family__title">La familia vitalínea</h2>
        <div className="home-family-grid">
          {products.map(({ name, img }) => (
            <article className="home-family-grid__item" key={name}>
              <img src={img} alt={name} loading="lazy" />
              <h3>{name}</h3>
            </article>
          ))}
        </div>

        <img
          src={Fresa01Img}
          alt="Fresa decoración 01"
          className="berry-decoration berry-decoration--family-1"
        />
      </div>

      <img
        src={Fresa01Img}
        alt="Fresa decoración 01"
        className="berry-decoration berry-decoration--family-2"
      />
    </section>
  )
}

export default Family
