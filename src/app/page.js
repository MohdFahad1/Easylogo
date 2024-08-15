import About from "@/components/About/About";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <div className="py-10 bg-[#030712] flex justify-center items-center">
        <h2 className="text-white text-center leading-[60px] text-4xl font-medium w-[650px]">
          Get a designer-quality logo without the designer price tag
        </h2>
      </div>
    </>
  );
}
