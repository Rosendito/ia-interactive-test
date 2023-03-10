import Fresa01Img from '@/assets/images/fresa-01.png'
import Fresa02Img from '@/assets/images/fresa-02.png'
import Fresa03Img from '@/assets/images/fresa-03.png'

const data = [
  { label: 'Contenido energético kJ/kcal', value: '413,2/97,9' },
  { label: 'Proteínas (g)', value: 5.3 },
  { label: 'Grasas (lípidos) (g)', value: 2.1 },
  { label: 'Grasas saturadas (g)', value: 1.4 },
  { label: 'Carbohidratos (Hidratos de carbono) (g)', value: 12.4 },
  { label: 'Azúcares (g)', value: 7.7 },
  { label: 'Azúcares añadidos (g)', value: 0.1 },
  { label: 'Fibra dietética (g)', value: 0.0 },
  { label: 'Sodio (mg)', value: 92.7 },
  { label: 'Calcio (mg)', value: 199.6 },
  { label: '%VNR*', value: 22 },
]

const Nutrition = () => {
  return (
    <section className="home-nutrition" id="informacion-nutrimental">
      <div className="container container--xs">
        <h2 className="home-nutrition__title">Información Nutrimental</h2>
        <div className="home-nutrition__inner">
          <div className="home-nutrition-content">
            <p className="home-nutrition-content__tagline">
              Vitalínea® Bebible Guayaba 217gr Valor promedio por porción de
              217gr Porciones por envase: 1
            </p>

            <p className="home-nutrition-content__text">
              <strong>Ingredientes:</strong>
              Leche descremada pasteurizada y/o reconstituida pasteurizada de
              vaca. 3.5% preparado de fruta guayaba (acesulfame K y sucralosa
              (27.2mg/100g)), crema, almidón modificado, maltodextrina y
              cultivos lácticos.
            </p>
          </div>
          <table className="home-nutrition-table">
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <th>{item.label}</th>
                  <td>{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <img
        src={Fresa03Img}
        alt="Fresa decoración 03"
        className="berry-decoration berry-decoration--nutrition-1"
        loading="lazy"
      />

      <img
        src={Fresa01Img}
        alt="Fresa decoración 01"
        className="berry-decoration berry-decoration--nutrition-2"
        loading="lazy"
      />

      <img
        src={Fresa02Img}
        alt="Fresa decoración 012"
        className="berry-decoration berry-decoration--nutrition-3"
        loading="lazy"
      />
    </section>
  )
}

export default Nutrition
