import Hero from "@/components/Home/Hero";
import About from "@/components/Home/About";
import Footer from "@/components/Home/Footer";

export default function Home() {
  return (
    <div className=" bg-gray-50">
      <Hero />
      <div className="py-10 bg-[#030712] flex justify-center items-center my-20">
        <h2 className="text-white text-center leading-[60px] text-4xl font-medium w-[650px]">
          Get a designer-quality logo without the designer price tag
        </h2>
      </div>
      <About />
      <Footer />
    </div>
  );
}
