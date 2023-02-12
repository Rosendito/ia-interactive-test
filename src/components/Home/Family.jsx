import VitalineaBebibleImg from '@/assets/images/home/vitalinea-bebible.png'
import VitalineaSinAzucarImg from '@/assets/images/home/vitalinea-sin-azucar.png'
import VitalineaGriegoImg from '@/assets/images/home/vitalinea-griego.png'

const products = [
  { name: 'Vitalínea Griego', img: VitalineaGriegoImg },
  { name: 'Vitalínea Sin Azúcar', img: VitalineaSinAzucarImg },
  { name: 'Vitalínea Bebible', img: VitalineaBebibleImg },
]

const Family = () => {
  return (
    <section className="home-family">
      <div className="container container--sm">
        <h2 className="home-family__title">La familia vitalínea</h2>
        <div className="home-family-grid">
          {products.map(({ name, img }) => (
            <article className="home-family-grid__item" key={name}>
              <img src={img} alt={name} loading="lazy" />
              <h3>{name}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Family
