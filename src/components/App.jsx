import Header from '@/components/Layouts/Header.jsx'
import Footer from '@/components/Layouts/Footer.jsx'
import HomeHero from '@/components/Home/Hero'
import HomeNutrition from '@/components/Home/Nutrition'
import HomeFamily from '@/components/Home/Family'

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <HomeHero />
        <HomeNutrition />
        <HomeFamily />
      </main>
      <Footer />
    </div>
  )
}

export default App
