import { Button } from "@/components/ui/button"
import Image from "next/image"
export default function Suporte() {
    return (
        <div className="bg-zinc-800 px-[100px] py-[77px] xl:flex justify-around text-white border-b-2 border-zinc-600">
            <div className="max-w-[466px]">
                <h1 className="text-5xl font-bold mb-[40px]">Questions?
                    Let’s talk </h1>
                <p className="mb-[72px] text-xl">Contact us through our 24/7 live chat. We’re always happy to help!</p>
                <Button className="bg-yellow-300 text-zinc-800 hover:text-white px-[100px] py-[20px]">Iniciar</Button>
            </div>
            <div>
                <Image className="bg-zinc-700 rounded-xl" src="/walletSuporte.png" width="500" height="446" />
            </div>
        </div>
    )
}