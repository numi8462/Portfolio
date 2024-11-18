import Hero from "@/components/Hero";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Navbar from "@/components/ui/Navbar";

export default function Home() {
  return (
    <main className="relative bg-blue-100 flex justify-center items-center flex-col overflow-hidden ">
      <Navbar />
      <div className="max-w-7xl w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        
      </div>
      <div className="bg-black-100 w-full justify-center flex sm:px-10 px-5">
        <Footer />

      </div>
    </main>
  );
}
