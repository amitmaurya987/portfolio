
import About from "@/componants/About";
import Contact from "@/componants/Contact";
import Education from "@/componants/Education";
import Footer from "@/componants/Footer";
import Header from "@/componants/Header";
import Hero from "@/componants/Hero";
import Projects from "@/componants/Projects";
import Skills from "@/componants/Skills";



export default function Home() {
  return (
  <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
