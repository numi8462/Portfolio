import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import About from "@/components/About";
import Footer from "@/components/Footer";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-blue-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero />
        <About />
        <Footer />
      </div>
    </main>
  );
}
