import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Login() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-zinc-800">
            <div className="bg-zinc-700 p-8 rounded-lg shadow-lg max-w-md w-full text-white">
                <h1 className="text-3xl font-bold mb-6 text-center text-yellow-300">Login</h1>

                <form>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email
                        </label>
                        <Input
                            type="email"
                            id="email"
                            placeholder="Digite seu email"
                            className="bg-white  text-zinc-800 w-full"
                        />
                    </div>


                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium mb-2">
                            Senha
                        </label>
                        <Input
                            type="password"
                            id="password"
                            placeholder="Digite sua senha"
                            className="bg-white  text-zinc-800 w-full"
                        />
                    </div>


                    <Button className="bg-yellow-300 text-zinc-800 hover:text-white w-full mb-4">
                        Entrar
                    </Button>
                </form>


                <p className="text-center text-sm">
                    Ainda não tem cadastro?{" "}
                    <Link href="/registrar" className="text-yellow-300 hover:underline">
                        Registre-se aqui!
                    </Link>
                </p>
            </div>
        </div>
    );
}
