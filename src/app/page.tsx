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
        <TechStack />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}