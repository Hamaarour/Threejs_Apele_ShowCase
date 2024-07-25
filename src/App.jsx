import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      {/* <Model />
      <Features />
      <HowItWorks />
      <Footer /> */}
    </main>
  )
}

export default App
