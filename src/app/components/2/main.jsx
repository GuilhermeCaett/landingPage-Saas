import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Main() {
    return (
        <div className="bg-zinc-800 px-[100px] py-[77px] xl:flex justify-around text-white">
            <div className="max-w-[466px]">
                <h1 className="text-5xl font-bold mb-[40px]">SaaS Landing Page Template</h1>
                <p className="mb-[72px] text-xl">Este é um ficheiro Figma modelo, transformado em código usando o Anima. Saiba mais em AnimaApp.com</p>
                <Button className="bg-yellow-300 text-zinc-800 hover:text-white px-[100px] py-[20px]">Iniciar</Button>
            </div>
            <div>
                <Image className="bg-zinc-700 rounded-xl" src="/graficos.png" width="500" height="446" />
            </div>
        </div>
    )
}