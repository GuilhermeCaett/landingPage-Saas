import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Register() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-zinc-800">
            <div className="bg-zinc-700 p-8 rounded-lg shadow-lg max-w-md w-full text-white">
                <h1 className="text-3xl font-bold mb-6 text-center text-purple-300">Cadastro</h1>

                <form>

                    <div className="mb-4">
                        <label htmlFor="fullEmail" className="block text-sm font-medium mb-2">
                            Nome Completo
                        </label>
                        <Input
                            type="text"
                            id="fullEmail"
                            name="nome"
                            placeholder="Digite seu email completo"
                            className="bg-white  text-zinc-800 w-full"
                        />
                    </div>


                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email
                        </label>
                        <Input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Digite seu email"
                            className="bg-white  text-zinc-800 w-full"
                        />
                    </div>


                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                            Telefone
                        </label>
                        <Input
                            type="tel"
                            id="phone"
                            name="telefone"
                            placeholder="Digite seu telefone"
                            className="bg-white  text-zinc-800 w-full"
                        />
                    </div>


                    <div className="mb-4">
                        <label htmlFor="cpf" className="block text-sm font-medium mb-2">
                            CPF
                        </label>
                        <Input
                            type="text"
                            name="cpf"
                            id="cpf"
                            placeholder="Digite seu CPF"
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


                    <Button className="bg-purple-300 text-zinc-800 hover:text-white w-full mb-4">
                        Cadastrar
                    </Button>
                </form>


                <p className="text-center text-sm">
                    Já tem login?{" "}
                    <Link href="/login" className="text-purple-400 hover:underline">
                        Entre aqui!
                    </Link>
                </p>
            </div>
        </div>
    );
}
