import { Header } from "@/components/Header";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { TechStack } from "@/components/sections/TechStack";


export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen text-gray-800">
        <Hero />
        <div className="flex justify-center w-full my-4 ">
          <div className="w-6xl h-0.5 bg-black"></div>
        </div>
        <TechStack />
        <div className="flex justify-center w-full my-4 ">
          <div className="w-6xl h-0.5 bg-black"></div>
        </div>
        <Projects />
        <div className="flex justify-center w-full my-4 ">
          <div className="w-6xl h-0.5 bg-black"></div>
        </div>
        <Contact />
      </main>
      <Footer />
    </>
  );
}