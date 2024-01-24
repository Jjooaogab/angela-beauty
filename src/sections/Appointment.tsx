import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Appointment() {
  return (
    <section className="w-screen flex bg-stone-600 text-zinc-200" id="appointment">
      <Image src={'/model-three.png'} width={400} height={400} alt="Model-three" className="hidden md:block md:h-96 md:ml-8 md:mt-8 lg:h-[550px] shadow-md rounded" />
      <div>
        <div className="flex flex-col mx-4 md:mx-6">
          <h1 className="font-recoleta text-[40px] md:text-[55px] lg:text-[90px] text-center">Premium professional skin care and beauty products</h1>
          <span className="font-poppins text-center lg:text-lg">Expertise aliada à qualidade: A essência da beleza. Junto a Angela, temos produtos profissionais excepcionais para cuidados com a pele e beleza.</span>
          <Button className="font-poppins w-42 md:w-56 h-12 text-base mt-2 md:mr-auto md:ml-2 rounded-full flex gap-2 items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
            Appointment
          </Button>
        </div>
        <Image src={'/model-two.png'} width={800} height={350} alt="Model-two" className="p-2 md:p-8 lg:mr-auto" />
      </div>
    </section>
  )
}