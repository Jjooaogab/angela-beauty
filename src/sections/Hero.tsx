import IconsHero from "@/components/iconsHero";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="max-w-screen bg-stone-600 text-zinc-200 flex flex-row md:flex-row md:justify-between overflow-hidden">
      <div className="flex flex-col gap-2">
        <div className="text-left ml-1 lg:ml-4">
          <h2 className="font-recoleta text-[55px] lg:text-[87px] 2xl:text-[97px] mt-4 z-[3]">Come and make your transformation with Angela</h2>
        </div>
        {/* Pink Bar */}
        <div className="bg-pink-200 w-full h-28 flex items-center justify-center md:absolute md:top-[39.2vh] lg:top-[105.2vh] xl:top-[103.2vh] 2xl:top-[85.3vh]">
          <IconsHero url={'/icons/diamond.png'} span={"Mercadorias premium"} />
          <IconsHero url={'/icons/certificate.png'} span={"Profissionais qualificados"} />
          <IconsHero url={'/icons/guarantee-certificate.png'} span={"Padrões altos"} />
        </div>
      </div>
      <Image src={'/model-hero.png'} width={800} height={750} alt={"Model"} className="hidden md:block z-[2]" />
    </section>
  )
}