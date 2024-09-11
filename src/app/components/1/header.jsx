import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
    return (
        <div className="bg-zinc-800 text-white font-medium flex items-center justify-between p-8">
            <h1 className="text-2xl">Logo Here</h1>
            <div>
                {/* Classe aplicada diretamente no Link */}
                <Link href="/registrar" className="mr-5 text-white hover:text-gray-300">
                    Registrar
                </Link>

                {/* Button estilizado dentro do Link */}
                <Link href="/login">
                    <Button className="bg-purple-300 rounded-md font-medium hover:text-white text-black">
                        Entrar
                    </Button>
                </Link>
            </div>
        </div>
    );
}
