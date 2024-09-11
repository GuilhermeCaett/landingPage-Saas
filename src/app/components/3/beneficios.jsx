import Image from "next/image";

export default function Beneficios() {
    return (
        <div className="bg-zinc-800 text-white flex justify-center">
            <div className="w-[311px] h-[248px] flex flex-col justify-center items-center mr-[50px]">
                <Image src="/card.png" width="70" height="70" />
                <h1>Customizable Card</h1>
                <p className="text-center">Custom your own card for your exact incomes and expenses needs.</p>
            </div>
            <div className="w-[311px] h-[248px] flex flex-col justify-center items-center">
                <Image src="/coin.png" width="70" height="70" />
                <h1>Coin Card</h1>
                <p className="text-center">Custom your own card for your exact incomes and expenses needs.</p>
            </div>
            <div className="w-[311px] h-[248px] flex flex-col justify-center items-center ml-[50px]">
                <Image src="/wallet.png" width="70" height="70" />
                <h1>Wallet Card</h1>
                <p className="text-center">Custom your own card for your exact incomes and expenses needs.</p>
            </div>
        </div>
    )
}