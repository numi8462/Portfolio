import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import MyWork from "@/components/MyWork";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className="relative bg-black-200 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={[
          {name: 'Home', link: '/', icon: <FaHome/>}
        ]}/>
        <Hero />
        <MyWork />
        <Footer />
      </div>
    </main>
  );
}
