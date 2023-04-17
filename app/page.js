import HeroSection from './ components/HeroSection/page'
import AboutSection from './ components/AboutSection/page'
import ProjectsSection from './ components/projects/page'
import Footer from './ components/footer/page'
import Navbar from './ components/navbar/page'


export default function Home() {

  return (
    <main className="max-width: 3xl; margin-left: auto; margin-right: auto; padding-left: 4px; padding-right: 4px; padding-left: 6px; padding-right: 6px; @media (min-width: 768px) { max-width: 5xl; }">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <Footer />
    </main>
  )
}
