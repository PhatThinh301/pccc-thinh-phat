import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Services from "@/components/Services/Services";
import Products from "@/components/Products/Products";
import Projects from "@/components/Projects/Projects";
import ScrollTop from "@/components/ScrollTop/ScrollTop";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Statistics from "@/components/Statistics/Statistics";



export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Statistics />
      <About />
      <Services />
      <Products />
      <Projects />
      <Contact />
      <Footer />
      <ScrollTop />
    </>
  );
}