import Header from '@/components/Layouts/Header.jsx'
import HomeHero from '@/components/Home/Hero'
import HomeNutrition from '@/components/Home/Nutrition'

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <HomeHero />
        <HomeNutrition />
      </main>
    </div>
  )
}

export default App
