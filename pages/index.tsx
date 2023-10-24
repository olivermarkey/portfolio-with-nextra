import Hero from '../components/Hero';
import NavBar from '../components/NavBar';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col dark:bg-gradient-to-bl dark:from-slate-700 dark:to-slate-1000 bg-slate-800">
      <NavBar/>
      <div className='container mt-24 mx-auto px-12 py-4'>
        <Hero/>
        <AboutSection/>
        <ProjectsSection />

      </div>
    </main>
  )
}