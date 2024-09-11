import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
    return (
        <div className="bg-zinc-800 text-white p-[50px] flex justify-between items-center">
            <div>
                <h1 className="text-2xl">Wallet</h1>
                <ul className="flex mt-8">
                    <li className="mr-4">&copy; Wallet 2022</li>
                    <li className="mr-4">Privacy Policy</li>
                    <li className="mr-4">Cookies Policy</li>
                    <li className="mr-4">Terms Of Use</li>
                </ul>
            </div>
            <div>
                <p>Updates right to your Inbox</p>
                <div className="flex">
                    <Input className="border-none bg-zinc-700" type="email" placeholder="Email Address" />
                    <Button className="bg-purple-300 text-black">Enviar</Button>
                </div>
            </div>
        </div>
    )
}