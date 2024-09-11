import Image from "next/image";

export default function Depoimento() {
    return (
        <div className="bg-zinc-800 px-[100px] py-[30px]">
            <div className="bg-purple-300 px-[162px] py-[83px] rounded-xl text-2xl">
                <p>"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet cum repellat, ipsam provident laudantium optio at eveniet! Rem eaque neque, assumenda aspernatur harum modi enim, dignissimos, a quia beatae fugit!"</p>
                <div className="flex pt-[50px]">
                    <div className="flex">
                        <Image src="/userFeedback.png" width="80" height="80" />
                    </div>
                    <div className="flex flex-col justify-end ml-[20px]">
                        <h1>Pedro Henrique</h1>
                        <div className="flex h-[20px]">
                            <Image src="/Star.png" width="20" height="20" />
                            <Image src="/Star.png" width="20" height="20" />
                            <Image src="/Star.png" width="20" height="20" />
                            <Image src="/Star.png" width="20" height="20" />
                            <Image src="/Star.png" width="20" height="20" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}