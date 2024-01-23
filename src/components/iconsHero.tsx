import Image from "next/image";

interface IconsHeroProps {
  url: string;
  span: string;
}

export default function IconsHero({ url, span }: IconsHeroProps) {
  return (
    <div className="font-poppins flex flex-col items-center justify-center p-5 md:last:mr-[24rem] xl:last:mr-[54rem]">
      <Image src={url} width={40} height={40} alt={span} /> 
      <span className="text-zinc-800">{span}</span>
    </div>
  )
}